import type { Deprecated_CourseProps, ProgramProps } from "$lib/utils/types/data.deprecated";

export interface ProgramDetailsPageDataProps {
    programDetails: ProgramProps;
    courses: Record<string, Deprecated_CourseProps>;
}
