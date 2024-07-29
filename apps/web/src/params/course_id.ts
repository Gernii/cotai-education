import type { CourseIds } from "$lib/datas/courses/constants";
import { coursesMap } from "$lib/datas/courses/helpers";

export const match = (param: CourseIds) => {
    return coursesMap.has(param);
};
