import { CourseIds } from "./constants";
import { dataCourseDL4CV } from "./dl4cv";
import { dataCourseDL4NLP } from "./dl4nlp";
import { dataCourseMC4AI } from "./mc4ai";
import { dataCourseML4AI } from "./ml4ai";
import { dataCoursePythonAI } from "./pythonai";
import type { CourseProps } from "./types";

export const coursesMap = new Map<CourseIds, () => CourseProps>([
    [CourseIds.pythonai, dataCoursePythonAI],
    [CourseIds.mc4ai, dataCourseMC4AI],
    [CourseIds.ml4ai, dataCourseML4AI],
    [CourseIds.dl4ai, dataCourseDL4CV],
    [CourseIds.dl4cv, dataCourseDL4CV],
    [CourseIds.dl4nlp, dataCourseDL4NLP],
]);
