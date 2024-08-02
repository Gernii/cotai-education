import { CourseIds } from "$lib/datas/courses/constants";
import type { CurriculumProps } from "$lib/datas/courses/types";

export const countTotalLessons = (curriculum: CurriculumProps[], course: CourseIds) => {
    let totalLessons: number = curriculum.reduce((prev, lesson) => {
        if (lesson.hidden) {
            return prev;
        }

        if (lesson.classesCountable === false) {
            return prev;
        }

        return prev + 1;
    }, 0);

    // TODO: MC4AI has 2 lessons, remove this when MC4AI updates
    if (course === CourseIds.mc4ai) {
        totalLessons += 2;
    }

    return totalLessons;
};
