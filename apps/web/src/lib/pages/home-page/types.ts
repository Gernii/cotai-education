import type { CourseProps, ProgramProps } from '$lib/utils/types/data';

export interface HomePageDataProps {
	programs: HomePageData_ProgramProps[];
	courses: Record<string, HomePageData_CourseProps>;
}

export type HomePageData_ProgramProps = Pick<
	ProgramProps,
	'id' | 'title' | 'coursesHighlighted' | 'hidden' | 'targets'
>;

export type HomePageData_CourseProps = Pick<
	CourseProps,
	'id' | 'title' | 'thumbnail' | 'description'
> & {
	totalLessons: number;
};
