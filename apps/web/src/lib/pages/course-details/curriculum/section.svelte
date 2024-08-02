<script lang="ts">
    import { page } from "$app/stores";

    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Container } from "$lib/components/ui/container";
    import ContainerContent from "$lib/components/ui/container/container-content.svelte";
    import SectionTitle from "$lib/components/ui/section-title/section-title.svelte";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import * as m from "$i18n/messages";

    import CurriculumCard from "./curriculum-card.svelte";

    import type { CourseProps } from "$lib/datas/courses/types";

    let isInview = writable(false);

    $: course = $page.data.course as CourseProps;

    $: curriculum = course.curriculum;
</script>

{#if curriculum.length > 0}
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
                    <SectionTitle>{m.curriculum()}</SectionTitle>
                </div>

                <ul
                    class="space-y-4"
                    class:opacity-0={!$isInview}
                    class:animate-fade-up={$isInview}
                >
                    {#each curriculum as section, idx (section.title)}
                        <CurriculumCard {...section} forceOpen={idx === 0} />
                    {/each}
                </ul>
            </ContainerContent>
        </Container>
    </section>
{/if}
