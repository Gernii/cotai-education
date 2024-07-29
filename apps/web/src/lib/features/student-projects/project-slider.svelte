<script lang="ts">
    import KeenSlider, { type KeenSliderInstance } from "keen-slider";
    import { onDestroy, onMount } from "svelte";
    import { cx } from "cva";

    import ProjectDetails from "./project-details.svelte";

    import type { StudentProjectProps } from "$lib/datas/student-projects/types";

    interface $$Props {
        projects: StudentProjectProps[];
    }

    export let projects: $$Props["projects"];

    let projectsRef: HTMLDivElement | undefined = undefined;
    let projectsSliderRef: KeenSliderInstance | undefined = undefined;

    let isSlideRendered = false;
    let currentReview = 0;

    const onChangeSlide = (idx: number) => {
        projectsSliderRef?.moveToIdx(idx);
    };

    onMount(() => {
        if (projectsRef === undefined) return;
        const slider = new KeenSlider(projectsRef, {
            loop: true,
            slides: {
                origin: "auto",
                perView: 1,
                spacing: 8,
            },

            detailsChanged: (s) => {
                if (s.track.details.rel === null) {
                    return;
                }

                currentReview = s.track.details.rel;
            },
            created: () => {
                isSlideRendered = true;
            },
        });

        projectsSliderRef = slider;
    });

    onDestroy(() => {
        projectsSliderRef?.destroy();
    });
</script>

<div class="keen-slider" bind:this={projectsRef}>
    {#each projects as project, idx}
        <ProjectDetails {...project} hidden={idx !== 0 && !isSlideRendered} />
    {/each}
</div>

<div class="flex w-full justify-center gap-2 py-2">
    {#each projects as project, idx}
        <button
            class={cx("btn btn-circle  btn-xs", {
                "btn-primary": currentReview === idx,
                "bg-base-200": currentReview !== idx,
            })}
            on:click={() => onChangeSlide(idx)}
            aria-label={project.title}
            title={project.title}
        />
    {/each}
</div>
