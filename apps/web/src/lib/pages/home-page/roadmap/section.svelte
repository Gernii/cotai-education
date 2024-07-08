<script lang="ts">
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { ContainerContent, Container } from "$lib/components/ui/container";
    import SectionTitle from "$lib/components/ui/section-title/section-title.svelte";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import * as m from "$i18n/messages";

    import CourseCard from "./course-card.svelte";

    import { dataProgramPublicTraining } from "$lib/datas/programs/public-training";
    import { coursesMap } from "$lib/datas/courses/healpers";

    let roadmapProgram = dataProgramPublicTraining();

    $: courseIds = roadmapProgram.coursesRoadmap;

    let isInview = writable(false);
</script>

<section
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isInview)}
>
    <Container>
        <ContainerContent>
            <div
                class:opacity-0={!$isInview}
                class:animate-fade-left={$isInview}
                class="w-full sm:w-3/4"
            >
                <SectionTitle id="roadmap">
                    {m.lazy_elegant_jannes_support()}
                </SectionTitle>
            </div>
            <ul class="w-full">
                {#each courseIds as courseId, idx}
                    {@const course = coursesMap.get(courseId)}
                    {#if course}
                        <CourseCard
                            {...course()}
                            {idx}
                            last={idx + 1 === courseId.length}
                        />
                    {/if}
                {/each}
            </ul>
        </ContainerContent>
    </Container>
</section>
