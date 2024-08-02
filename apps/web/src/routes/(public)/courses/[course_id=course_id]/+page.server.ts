import { error } from "@sveltejs/kit";
import type { CourseIds } from "$lib/datas/courses/constants";
import { programsMap } from "$lib/datas/programs/healpers";
import { parseMarkdownToHTML } from "$lib/utils/parse-markdown-to-json.server";
import { dataTeachersBio } from "$lib/datas/teachers-bio/teachers-bio.server";
import { getDataStudentProjects } from "$lib/datas/student-projects/student-projects.server";
import { dataProgramPublicTraining } from "$lib/datas/programs/public-training";
import type { HeroRoadmapCourse } from "$lib/features/hero-roadmap/types";
import { dataFAQs } from "$lib/datas/faq/faq.server";
import { FAQShowLocation } from "$lib/datas/faq/types";
import { getDataCourseUnique } from "$lib/datas/course-unique/course-unique.server";
import type { ProgramIds } from "$lib/datas/programs/constants";
import type { CoursesListSliderProps_Courses } from "$lib/features/courses-list-slider/types";
import { coursesMap } from "$lib/datas/courses/helpers";
import { countTotalLessons } from "$lib/utils/count-total-lessons";
import type { CourseDetailsPageDataProps } from "$lib/pages/course-details/types.js";

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
        course,
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
            totalLessons: countTotalLessons(courseDetails.curriculum),
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

    const faqs = course.faqs?.map((faq) => ({
        title: faq.title,
        content: faq.content ? parseMarkdownToHTML(faq.content) : undefined,
    }));

    const curriculum = course.curriculum?.map((lesson) => {
        const details = lesson.details;

        if (lesson.title) {
            lesson.title = parseMarkdownToHTML(lesson.title);
        }

        if (details?.content) {
            details.content = parseMarkdownToHTML(details.content);
        }

        return {
            ...lesson,
            details,
        };
    });

    const whoShouldJoin = [...hardcodedWhoShouldJoin, ...course.whoShouldJoin].map((item) =>
        parseMarkdownToHTML(item),
    );

    const courseParsed: CourseDetailsPageDataProps = {
        ...course,
        descriptionHTML: course.description ? parseMarkdownToHTML(course.description) : undefined,
        descriptionMore: course.descriptionMore
            ? parseMarkdownToHTML(course.descriptionMore)
            : undefined,
        whoShouldJoin,
        learningOutcomesHTML: course.learningOutcomes.map((item) => parseMarkdownToHTML(item)),
        faqs,
        curriculum,
    };

    return courseParsed;
};

const courseFAQ = () => {
    const faqs = dataFAQs();

    const filteredFAQs = faqs.filter((faq) => faq.show?.includes(FAQShowLocation.course));

    return filteredFAQs;
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
