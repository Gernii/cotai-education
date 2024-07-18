import type { HeroRoadmapCourse } from "./types";

export const reorganizeCourses = (courses: HeroRoadmapCourse[]) => {
    const reorganizedCourses = courses.reduce((prev, course) => {
        const treeShakedCourse: HeroRoadmapCourse = {
            id: course.id,
            title: course.title,
            shortTitle: course.shortTitle,
            totalStars: course.totalStars,
        };
        const currList = prev.pop() ?? [];

        if (currList.length < 2) {
            currList.push(treeShakedCourse);
            prev.push(currList);
        } else {
            prev.push(currList, [treeShakedCourse]);
        }
        return prev;
    }, [] as HeroRoadmapCourse[][]);

    return reorganizedCourses;
};
