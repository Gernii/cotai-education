import middy from '@middy/core';
import { CognitoJwtVerifier } from 'aws-jwt-verify';
import type {
	APIGatewayAuthorizerResultContext,
	APIGatewayRequestAuthorizerEventV2,
	AuthResponse,
	PolicyDocument,
	Statement
} from 'aws-lambda';

export const TOKEN_USE = process.env.TOKEN_USE as 'id' | 'access' | null | undefined;
export const USER_POOL_ID = process.env.USER_POOL_ID;
export const USER_POOL_CLIENT_ID = process.env.USER_POOL_CLIENT_ID;

export const handler = middy<APIGatewayRequestAuthorizerEventV2>().handler(
	async (event, _context, callback) => {
		try {
			if (!USER_POOL_ID || !USER_POOL_ID || !TOKEN_USE || !USER_POOL_CLIENT_ID) {
				throw Error();
			}

			const token = event.identitySource[0];

			// DEV: dev only bypass
			if (token === 'authDevOnly') {
				const context: APIGatewayAuthorizerResultContext = {
					user_id: 'dev-1',
					email: 'a@a.com'
				};
				console.log(generateAllow('dev-1', context, event.routeArn));

				return generateAllow('dev-1', context, event.routeArn);
			}

			const verifier = CognitoJwtVerifier.create({
				userPoolId: USER_POOL_ID,
				tokenUse: TOKEN_USE,
				clientId: USER_POOL_CLIENT_ID
			});

			const payload = await verifier.verify(token.substring(7));

			const context = {
				user_id: payload.sub,
				email: payload.email as string,
				group: payload['cognito:groups']?.reduce((prev, cur, idx) => {
					if (idx === 0) {
						return cur;
					}
					return `${prev},${cur}`;
				}, '')
			};

			return generateAllow(payload.sub, context, event.routeArn);
		} catch (error) {
			callback('Unauthorized');
			return;
		}
	}
);

const generatePolicy = (
	principalId: string,
	effect: string,
	context?: APIGatewayAuthorizerResultContext | null,
	resource?: string
) => {
	// Required output:
	const authResponse = {} as AuthResponse;
	authResponse.principalId = principalId;
	if (effect && resource) {
		const policyDocument = {} as PolicyDocument;
		policyDocument.Version = '2012-10-17'; // default version
		policyDocument.Statement = [];
		const statementOne = {} as Record<string, unknown> & Statement;
		statementOne.Action = 'execute-api:Invoke'; // default action
		statementOne.Effect = effect;
		statementOne.Resource = resource;
		policyDocument.Statement[0] = statementOne;
		authResponse.policyDocument = policyDocument;
	}
	// Optional output with custom properties of the String, Number or Boolean type.
	authResponse.context = context;

	return authResponse;
};

const generateAllow = (
	principalId: string,
	context?: APIGatewayAuthorizerResultContext | null,
	resource?: string
) => {
	return generatePolicy(principalId, 'Allow', context, resource);
};
