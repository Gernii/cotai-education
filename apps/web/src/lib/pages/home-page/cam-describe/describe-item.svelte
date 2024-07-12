<script lang="ts">
    import { inview } from "svelte-inview";
    import { writable } from "svelte/store";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    interface $$Props {
        title: string;
        description: string;
    }

    export let title: $$Props["title"];
    export let description: $$Props["description"];

    let isInview = writable(false);
</script>

<div
    class="card card-compact xl:card-normal"
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isInview)}
    class:opacity-0={!$isInview}
    class:animate-fade-up={$isInview}
>
    <div class="card-body flex-col items-center text-center">
        <div
            class="flex aspect-1 w-full items-center justify-center bg-base-100"
        >
            image
        </div>
        <h2 class="mt-4 text-2xl font-bold">{title}</h2>
        <p class="mt-2">{description}</p>
    </div>
</div>
