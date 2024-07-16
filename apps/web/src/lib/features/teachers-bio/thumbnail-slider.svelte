<script lang="ts">
    import { page } from "$app/stores";

    import KeenSlider from "keen-slider";
    import { onDestroy, onMount } from "svelte";
    import { cx } from "cva";

    import * as m from "$i18n/messages";

    import { getSliderRefsContext } from "./context";
    import ThumbnailCard from "./thumbnail-card.svelte";

    import LucideChevronRight from "~icons/lucide/chevron-right";
    import LucideChevronLeft from "~icons/lucide/chevron-left";
    import type { TeacherBioProps } from "$lib/datas/teachers-bio/types";

    let sliderRefsContext = getSliderRefsContext();

    let isSlideRendered = false;

    $: teachersBio = $page.data.teachersBio as TeacherBioProps[];

    $: teachersThumbnailsRef = sliderRefsContext.teachersThumbnailsRef;
    $: teachersThumbnailsSliderRef =
        sliderRefsContext.teachersThumbnailsSliderRef;

    $: currentReview = sliderRefsContext.currentReview;

    onMount(() => {
        if ($teachersThumbnailsRef === undefined) return;
        const slider = new KeenSlider($teachersThumbnailsRef, {
            loop: true,
            slides: {
                origin: "auto",
                perView: 1,
                spacing: 8,
            },

            breakpoints: {
                "(min-width: 640px)": {
                    slides: {
                        origin: "auto",
                        spacing: 8,

                        perView: 2,
                    },
                },
                "(min-width: 1024px)": {
                    slides: {
                        origin: "auto",
                        spacing: 8,
                        perView: 5,
                    },
                },
            },

            created: () => {
                isSlideRendered = true;
            },
        });

        $teachersThumbnailsSliderRef = slider;
    });

    onDestroy(() => {
        $teachersThumbnailsSliderRef?.destroy();
    });
</script>

<div class="flex gap-x-1">
    <div class="flex items-center">
        <button
            class="btn btn-square btn-ghost"
            on:click={() => $teachersThumbnailsSliderRef?.prev()}
            title={m.polite_close_squirrel_cry()}
        >
            <LucideChevronLeft class="size-12" />
        </button>
    </div>

    <div class="keen-slider" bind:this={$teachersThumbnailsRef}>
        {#each teachersBio as bio, idx}
            <div
                class={cx(
                    "keen-slider__slide overflow-hidden rounded-box p-1",
                    {
                        hidden: idx !== 0 && !isSlideRendered,
                    },
                )}
            >
                <ThumbnailCard
                    avatar={bio.avatar}
                    teacherName={bio.name}
                    aria-label={`${idx + 1}`}
                    title={`${idx + 1}`}
                    active={$currentReview === idx}
                    on:click={() => sliderRefsContext.onChangeSlide(idx)}
                />
            </div>
        {/each}
    </div>
    <div class="flex items-center">
        <button
            class="btn btn-square btn-ghost"
            on:click={() => $teachersThumbnailsSliderRef?.next()}
            title={m.front_proud_iguana_nourish()}
        >
            <LucideChevronRight class="size-12" />
        </button>
    </div>
</div>
