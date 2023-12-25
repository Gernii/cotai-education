import type { ReviewProps } from '$lib/utils/types/data';

export interface LandingPage_LayoutData {
	programs: LandingPage_LayoutData_ProgramsProps[];
	reviews?: ReviewProps[];
}
export interface LandingPage_LayoutData_ProgramsProps {
	id: string;
	title?: string;
}
