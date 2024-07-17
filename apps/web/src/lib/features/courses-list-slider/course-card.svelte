<script lang="ts">
    import { routerPath } from "$lib/utils/constants";

    import * as m from "$i18n/messages";

    import type { CoursesListSliderProps_Courses } from "./types";
    import Thumbnail from "./thumbnail.svelte";

    import HeroiconsClock from "~icons/heroicons/clock";

    type $$Props = CoursesListSliderProps_Courses;

    export let id: $$Props["id"];
    export let title: $$Props["title"] = undefined;
    export let description: $$Props["description"] = undefined;
    export let totalLessons: $$Props["totalLessons"] = 0;
    export let currentCourse: $$Props["currentCourse"] = undefined;

    $: courseNavigate = routerPath.courseId(id);

    $: isDisabled = checkDisabled(currentCourse);

    const checkDisabled = (configs: $$Props["currentCourse"]) => {
        if (!configs) {
            return false;
        }

        if (typeof configs === "boolean") {
            if (configs) {
                return true;
            }
        }

        if (configs.disabled) {
            return true;
        }

        return false;
    };
</script>

{#if title && description}
    <li
        class="group card card-bordered card-compact m-2 border-base-content/5 bg-base-200 shadow shadow-base-content/5 ring-primary hover:shadow-lg hover:shadow-base-content/5"
        class:ring-4={currentCourse}
    >
        <div class="overflow-hidden rounded-t-box">
            {#if isDisabled}
                <Thumbnail {id} {title} />
            {:else}
                <a href={courseNavigate}>
                    <Thumbnail {id} {title} />
                </a>
            {/if}
        </div>
        <div class="card-body">
            <div>
                {#if isDisabled}
                    <div
                        class="flex-grow-0 text-base font-bold text-primary lg:text-lg"
                        {title}
                    >
                        {title}
                    </div>
                {:else}
                    <a
                        href={courseNavigate}
                        class="flex-grow-0 text-base font-bold hover:text-primary lg:text-lg"
                        {title}
                    >
                        {title}
                    </a>
                {/if}
            </div>
            <div class="flex flex-wrap gap-x-2">
                <div class="flex items-center gap-x-1">
                    <HeroiconsClock class="size-4" />
                    <p>{m.totalSessions({ number: totalLessons })}</p>
                </div>
                {#if currentCourse}
                    <div class="text-secondary">
                        {m.loose_caring_ape_edit()}
                    </div>
                {/if}
            </div>
            <p class="line-clamp-3 flex-none">{description}</p>
        </div>
    </li>
{/if}
