import type { CurriculumProps } from "$lib/datas/courses/types";

export const countTotalLessons = (curriculum: CurriculumProps[]) => {
    const totalLessons: number = curriculum.reduce((prev, lesson) => {
        if (lesson.hidden) {
            return prev;
        }

        if (lesson.classesCountable === false) {
            return prev;
        }

        return prev + 1;
    }, 0);

    return totalLessons;
};
