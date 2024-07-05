import type { Deprecated_CourseProps } from "$lib/utils/types/data.deprecated";

export interface CoursesListProps {
    title: string;
    description?: string;
    courses: CoursesListProps_Courses[];
    limit?: number;
    showMoreUrl?: string;
    showMoreText?: string;
    id?: string;
}

export type CoursesListProps_Courses = Pick<
    Deprecated_CourseProps,
    "id" | "title" | "thumbnail" | "description"
> & {
    totalLessons: number;
};
