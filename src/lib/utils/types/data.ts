import type { ComponentDataProps } from '$lib/components/ui/component-data';

export interface ProgramResponsesProps {
	id: string;
	title?: string;
	description?: string;
	image?: string;
	hidden?: boolean;
	courses: string[];
	'courses-highlighted': string[];
	'courses-roadmap': string[];
	targets: string[];
	components: ComponentDataProps[];
}

export interface ProgramProps {
	id: string;
	title?: string;
	description?: string;
	image?: string;
	hidden?: boolean;
	courses: string[];
	coursesHighlighted: string[];
	coursesRoadmap: string[];
	targets: string[];
	components: ComponentDataProps[];
}

export interface CourseProps {
	id: string;
	title?: string;
	price?: number;
	registerUrl?: string;
	embed?: string;
	thumbnail?: string;
	description?: string;
	curriculum: CurriculumProps[];
	components: ComponentDataProps[];
}

export interface CourseResponsesProps {
	id: string;
	title?: string;
	price?: number;
	'register-url'?: string;
	embed?: string;
	thumbnail?: string;
	description?: string;
	curriculum: CurriculumResponsesProps[];
	components: ComponentDataProps[];
}

export interface CurriculumProps {
	title?: string;
	hidden?: boolean;
	classesCountable?: boolean;
	details?: CurriculumProps_Details;
}

export interface CurriculumResponsesProps {
	title?: string;
	hidden?: boolean;
	'classes-countable'?: boolean;
	details?: CurriculumProps_Details;
}

export interface CurriculumProps_Details {
	hidden?: boolean;
	content?: string;
}

export interface ReviewProps {
	name: string;
	review: string;
	classNameTitle?: string;
	classNameSubtitle?: string;
	role?: string;
}

export interface ReviewResponseProps {
	name?: string;
	review?: string;
	'class-name-title'?: string;
	'class-name-subtitle'?: string;
	role?: string;
}
