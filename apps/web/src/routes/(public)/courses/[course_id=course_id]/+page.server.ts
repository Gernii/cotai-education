import { error } from "@sveltejs/kit";
import type { CourseIds } from "$lib/datas/courses/constants";
import { programsMap } from "$lib/datas/programs/healpers";
import type { CourseProps } from "$lib/datas/courses/types";
import { parseMarkdownToHTML } from "$lib/utils/parse-markdown-to-json.server";
import { dataTeachersBio } from "$lib/datas/teachers-bio/teachers-bio.server";
import { getDataStudentProjects } from "$lib/datas/student-projects/student-projects.server";
import { dataProgramPublicTraining } from "$lib/datas/programs/public-training";
import type { HeroRoadmapCourse } from "$lib/features/hero-roadmap/types";
import { dataFAQs } from "$lib/datas/faq/faq.server";
import { FAQShowLocation } from "$lib/datas/faq/types";
import { getDataCourseUnique } from "$lib/datas/course-unique/course-unique.server";
import type { ProgramIds } from "$lib/datas/programs/constants";
import type { CoursesListSliderProps_Courses } from "$lib/features/courses-list-slider/types.js";
import { coursesMap } from "$lib/datas/courses/helpers.js";

export const prerender = true;

export const load = ({ params }) => {
    const courseId = params.course_id as CourseIds;

    const course = getCourse(courseId);

    const teachersBio = dataTeachersBio();

    const studentProjects = getDataStudentProjects();

    const heroRoadmapCourse = getHeroRoadmapCourse();

    const faqs = courseFAQ();

    const courseUnique = getDataCourseUnique();

    const otherProgramCourses = getOtherProgramCourses({
        currentCourseId: courseId,
        programId: course.programId,
    });

    return {
        course: courseMappingData(course),
        teachersBio,
        studentProjects,
        heroRoadmapCourse,
        faqs,
        courseUnique,
        otherProgramCourses,
    };
};

interface GetOtherProgramCoursesProps {
    currentCourseId: CourseIds;
    programId?: ProgramIds;
}

const getOtherProgramCourses = (
    props: GetOtherProgramCoursesProps,
): CoursesListSliderProps_Courses[] | undefined => {
    const { currentCourseId, programId } = props;
    if (!programId) {
        return;
    }

    const program = programsMap.get(programId);

    if (!program) {
        return;
    }

    const courses = program.courses.reduce((prev, courseId) => {
        const courseGetter = coursesMap.get(courseId);

        if (!courseGetter) {
            return prev;
        }

        const courseDetails = courseGetter();

        const data: CoursesListSliderProps_Courses = {
            id: courseId,
            title: courseDetails.title,
            description: courseDetails.description
                ? parseMarkdownToHTML(courseDetails.description)
                : undefined,
            currentCourse: courseId === currentCourseId,
            totalLessons: courseDetails.curriculum.reduce(
                (prev, lesson) => (lesson.classesCountable ? prev + 1 : prev),
                0,
            ),
        };

        prev.push(data);
        return prev;
    }, [] as CoursesListSliderProps_Courses[]);

    return courses;
};

const getCourse = (courseId: CourseIds) => {
    const courseGetter = coursesMap.get(courseId);

    if (!courseGetter) {
        error(404, {
            message: "Not found",
        });
    }

    const course = courseGetter();

    const hardcodedWhoShouldJoin = [
        "Các bạn học sinh THPT & Trung cấp nghề",
        "Các bạn sinh viên Cao Đẳng & Đại Học",
        "Người đi làm trong mọi lĩnh vực & ngành nghề",
    ];

    course.whoShouldJoin = [...hardcodedWhoShouldJoin, ...course.whoShouldJoin];
    if (course.description) {
        course.description = parseMarkdownToHTML(course.description);
    }
    if (course.descriptionMore) {
        course.descriptionMore = parseMarkdownToHTML(course.descriptionMore);
    }

    for (let i = 0; i < course.learningOutcomes.length; i++) {
        course.learningOutcomes[i] = parseMarkdownToHTML(course.learningOutcomes[i]);
    }

    for (let i = 0; i < course.whoShouldJoin.length; i++) {
        course.whoShouldJoin[i] = parseMarkdownToHTML(course.whoShouldJoin[i]);
    }

    return course;
};

const courseFAQ = () => {
    const faqs = dataFAQs();

    const filteredFAQs = faqs.filter((faq) => faq.show?.includes(FAQShowLocation.course));

    return filteredFAQs;
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
        (prev, courseId, idx): HeroRoadmapCourse[] => {
            const courseGetter = coursesMap.get(courseId);
            if (!courseGetter) {
                return prev;
            }

            const course = courseGetter();

            const heroCourse: HeroRoadmapCourse = {
                id: course.id,
                shortTitle: course.shortTitle,
                title: course.title,
                totalStars: idx,
            };
            prev.push(heroCourse);
            return prev;
        },

        [] as HeroRoadmapCourse[],
    );

    return res;
};
