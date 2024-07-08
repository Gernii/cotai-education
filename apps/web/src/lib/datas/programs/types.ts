import type { ComponentDataProps } from "$lib/components/ui/component-data";
import type { CourseIds } from "../courses/healpers";

export interface ProgramProps {
    id: string;
    title?: string;
    description?: string;
    rawDescription?: string;
    image?: string;
    hidden?: boolean;
    courses: CourseIds[];
    coursesHighlighted: CourseIds[];
    coursesRoadmap: CourseIds[];
    targets: string[];
    components: ComponentDataProps[];
}
