import type { LoadEvent } from '@sveltejs/kit';

import type { ProgramProps } from '$lib/utils/types/data';

import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {
	const data = await fetchPageData(fetch);
	if (!data) return;

	const programsRawData = await Promise.all(data.programs.map((id) => fetchPrograms(id, fetch)));

	const programs = programsRawData.filter((program) => program !== undefined) as ProgramProps[];

	return {
		programs
	};
};

interface PageDataProps {
	programs: string[];
}

const fetchPageData = async (fetch: LoadEvent['fetch']) => {
	try {
		const res = await fetch('data/home-page.json');

		const data = await res.json();

		return data as PageDataProps;
	} catch (e) {
		console.error(e);
		return undefined;
	}
};

const fetchPrograms = async (id: string, fetch: LoadEvent['fetch']) => {
	try {
		const res = await fetch(`data/programs/${id}.json`);

		const data = await res.json();

		return { ...data, id } as ProgramProps;
	} catch (e) {
		console.error(e);

		return undefined;
	}
};
