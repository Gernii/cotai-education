<script lang="ts">
    import { page } from "$app/stores";

    import { Container, ContainerContent } from "$lib/components/ui/container";

    import * as m from "$i18n/messages";

    import type { CourseIds } from "$lib/datas/courses/constants";
    import { coursesMap } from "$lib/datas/courses/healpers";
    import {
        CoursesListSlider,
        type CoursesListSliderProps_Courses,
    } from "$lib/features/courses-list-slider";
    import type { CourseProps } from "$lib/datas/courses/types";

    $: courseDetails = $page.data.course as CourseProps;

    $: programCourses = $page.data.programCourses as CourseIds[] | undefined;

    $: courses = programCourses?.reduce((prev, courseId) => {
        const courseGetter = coursesMap.get(courseId);

        if (!courseGetter) {
            return prev;
        }

        const course = courseGetter();

        const courseListMapped: CoursesListSliderProps_Courses = {
            id: course.id,
            title: course.title,
            description: course.description,
            currentCourse: courseId === courseDetails.id,
            totalLessons: course.curriculum.reduce(
                (prev, lesson) => (lesson.classesCountable ? prev + 1 : prev),
                0,
            ),
        };

        prev.push(courseListMapped);

        return prev;
    }, [] as CoursesListSliderProps_Courses[]);
</script>

{#if courses}
    <section>
        <Container>
            <ContainerContent>
                <CoursesListSlider
                    {courses}
                    title={m.smart_raw_jurgen_enrich()}
                />
            </ContainerContent>
        </Container>
    </section>
{/if}
