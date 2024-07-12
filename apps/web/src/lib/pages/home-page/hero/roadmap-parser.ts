import type { CourseProps } from "$lib/datas/courses/types";
import type { HeroRoadmapCourse } from "$lib/features/hero-roadmap/types";

export const roadmapParser = (courseRoadmap: CourseProps[]) => {
    const res = courseRoadmap.map(
        (course): HeroRoadmapCourse => ({
            id: course.id,
            title: course.title,
            shortTitle: course.shortTitle,
        }),
    );

    return res;
};
