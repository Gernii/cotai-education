<script lang="ts">
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import { routerPath } from "$lib/utils/constants";

    import * as m from "$i18n/messages";

    import FaqCard from "./faq-card.svelte";

    import LucideChevronRight from "~icons/lucide/chevron-right";
    import type { FAQProps } from "$lib/datas/faq/types";

    interface $$Props {
        faqs: FAQProps[];
        external?: boolean;
    }

    export let faqs: $$Props["faqs"];
    export let external: $$Props["external"] = undefined;
    let isInview = writable(false);
</script>

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
                {#if faqs}
                    {#each faqs as faq}
                        <FaqCard {...faq} />
                    {/each}
                {/if}
            </ul>
            {#if external}
                <div class="pr-4 pt-4 text-right">
                    <a
                        href={routerPath.faq}
                        class="link flex items-center justify-end no-underline"
                    >
                        {m.north_close_chipmunk_treasure()}
                        <LucideChevronRight class="inline size-6" />
                    </a>
                </div>
            {/if}
        </ContainerContent>
    </Container>
</section>
