<script lang="ts">
    import { scrollTo } from "$lib/libs/svelte-scrolling";

    import { routerPath } from "$lib/utils/constants";

    import RoadMapItemInner from "./road-map-item-inner.svelte";
    import type { HeroRoadmapCourse } from "./types";

    import type { CourseIds } from "$lib/datas/courses/constants";

    interface $$Props extends HeroRoadmapCourse {
        active?: boolean;
        isNavigate?: boolean;
        currentCourse?: CourseIds;
    }

    export let id: $$Props["id"];
    export let active: $$Props["active"] = undefined;
    export let title: $$Props["title"] = undefined;
    export let shortTitle: $$Props["shortTitle"] = undefined;
    export let isNavigate: $$Props["isNavigate"] = undefined;
    export let currentCourse: $$Props["currentCourse"] = undefined;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
{#if shortTitle}
    {#if id === currentCourse}
        <div
            class="card pointer-events-none h-full bg-primary text-primary-content"
            {title}
        >
            <RoadMapItemInner {shortTitle} {title} />
        </div>
    {:else if isNavigate}
        <a
            class="card h-full"
            class:bg-base-300={!active}
            class:btn-primary={active}
            {title}
            href={routerPath.courseId(id)}
        >
            <RoadMapItemInner {shortTitle} {title} />
        </a>
    {:else}
        <a
            class="card h-full"
            class:bg-base-300={!active}
            class:btn-primary={active}
            {title}
            use:scrollTo={id}
        >
            <RoadMapItemInner {shortTitle} {title} />
        </a>
    {/if}
{/if}
