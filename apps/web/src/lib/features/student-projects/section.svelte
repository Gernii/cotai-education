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
                class="flex flex-col gap-y-4 divide-base-content/40 overflow-hidden rounded-none border border-base-200 lg:flex-row lg:divide-x lg:rounded-box"
            >
                <div
                    use:melt={$list}
                    class="w-full flex-shrink-0 flex-row lg:flex lg:w-72 lg:flex-col"
                    aria-label="Projects"
                >
                    <div class="block lg:hidden">
                        <MobileProjectsSlide {projects} {trigger} />
                    </div>
                    <div class="hidden overflow-y-auto lg:block">
                        {#each projects as project}
                            <button
                                use:melt={$trigger(project.id)}
                                class="flex w-full items-center justify-between gap-y-1 border-b border-base-200 bg-base-100 px-4 py-4 text-left last:border-b-0 hover:bg-base-200"
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
