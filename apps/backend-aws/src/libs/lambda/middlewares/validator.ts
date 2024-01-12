import { extractFromRequest } from '$utils/extract-data-from-request';

import type { MiddlewareObj, Request } from '@middy/core';
import type { AnyObject, Maybe, ObjectSchema } from 'yup';

export interface ValidatorSchema<
	BodySchema extends Maybe<AnyObject> = Maybe<AnyObject>,
	PathParamsSchema extends Maybe<AnyObject> = Maybe<AnyObject>,
	QueryStringParamsSchema extends Maybe<AnyObject> = Maybe<AnyObject>
> {
	bodySchema?: ObjectSchema<BodySchema>;
	pathParamsSchema?: ObjectSchema<PathParamsSchema>;
	queryStringParamsSchema?: ObjectSchema<QueryStringParamsSchema>;
}

export const validator = <
	BodySchema extends Maybe<AnyObject>,
	PathParamsSchema extends Maybe<AnyObject>,
	QueryStringParamsSchema extends Maybe<AnyObject>
>(
	options?: ValidatorSchema<BodySchema, PathParamsSchema, QueryStringParamsSchema>
): MiddlewareObj => {
	const before = (request: Request) => {
		if (options?.bodySchema) {
			request.event.body = extractFromRequest({
				data: request.event.body,
				schema: options.bodySchema
			});
		}
		if (options?.pathParamsSchema) {
			request.event.pathParameters = extractFromRequest({
				data: request.event.pathParameters,
				schema: options.pathParamsSchema
			});
		}
		if (options?.queryStringParamsSchema) {
			request.event.queryStringParameters = extractFromRequest({
				data: request.event.queryStringParameters,
				schema: options.queryStringParamsSchema
			});
		}
	};
	return {
		before
	};
};
