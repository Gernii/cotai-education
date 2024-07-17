<script lang="ts">
    import "keen-slider/keen-slider.min.css";

    import { melt, type createTabs } from "@melt-ui/svelte";
    import KeenSlider, { type KeenSliderInstance } from "keen-slider";
    import { onDestroy, onMount } from "svelte";
    import { cx } from "cva";

    import * as m from "$i18n/messages";

    import LucideChevronRight from "~icons/lucide/chevron-right";
    import LucideChevronLeft from "~icons/lucide/chevron-left";
    import type { StudentProjectProps } from "$lib/datas/student-projects/types";

    interface $$Props {
        trigger: ReturnType<typeof createTabs>["elements"]["trigger"];
        projects: Pick<StudentProjectProps, "id" | "title" | "className">[];
    }

    export let trigger: $$Props["trigger"];
    export let projects: $$Props["projects"];

    let isSlideRendered = false;

    let carouselRef: HTMLElement | undefined = undefined;
    let carouselSliderRef: KeenSliderInstance | undefined = undefined;

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
                        perView: 2,
                        spacing: 8,
                    },
                },
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

<div class="flex gap-x-1">
    <div class="flex items-center">
        <button
            class="btn btn-square btn-ghost"
            on:click={() => carouselSliderRef?.prev()}
            title={m.such_least_squirrel_promise()}
        >
            <LucideChevronLeft class="size-12" />
        </button>
    </div>

    <div class="keen-slider" bind:this={carouselRef}>
        {#each projects as project, idx}
            <button
                use:melt={$trigger(project.id)}
                class={cx("keen-slider__slide card card-bordered bg-base-200", {
                    hidden: idx !== 0 && !isSlideRendered,
                })}
            >
                <div class="w-full p-4 text-center">
                    <p class="font-semibold">
                        {project.title}
                    </p>
                    <p class="text-sm">
                        {project.className}
                    </p>
                </div>
            </button>
        {/each}
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
