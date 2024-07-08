import type { ComponentDataProps } from "$lib/components/ui/component-data";

import type { SkillTypes } from "$lib/features/skill-icons/constant";
import type { courseStudyType } from "./constants";
import type { CourseIds } from "./healpers";

export interface CourseProps {
    studyTypes: CourseStudyType[];
    id: CourseIds;
    title?: string;
    price?: number;
    registerUrl?: string;
    embed?: string;
    thumbnail?: string;
    description?: string;
    descriptionRaw?: string;
    nextCourseId?: CourseIds;
    experienceRequirement: string[];
    whoShouldJoin: string[];
    skills: SkillTypes[];
    archives: Archive[];
    curriculum: CurriculumProps[];
    components: ComponentDataProps[];
    totalLessons?: number;
    certs?: (ImgMeta | ImgMeta[])[];
}

export type CourseStudyType = keyof typeof courseStudyType;

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

export interface Archive {
    title: string;
    description: string;
}
