import { error } from '@sveltejs/kit';

import type {
	LandingPage_LayoutData,
	LandingPage_LayoutData_ProgramsProps
} from '$lib/layouts/landing-page/types';

import { fetcher } from '$lib/utils/fetcher';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
	const programs = await fetcher<LandingPage_LayoutData_ProgramsProps[]>(
		'/data/programs.json',
		fetch
	);

	if (!programs) {
		error(404, {
			message: 'Not found'
		});
	}

	const layoutData: LandingPage_LayoutData = {
		programs
	};

	return {
		layoutData
	};
};
