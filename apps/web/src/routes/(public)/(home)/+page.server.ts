import { coursesMap } from "$lib/datas/courses/helpers";
import type { CourseProps } from "$lib/datas/courses/types";
import { dataProgramPublicTraining } from "$lib/datas/programs/public-training";
import { getDataStudentProjects } from "$lib/datas/student-projects/student-projects.server";
import { dataTeachersBio } from "$lib/datas/teachers-bio/teachers-bio.server";
import type { HeroRoadmapCourse } from "$lib/features/hero-roadmap/types.js";
import { parseMarkdownToHTML } from "$lib/utils/parse-markdown-to-json.server.js";

export const prerender = true;

export const load = () => {
    const teachersBio = dataTeachersBio();

    const studentProjects = getDataStudentProjects();

    const [courseRoadmap, heroRoadmapCourse] = getCourseRoadmap();
    return { teachersBio, studentProjects, courseRoadmap, heroRoadmapCourse };
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
            if (course.descriptionMore) {
                course.descriptionMore = parseMarkdownToHTML(course.descriptionMore);
            }

            prev[0].push(course);
            prev[1].push(heroCourse);

            return prev;
        },
        [[], []] as [CourseProps[], HeroRoadmapCourse[]],
    );

    return res;
};
