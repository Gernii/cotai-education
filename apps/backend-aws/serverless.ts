import type { AWS } from '@serverless/typescript';

import hello from '$functions/hello';

const serverlessConfiguration: AWS = {
	service: 'cotai-education',
	frameworkVersion: '3',
	plugins: ['serverless-offline', 'serverless-bundle'],
	useDotenv: true,
	provider: {
		name: 'aws',
		runtime: 'nodejs20.x',
		region: 'ap-southeast-1',
		stackName: 'cotai-education-${opt:stage}',
		logRetentionInDays: 7,
		logs: {
			httpApi: true
		},
		httpApi: {
			cors: true,
			metrics: true
		},
		architecture: 'arm64',
		memorySize: 512
	},
	// import the function via paths
	functions: { hello },
	package: { individually: true },
	custom: {
		bundle: {
			sourcemaps: false,
			disableForkTsChecker: true,
			// esbuild: true,
			excludeFiles: ['**/*.spec.ts', '**/*.test.ts'],
			minifyOptions: {
				keepNames: true
			}
		},
		'serverless-offline': {
			httpPort: 4000
		}
	}
};

module.exports = serverlessConfiguration;
