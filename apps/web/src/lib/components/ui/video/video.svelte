<script lang="ts">
    import type { HTMLVideoAttributes } from "svelte/elements";
    import { writable } from "svelte/store";

    import LogoPoster from "$lib/assets/logo/CoTAI-Ver0-TM-640.png?imagetools";

    import Picture from "../picture/picture.svelte";

    interface $$Props extends HTMLVideoAttributes {
        src: string;
        poster?: string;
        lazy?: boolean;
    }

    export let src: $$Props["src"];
    export let lazy: $$Props["lazy"] = true;

    $: videoType = src.split(".").pop()?.split("?")[0] || "mp4";

    let isInview = writable(false);
</script>

{#if isInview || !lazy}
    <!-- svelte-ignore a11y-media-has-caption -->
    <video {...$$restProps}>
        <source {src} type={`video/${videoType}`} />
    </video>
{:else}
    <Picture meta={LogoPoster} />
{/if}
