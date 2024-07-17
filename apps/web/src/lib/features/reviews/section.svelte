<script lang="ts">
    import "keen-slider/keen-slider.min.css";
    import KeenSlider, { type KeenSliderInstance } from "keen-slider";
    import { cx } from "cva";
    import { onDestroy, onMount } from "svelte";
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import SectionTitle from "$lib/components/ui/section-title/section-title.svelte";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import * as m from "$i18n/messages";

    import Review from "./review.svelte";

    import LucideChevronLeft from "~icons/lucide/chevron-left";
    import LucideChevronRight from "~icons/lucide/chevron-right";
    import { dataReviews } from "$lib/datas/reviews/reviews";

    let currentReview = 0;
    let isSlideRendered = false;

    let carouselRef: HTMLElement | undefined = undefined;
    let carouselSliderRef: KeenSliderInstance | undefined = undefined;

    let isInview = writable(false);

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
                        spacing: 16,
                        perView: 3,
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

<section
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isInview)}
>
    <Container padding="top-bottom">
        <ContainerContent>
            <div
                class:opacity-0={!$isInview}
                class:animate-fade-left={$isInview}
                class="text-center"
            >
                <SectionTitle>{m.reviewsTitle()}</SectionTitle>
            </div>
            <div class="flex flex-col">
                <div class="flex gap-x-2">
                    <div class="hidden items-center md:flex">
                        <button
                            class="btn btn-square btn-ghost"
                            on:click={() => carouselSliderRef?.prev()}
                            title={m.weary_top_swallow_wish()}
                        >
                            <LucideChevronLeft class="size-12" />
                        </button>
                    </div>
                    <div
                        class="keen-slider"
                        bind:this={carouselRef}
                        class:opacity-0={!$isInview}
                        class:animate-fade-up={$isInview}
                    >
                        {#each dataReviews as review, idx}
                            <div
                                class={cx(
                                    "keen-slider__slide card card-bordered card-compact bg-base-200 active:cursor-grabbing",
                                    {
                                        hidden: idx !== 0 && !isSlideRendered,
                                    },
                                )}
                            >
                                <Review {...review} />
                            </div>
                        {/each}
                    </div>
                    <div class="hidden items-center md:flex">
                        <button
                            class="btn btn-square btn-ghost"
                            on:click={() => carouselSliderRef?.next()}
                            title={m.moving_cuddly_ox_aspire()}
                        >
                            <LucideChevronRight class="size-12" />
                        </button>
                    </div>
                </div>
                <div
                    class="flex w-full justify-center gap-2 py-2"
                    class:opacity-0={!$isInview}
                    class:animate-fade={$isInview}
                >
                    {#each [...Array(dataReviews.length)] as _, idx}
                        <button
                            class={cx("btn btn-circle btn-xs", {
                                "btn-primary": currentReview === idx,
                                "bg-base-200": currentReview !== idx,
                            })}
                            on:click={() => onChangeSlide(idx)}
                            aria-label={m.reviewBullet({ idx: idx + 1 })}
                        />
                    {/each}
                </div>
            </div>
        </ContainerContent>
    </Container>
</section>
