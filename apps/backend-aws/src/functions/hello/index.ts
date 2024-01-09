import type { AWS } from '@serverless/typescript';
import { handlerPath } from '@libs/handler-resolver';

export default {
	handler: `${handlerPath(__dirname)}/handler.main`,
	events: [
		{
			httpApi: {
				method: 'post',
				path: '/hello'
			}
		}
	]
} as AWS['functions'];
