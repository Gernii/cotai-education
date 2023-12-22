import { error } from '@sveltejs/kit';

import type { CourseDetailsPageDataProps } from '$lib/pages/course-details';

import { staticDataFetcher } from '$lib/utils/static-data-fetcher';
import type { CourseProps } from '$lib/utils/types/data';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }): Promise<CourseDetailsPageDataProps> => {
	const courseId = params['course_id'];
	console.log(courseId);

	const course = await staticDataFetcher<CourseProps>({ id: courseId, path: 'courses', fetch });
	console.log(course);

	if (!course) {
		error(404, {
			message: 'Not found'
		});
	}

	// const preData = await fetchPagePreData(fetch);
	// if (!preData) return { programs: [], courses: {} };

	// const programs = await fetchPrograms(preData.programs, fetch);

	// const courses = await fetchCourses(programs, fetch);

	return {
		...course,
		id: courseId
	};
};
