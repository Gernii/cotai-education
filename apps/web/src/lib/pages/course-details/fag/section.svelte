<script lang="ts">
    import { page } from "$app/stores";

    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import * as m from "$i18n/messages";

    import FaqCard from "./faq-card.svelte";

    import type { CourseProps } from "$lib/datas/courses/types";

    let isInview = writable(false);

    $: course = $page.data.course as CourseProps;

    $: faqs = course.faqs;
</script>

{#if faqs}
    <section
        use:inview={inviewCommonOptions}
        on:inview_enter={onInViewEnter(isInview)}
    >
        <Container>
            <ContainerContent>
                <div
                    class="text-center"
                    class:opacity-0={!$isInview}
                    class:animate-fade-down={$isInview}
                >
                    <SectionTitle>{m.large_less_scallop_gasp()}</SectionTitle>
                </div>
                <ul
                    class="space-y-4"
                    class:opacity-0={!$isInview}
                    class:animate-fade-up={$isInview}
                >
                    {#each faqs as faq, idx}
                        <FaqCard {...faq} isFirst={idx === 0} />
                    {/each}
                </ul>
            </ContainerContent>
        </Container>
    </section>
{/if}
