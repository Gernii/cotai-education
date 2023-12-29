import { error } from '@sveltejs/kit';

import type { CourseDetailsPageDataProps } from '$lib/pages/course-details';

import { staticDataFetcher } from '$lib/utils/static-data-fetcher';
import type { CourseResponseProps } from '$lib/utils/types/data';
import { courseMappingData } from '$lib/utils/data-mapping';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }): Promise<CourseDetailsPageDataProps> => {
	const courseId = params['course_id'];

	const course = await staticDataFetcher<CourseResponseProps>({
		id: courseId,
		path: 'courses',
		fetch
	});

	if (!course) {
		error(404, {
			message: 'Not found'
		});
	}

	return {
		...courseMappingData(course),
		id: courseId
	};
};
