import { CourseIds } from "./constants";
import { dataCourseDL4AI } from "./dl4ai";
import { dataCourseMC4AI } from "./mc4ai";
import { dataCourseML4AI } from "./ml4ai";
import { dataCoursePython4AI } from "./python4ai";
import type { CourseProps } from "./types";

export const coursesMap = new Map<CourseIds, () => CourseProps>([
    [CourseIds.python4ai, dataCoursePython4AI],
    [CourseIds.mc4ai, dataCourseMC4AI],
    [CourseIds.ml4ai, dataCourseML4AI],
    [CourseIds.dl4ai, dataCourseDL4AI],
]);
