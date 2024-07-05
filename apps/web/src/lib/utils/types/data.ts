import type { ComponentDataProps } from "$lib/components/ui/component-data";
import type { CourseId } from "$lib/datas/courses/healpers";

import type { SkillTypes } from "$lib/features/skill-icons/constant";

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

export interface CourseProps {
    id: CourseId;
    title?: string;
    price?: number;
    registerUrl?: string;
    embed?: string;
    thumbnail?: string;
    description?: string;
    descriptionRaw?: string;
    experienceRequirement: string[];
    whoShouldJoin: string[];
    skills: SkillTypes[];
    archives: Archive[];
    curriculum: CurriculumProps[];
    components: ComponentDataProps[];
    totalLessons?: number;
}

export interface CurriculumProps {
    title?: string;
    hidden?: boolean;
    classesCountable?: boolean;
    details?: CurriculumProps_Details;
}

export interface CurriculumProps_Details {
    hidden?: boolean;
    content?: string;
}

export interface ReviewProps {
    name: string;
    review: string;
    classNameTitle?: string;
    classNameSubtitle?: string;
    role?: string;
}

export interface ReviewResponseProps {
    name?: string;
    review?: string;
    "class-name-title"?: string;
    "class-name-subtitle"?: string;
    role?: string;
}

export interface Archive {
    title: string;
    description: string;
}
