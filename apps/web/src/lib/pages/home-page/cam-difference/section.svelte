<script>
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import * as m from "$i18n/messages";

    import Contents from "./contents.svelte";
    import { setSelectedIdContext } from "./context";
    import Images from "./images.svelte";

    setSelectedIdContext("1");

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
                <SectionTitle>
                    <div>
                        <span class="group">
                            <span
                                class="text-5xl text-primary group-hover:brightness-105"
                            >
                                C</span
                            ><span
                                class="text-primary opacity-100 transition-opacity duration-300 group-hover:opacity-40"
                                >oTAI</span
                            >
                            <span
                                class="text-5xl text-primary group-hover:brightness-105"
                            >
                                A</span
                            ><span
                                class="text-primary opacity-100 transition-opacity duration-300 group-hover:opacity-40"
                                >ccelerated</span
                            >
                            <span
                                class="text-5xl text-primary group-hover:brightness-105"
                            >
                                M</span
                            ><span
                                class="text-primary opacity-100 transition-opacity duration-300 group-hover:opacity-40"
                                >astery</span
                            >
                        </span>
                        {@html m.lazy_only_elephant_bask()}
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
