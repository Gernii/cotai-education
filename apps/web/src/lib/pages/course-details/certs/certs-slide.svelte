<script lang="ts">
    import "keen-slider/keen-slider.min.css";

    import { page } from "$app/stores";

    import KeenSlider, { type KeenSliderInstance } from "keen-slider";
    import { onDestroy, onMount } from "svelte";
    import { cx } from "cva";

    import { Picture } from "$lib/components/ui/picture";

    import { autoSwitchSlide } from "$lib/libs/keen-slider/auto-switch-slide";

    import * as m from "$i18n/messages";

    import type { CourseProps } from "$lib/datas/courses/types";

    $: course = $page.data.course as CourseProps;

    $: images = $page.data.course.certs as (ImgMeta | ImgMeta[])[];

    let carouselRef: HTMLElement | undefined = undefined;
    let carouselSliderRef: KeenSliderInstance | undefined = undefined;

    let isSlideRendered = false;

    let currentReview = 0;

    const onChangeSlide = (idx: number) => {
        carouselSliderRef?.moveToIdx(idx);
    };

    onMount(() => {
        if (carouselRef === undefined) return;
        const slider = new KeenSlider(
            carouselRef,
            {
                loop: true,
                slides: {
                    origin: "auto",
                    perView: 1,
                    spacing: 15,
                },
                detailsChanged: (s) => {
                    currentReview = s.track.details.rel;
                },
                created: () => {
                    isSlideRendered = true;
                },
            },
            [autoSwitchSlide(5000)],
        );

        carouselSliderRef = slider;
    });

    onDestroy(() => {
        carouselSliderRef?.destroy();
    });
</script>

<div class="keen-slider" bind:this={carouselRef}>
    {#each images as image, idx}
        <div
            class={cx("keen-slider__slide overflow-hidden rounded-box", {
                hidden: idx !== 0 && !isSlideRendered,
            })}
        >
            <Picture
                meta={image}
                alt={course.title
                    ? m.maroon_soft_sheep_jump({
                          title: course.title,
                      })
                    : ""}
            />
        </div>
    {/each}
</div>
<div class="flex w-full justify-center gap-2 py-2">
    {#each [...Array(images.length)] as _, idx}
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
