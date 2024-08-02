<script lang="ts">
    import CurriculumCollapsible from "./curriculum-collapsible.svelte";

    import type { CurriculumProps } from "$lib/datas/courses/types";

    interface $$Props extends CurriculumProps {
        forceOpen?: boolean;
    }

    export let title: $$Props["title"] = undefined;
    export let details: $$Props["details"] = undefined;
    export let images: $$Props["images"] = undefined;

    let titleClassnames =
        "flex w-full items-center gap-x-3 bg-base-200 px-4 py-3 text-left text-base font-medium sm:px-6 sm:py-4 sm:text-xl";

    $: isContentEnabled = (details && !details.hidden) ?? !!images;
</script>

<li class="overflow-hidden rounded-box border border-base-content/5">
    {#if isContentEnabled}
        <CurriculumCollapsible
            class={titleClassnames}
            {title}
            {details}
            {images}
            {...$$restProps}
        />
    {:else}
        <div class={titleClassnames}>
            <span class="prose font-semibold">{@html title}</span>
        </div>
    {/if}
</li>
