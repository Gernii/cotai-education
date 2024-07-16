<script lang="ts">
    import { createCollapsible, melt } from "@melt-ui/svelte";
    import { cx } from "cva";
    import { slide } from "svelte/transition";

    import { Picture } from "$lib/components/ui/picture";
    import { ContentRenderer } from "$lib/components/ui/content-renderer";

    import * as m from "$i18n/messages";

    import LucideChevronDown from "~icons/lucide/chevron-down";
    import type { CurriculumProps } from "$lib/datas/courses/types";

    interface $$Props extends CurriculumProps {
        highlight?: boolean;
        forceOpen?: boolean;
    }

    export let title: $$Props["title"] = undefined;
    export let details: $$Props["details"] = undefined;
    export let highlight: $$Props["highlight"] = undefined;
    export let forceOpen: $$Props["forceOpen"] = undefined;
    export let images: $$Props["images"] = undefined;

    $: isContentEnabled =
        (details && !details.hidden) || $$slots.default || images;

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
        class="flex w-full items-center gap-x-3 bg-base-100 px-4 py-3 text-left text-base font-medium sm:px-6 sm:py-4 sm:text-xl"
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
            <div
                class={cx("px-4 py-4 sm:pl-8 sm:pr-8 md:pl-12", {
                    "grid grid-cols-1 gap-x-8 md:grid-cols-2": images,
                })}
            >
                <div>
                    {#if $$slots.default}
                        <slot />
                    {:else if details}
                        <div class="prose prose-sm sm:prose-base">
                            <ContentRenderer
                                content={details.content}
                                disabledProse
                            />
                        </div>
                    {/if}
                </div>
                {#if images}
                    <div class="overflow-hidden rounded-box">
                        <Picture meta={images[0]} />
                    </div>
                {/if}
            </div>
        </div>
    {/if}
</li>
