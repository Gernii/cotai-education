import type {
    Deprecated_CourseProps,
    Deprecated_CourseProps_Archive,
    ProgramProps,
} from "$lib/utils/types/data.deprecated";

export interface HomePageDataProps {
    programs: HomePageData_ProgramProps[];
    courses: Record<string, HomePageData_Deprecated_CourseProps>;
}

export type HomePageData_ProgramProps = ProgramProps;

export type HomePageData_Deprecated_CourseProps = Omit<Deprecated_CourseProps, "archives"> & {
    totalLessons: number;
    archives?: Deprecated_CourseProps_Archive[];
};
