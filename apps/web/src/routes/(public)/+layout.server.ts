import { error } from "@sveltejs/kit";

import type {
    LandingPage_LayoutData,
    LandingPage_LayoutData_ProgramProps,
    LandingPage_LayoutData_ProgramResponseProps,
    LandingPage_LayoutData_ReviewProps,
    LandingPage_LayoutData_ReviewResponseProps,
} from "$lib/layouts/landing-page/types";

import { fetcher } from "$lib/utils/fetcher";

export const prerender = true;

export const load = async ({ fetch }) => {
    const [programsRawData, reviewsRawData] = await Promise.all([
        fetcher<LandingPage_LayoutData_ProgramProps[]>(fetch, "/data/programs.json"),
        fetcher<LandingPage_LayoutData_ReviewResponseProps[]>(fetch, "/data/reviews.json"),
    ]);

    const reviews = reviewsRawData ? reviewsMappingData(reviewsRawData) : undefined;
    const programs = programsRawData ? programsMappingData(programsRawData) : undefined;

    if (!programs) {
        error(404, {
            message: "Not found",
        });
    }

    const layoutData: LandingPage_LayoutData = {
        programs,
        reviews,
    };

    return {
        layoutData,
    };
};

const reviewsMappingData = (reviewsRawData: LandingPage_LayoutData_ReviewResponseProps[]) => {
    const reviews = reviewsRawData.reduce((prev, reviewRawData) => {
        if (!(reviewRawData.name && reviewRawData.review)) {
            return prev;
        }
        const reviewMapped: LandingPage_LayoutData_ReviewProps = {
            classNameTitle: reviewRawData["class-name-title"],
            classNameSubtitle: reviewRawData["class-name-subtitle"],
            name: reviewRawData.name,
            review: reviewRawData.review,
            role: reviewRawData.role,
        };

        prev.push(reviewMapped);

        return prev;
    }, [] as LandingPage_LayoutData_ReviewProps[]);

    return reviews;
};

const programsMappingData = (programsRawData: LandingPage_LayoutData_ProgramResponseProps[]) => {
    const programs = programsRawData.reduce((prev, reviewRawData) => {
        if (!reviewRawData.title) {
            return prev;
        }
        const reviewMapped: LandingPage_LayoutData_ProgramProps = {
            id: reviewRawData.id,
            title: reviewRawData.title,
        };
        prev.push(reviewMapped);
        return prev;
    }, [] as LandingPage_LayoutData_ProgramProps[]);

    return programs;
};
