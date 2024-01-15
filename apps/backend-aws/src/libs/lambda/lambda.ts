import type { RequestMethod } from '$utils/types';

import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import jsonBodyParser from '@middy/http-json-body-parser';

import type { ValidatorSchema } from './middlewares/validator';
import { validator } from './middlewares/validator';
import type { Handler, PrivateHandler } from './types';
import { privateRouter } from './middlewares/private-router';

export interface InitLambdaOptions {
	validatorSchema?: ValidatorSchema | null;
	isPrivateRouter?: boolean;
	method?: RequestMethod;
}

export const initLambda = (
	handler: Handler<never, never, never> | PrivateHandler<never, never, never>,
	options?: InitLambdaOptions
) => {
	const { validatorSchema, isPrivateRouter, method = 'post' } = options;
	const wrapper = middy();

	if (method !== 'get') {
		wrapper.use(jsonBodyParser()); // parses the request body when it's a JSON and converts it to an object
	}

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
