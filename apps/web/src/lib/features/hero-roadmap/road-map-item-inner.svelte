<script lang="ts">
    import { createTooltip, melt } from "@melt-ui/svelte";
    import { fade } from "svelte/transition";

    import type { HeroRoadmapCourse } from "./types";

    import TeenyiconsStarSmallSolid from "~icons/teenyicons/star-small-solid";

    interface $$Props
        extends Pick<
            HeroRoadmapCourse,
            "shortTitle" | "title" | "totalStars"
        > {}

    export let title: $$Props["title"];
    export let shortTitle: $$Props["shortTitle"] = undefined;
    export let totalStars: $$Props["totalStars"];

    const {
        elements: { trigger, content, arrow },
        states: { open },
    } = createTooltip({
        positioning: {
            placement: "top",
        },
        openDelay: 0,
        closeDelay: 0,
        closeOnPointerDown: false,
        forceVisible: false,
    });
</script>

<div
    class="relative flex h-full flex-col items-center gap-y-1 p-2"
    use:melt={$trigger}
    aria-label={title}
>
    <div class="flex">
        {#each new Array(totalStars + 1) as _}
            <TeenyiconsStarSmallSolid class="size-5 flex-shrink-0 lg:size-5" />
        {/each}
    </div>
    <p class=" flex-grow text-center font-semibold">
        <span class="text-xl">
            {shortTitle}
        </span>

        {#if $open}
            <div
                use:melt={$content}
                transition:fade={{ duration: 100 }}
                class="z-10 rounded-lg bg-base-200 shadow-lg"
            >
                <div use:melt={$arrow} />
                <p class="px-4 py-1">{title}</p>
            </div>
        {/if}
    </p>
</div>
