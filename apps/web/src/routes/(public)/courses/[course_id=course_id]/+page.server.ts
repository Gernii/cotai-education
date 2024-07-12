import { error } from "@sveltejs/kit";
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
import { dataStudentProjects } from "$lib/datas/student-projects/student-projects.server.js";
import { dataProgramPublicTraining } from "$lib/datas/programs/public-training.js";
import type { HeroRoadmapCourse } from "$lib/features/hero-roadmap/types.js";

export const load = async ({ params }) => {
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
        const program = programsMap.get(course.programId);
        if (program) {
            programCourses = program.courses;
        }
    }

    const registerForm = await loadValidatorRegisterForm();

    const teachersBio = dataTeachersBio;

    const studentProjects = dataStudentProjects;

    const heroRoadmapCourse = getHeroRoadmapCourse();

    return {
        registerForm,
        course: courseMappingData(course),
        nextCourseTitle,
        programCourses,
        teachersBio,
        studentProjects,
        heroRoadmapCourse,
    };
};

const courseMappingData = (course: CourseProps): CourseProps => {
    const faqs = course.faqs?.map((faq) => ({
        title: faq.title,
        content: faq.content ? parseMarkdownToHTML(faq.content) : undefined,
    }));

    const description: CourseProps["description"] = course.description
        ? parseMarkdownToHTML(course.description)
        : undefined;

    const curriculum = course.curriculum?.map((lesson) => {
        const details = lesson.details;

        if (details?.content) {
            details.content = parseMarkdownToHTML(details.content);
        }

        return {
            ...lesson,
            details,
        };
    });

    return {
        ...course,
        faqs,
        curriculum,
        description,
    };
};

const getHeroRoadmapCourse = () => {
    const res = dataProgramPublicTraining.coursesRoadmap.reduce(
        (prev, courseId): HeroRoadmapCourse[] => {
            const courseGetter = coursesMap.get(courseId);
            if (!courseGetter) {
                return prev;
            }

            const course = courseGetter();

            const heroCourse: HeroRoadmapCourse = {
                id: course.id,
                shortTitle: course.shortTitle,
                title: course.title,
            };
            prev.push(heroCourse);
            return prev;
        },

        [] as HeroRoadmapCourse[],
    );

    return res;
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
