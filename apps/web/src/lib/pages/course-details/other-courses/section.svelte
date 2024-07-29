<script lang="ts">
    import { page } from "$app/stores";

    import { Container, ContainerContent } from "$lib/components/ui/container";

    import * as m from "$i18n/messages";

    import {
        CoursesListSlider,
        type CoursesListSliderProps_Courses,
    } from "$lib/features/courses-list-slider";

    $: otherProgramCourses = $page.data.otherProgramCourses as
        | CoursesListSliderProps_Courses[]
        | undefined;
</script>

{#if otherProgramCourses}
    <section>
        <Container>
            <ContainerContent>
                <CoursesListSlider
                    courses={otherProgramCourses}
                    title={m.smart_raw_jurgen_enrich()}
                />
            </ContainerContent>
        </Container>
    </section>
{/if}
