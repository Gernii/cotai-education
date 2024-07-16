<script lang="ts">
    import { page } from "$app/stores";

    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import * as m from "$i18n/messages";

    import FaqCard from "./faq-card.svelte";

    import type { FAQProps } from "$lib/datas/faq/types";
    import type { CourseProps } from "$lib/datas/courses/types";

    let isInview = writable(false);

    $: course = $page.data.course as CourseProps;
    $: generalFaqs = $page.data.faqs as FAQProps[] | undefined;

    $: courseFaqs = course.faqs;
</script>

{#if courseFaqs || generalFaqs}
    <section
        use:inview={inviewCommonOptions}
        on:inview_enter={onInViewEnter(isInview)}
    >
        <Container>
            <ContainerContent size={8}>
                <div
                    class="text-center"
                    class:opacity-0={!$isInview}
                    class:animate-fade-down={$isInview}
                >
                    <SectionTitle>{m.large_less_scallop_gasp()}</SectionTitle>
                </div>
                <ul
                    class="space-y-1"
                    class:opacity-0={!$isInview}
                    class:animate-fade-up={$isInview}
                >
                    {#if courseFaqs}
                        {#each courseFaqs as faq, idx}
                            <FaqCard {...faq} isFirst={idx === 0} />
                        {/each}
                    {/if}
                    {#if generalFaqs}
                        {#each generalFaqs as faq, idx}
                            <FaqCard {...faq} isFirst={idx === 0} />
                        {/each}
                    {/if}
                </ul>
            </ContainerContent>
        </Container>
    </section>
{/if}
