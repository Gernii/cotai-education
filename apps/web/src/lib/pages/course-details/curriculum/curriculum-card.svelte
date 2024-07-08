<script lang="ts">
    import { cx } from "cva";

    import type { CurriculumProps } from "$lib/utils/types/data.deprecated";

    import HeroiconsChevronDown from "~icons/heroicons/chevron-down";
    import { TextContent } from "$lib/features/text-content";

    interface $$Props extends CurriculumProps {
        highlight?: boolean;
    }

    export let title: $$Props["title"] = undefined;
    export let details: $$Props["details"] = undefined;
    export let highlight: $$Props["highlight"] = undefined;

    let isContentOpen = true;

    const contentOpenToggle = () => {
        isContentOpen = !isContentOpen;
    };

    $: isContentEnabled = (details && !details.hidden) || $$slots.default;
</script>

<li
    class={cx("collapse border border-base-content/5", {
        "collapse-open": isContentOpen,
        "collapse-close": !isContentOpen,
    })}
>
    <div
        class="collapse-title flex items-center justify-between bg-base-100 pe-4 text-xl font-medium"
    >
        <span class:text-primary={highlight}>{title}</span>
        {#if isContentEnabled}
            <button
                class="btn btn-square btn-ghost btn-sm"
                on:click={contentOpenToggle}
            >
                <HeroiconsChevronDown class="size-6 stroke-2" />
            </button>
        {/if}
    </div>
    {#if isContentEnabled}
        <div class="collapse-content bg-base-200">
            <div class="pt-4">
                {#if $$slots.default}
                    <slot />
                {:else if details}
                    <TextContent text={details.content} />
                {/if}
            </div>
        </div>
    {/if}
</li>
