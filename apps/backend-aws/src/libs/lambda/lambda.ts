import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import jsonBodyParser from '@middy/http-json-body-parser';

import type { ValidatorSchema } from './middlewares/validator';
import { validator } from './middlewares/validator';
import type { Handler } from './types';

export const initLambda = (
	handler: Handler<never, never, never>,
	validatorSchema: ValidatorSchema | null = null
) => {
	const wrapper = middy().use(jsonBodyParser()); // parses the request body when it's a JSON and converts it to an object

	if (validatorSchema !== null) {
		wrapper.use(validator(validatorSchema));
	}

	wrapper
		.use(httpErrorHandler()) // handles common http errors and returns proper responses
		.handler(handler);

	return wrapper;
};
