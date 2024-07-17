<script lang="ts">
    import { createCollapsible, melt } from "@melt-ui/svelte";
    import { slide } from "svelte/transition";

    import HeroiconsChevronDown16Solid from "~icons/heroicons/chevron-down-16-solid";

    interface $$Props {
        title: string;
    }

    export let title: $$Props["title"];

    const {
        elements: { root, content, trigger },
        states: { open },
    } = createCollapsible();
</script>

<div class="rounded-btn" use:melt={$root}>
    <button
        class="btn btn-ghost w-full flex-nowrap justify-between"
        use:melt={$trigger}
    >
        <span class="whitespace-nowrap uppercase">{title}</span>
        <HeroiconsChevronDown16Solid class="size-4" />
    </button>
    {#if $open}
        <div use:melt={$content} transition:slide>
            <slot />
        </div>
    {/if}
</div>
