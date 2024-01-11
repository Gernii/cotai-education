import type { Handler } from '$utils/lambda';
import { initLambda } from '$utils/lambda';
import { initEventSchema } from '$utils/event-schema';
import { formatJSONResponse } from '$utils/format-json-response';

import { bodySchema } from './schema';
import type { BodyData } from './schema';

const hello: Handler<BodyData, void, void> = async (event) => {
	// we don't need to deserialize the body ourself as a middleware will be used to do that
	console.log(event.body);
	console.log('hi');

	return formatJSONResponse({ message: 'Hello World!' });
};

const eventSchema = initEventSchema({
	body: bodySchema
});

export const main = initLambda(hello, { eventSchema });
