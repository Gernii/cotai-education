<script lang="ts">
    import { inview } from "svelte-inview";
    import { writable } from "svelte/store";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    interface $$Props {
        title: string;
    }

    export let title: $$Props["title"];

    let isInview = writable(false);
</script>

<div
    class="w-1/2 px-2 sm:px-10"
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isInview)}
    class:opacity-0={!$isInview}
    class:animate-fade-up={$isInview}
>
    <div class="flex flex-col items-center gap-y-4 text-center">
        <slot name="icon" />
        <p>{title}</p>
    </div>
</div>
