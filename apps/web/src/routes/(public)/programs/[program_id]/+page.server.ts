import { error } from "@sveltejs/kit";

import type { ProgramDetailsPageDataProps } from "$lib/pages/program-details/types";

import { fetcherStaticData } from "$lib/utils/fetcher/static-data";
import type { ProgramResponseProps } from "$lib/utils/types/data.deprecated";
import { programMappingData } from "$lib/utils/data-mapping.server";
import { fetcherCourses } from "$lib/utils/fetcher/courses.js";

export const load = async ({ fetch, params }): Promise<ProgramDetailsPageDataProps> => {
    const programId = params.program_id;

    const program = await fetcherStaticData<ProgramResponseProps>({
        id: programId,
        path: "programs",
        fetch,
    });

    if (!program) {
        error(404, {
            message: "Not found",
        });
    }

    const courseIds = program.courses;

    const courses = await fetcherCourses(courseIds, fetch);

    return {
        programDetails: {
            ...programMappingData(program),
            id: programId,
        },
        courses,
    };
};
