import { coursesMap } from "$lib/datas/courses/healpers";
import { dataProgramPublicTraining } from "$lib/datas/programs/public-training";
import type { HeroRoadmapCourse } from "$lib/features/hero-roadmap/types";

export const roadmapParser = () => {
    const res = dataProgramPublicTraining.coursesRoadmap.reduce((prev, courseId) => {
        const courseGetter = coursesMap.get(courseId);
        if (!courseGetter) {
            return prev;
        }

        const course = courseGetter();

        const heroRoadmapCourse: HeroRoadmapCourse = {
            id: course.id,
            title: course.title,
            shortTitle: course.shortTitle,
        };

        prev.push(heroRoadmapCourse);
        return prev;
    }, [] as HeroRoadmapCourse[]);

    return res;
};
