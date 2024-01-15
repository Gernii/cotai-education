import hello from '$functions/hello';
import { authorizationPrivate } from '$functions/authorization-private';
import { landingPageCourseCheckStatus } from '$functions/landing-page-course-check-status';

import type { AWS } from '@serverless/typescript';
import {
	DynamoDBSyncContentDataTableOutput,
	DynamoDBSyncContentDataTableOutputName,
	DynamoDBSyncContentDataTableResource,
	DynamoDBSyncContentDataTableResourceName
} from 'resources/dynamodb-sync-content-data-table';
import {
	CognitoUserPoolClientOutput,
	CognitoUserPoolClientOutputName,
	CognitoUserPoolClientResource,
	CognitoUserPoolClientResourceName,
	CognitoUserPoolOutput,
	CognitoUserPoolOutputName,
	CognitoUserPoolResource,
	CognitoUserPoolResourceName
} from 'resources/cognito';

const serverlessConfiguration: AWS = {
	service: 'cotai-education',
	frameworkVersion: '3',
	plugins: [
		'serverless-offline',
		'serverless-bundle',
		'serverless-prune-plugin',
		'serverless-deployment-bucket',
		'serverless-stack-output'
	],
	useDotenv: true,
	provider: {
		name: 'aws',
		runtime: 'nodejs20.x',
		region: 'ap-southeast-1',
		stackName: '${self:service}-${opt:stage}',
		deploymentMethod: 'direct',
		logRetentionInDays: 7,
		logs: {
			httpApi: true
		},
		httpApi: {
			cors: true,
			metrics: true,
			authorizers: {
				[authorizationPrivate.name]: {
					type: 'request',
					functionName: authorizationPrivate.name,
					identitySource: ['$request.header.Authorization']
				}
			}
		},
		architecture: 'arm64',
		memorySize: 512,
		deploymentBucket: {
			name: '${self:service}-${opt:stage}-deployment-bucket'
		},
		environment: {
			USER_POOL_ID: '${env:USER_POOL_ID}',
			USER_POOL_CLIENT_ID: '${env:USER_POOL_CLIENT_ID}',
			SYNC_CONTENT_DATA_TABLE_NAME: '${self:provider.stackName}-${env:SYNC_CONTENT_DATA_TABLE_NAME}'
		}
	},
	// import the function via paths
	functions: {
		hello,
		[authorizationPrivate.name]: authorizationPrivate,
		landingPageCourseCheckStatus
	},
	package: { individually: true },
	custom: {
		bundle: {
			sourcemaps: false,
			disableForkTsChecker: true,
			packager: 'npm',
			esbuild: true,
			excludeFiles: ['**/*.spec.ts', '**/*.test.ts'],
			minifyOptions: {
				keepNames: true
			}
		},
		'serverless-offline': {
			httpPort: 4000,
			ignoreJWTSignature: true
		},
		prune: {
			automatic: true,
			includeLayers: true,
			number: 0
		},
		output: { handler: 'scripts/output.handler', file: 'stack/config.toml' }
	},
	resources: {
		Resources: {
			[DynamoDBSyncContentDataTableResourceName]: DynamoDBSyncContentDataTableResource,
			[CognitoUserPoolClientResourceName]: CognitoUserPoolClientResource,
			[CognitoUserPoolResourceName]: CognitoUserPoolResource
		},
		Outputs: {
			[CognitoUserPoolOutputName]: CognitoUserPoolOutput,
			[CognitoUserPoolClientOutputName]: CognitoUserPoolClientOutput,
			[DynamoDBSyncContentDataTableOutputName]: DynamoDBSyncContentDataTableOutput
		}
	}
};

module.exports = serverlessConfiguration;
