<script lang="ts">
    import { createCollapsible, melt } from "@melt-ui/svelte";
    import { cx } from "cva";
    import { slide } from "svelte/transition";

    import type { CurriculumProps } from "$lib/utils/types/data.deprecated";

    import HeroiconsChevronDown from "~icons/heroicons/chevron-down";
    import { TextContent } from "$lib/features/text-content";

    interface $$Props extends CurriculumProps {
        highlight?: boolean;
        forceOpen?: boolean;
    }

    export let title: $$Props["title"] = undefined;
    export let details: $$Props["details"] = undefined;
    export let highlight: $$Props["highlight"] = undefined;
    export let forceOpen: $$Props["forceOpen"] = undefined;

    $: isContentEnabled = (details && !details.hidden) || $$slots.default;

    const {
        elements: { root, content, trigger },
        states: { open },
    } = createCollapsible({
        forceVisible: true,
        defaultOpen: forceOpen ?? false,
    });
</script>

<li
    use:melt={$root}
    class="overflow-hidden rounded-box border border-base-content/5"
>
    <div
        class="flex items-center justify-between bg-base-100 px-6 py-4 pe-4 text-xl font-medium"
    >
        <span class:text-primary={highlight}>{title}</span>
        {#if isContentEnabled}
            <button
                class="btn btn-square btn-ghost btn-sm"
                use:melt={$trigger}
                aria-label="Xem nội dung"
            >
                <HeroiconsChevronDown
                    class={cx("size-6 transform", {
                        "rotate-180": $open,
                        "rotate-0": !$open,
                    })}
                />
            </button>
        {/if}
    </div>
    {#if isContentEnabled && $open}
        <div class="bg-base-200" use:melt={$content} transition:slide>
            <div class="py-4">
                {#if $$slots.default}
                    <slot />
                {:else if details}
                    <TextContent text={details.content} />
                {/if}
            </div>
        </div>
    {/if}
</li>
