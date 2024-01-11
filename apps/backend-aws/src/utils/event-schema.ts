import { transpileSchema } from '@middy/validator/transpile';
import type { JSONSchemaType } from 'ajv';

interface EventSchema<BodySchema, PathSchema, QueryStringSchema> {
	body: JSONSchemaType<BodySchema>;
	pathSchema?: JSONSchemaType<PathSchema>;
	queryStringSchema?: JSONSchemaType<QueryStringSchema>;
}

export const initEventSchema = <BodySchema, PathSchema = void, QueryStringSchema = void>(
	eventSchema: EventSchema<BodySchema, PathSchema, QueryStringSchema>
) => {
	const { body, pathSchema, queryStringSchema } = eventSchema;

	const schema = {
		type: 'object',
		required: ['body'],
		properties: {
			body,
			...(pathSchema && { pathParameters: pathSchema }),
			...(queryStringSchema && { queryStringParameters: queryStringSchema })
		}
	};
	// TODO: update pre-transpiled schema
	return transpileSchema(schema);
};
