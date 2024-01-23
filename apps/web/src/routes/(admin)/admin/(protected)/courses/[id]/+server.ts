import { LandingPageCourseAccessRequestType } from '@repo/types-bridge';
import type { LandingPageCourseAccess, LandingPageCourseCheckStatus } from '@repo/types-bridge';
import { json } from '@sveltejs/kit';

import {
	CourseAPIRouterAction,
	SEARCH_PARAMS_ACTION,
	courseAPIRouterPath
} from '$lib/utils/constants.js';

export const GET = async ({ url, params, locals }) => {
	const id = params.id;

	const action = Number(url.searchParams.get(SEARCH_PARAMS_ACTION));

	const courseAPI = courseAPIRouterPath();

	if (action === CourseAPIRouterAction.CHECK_ACCESS) {
		const res = await locals.handlePrivateFetch<LandingPageCourseCheckStatus.Response>(
			courseAPI.courseCheckStatusWithId(id).external
		);

		return json(res);
	}

	return new Response('hi');
};

export const POST = async ({ url, params, locals, request }) => {
	const id = params.id;
	console.log('hi');

	const action = Number(url.searchParams.get(SEARCH_PARAMS_ACTION));

	const courseAPI = courseAPIRouterPath();

	if (action === CourseAPIRouterAction.CHECKOUT) {
		const body: LandingPageCourseAccess.RequestBody = {
			type: LandingPageCourseAccessRequestType.REQUEST_CHECKOUT
		};

		const res = await locals.handlePrivateFetch<LandingPageCourseAccess.Response>(
			courseAPI.courseAccessWithId(id).external,
			{
				body: JSON.stringify(body)
			}
		);

		return json(res);
	} else if (action === CourseAPIRouterAction.FORCE_ACCESS) {
		const body = await request.json();

		const res = await locals.handlePrivateFetch<LandingPageCourseAccess.Response>(
			courseAPI.courseForceAccessWithId(id).external,
			{
				body: JSON.stringify(body)
			}
		);

		return json(res);
	}
};
