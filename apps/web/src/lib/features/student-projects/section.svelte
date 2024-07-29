<script lang="ts">
    import { createTabs, melt } from "@melt-ui/svelte";
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";
    import { onDestroy } from "svelte";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import { useBreakpoints } from "$lib/utils/media-matcher/media-matcher";

    import * as m from "$i18n/messages";

    import ProjectDetails from "./project-details.svelte";
    import ProjectSlider from "./project-slider.svelte";

    import type { StudentProjectProps } from "$lib/datas/student-projects/types";

    interface $$Props {
        projects: StudentProjectProps[];
    }

    export let projects: $$Props["projects"];

    let isInview = writable(false);

    $: breakpoints = useBreakpoints("lg");

    $: mediaMatcher = breakpoints.match;

    $: tabs = createTabs({
        orientation: "vertical",
        defaultValue: projects[0].id,
    });

    $: root = tabs.elements.root;
    $: list = tabs.elements.list;
    $: content = tabs.elements.content;
    $: trigger = tabs.elements.trigger;

    onDestroy(() => {
        breakpoints.unsubscribe();
    });
</script>

<section
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isInview)}
>
    <Container>
        <ContainerContent class="space-y-8">
            <div
                class="text-center"
                class:opacity-0={!$isInview}
                class:animate-fade-down={$isInview}
            >
                <SectionTitle paddingBottom={false}>
                    {m.lower_stock_squid_nourish()}
                </SectionTitle>
                <p>
                    {m.basic_fuzzy_cat_rush()}
                </p>
            </div>
            <div class:opacity-0={!$isInview} class:animate-fade-up={$isInview}>
                <div
                    use:melt={$root}
                    class="hidden flex-row gap-x-2 gap-y-4 rounded-none lg:flex"
                >
                    <div
                        class="relative w-full flex-shrink-0 flex-row overflow-y-auto lg:flex lg:w-72 lg:flex-col"
                        aria-label="Projects"
                    >
                        <div class="absolute block space-y-2" use:melt={$list}>
                            {#each projects as project}
                                <button
                                    use:melt={$trigger(project.id)}
                                    class="flex w-full items-center justify-between gap-y-1 rounded-box bg-base-200 px-4 py-4 text-left hover:bg-base-200/80"
                                >
                                    <div>
                                        <p class="font-semibold">
                                            {project.title}
                                        </p>
                                        <p class="text-xs">
                                            {project.className}
                                        </p>
                                    </div>
                                </button>
                            {/each}
                        </div>
                    </div>
                    {#each projects as project}
                        <div use:melt={$content(project.id)} class="flex-grow">
                            <ProjectDetails {...project} />
                        </div>
                    {/each}
                </div>
                {#if !$mediaMatcher}
                    <ProjectSlider {projects} />
                {/if}
            </div>
        </ContainerContent>
    </Container>
</section>
