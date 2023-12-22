import type { LoadEvent } from '@sveltejs/kit';

import type { HomePageDataProps } from '$lib/pages/home-page';
import type { CourseProps, ProgramProps } from '$lib/utils/types/data';

import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ fetch }): Promise<HomePageDataProps> => {
	const preData = await fetchPagePreData(fetch);
	if (!preData) return { programs: [], courses: {} };

	const programs = await fetchPrograms(preData.programs, fetch);

	const courses = await fetchCourses(programs, fetch);

	return {
		programs,
		courses
	};
};

interface HomePagePreData {
	programs: string[];
}

const fetchPagePreData = async (fetch: LoadEvent['fetch']) => {
	try {
		const res = await fetch('data/home-page.json');

		const data = await res.json();

		return data as HomePagePreData;
	} catch (e) {
		console.error(e);
		return undefined;
	}
};

const fetchPrograms = async (programs: HomePagePreData['programs'], fetch: LoadEvent['fetch']) => {
	const programsRawData = await Promise.all(
		programs.map((id) => staticDataFetcher<ProgramProps>({ id, path: 'programs', fetch }))
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

export interface StaticDataFetcherProps {
	id: string;
	path: string;
	fetch: LoadEvent['fetch'];
}

const staticDataFetcher = async <T>(props: StaticDataFetcherProps) => {
	const { id, path, fetch } = props;
	try {
		const res = await fetch(`data/${path}/${id}.json`);

		const data = await res.json();

		return { ...data, id } as T;
	} catch (e) {
		console.error(e);

		return undefined;
	}
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
