<script>
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import Contents from "./contents.svelte";
    import { setSelectedIdContext } from "./context";
    import Images from "./images.svelte";

    setSelectedIdContext("1");

    let isInview = writable(false);

    let camHighlightedTextClassNames =
        "md:text-5xl text-primary group-hover:brightness-105";
    let camTextClassNames =
        "text-primary opacity-100 transition-opacity duration-300 group-hover:opacity-40";

    // TODO: Refactor section title to use i18n
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
                <SectionTitle>
                    <div class="text-center">
                        <span class="group">
                            <span class={camHighlightedTextClassNames}>
                                C</span
                            ><span class={camTextClassNames}>oTAI</span>
                            <span class={camHighlightedTextClassNames}>
                                A</span
                            ><span class={camTextClassNames}>ccelerated</span>
                            <span class={camHighlightedTextClassNames}>
                                M</span
                            ><span class={camTextClassNames}>astery</span>
                        </span>
                        <p class="inline sm:block lg:inline">
                            là
                            <span class="text-secondary">sự khác biệt</span>
                        </p>
                    </div>
                </SectionTitle>
            </div>
            <div class="grid grid-cols-1 gap-x-8 md:grid-cols-5">
                <div
                    class="col-span-2 items-start"
                    class:opacity-0={!$isInview}
                    class:animate-fade-right={$isInview}
                >
                    {#if $isInview}
                        <Images />
                    {/if}
                </div>
                <div
                    class="col-span-3"
                    class:opacity-0={!$isInview}
                    class:animate-fade-left={$isInview}
                >
                    <Contents />
                </div>
            </div>
        </ContainerContent>
    </Container>
</section>
