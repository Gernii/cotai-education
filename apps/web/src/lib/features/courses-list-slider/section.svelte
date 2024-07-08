<script lang="ts">
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";
    import { cx } from "cva";

    import { SectionTitle } from "$lib/components/ui/section-title";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import type { CoursesListSliderProps } from "./types";
    import CoursesSlider from "./courses-slider.svelte";
    import Courses from "./courses.svelte";

    type $$Props = CoursesListSliderProps;

    export let title: $$Props["title"];
    export let description: $$Props["description"] = undefined;
    export let courses: $$Props["courses"];
    export let showMoreUrl: $$Props["showMoreUrl"] = undefined;
    export let showMoreText: $$Props["showMoreText"] = undefined;
    export let id: $$Props["id"] = undefined;

    let isInview = writable(false);

    $: totalCourses = courses.length;
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

    <div class:opacity-0={!$isInview} class:animate-fade-up={$isInview}>
        <div
            class={cx({
                hidden: totalCourses === 1,
                "block md:hidden": totalCourses === 2,
                "block lg:hidden": totalCourses === 3,
                block: totalCourses > 3,
            })}
        >
            <CoursesSlider {courses} />
        </div>
        <div
            class={cx({
                block: totalCourses === 1,
                "hidden md:block": totalCourses === 2,
                "hidden lg:block": totalCourses === 3,
                hidden: totalCourses > 3,
            })}
        >
            <Courses {courses} />
        </div>
    </div>

    {#if showMoreUrl && showMoreText}
        <div class="grid w-full justify-center">
            <a href={showMoreUrl} class="btn btn-neutral btn-wide">
                {showMoreText}
            </a>
        </div>
    {/if}
</div>
