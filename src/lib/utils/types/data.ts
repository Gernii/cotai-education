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
}

export interface CurriculumProps {
	title?: string;
	hidden?: boolean;
	classesCountable?: boolean;
}

export interface CurriculumProps_Details {
	hidden?: boolean;
	content?: string;
}

export enum ComponentType {
	'no-image',
	'text-left',
	'text-right'
}

export interface ComponentProps {
	type: ComponentType;
	title?: string;
	image?: string;
	background?: boolean;
	hidden?: boolean;
	description?: string;
}
