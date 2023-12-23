import { error, type LoadEvent } from '@sveltejs/kit';

import type { HomePageDataProps } from '$lib/pages/home-page';

import type { CourseProps, ProgramProps } from '$lib/utils/types/data';
import { staticDataFetcher } from '$lib/utils/static-data-fetcher';

import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ fetch, parent }): Promise<HomePageDataProps> => {
	const preData = await parent();

	if (!preData.layoutData.programs) {
		error(404, {
			message: 'Not found'
		});
	}

	const programIds = preData.layoutData.programs.map((program) => program.id);

	const programs = await fetchPrograms(programIds, fetch);

	const courses = await fetchCourses(programs, fetch);

	return {
		programs,
		courses
	};
};

const fetchPrograms = async (programIds: string[], fetch: LoadEvent['fetch']) => {
	const programsRawData = await Promise.all(
		programIds.map((id) => staticDataFetcher<ProgramProps>({ id, path: 'programs', fetch }))
	);

	const treeShakedPrograms = programsRawData.filter(
		(program) => program !== undefined
	) as ProgramProps[];

	return treeShakedPrograms;
};

const fetchCourses = async (programs: ProgramProps[], fetch: LoadEvent['fetch']) => {
	const courseIds = treeShakingCourses(programs);

	const coursesRawData = await Promise.all(
		courseIds.map((id) => staticDataFetcher<CourseProps>({ id, path: 'courses', fetch }))
	);

	const courses = coursesRawData.reduce(
		(prev, course) => {
			if (!course) return prev;
			return { ...prev, [course.id]: course };
		},
		{} as Record<string, CourseProps>
	);
	return courses;
};

const treeShakingCourses = (programs: ProgramProps[]) => {
	const courseIds: string[] = [];

	programs.forEach((program) => {
		program.courses.forEach((courseId) => {
			if (courseIds.includes(courseId)) return;
			courseIds.push(courseId);
		});
	});
	return courseIds;
};
