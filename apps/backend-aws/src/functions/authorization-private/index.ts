import { handlerPath } from '$utils/handler-resolver';

import type { AwsLambdaEnvironment } from '@serverless/typescript';

const environment: AwsLambdaEnvironment = {
	TOKEN_USE: '${env:TOKEN_USE}',
	USER_POOL_ID: '${env:USER_POOL_ID}',
	USER_POOL_CLIENT_ID: '${env:USER_POOL_CLIENT_ID}'
};

export const authorizationPrivate = {
	handler: `${handlerPath(__dirname)}/handler.handler`,
	environment,
	name: 'authorizationPrivate'
};
