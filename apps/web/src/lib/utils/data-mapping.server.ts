import type {
    ComponentDataProps,
    ComponentDataResponseProps,
} from "$lib/components/ui/component-data";

import { parseMarkdownToHTML } from "./parse-markdown-to-json.server";
import type {
    CourseProps,
    CourseProps_Archive,
    CourseResponseProps,
    CurriculumProps,
    CurriculumResponseProps,
    ProgramProps,
    ProgramResponseProps,
} from "./types/data";

export const courseMappingData = (course: CourseResponseProps): CourseProps => {
    const mappedCourse: CourseProps = {
        registerUrl: course["register-url"],
        curriculum: course.curriculum.map((curriculum) => curriculumMappingData(curriculum)),
        description: course.description ? parseMarkdownToHTML(course.description) : undefined,
        descriptionRaw: course.description ?? undefined,
        experienceRequirement: course["experience-requirement"],
        whoShouldJoin: course["who-should-join"],
        archives: archivesParseData(course.archives),
        skills: course.skills,
        components: course.components.map((component) => componentDataMappingData(component)),
        totalLessons: countTotalLessons(course.curriculum),
        id: course.id,
        title: course.title,
        price: course.price,
        thumbnail: course.thumbnail,
        embed: course.embed,
    };

    return mappedCourse;
};

export const curriculumMappingData = (curriculum: CurriculumResponseProps): CurriculumProps => {
    const curriculumDetails: CurriculumProps["details"] = curriculum.details
        ? {
              hidden: curriculum.details.hidden,
              content: curriculum.details.content
                  ? parseMarkdownToHTML(curriculum.details.content)
                  : undefined,
          }
        : undefined;

    const mappedCurriculum: CurriculumProps = {
        classesCountable: curriculum["classes-countable"],
        hidden: curriculum.hidden,
        title: curriculum.title,
        details: curriculumDetails,
    };

    return mappedCurriculum;
};

export const programMappingData = (program: ProgramResponseProps): ProgramProps => {
    const mappedProgram = {
        ...program,
        coursesHighlighted: program["courses-highlighted"],
        coursesRoadmap: program["courses-roadmap"],
        description: program.description ? parseMarkdownToHTML(program.description) : undefined,
        rawDescription: program.description,
        components: program.components.map((component) => componentDataMappingData(component)),
    };

    return mappedProgram;
};

export const componentDataMappingData = (
    componentData: ComponentDataResponseProps,
): ComponentDataProps => {
    const mappedComponentData: ComponentDataProps = {
        type: componentData.type,
        title: componentData.title,
        image: componentData.image,
        background: componentData.background,
        hidden: componentData.hidden,
        description: componentData.description
            ? parseMarkdownToHTML(componentData.description)
            : undefined,
    };

    return mappedComponentData;
};

export const countTotalLessons = (curriculum: CurriculumResponseProps[]) => {
    const totalLessons: number = curriculum.reduce((prev, lesson) => {
        if (!lesson.hidden) {
            return prev + 1;
        }
        return prev;
    }, 0);

    return totalLessons;
};

// in course details, we only need to show 2 archives per row
export const archivesParseData = (
    archives?: CourseProps_Archive[],
): CourseProps_Archive[][] | undefined => {
    if (!archives) {
        return undefined;
    }
    const archivesParsed = archives.reduce((prev, archive) => {
        const lastArchive = prev[prev.length - 1] ?? [];

        if (lastArchive.length < 2 && prev.length > 0) {
            lastArchive.push(archive);
            prev[prev.length - 1] = lastArchive;

            return prev;
        }
        prev.push([archive]);
        return prev;
    }, [] as CourseProps_Archive[][]);

    return archivesParsed;
};
