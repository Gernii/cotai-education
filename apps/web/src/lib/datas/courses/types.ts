import type { ComponentDataProps } from "$lib/components/ui/component-data";

import type { SkillTypes } from "$lib/features/skill-icons/constant";
import type { FAQProps } from "../faq/types";
import type { ProgramIds } from "../programs/constants";

import type { courseStudyType } from "./constants";
import type { CourseIds } from "./constants";

export interface CourseProps {
    studyTypes: CourseStudyType[];
    id: CourseIds;
    title?: string;
    shortTitle?: string;
    price?: number;
    registerUrl?: string;
    embed?: string;
    thumbnail?: string;
    description?: string;
    descriptionMore?: string;
    descriptionRaw?: string;
    nextCourseId?: CourseIds;
    hideCurriculumImages?: boolean;
    experienceRequirement: string[];
    whoShouldJoin: string[];
    skills: SkillTypes[];
    archives: Archive[];
    curriculum: CurriculumProps[];
    components: ComponentDataProps[];
    totalLessons?: number;
    programId?: ProgramIds;
    certs?: (ImgMeta | ImgMeta[])[];
    faqs?: FAQProps[];
    learningOutcomes: string[];
}

export type CourseStudyType = keyof typeof courseStudyType;

export interface CurriculumProps {
    title?: string;
    hidden?: boolean;
    classesCountable?: boolean;
    details?: CurriculumProps_Details;
    images?: (ImgMeta | ImgMeta[])[];
}

export interface CurriculumProps_Details {
    hidden?: boolean;
    content?: string;
}

export interface Archive {
    title: string;
    description: string;
}
