import { error } from "@sveltejs/kit";

import type { CourseDetailsPageDataProps } from "$lib/pages/course-details";

import { fetcherStaticData } from "$lib/utils/fetcher/static-data";
import type { CourseResponseProps } from "$lib/utils/types/data";
import { courseMappingData } from "$lib/utils/data-mapping.server";

export const load = async ({ fetch, params }): Promise<CourseDetailsPageDataProps> => {
    const courseId = params.course_id;

    const course = await fetcherStaticData<CourseResponseProps>({
        id: courseId,
        path: "courses",
        fetch,
    });

    if (!course) {
        error(404, {
            message: "Not found",
        });
    }

    return {
        ...courseMappingData(course),
        id: courseId,
    };
};
