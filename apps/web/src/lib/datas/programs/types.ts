import type { ComponentDataProps } from "$lib/components/ui/component-data";
import type { CourseId } from "../courses/healpers";

export interface ProgramProps {
    id: string;
    title?: string;
    description?: string;
    rawDescription?: string;
    image?: string;
    hidden?: boolean;
    courses: CourseId[];
    coursesHighlighted: CourseId[];
    coursesRoadmap: CourseId[];
    targets: string[];
    components: ComponentDataProps[];
}
