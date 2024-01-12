import { formatJSONResponse } from '$utils/format-json-response';

import type { HelloRequest } from './types';
import { helloBodySchema } from './schema';

import { initLambda, type Handler } from '$libs/lambda';

const hello: Handler<HelloRequest, void, void> = async (event) => {
	return formatJSONResponse({ message: event.body.hi });
};

export const main = initLambda(hello, { bodySchema: helloBodySchema });
