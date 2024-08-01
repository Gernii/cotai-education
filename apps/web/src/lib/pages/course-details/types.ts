import type { CourseProps } from "$lib/datas/courses/types";

export interface CourseDetailsPageDataProps extends CourseProps {
    learningOutcomesHTML: string[];
    descriptionHTML?: string;
}
