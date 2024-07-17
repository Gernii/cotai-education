<script lang="ts">
    import { page } from "$app/stores";

    import KeenSlider from "keen-slider";
    import { onDestroy, onMount } from "svelte";

    import { getSliderRefsContext } from "./context";
    import BioCard from "./bio-card.svelte";

    import type { TeacherBioProps } from "$lib/datas/teachers-bio/types";

    let sliderRefsContext = getSliderRefsContext();

    let isSlideRendered = false;

    $: teachersBio = $page.data.teachersBio as TeacherBioProps[];

    $: teachersBioRef = sliderRefsContext.teachersBioRef;
    $: teachersBioSliderRef = sliderRefsContext.teachersBioSliderRef;
    $: currentReview = sliderRefsContext.currentReview;

    onMount(() => {
        if ($teachersBioRef === undefined) return;
        const slider = new KeenSlider($teachersBioRef, {
            loop: true,
            slides: {
                origin: "auto",
                perView: 1,
                spacing: 8,
            },
            breakpoints: {
                "(min-width: 1024px)": {
                    detailsChanged: undefined,
                },
            },

            detailsChanged: (s) => {
                currentReview.set(s.track.details.rel);
            },
            created: () => {
                isSlideRendered = true;
            },
        });

        $teachersBioSliderRef = slider;
    });

    onDestroy(() => {
        $teachersBioSliderRef?.destroy();
    });
</script>

<div class="keen-slider" bind:this={$teachersBioRef}>
    {#each teachersBio as bio, idx}
        <BioCard {...bio} hidden={idx !== 0 && !isSlideRendered} />
    {/each}
</div>
