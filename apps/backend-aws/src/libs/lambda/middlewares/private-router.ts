import { formatJSONResponse } from '$utils/format-json-response';

import type { MiddlewareObj, Request } from '@middy/core';

import type { AuthContext } from '../types';

export const privateRouter = (): MiddlewareObj => {
	const before = (request: Request) => {
		const authProps = request.event.requestContext.authorizer?.lambda as AuthContext | undefined;
		if (authProps === undefined) throw formatJSONResponse('Unauthorized', { statusCode: 401 });
		request.event.authContext = authProps;
	};
	return {
		before
	};
};
