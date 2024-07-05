import type { CourseProps, CourseProps_Archive, ProgramProps } from "$lib/utils/types/data";

export interface HomePageDataProps {
    programs: HomePageData_ProgramProps[];
    courses: Record<string, HomePageData_CourseProps>;
}

export type HomePageData_ProgramProps = ProgramProps;

export type HomePageData_CourseProps = Omit<CourseProps, "archives"> & {
    totalLessons: number;
    archives?: CourseProps_Archive[];
};
