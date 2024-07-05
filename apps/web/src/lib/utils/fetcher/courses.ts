import type { ServerLoadEvent } from "@sveltejs/kit";
import { fetcherStaticData } from "./static-data";
import type { Deprecated_CourseProps, CourseResponseProps } from "../types/data.deprecated";
import { courseMappingData } from "../data-mapping.server";

export const fetcherCourses = async (courseIds: string[], fetch: ServerLoadEvent["fetch"]) => {
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

            const courseMapped = courseMappingData(course);

            prev[course.id] = courseMapped;
            return prev;
        },
        {} as Record<string, Deprecated_CourseProps>,
    );
    return courses;
};
