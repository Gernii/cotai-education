import type { CourseProps } from '$lib/utils/types/data';

export interface CoursesListProps {
	title: string;
	description?: string;
	courses: CoursesListProps_Courses[];
	limit?: number;
	showMoreUrl?: string;
	showMoreText?: string;
}

export type CoursesListProps_Courses = Pick<
	CourseProps,
	'id' | 'title' | 'thumbnail' | 'description'
>;
