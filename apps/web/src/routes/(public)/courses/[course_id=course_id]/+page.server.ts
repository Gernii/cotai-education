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
import type { CourseProps } from "$lib/datas/courses/types";
import { parseMarkdownToHTML } from "$lib/utils/parse-markdown-to-json.server.js";
import { dataTeachersBio } from "$lib/datas/teachers-bio/teachers-bio.server.js";

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

    const teachersBio = dataTeachersBio();

    return {
        ...courseMappingData(courseDeprecated),
        id: courseDeprecated.id,
        registerForm,
        course: {
            ...course,
            faqs: course.faqs?.map((faq) => ({
                title: faq.title,
                content: faq.content ? parseMarkdownToHTML(faq.content) : undefined,
            })),
        } satisfies CourseProps,
        nextCourseTitle,
        programCourses,
        teachersBio,
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
