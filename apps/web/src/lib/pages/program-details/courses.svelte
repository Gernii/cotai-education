<script lang="ts">
    import { page } from "$app/stores";

    import Container from "$lib/components/ui/container/container.svelte";
    import ContainerContent from "$lib/components/ui/container/container-content.svelte";

    import * as m from "$i18n/messages";

    import type { ProgramDetailsPageDataProps } from "./types";

    import {
        CoursesList,
        type CoursesListProps_Courses,
    } from "$lib/features/courses-list";

    $: pd = $page.data as ProgramDetailsPageDataProps;

    $: courses = pd.programDetails.courses.map((courseId) => ({
        id: courseId,
        title: pd.courses[courseId].title,
        description: pd.courses[courseId].descriptionRaw,
        thumbnail: pd.courses[courseId].thumbnail,
        totalLessons: pd.courses[courseId].totalLessons,
    })) as CoursesListProps_Courses[];
</script>

<Container>
    <ContainerContent>
        <CoursesList title={m.courses()} {courses} id="courses" />
    </ContainerContent>
</Container>
