import { error } from "@sveltejs/kit";

import { fetcherStaticData } from "$lib/utils/fetcher/static-data";
import type { CourseResponseProps } from "$lib/utils/types/data.deprecated";
import { courseMappingData } from "$lib/utils/data-mapping.server";
import {
    discordRegisterForm,
    loadValidatorRegisterForm,
} from "$lib/features/register-form/handler.server";
import { RateLimiter } from "$lib/libs/sveltekit-rate-limiter";
import type { CourseIds } from "$lib/datas/courses/constants";
import { coursesMap } from "$lib/datas/courses/healpers";
import { programsMap } from "$lib/datas/programs/healpers";

export const load = async ({ fetch, params }) => {
    const courseId = params.course_id as CourseIds;

    const courseGetter = coursesMap.get(courseId);

    if (!courseGetter) {
        error(404, {
            message: "Not found",
        });
    }
    const course = courseGetter();

    let nextCourseTitle: undefined | string;

    if (course.nextCourseId) {
        const nextCourse = coursesMap.get(course.nextCourseId);

        if (nextCourse) {
            nextCourseTitle = nextCourse().title;
        }
    }

    let programCourses: undefined | CourseIds[] = undefined;
    if (course.programId) {
        const programGetter = programsMap.get(course.programId);
        if (programGetter) {
            const program = programGetter();
            programCourses = program.courses;
        }
    }

    const courseDeprecated = await fetcherStaticData<CourseResponseProps>({
        id: courseId,
        path: "courses",
        fetch,
    });

    if (!courseDeprecated) {
        error(404, {
            message: "Not found",
        });
    }
    const registerForm = await loadValidatorRegisterForm();

    return {
        ...courseMappingData(courseDeprecated),
        id: courseDeprecated.id,
        registerForm,
        course,
        nextCourseTitle,
        programCourses,
    };
};

const limiter = new RateLimiter({
    IP: [5, "h"], // IP address limiter
    IPUA: [3, "m"], // IP + User Agent limiter
});

export const actions = {
    default: async (event) => {
        const { request, fetch } = event;
        // Every call to isLimited counts as a hit towards the rate limit for the event.

        if (await limiter.isLimited(event)) {
            throw error(429);
        }

        const res = await discordRegisterForm(request, fetch);

        return res;
    },
};
