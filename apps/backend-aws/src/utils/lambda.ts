import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import type { VersionedApiGatewayEvent } from '@middy/http-json-body-parser';
import jsonBodyParser from '@middy/http-json-body-parser';
import validator from '@middy/validator';
import type {
	APIGatewayProxyEvent,
	APIGatewayProxyResult,
	Callback as LambdaCallback,
	Context as LambdaContext,
	Handler as AWSHandler
} from 'aws-lambda';
import type Ajv from 'ajv';
type MiddyInputHandler<TEvent, TResult, TContext extends LambdaContext = LambdaContext> = (
	event: TEvent,
	context: TContext,
	callback: LambdaCallback<TResult>
) => void | Promise<TResult> | TResult;

export type LambdaHandler = MiddyInputHandler<
	VersionedApiGatewayEvent,
	APIGatewayProxyResult,
	LambdaContext
>;

export interface RequestSchema {
	eventSchema?: Ajv;
	responseSchema?: Ajv;
}

export const initLambda = (
	handler: Handler<never, never, never>,
	requestSchema: RequestSchema | null = null
) => {
	const wrapper = middy().use(jsonBodyParser()); // parses the request body when it's a JSON and converts it to an object

	if (requestSchema !== null) {
		const { eventSchema, responseSchema } = requestSchema;

		wrapper.use(
			validator({
				...(responseSchema && { responseSchema }),
				...(eventSchema && { eventSchema })
			})
		);
	}

	wrapper
		.use(httpErrorHandler()) // handles common http errors and returns proper responses
		.handler(handler);

	return wrapper;
};

// Event is an APIGatewayProxyEvent with a typed body, pathParameters and queryStringParameters which depends on http-json-body-parser & json-schema-to-ts
// queryStringParameters and multiValueQueryStringParameters is non-nullable as we use http-event-normalizer
export interface Event<TBody, TPathParameters, TQueryStringParameters>
	extends Omit<APIGatewayProxyEvent, 'body' | 'pathParameters' | 'queryStringParameters'> {
	body: TBody;
	pathParameters: TPathParameters;
	queryStringParameters: TQueryStringParameters;
	multiValueQueryStringParameters: NonNullable<
		APIGatewayProxyEvent['multiValueQueryStringParameters']
	>;
}

// We are making use of http-response-serializer, so our body type can either be an Entity, an Array<Entity> or a string
interface Result extends Omit<APIGatewayProxyResult, 'body'> {
	body: string | Record<string, unknown>;
}

// Handler type which gives us proper types on our event based on TBody and TPathParameters which are JSON schemas
export type Handler<
	TBody = void,
	TPathParameters = void,
	TQueryStringParameters = void
> = AWSHandler<Event<TBody, TPathParameters, TQueryStringParameters>, Result>;
