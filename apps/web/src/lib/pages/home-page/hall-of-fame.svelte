<script lang="ts">
    import "keen-slider/keen-slider.min.css";
    import { onDestroy, onMount } from "svelte";
    import KeenSlider, { type KeenSliderInstance } from "keen-slider";
    import { cx } from "cva";
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import AI4ALL2021 from "$lib/assets/images/hall-of-fame/ai4all_2021.jpg?imagetools";
    import MC4AI2021A from "$lib/assets/images/hall-of-fame/mc4ai_2021_a.jpg?imagetools";
    import MC4AI2021 from "$lib/assets/images/hall-of-fame/mc4ai_2021.jpg?imagetools";

    import { ContainerContent, Container } from "$lib/components/ui/container";
    import { Picture } from "$lib/components/ui/picture";
    import { SectionTitle } from "$lib/components/ui/section-title";

    import { autoSwitchSlide } from "$lib/libs/keen-slider/auto-switch-slide";
    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    let images = [AI4ALL2021, MC4AI2021A, MC4AI2021];

    let carouselRef: HTMLElement | undefined = undefined;
    let carouselSliderRef: KeenSliderInstance | undefined = undefined;

    let isSlideRendered = false;

    let currentReview = 0;

    let isInview = writable(false);

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

<section
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isInview)}
>
    <Container>
        <ContainerContent class="flex w-full flex-col items-center gap-y-6">
            <div class="flex flex-col items-center">
                <div
                    class:opacity-0={!$isInview}
                    class:animate-fade-down={$isInview}
                >
                    <SectionTitle paddingBottom={false}>
                        Hall of Fame
                    </SectionTitle>
                </div>
                <p
                    class="w-3/4 text-center"
                    class:opacity-0={!$isInview}
                    class:animate-fade={$isInview}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita placeat, similique modi alias, repudiandae
                    consectetur, corporis est excepturi suscipit numquam id
                    sapiente obcaecati nisi commodi? Incidunt sunt debitis,
                    sapiente hic, provident nemo animi optio enim cum voluptates
                    assumenda temporibus quo amet? Quod molestiae minima nobis
                    debitis ullam amet, magnam quia.
                </p>
            </div>
            <div
                class="w-3/4"
                class:opacity-0={!$isInview}
                class:animate-fade-up={$isInview}
            >
                <div class="keen-slider" bind:this={carouselRef}>
                    {#each images as image, idx}
                        <div
                            class={cx(
                                "keen-slider__slide overflow-hidden rounded-box",
                                {
                                    hidden: idx !== 0 && !isSlideRendered,
                                },
                            )}
                        >
                            <Picture meta={image} />
                        </div>
                    {/each}
                </div>
                <div class="flex w-full justify-center gap-2 py-2">
                    {#each [...Array(images.length)] as _, idx}
                        <button
                            class={cx("btn btn-circle  btn-xs", {
                                "btn-primary": currentReview === idx,
                                "bg-base-300 dark:bg-base-100":
                                    currentReview !== idx,
                            })}
                            on:click={() => onChangeSlide(idx)}
                            aria-label={`${idx + 1}`}
                            title={`${idx + 1}`}
                        />
                    {/each}
                </div>
            </div>
        </ContainerContent>
    </Container>
</section>
