import { handlerPath } from '$utils/handler-resolver';

import { authorizationPrivate } from '$functions/authorization-private';

export const landingPageCourseAccess = {
	handler: `${handlerPath(__dirname)}/handler.main`,
	events: [
		{
			httpApi: {
				method: 'post',
				path: '/landing-page/course/access/{id}',
				authorizer: {
					name: authorizationPrivate.name
				}
			}
		}
	],
	name: 'landingPageCourseAccess'
};
