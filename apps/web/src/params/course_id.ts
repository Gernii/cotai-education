import { coursesMap, type CourseIds } from "$lib/datas/courses/healpers";

export const match = (param: CourseIds) => {
    return coursesMap.has(param);
};
