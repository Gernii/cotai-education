<script lang="ts">
    import { cx } from "cva";
    import { twMerge } from "tailwind-merge";

    interface $$Props {
        content?: string;
        disabledProse?: boolean;
    }

    export let content: $$Props["content"] = undefined;
    export let disabledProse: $$Props["disabledProse"] = undefined;

    $: isContentEnabled = content || $$slots.default;

    $: classNames = twMerge(
        cx(
            "text-base-content",
            "prose-headings:pb-[.3em] prose-h1:border-b prose-h2:border-b",
            "prose-th:border-l prose-th:border-l-base-content/20 first:prose-th:border-l-0 prose-td:border-l prose-td:border-l-base-content/20 prose-td:px-3 prose-td:py-2 first:prose-td:border-l-0",
            {
                "prose prose-sm": !disabledProse,
            },
        ),
    );
</script>

{#if isContentEnabled}
    <div class={classNames}>
        {#if content}
            {@html content}
        {:else if $$slots.default}
            <slot />
        {/if}
    </div>
{/if}
