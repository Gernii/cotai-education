import type { ReviewProps, ReviewResponseProps } from "$lib/utils/types/data.deprecated";

export interface LandingPage_LayoutData {
    programs: LandingPage_LayoutData_ProgramProps[];
    reviews?: LandingPage_LayoutData_ReviewProps[];
}
export interface LandingPage_LayoutData_ProgramProps {
    id: string;
    title: string;
}

export interface LandingPage_LayoutData_ProgramResponseProps {
    id: string;
    title?: string;
}

export interface LandingPage_LayoutData_ReviewProps extends ReviewProps {}

export interface LandingPage_LayoutData_ReviewResponseProps extends ReviewResponseProps {}
