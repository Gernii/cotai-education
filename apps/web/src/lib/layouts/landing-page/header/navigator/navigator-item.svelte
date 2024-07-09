<script lang="ts">
    import type { HTMLAnchorAttributes } from "svelte/elements";
    import { twMerge } from "tailwind-merge";

    import { scrollTo } from "$lib/libs/svelte-scrolling";

    interface $$Props extends HTMLAnchorAttributes {}

    let className: $$Props["class"] = undefined;

    export let href: $$Props["href"] = undefined;
    export { className as class };
</script>

{#if href}
    {#if href.startsWith("#")}
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
            class={twMerge(
                "btn btn-ghost flex-nowrap justify-start",
                className,
            )}
            use:scrollTo={href.replace("#", "")}
        >
            <slot />
        </a>
    {:else}
        <a
            class={twMerge(
                "btn btn-ghost flex-nowrap justify-start",
                className,
            )}
            {href}
            {...$$restProps}
        >
            <slot />
        </a>
    {/if}
{/if}
