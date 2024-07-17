<script lang="ts">
    import type { HTMLAnchorAttributes } from "svelte/elements";
    import { twMerge } from "tailwind-merge";

    import { scrollTo } from "$lib/libs/svelte-scrolling";

    interface $$Props extends HTMLAnchorAttributes {}

    let className: $$Props["class"] = undefined;

    export let href: $$Props["href"] = undefined;
    export { className as class };

    $: classNames = twMerge(
        "btn btn-ghost flex-nowrap justify-start uppercase",
        className,
    );
</script>

{#if href}
    {#if href.startsWith("#")}
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class={classNames} use:scrollTo={href.replace("#", "")}>
            <slot />
        </a>
    {:else}
        <a class={classNames} {href} {...$$restProps}>
            <slot />
        </a>
    {/if}
{/if}
