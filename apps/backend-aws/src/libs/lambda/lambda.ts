import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import jsonBodyParser from '@middy/http-json-body-parser';
import httpEventNormalizerMiddleware from '@middy/http-event-normalizer';

import type { ValidatorSchema } from './middlewares/validator';
import { validator } from './middlewares/validator';
import type { Handler, PrivateHandler } from './types';
import { privateRouter } from './middlewares/private-router';
export interface InitLambdaOptions {
	validatorSchema?: ValidatorSchema;
	isPrivateRouter?: boolean;
}

export const initLambda = (
	handler: Handler<never, never, never> | PrivateHandler<never, never, never>,
	options?: InitLambdaOptions
) => {
	const wrapper = middy()
		.use(httpEventNormalizerMiddleware())
		.use(
			jsonBodyParser({
				disableContentTypeError: true
			})
		);

	if (options?.validatorSchema !== undefined) {
		wrapper.use(validator(options.validatorSchema));
	}

	if (options?.isPrivateRouter) {
		wrapper.use(privateRouter());
	}

	wrapper
		.use(httpErrorHandler()) // handles common http errors and returns proper responses
		.handler(handler);

	return wrapper;
};
