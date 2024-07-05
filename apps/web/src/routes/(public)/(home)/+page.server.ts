import { error, type LoadEvent } from "@sveltejs/kit";

import type { HomePageDataProps } from "$lib/pages/home-page";
import type {
    HomePageData_Deprecated_CourseProps,
    HomePageData_ProgramProps,
} from "$lib/pages/home-page/types";

import type { CourseResponseProps, ProgramResponseProps } from "$lib/utils/types/data.deprecated";
import { fetcherStaticData } from "$lib/utils/fetcher/static-data";
import { countTotalLessons, programMappingData } from "$lib/utils/data-mapping.server";

export const load = async ({ fetch, parent }): Promise<HomePageDataProps> => {
    const preData = await parent();

    if (!preData.layoutData.programs) {
        error(404, {
            message: "Not found",
        });
    }

    const programIds = preData.layoutData.programs.map((program) => program.id);

    const programs = await fetchPrograms(programIds, fetch);

    const courses = await fetchCourses(programs, fetch);

    return {
        programs,
        courses,
    };
};

const fetchPrograms = async (programIds: string[], fetch: LoadEvent["fetch"]) => {
    const programsRawData = await Promise.all(
        programIds.map((id) =>
            fetcherStaticData<ProgramResponseProps>({
                id,
                path: "programs",
                fetch,
            }),
        ),
    );

    const filteredPrograms = programsRawData.filter(
        (program) => program !== undefined && program?.hidden !== true,
    ) as ProgramResponseProps[];

    const programTreeShaked = filteredPrograms.map((program) => programMappingData(program));

    return programTreeShaked;
};

const fetchCourses = async (programs: HomePageData_ProgramProps[], fetch: LoadEvent["fetch"]) => {
    const courseIds = treeShakingCoursesHighlighted(programs);

    const coursesRawData = await Promise.all(
        courseIds.map((id) =>
            fetcherStaticData<CourseResponseProps>({
                id,
                path: "courses",
                fetch,
            }),
        ),
    );

    const courses = coursesRawData.reduce(
        (prev, course) => {
            if (!course) {
                return prev;
            }

            const courseTreeShaked = treeShakingCourseReponse(course);
            prev[course.id] = courseTreeShaked;
            return prev;
        },
        {} as Record<string, HomePageData_Deprecated_CourseProps>,
    );
    return courses;
};

const treeShakingCourseReponse = (
    course: CourseResponseProps,
): HomePageData_Deprecated_CourseProps => {
    return {
        ...course,
        id: course.id,
        title: course.title,
        thumbnail: course.thumbnail,
        description: course.description,
        totalLessons: countTotalLessons(course.curriculum),
    };
};

const treeShakingCoursesHighlighted = (programs: HomePageData_ProgramProps[]) => {
    const courseIds: string[] = [];

    for (const program of programs) {
        for (const courseId of program.coursesHighlighted) {
            if (courseIds.includes(courseId)) {
                continue;
            }
            courseIds.push(courseId);
        }
    }

    return courseIds;
};
