<script lang="ts">
    import { cx } from "cva";

    import { scrollTo } from "$lib/libs/svelte-scrolling";

    import { routerPath } from "$lib/utils/constants";

    import RoadMapItemInner from "./road-map-item-inner.svelte";
    import type { HeroRoadmapCourse } from "./types";

    import type { CourseIds } from "$lib/datas/courses/constants";

    interface $$Props extends HeroRoadmapCourse {
        active?: boolean;
        isNavigate?: boolean;
        currentCourse?: CourseIds;
        idx: number;
    }

    export let id: $$Props["id"];
    export let active: $$Props["active"] = undefined;
    export let title: $$Props["title"] = undefined;
    export let shortTitle: $$Props["shortTitle"] = undefined;
    export let isNavigate: $$Props["isNavigate"] = undefined;
    export let currentCourse: $$Props["currentCourse"] = undefined;
    export let idx: $$Props["idx"];
</script>

<!-- svelte-ignore a11y-missing-attribute -->
{#if shortTitle}
    {#if id === currentCourse}
        <div class="card h-full bg-primary text-primary-content" {title}>
            <RoadMapItemInner {shortTitle} {title} {idx} />
        </div>
    {:else if isNavigate}
        <a
            class={cx("card h-full", {
                "bg-base-200 hover:bg-base-200/80": !active,
                "btn-primary": active,
            })}
            {title}
            href={routerPath.courseId(id)}
        >
            <RoadMapItemInner {shortTitle} {title} {idx} />
        </a>
    {:else}
        <a
            class={cx("card h-full", {
                "bg-base-200 hover:bg-base-200/80": !active,
                "btn-primary": active,
            })}
            {title}
            use:scrollTo={id}
        >
            <RoadMapItemInner {shortTitle} {title} {idx} />
        </a>
    {/if}
{/if}
