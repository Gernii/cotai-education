<script lang="ts">
    import { cx } from "cva";
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Picture } from "$lib/components/ui/picture";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";
    import { scrollRef } from "$lib/libs/svelte-scrolling";

    import { coursesThumbnail } from "$lib/utils/courses-thumbnail";
    import { routerPath } from "$lib/utils/constants";
    import { countTotalLessons } from "$lib/utils/count-total-lessons";

    import * as m from "$i18n/messages";

    import LucideNetwork from "~icons/lucide/network";
    import type { CourseProps } from "$lib/datas/courses/types";
    import HeroiconsClock from "~icons/heroicons/clock";
    import HeroiconsChevronRight16Solid from "~icons/heroicons/chevron-right-16-solid";
    import { courseStudyType } from "$lib/datas/courses/constants";
    import LucideMonitorPlay from "~icons/lucide/monitor-play";
    import { ReadMoreCustom } from "$lib/features/read-more-custom";
    interface $$Props extends CourseProps {
        idx: number;
        last: boolean;
        showRoadMapLine: boolean;
    }

    export let title: $$Props["title"];
    export let curriculum: $$Props["curriculum"] = [];
    export let description: $$Props["description"] = undefined;
    export let descriptionMore: $$Props["descriptionMore"] = undefined;
    export let id: $$Props["id"];
    export let idx: $$Props["idx"];
    export let last: $$Props["last"];
    export let studyTypes: $$Props["studyTypes"] = [];
    export let showRoadMapLine: $$Props["showRoadMapLine"];

    let isInview = writable(false);

    $: totalSessions = countTotalLessons(curriculum, id);

    $: courseThumbnail = coursesThumbnail(id);

    $: courseUrl = routerPath.courseId(id);
</script>

{#if title}
    <li
        use:scrollRef={id}
        class="flex gap-x-1 sm:gap-x-4"
        use:inview={inviewCommonOptions}
        on:inview_enter={onInViewEnter(isInview)}
        class:opacity-0={!showRoadMapLine}
        class:animate-fade={showRoadMapLine}
    >
        <div class="relative flex w-7 flex-col items-center sm:w-14">
            <div
                class="absolute top-4 flex size-6 items-center justify-center rounded-full bg-base-200 sm:size-12"
            >
                <div class="size-3 rounded-full bg-primary sm:size-6"></div>
            </div>
            <div
                class={cx("w-1 bg-base-200 sm:w-2", {
                    "mt-4 h-[calc(100%-1rem)]": idx === 0,
                    "h-full": idx !== 0,
                })}
            ></div>
        </div>
        <div
            class={cx(
                "card card-compact w-full border border-base-content/5 bg-base-200 shadow shadow-base-content/5 sm:card-normal",
                {
                    "mb-4": !last,
                },
            )}
            class:opacity-0={!$isInview}
            class:animate-fade-up={$isInview}
        >
            <div class="card-body items-start">
                <div
                    class={cx("grid w-full grid-cols-1 gap-x-8 gap-y-8", {
                        "lg:grid-cols-2": !!courseThumbnail,
                    })}
                >
                    <div class="flex flex-col gap-y-4 text-start">
                        <div>
                            <p class="font-semibold">
                                {m.programDetails_courseRoadmap()}
                            </p>
                            <h1 class="text-xl font-bold">
                                <a
                                    href={courseUrl}
                                    class="link-hover link hover:text-primary"
                                >
                                    {title}
                                </a>
                            </h1>
                        </div>
                        <div class="flex items-center gap-x-1">
                            <HeroiconsClock class="size-5 stroke-2" />
                            <p>{m.totalSessions({ number: totalSessions })}</p>
                        </div>
                        <ul class="flex flex-wrap gap-x-2 gap-y-2">
                            {#each studyTypes as studyType}
                                <li
                                    class="badge badge-ghost gap-x-1 bg-base-100 px-3 py-4"
                                >
                                    {courseStudyType[studyType].name}
                                    {#if studyType === "online"}
                                        <LucideNetwork
                                            class="size-4 flex-shrink-0 sm:size-5"
                                        />
                                    {:else if studyType === "selfPaced"}
                                        <LucideMonitorPlay
                                            class="size-4 flex-shrink-0 sm:size-5"
                                        />
                                    {/if}
                                </li>
                            {/each}
                        </ul>
                        <hr class="h-1 w-12 border-0 bg-secondary" />
                        {#if description}
                            <ReadMoreCustom
                                textContent={description}
                                textReadmore={descriptionMore}
                            />
                        {/if}

                        <div class="card-actions">
                            <a href={courseUrl} class="btn btn-primary">
                                {m.showDetails()}
                                <HeroiconsChevronRight16Solid
                                    class="size-4 stroke-2"
                                />
                            </a>
                        </div>
                    </div>
                    {#if courseThumbnail}
                        <div class="self-center">
                            <div class="overflow-hidden rounded-box">
                                <figure>
                                    <Picture
                                        meta={courseThumbnail}
                                        alt={m.thumbnail({
                                            title: title ?? "",
                                        })}
                                        imageClass="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </figure>
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </li>
{/if}
