<script lang="ts">
    import { page } from "$app/stores";

    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { ContainerContent, Container } from "$lib/components/ui/container";
    import SectionTitle from "$lib/components/ui/section-title/section-title.svelte";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import * as m from "$i18n/messages";

    import CourseCard from "./course-card.svelte";

    import type { CourseProps } from "$lib/datas/courses/types";

    $: courseRoadmap = $page.data.courseRoadmap as CourseProps[];

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
            >
                <SectionTitle id="roadmap">
                    {@html m.lazy_elegant_jannes_support()}
                </SectionTitle>
            </div>
            <ul class="w-full">
                {#each courseRoadmap as course, idx}
                    <CourseCard
                        {...course}
                        {idx}
                        last={idx + 1 === courseRoadmap.length}
                        showRoadMapLine={$isInview}
                    />
                {/each}
            </ul>
        </ContainerContent>
    </Container>
</section>
