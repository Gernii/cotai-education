import type { CourseProps, ProgramProps } from '$lib/utils/types/data';

export interface HomePageDataProps {
	programs: ProgramProps[];
	courses: Record<string, CourseProps>;
}
