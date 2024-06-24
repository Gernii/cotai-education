import type { CourseProps, ProgramProps } from "$lib/utils/types/data";

export interface ProgramDetailsPageDataProps {
    programDetails: ProgramProps;
    courses: Record<string, CourseProps>;
}
