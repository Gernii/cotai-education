import type { ComponentType } from './constans';

export interface ComponentProps {
	type: ComponentType;
	title?: string;
	image?: string;
	background?: boolean;
	hidden?: boolean;
	description?: string;
}
