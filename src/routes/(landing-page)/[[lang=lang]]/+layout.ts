import { error } from '@sveltejs/kit';

import type {
	LandingPage_LayoutData,
	LandingPage_LayoutData_ProgramsProps
} from '$lib/layouts/landing-page/types';

import { fetcher } from '$lib/utils/fetcher';
import type { ReviewProps, ReviewResponseProps } from '$lib/utils/types/data';

import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = async ({ fetch }) => {
	const programs = await fetcher<LandingPage_LayoutData_ProgramsProps[]>(
		'/data/programs.json',
		fetch
	);

	const reviewsRawData = await fetcher<ReviewResponseProps[]>('/data/reviews.json', fetch);
	const reviews = reviewsRawData ? reviewsMappingData(reviewsRawData) : undefined;

	if (!programs) {
		error(404, {
			message: 'Not found'
		});
	}

	const layoutData: LandingPage_LayoutData = {
		programs,
		reviews
	};

	return {
		layoutData
	};
};

const reviewsMappingData = (reviewsRawData: ReviewResponseProps[]) => {
	const reviews = reviewsRawData.reduce((prev, reviewRawData) => {
		if (!reviewRawData.name || !reviewRawData.review) return prev;
		const reviewMapped: ReviewProps = {
			classNameTitle: reviewRawData['class-name-title'],
			classNameSubtitle: reviewRawData['class-name-subtitle'],
			name: reviewRawData.name,
			review: reviewRawData.review,
			role: reviewRawData.role
		};

		return [...prev, reviewMapped];
	}, [] as ReviewProps[]);

	return reviews;
};
