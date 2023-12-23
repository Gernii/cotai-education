import type { ComponentProps } from '$lib/components/ui/component/types';

export interface ProgramProps {
	id: string;
	title?: string;
	description?: string;
	image?: string;
	hidden?: boolean;
	courses: string[];
	'courses-highlighted': string[];
	'courses-roadmap': string[];
	targets: string[];
	components: ComponentProps[];
}

export interface CourseProps {
	id: string;
	title?: string;
	price?: number;
	'register-url'?: string;
	embed?: string;
	thumbnail?: string;
	description?: string;
	curriculum: CurriculumProps[];
	components: ComponentProps[];
}

export interface CurriculumProps {
	title?: string;
	hidden?: boolean;
	classesCountable?: boolean;
	details?: CurriculumProps_Details;
}

export interface CurriculumProps_Details {
	hidden?: boolean;
	content?: string;
}
