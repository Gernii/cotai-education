import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import jsonBodyParser from '@middy/http-json-body-parser';
import httpEventNormalizerMiddleware from '@middy/http-event-normalizer';

import type { ValidatorSchema } from './middlewares/validator';
import { validator } from './middlewares/validator';
import type { Handler, PrivateHandler } from './types';
import { privateRouter } from './middlewares/private-router';
export interface InitLambdaOptions {
	validatorSchema?: ValidatorSchema | null;
	isPrivateRouter?: boolean;
}

export const initLambda = (
	handler: Handler<never, never, never> | PrivateHandler<never, never, never>,
	options?: InitLambdaOptions
) => {
	const { validatorSchema, isPrivateRouter } = options;
	const wrapper = middy()
		.use(httpEventNormalizerMiddleware())
		.use(
			jsonBodyParser({
				disableContentTypeError: true
			})
		);

	if (validatorSchema !== null) {
		wrapper.use(validator(validatorSchema));
	}

	if (isPrivateRouter) {
		wrapper.use(privateRouter());
	}

	wrapper
		.use(httpErrorHandler()) // handles common http errors and returns proper responses
		.handler(handler);

	return wrapper;
};
