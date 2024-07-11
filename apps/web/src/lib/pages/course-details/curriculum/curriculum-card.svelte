<script lang="ts">
    import { createCollapsible, melt } from "@melt-ui/svelte";
    import { cx } from "cva";
    import { slide } from "svelte/transition";

    import type { CurriculumProps } from "$lib/utils/types/data.deprecated";

    import * as m from "$i18n/messages";

    import LucideChevronDown from "~icons/lucide/chevron-down";
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
    <button
        class="flex w-full items-center gap-x-3 bg-base-100 px-6 py-4 pe-4 text-xl font-medium"
        use:melt={$trigger}
        aria-label={m.glad_antsy_gecko_explore()}
    >
        {#if isContentEnabled}
            <LucideChevronDown
                class={cx("size-6 transform duration-200 ease-in-out", {
                    "rotate-180": $open,
                    "rotate-0": !$open,
                })}
            />
        {/if}
        <span class:text-primary={highlight}>{title}</span>
    </button>
    {#if isContentEnabled && $open}
        <div class="bg-base-200" use:melt={$content} transition:slide>
            <div class="px-16 py-4">
                {#if $$slots.default}
                    <slot />
                {:else if details}
                    <TextContent text={details.content} />
                {/if}
            </div>
        </div>
    {/if}
</li>
