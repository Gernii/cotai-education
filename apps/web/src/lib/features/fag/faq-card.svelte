<script lang="ts">
    import { createCollapsible, melt } from "@melt-ui/svelte";
    import { cx } from "cva";
    import { slide } from "svelte/transition";

    import { ContentRenderer } from "$lib/components/ui/content-renderer";

    import LucideMessageCircleQuestion from "~icons/lucide/message-circle-question";
    import LucideChevronDown from "~icons/lucide/chevron-down";
    import type { FAQProps } from "$lib/datas/faq/types";

    interface $$Props extends FAQProps {}

    export let title: $$Props["title"] = undefined;
    export let content: $$Props["content"] = undefined;

    const {
        elements: { root, content: collapsibleContent, trigger },
        states: { open },
    } = createCollapsible({
        forceVisible: true,
    });
</script>

<li
    use:melt={$root}
    class="overflow-hidden rounded-box border border-base-content/5"
>
    <button
        class="flex w-full items-center gap-x-2 bg-base-200 px-6 py-4 pe-4 text-left text-sm font-medium hover:bg-base-200/80 sm:gap-x-3"
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
            class="bg-base-300"
            use:melt={$collapsibleContent}
            transition:slide
        >
            <div class="px-8 py-4 sm:px-16">
                <ContentRenderer {content} />
            </div>
        </div>
    {/if}
</li>
