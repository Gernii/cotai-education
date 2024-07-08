import { dataCourseDL4AI } from "./DL4AI";
import { dataCourseMC4AI } from "./MC4AI";
import { dataCourseML4AI } from "./ML4AI";
import { dataCoursePython4AI } from "./Python4AI";
import type { CourseProps } from "./types";

export enum CourseIds {
    python4ai = "python4ai",
    mc4ai = "mc4ai",
    ml4ai = "ml4ai",
    dl4ai = "dl4ai",
}

export const coursesMap = new Map<CourseIds, () => CourseProps>([
    [CourseIds.python4ai, dataCoursePython4AI],
    [CourseIds.mc4ai, dataCourseMC4AI],
    [CourseIds.ml4ai, dataCourseML4AI],
    [CourseIds.dl4ai, dataCourseDL4AI],
]);
