<script lang="ts">
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { SectionTitle } from "$lib/components/ui/section-title";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import CourseCard from "./course-card.svelte";
    import type { CoursesListProps } from "./types";

    type $$Props = CoursesListProps;

    export let title: $$Props["title"];
    export let description: $$Props["description"] = undefined;
    export let courses: $$Props["courses"];
    export let showMoreUrl: $$Props["showMoreUrl"] = undefined;
    export let showMoreText: $$Props["showMoreText"] = undefined;
    export let id: $$Props["id"] = undefined;

    let isInview = writable(false);
</script>

<div
    class="space-y-6 lg:space-y-10"
    {id}
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isInview)}
>
    {#if title}
        <div
            class="space-y-2 lg:space-y-4"
            class:opacity-0={!$isInview}
            class:animate-fade={$isInview}
        >
            <div
                class:opacity-0={!$isInview}
                class:animate-fade-left={$isInview}
            >
                <SectionTitle paddingBottom={false}>
                    {title}
                </SectionTitle>
            </div>

            <slot name="details-main" />

            {#if description}
                <p>{description}</p>
            {/if}

            <slot name="details-sup" />
        </div>
    {/if}

    <ul
        class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"
        class:opacity-0={!$isInview}
        class:animate-fade-up={$isInview}
    >
        {#each courses as course}
            <CourseCard {...course} />
        {/each}
    </ul>

    {#if showMoreUrl && showMoreText}
        <div class="grid w-full justify-center">
            <a href={showMoreUrl} class="btn btn-neutral btn-wide">
                {showMoreText}
            </a>
        </div>
    {/if}
</div>
