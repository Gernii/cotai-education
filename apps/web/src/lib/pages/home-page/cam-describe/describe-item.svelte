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
    class="card"
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isInview)}
    class:opacity-0={!$isInview}
    class:animate-fade-up={$isInview}
>
    <div class="flex-col items-center text-center">
        <div class="flex w-full items-center justify-center">
            <div class="flex aspect-1 w-full items-center justify-center">
                <slot />
            </div>
        </div>
        <h2 class="mt-4 text-3xl font-bold">{title}</h2>
        <div class="flex w-full justify-center">
            <p class="mt-4 text-sm">{description}</p>
        </div>
    </div>
</div>
