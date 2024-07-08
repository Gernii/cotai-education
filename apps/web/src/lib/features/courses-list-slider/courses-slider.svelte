<script lang="ts">
    import "keen-slider/keen-slider.min.css";

    import KeenSlider, { type KeenSliderInstance } from "keen-slider";
    import { onDestroy, onMount } from "svelte";
    import { cx } from "cva";

    import * as m from "$i18n/messages";

    import type { CoursesListSliderProps } from "./types";
    import CourseCard from "./course-card.svelte";

    import LucideChevronRight from "~icons/lucide/chevron-right";
    import LucideChevronLeft from "~icons/lucide/chevron-left";

    interface $$Props {
        courses: CoursesListSliderProps["courses"];
    }

    export let courses: $$Props["courses"];

    let carouselRef: HTMLElement | undefined = undefined;
    let carouselSliderRef: KeenSliderInstance | undefined = undefined;

    let isSlideRendered = false;

    let currentReview = 0;

    const onChangeSlide = (idx: number) => {
        carouselSliderRef?.moveToIdx(idx);
    };

    onMount(() => {
        if (carouselRef === undefined) return;
        const slider = new KeenSlider(carouselRef, {
            loop: true,
            slides: {
                origin: "auto",
                perView: 1,
                spacing: 16,
            },
            breakpoints: {
                "(min-width: 640px)": {
                    slides: {
                        origin: "auto",
                        perView: 2,
                        spacing: 16,
                    },
                },
                "(min-width: 1024px)": {
                    slides: {
                        origin: "auto",
                        perView: 3,
                        spacing: 16,
                    },
                },
            },
            detailsChanged: (s) => {
                currentReview = s.track.details.rel;
            },
            created: () => {
                isSlideRendered = true;
            },
        });

        carouselSliderRef = slider;
    });

    onDestroy(() => {
        carouselSliderRef?.destroy();
    });
</script>

<div class="flex gap-x-2">
    <div class="flex items-center">
        <button
            class="btn btn-square btn-ghost"
            on:click={() => carouselSliderRef?.prev()}
            title={m.such_least_squirrel_promise()}
        >
            <LucideChevronLeft class="size-12" />
        </button>
    </div>
    <div class="overflow-x-hidden">
        <div class="keen-slider" bind:this={carouselRef}>
            {#each courses as course, idx}
                <div
                    class={cx(
                        "keen-slider__slide overflow-hidden rounded-box",
                        {
                            hidden: idx > 2 && !isSlideRendered,
                        },
                    )}
                >
                    <CourseCard {...course} />
                </div>
            {/each}
        </div>
        <div class="flex w-full justify-center gap-2 py-2">
            {#each [...Array(courses.length)] as _, idx}
                <button
                    class={cx("btn btn-circle  btn-xs", {
                        "btn-primary": currentReview === idx,
                        "bg-base-300 dark:bg-base-100": currentReview !== idx,
                    })}
                    on:click={() => onChangeSlide(idx)}
                    aria-label={`${idx + 1}`}
                    title={`${idx + 1}`}
                />
            {/each}
        </div>
    </div>
    <div class="flex items-center">
        <button
            class="btn btn-square btn-ghost"
            on:click={() => carouselSliderRef?.next()}
            title={m.mushy_least_clownfish_bask()}
        >
            <LucideChevronRight class="size-12" />
        </button>
    </div>
</div>
