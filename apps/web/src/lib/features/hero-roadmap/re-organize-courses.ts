import type { HeroRoadmapCourse } from "./types";

export const reorganizeCourses = (courses: HeroRoadmapCourse[]) => {
    const reorganizedCourses = courses.reduce((prev, course) => {
        const currList = prev.pop() ?? [];
        if (currList.length < 2) {
            currList.push(course);
            prev.push(currList);
        } else {
            prev.push(currList, [course]);
        }
        return prev;
    }, [] as HeroRoadmapCourse[][]);

    return reorganizedCourses;
};
