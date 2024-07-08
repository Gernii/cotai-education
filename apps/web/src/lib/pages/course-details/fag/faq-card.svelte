<script lang="ts">
    import { cx } from "cva";
    import { onMount } from "svelte";

    import HeroiconsChevronDown from "~icons/heroicons/chevron-down";
    import { TextContent } from "$lib/features/text-content";
    import type { FAQProps } from "$lib/datas/courses/types";

    interface $$Props extends FAQProps {
        isFirst?: boolean;
    }

    export let title: $$Props["title"] = undefined;
    export let content: $$Props["content"] = undefined;
    export let isFirst: $$Props["isFirst"] = undefined;

    let isContentOpen = false;

    const contentOpenToggle = () => {
        isContentOpen = !isContentOpen;
    };

    onMount(() => {
        if (isFirst) {
            isContentOpen = true;
        }
    });
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
        <span>{title}</span>
        <button
            class="btn btn-square btn-ghost btn-sm"
            on:click={contentOpenToggle}
        >
            <HeroiconsChevronDown class="size-6 stroke-2" />
        </button>
    </div>
    <div class="collapse-content bg-base-200">
        <div class="pt-4">
            <TextContent text={content} />
        </div>
    </div>
</li>
