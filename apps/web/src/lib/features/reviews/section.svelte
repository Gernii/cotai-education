<script lang="ts">
    import "keen-slider/keen-slider.min.css";

    import KeenSlider, { type KeenSliderInstance } from "keen-slider";
    import { cx } from "cva";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import SectionTitle from "$lib/components/ui/section-title/section-title.svelte";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import * as m from "$i18n/messages";

    import Review from "./review.svelte";

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
            >
                <SectionTitle>{m.reviewsTitle()}</SectionTitle>
            </div>

            <div
                class="keen-slider"
                bind:this={carouselRef}
                class:opacity-0={!$isInview}
                class:animate-fade-up={$isInview}
            >
                {#each dataReviews as review, idx}
                    <div
                        class={cx("keen-slider__slide", {
                            hidden: idx !== 0 && !isSlideRendered,
                        })}
                    >
                        <Review {...review} />
                    </div>
                {/each}
            </div>

            <div
                class="flex w-full justify-center gap-2 py-2"
                class:opacity-0={!$isInview}
                class:animate-fade={$isInview}
            >
                {#each [...Array(dataReviews.length)] as _, idx}
                    <button
                        class={cx("btn btn-circle  btn-xs", {
                            "btn-primary": currentReview === idx,
                            "bg-base-100": currentReview !== idx,
                        })}
                        on:click={() => onChangeSlide(idx)}
                        aria-label={m.reviewBullet({ idx: idx + 1 })}
                    />
                {/each}
            </div>
        </ContainerContent>
    </Container>
</section>
