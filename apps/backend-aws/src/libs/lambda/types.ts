import type {
	APIGatewayProxyEvent,
	APIGatewayProxyResult,
	Handler as AWSHandler
} from 'aws-lambda';

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
