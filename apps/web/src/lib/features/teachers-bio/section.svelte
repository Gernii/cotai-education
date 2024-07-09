<script lang="ts">
    import "keen-slider/keen-slider.min.css";

    import { page } from "$app/stores";

    import KeenSlider, { type KeenSliderInstance } from "keen-slider";
    import { onDestroy, onMount } from "svelte";
    import { cx } from "cva";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";

    import * as m from "$i18n/messages";

    import BioCard from "./bio-card.svelte";
    import ThumbnailCard from "./thumbnail-card.svelte";

    import type { TeacherBioProps } from "$lib/datas/teachers-bio/types";

    $: teachersBio = $page.data.teachersBio as TeacherBioProps[];

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

<section>
    <Container>
        <ContainerContent class="space-y-4">
            <div>
                <SectionTitle>{m.giant_equal_leopard_drum()}</SectionTitle>
            </div>
            <div class="hidden grid-cols-4 gap-x-4 lg:grid">
                {#each teachersBio as bio, idx}
                    <ThumbnailCard
                        avatar={bio.avatar}
                        teacherName={bio.name}
                        on:click={() => onChangeSlide(idx)}
                        aria-label={`${idx + 1}`}
                        title={`${idx + 1}`}
                        active={currentReview === idx}
                    />
                {/each}
            </div>
            <div class="keen-slider" bind:this={carouselRef}>
                {#each teachersBio as bio, idx}
                    <div
                        class={cx(
                            "keen-slider__slide overflow-hidden rounded-box",
                            {
                                hidden: idx !== 0 && !isSlideRendered,
                            },
                        )}
                    >
                        <BioCard {...bio} />
                    </div>
                {/each}
            </div>
            <div class="flex w-full justify-center gap-2 py-2 lg:hidden">
                {#each [...Array(teachersBio.length)] as _, idx}
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
        </ContainerContent>
    </Container>
</section>
