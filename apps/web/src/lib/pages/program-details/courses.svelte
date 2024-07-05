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

    $: courses = pd.programDetails.courses.map((CourseIdDeprecated) => ({
        id: CourseIdDeprecated,
        title: pd.courses[CourseIdDeprecated].title,
        description: pd.courses[CourseIdDeprecated].descriptionRaw,
        thumbnail: pd.courses[CourseIdDeprecated].thumbnail,
        totalLessons: pd.courses[CourseIdDeprecated].totalLessons,
    })) as CoursesListProps_Courses[];
</script>

<Container>
    <ContainerContent>
        <CoursesList title={m.courses()} {courses} id="courses" />
    </ContainerContent>
</Container>
