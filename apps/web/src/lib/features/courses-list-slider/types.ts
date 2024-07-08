import type { CourseProps } from "$lib/datas/courses/types";

export interface CoursesListSliderProps {
    title: string;
    description?: string;
    courses: CoursesListSliderProps_Courses[];
    limit?: number;
    showMoreUrl?: string;
    showMoreText?: string;
    id?: string;
}

export type CoursesListSliderProps_Courses = Pick<CourseProps, "id" | "title" | "description"> & {
    totalLessons: number;
    currentCourse?:
        | {
              disabled: boolean;
          }
        | boolean;
};
