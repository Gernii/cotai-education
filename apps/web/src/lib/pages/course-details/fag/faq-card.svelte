<script lang="ts">
    import { createCollapsible, melt } from "@melt-ui/svelte";
    import { cx } from "cva";
    import { slide } from "svelte/transition";

    import LucideMessageCircleQuestion from "~icons/lucide/message-circle-question";
    import type { FAQProps } from "$lib/datas/courses/types";
    import LucideChevronDown from "~icons/lucide/chevron-down";

    interface $$Props extends FAQProps {
        isFirst?: boolean;
    }

    export let title: $$Props["title"] = undefined;
    export let content: $$Props["content"] = undefined;
    export let isFirst: $$Props["isFirst"] = undefined;

    const {
        elements: { root, content: collapsibleContent, trigger },
        states: { open },
    } = createCollapsible({
        forceVisible: true,
        defaultOpen: isFirst ?? false,
    });
</script>

<li
    use:melt={$root}
    class="overflow-hidden rounded-box border border-base-content/5"
>
    <button
        class="flex w-full items-center gap-x-2 bg-base-100 px-6 py-4 pe-4 text-left text-base font-medium sm:gap-x-3 sm:text-lg"
        use:melt={$trigger}
    >
        <LucideMessageCircleQuestion class="size-5 flex-shrink-0 sm:size-6" />
        <span>{title}</span>
        <div class="flex-grow"></div>
        <LucideChevronDown
            class={cx(
                "size-6 flex-shrink-0 transform duration-200 ease-in-out",
                {
                    "rotate-180": $open,
                    "rotate-0": !$open,
                },
            )}
        />
    </button>
    {#if $open}
        <div
            class="bg-base-200"
            use:melt={$collapsibleContent}
            transition:slide
        >
            <div class="prose prose-sm px-8 py-4 sm:px-16">
                {@html content}
            </div>
        </div>
    {/if}
</li>
