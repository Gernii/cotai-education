import { dataCourseDL4AI } from "./DL4AI";
import { dataCourseMC4AI } from "./MC4AI";
import { dataCourseML4AI } from "./ML4AI";
import { dataCoursePython4AI } from "./Python4AI";

export const coursesList = ["python4ai", "mc4ai", "ml4ai", "dl4ai"] as const;

export type CourseId = (typeof coursesList)[number];

export const coursesObject = {
    python4ai: dataCoursePython4AI,
    mc4ai: dataCourseMC4AI,
    ml4ai: dataCourseML4AI,
    dl4ai: dataCourseDL4AI,
} satisfies Record<CourseId, () => unknown>;
