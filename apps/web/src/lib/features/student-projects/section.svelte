<script lang="ts">
    import { createTabs, melt } from "@melt-ui/svelte";
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import * as m from "$i18n/messages";

    import ProjectDetails from "./project-details.svelte";
    import MobileProjectsSlide from "./mobile-projects-slide.svelte";

    import LucideChevronRight from "~icons/lucide/chevron-right";
    import type { StudentProjectProps } from "$lib/datas/student-projects/types";

    interface $$Props {
        projects: StudentProjectProps[];
    }

    export let projects: $$Props["projects"];

    let isInview = writable(false);

    $: tabs = createTabs({
        orientation: "vertical",
        defaultValue: projects[0].id,
    });

    $: root = tabs.elements.root;
    $: list = tabs.elements.list;
    $: content = tabs.elements.content;
    $: trigger = tabs.elements.trigger;
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
            <div
                class:opacity-0={!$isInview}
                class:animate-fade-up={$isInview}
                use:melt={$root}
                class="flex flex-col gap-x-2 gap-y-4 rounded-none lg:flex-row"
            >
                <div
                    class="relative w-full flex-shrink-0 flex-row overflow-y-auto lg:flex lg:w-72 lg:flex-col"
                    aria-label="Projects"
                >
                    <div class="block lg:hidden">
                        <MobileProjectsSlide {projects} {trigger} {list} />
                    </div>
                    <div
                        class="absolute hidden space-y-2 lg:block"
                        use:melt={$list}
                    >
                        {#each projects as project}
                            <button
                                use:melt={$trigger(project.id)}
                                class="flex w-full items-center justify-between gap-y-1 rounded-box bg-base-200 px-4 py-4 text-left hover:bg-base-200/80"
                            >
                                <div>
                                    <p class="font-semibold">
                                        {project.title}
                                    </p>
                                    <p class="text-xs">{project.className}</p>
                                </div>
                                <LucideChevronRight
                                    class="size-12 flex-shrink-0"
                                />
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
        </ContainerContent>
    </Container>
</section>
