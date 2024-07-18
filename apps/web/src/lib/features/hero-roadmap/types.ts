import type { CourseProps } from "$lib/datas/courses/types";

export interface HeroRoadmapCourse extends Pick<CourseProps, "id" | "title" | "shortTitle"> {
    totalStars: number;
}
