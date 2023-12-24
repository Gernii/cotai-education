import { error, type LoadEvent } from '@sveltejs/kit';

import type { ProgramDetailsPageDataProps } from '$lib/pages/program-details/types';

import { staticDataFetcher } from '$lib/utils/static-data-fetcher';
import type {
	CourseProps,
	CourseResponsesProps,
	ProgramResponsesProps
} from '$lib/utils/types/data';
import { courseMappingData, programMappingData } from '$lib/utils/data-mapping';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }): Promise<ProgramDetailsPageDataProps> => {
	const programId = params['program_id'];

	const program = await staticDataFetcher<ProgramResponsesProps>({
		id: programId,
		path: 'programs',
		fetch
	});

	if (!program) {
		error(404, {
			message: 'Not found'
		});
	}

	const courseIds = program.courses;

	const courses = await fetchCourses(courseIds, fetch);

	return {
		programDetails: {
			...programMappingData(program),
			id: programId
		},
		courses
	};
};

const fetchCourses = async (courseIds: string[], fetch: LoadEvent['fetch']) => {
	const coursesRawData = await Promise.all(
		courseIds.map((id) => staticDataFetcher<CourseResponsesProps>({ id, path: 'courses', fetch }))
	);

	const courses = coursesRawData.reduce(
		(prev, course) => {
			if (!course) return prev;

			const courseMapped = courseMappingData(course);
			return {
				...prev,
				[course.id]: {
					...courseMapped
				}
			};
		},
		{} as Record<string, CourseProps>
	);
	return courses;
};
