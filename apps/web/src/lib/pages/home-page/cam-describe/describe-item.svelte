<script lang="ts">
    import { inview } from "svelte-inview";
    import { writable } from "svelte/store";
    import { cx } from "cva";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    interface $$Props {
        title: string;
        description: string;
        aspectRatio?: boolean;
    }

    export let title: $$Props["title"];
    export let description: $$Props["description"];
    export let aspectRatio: $$Props["aspectRatio"] = true;

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
            <div
                class={cx(
                    "mx-0 flex w-full items-center justify-center sm:mx-28 md:mx-0",
                    {
                        "aspect-none md:aspect-1": !aspectRatio,
                        "aspect-1": aspectRatio,
                    },
                )}
            >
                <slot />
            </div>
        </div>
        <h2 class="mt-4 text-xl font-bold sm:text-2xl md:text-3xl">
            {title}
        </h2>
        <div class="flex w-full justify-center">
            <p class="mt-4 text-sm md:text-base">{description}</p>
        </div>
    </div>
</div>
