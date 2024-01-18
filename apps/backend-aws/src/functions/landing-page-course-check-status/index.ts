import { handlerPath } from '$utils/handler-resolver';

import { authorizationPrivate } from '$functions/authorization-private';

export const landingPageCourseCheckStatus = {
	handler: `${handlerPath(__dirname)}/handler.main`,
	events: [
		{
			httpApi: {
				method: 'get',
				path: '/landing-page/course/check-status/{id}',
				authorizer: {
					name: authorizationPrivate.name
				}
			}
		}
	],
	name: 'landingPageCourseCheckStatus'
};
