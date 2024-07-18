import { coursesMap } from "$lib/datas/courses/healpers";
import type { CourseProps } from "$lib/datas/courses/types";
import { dataProgramPublicTraining } from "$lib/datas/programs/public-training";
import { getDataStudentProjects } from "$lib/datas/student-projects/student-projects.server";
import { dataTeachersBio } from "$lib/datas/teachers-bio/teachers-bio.server";
import type { HeroRoadmapCourse } from "$lib/features/hero-roadmap/types.js";
import {
    discordRegisterForm,
    loadValidatorRegisterForm,
} from "$lib/features/register-form/handler.server";
import { RateLimiter } from "$lib/libs/sveltekit-rate-limiter";
import { parseMarkdownToHTML } from "$lib/utils/parse-markdown-to-json.server.js";
import { error } from "@sveltejs/kit";

export const load = async () => {
    const registerForm = await loadValidatorRegisterForm();

    const teachersBio = dataTeachersBio();

    const studentProjects = getDataStudentProjects();

    const [courseRoadmap, heroRoadmapCourse] = getCourseRoadmap();

    return { registerForm, teachersBio, studentProjects, courseRoadmap, heroRoadmapCourse };
};

const getCourseRoadmap = () => {
    const hardcodedStarsIdx = new Map([[4, 3]]);

    const res = dataProgramPublicTraining.coursesRoadmap.reduce(
        (prev, courseId, idx) => {
            const courseGetter = coursesMap.get(courseId);
            if (!courseGetter) {
                return prev;
            }

            const course = courseGetter();

            const heroCourse: HeroRoadmapCourse = {
                id: course.id,
                shortTitle: course.shortTitle,
                title: course.title,
                totalStars: hardcodedStarsIdx.get(idx) ?? idx,
            };

            if (course.description) {
                course.description = parseMarkdownToHTML(course.description);
            }

            prev[0].push(course);
            prev[1].push(heroCourse);

            return prev;
        },
        [[], []] as [CourseProps[], HeroRoadmapCourse[]],
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
