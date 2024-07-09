<script lang="ts">
    import NavigatorCollapseSidenav from "./navigator-collapse-sidenav.svelte";

    import HeroiconsChevronDown16Solid from "~icons/heroicons/chevron-down-16-solid";

    interface $$Props {
        title: string;
        sidenav?: boolean;
    }

    export let title: $$Props["title"];
    export let sidenav: $$Props["sidenav"] = undefined;
</script>

{#if sidenav}
    <NavigatorCollapseSidenav {title}>
        <slot />
    </NavigatorCollapseSidenav>
{:else}
    <div class="dropdown dropdown-hover">
        <div
            tabindex="0"
            role="button"
            class="btn btn-ghost w-full flex-nowrap"
        >
            <span class="whitespace-nowrap">{title}</span>
            <HeroiconsChevronDown16Solid class="size-4" />
        </div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div
            tabindex="0"
            class="card dropdown-content card-compact z-[1] min-w-[10rem] bg-base-100 shadow shadow-base-content/5"
        >
            <slot />
        </div>
    </div>
{/if}
