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
