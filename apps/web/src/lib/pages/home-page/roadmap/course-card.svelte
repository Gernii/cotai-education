<script lang="ts">
    import { cx } from "cva";
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Picture } from "$lib/components/ui/picture";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";
    import { scrollRef } from "$lib/libs/svelte-scrolling";

    import { coursesThumbnail } from "$lib/utils/courses-thumbnail";
    import { routerPath } from "$lib/utils/constants";

    import * as m from "$i18n/messages";

    import LucideNetwork from "~icons/lucide/network";
    import LucideUsers from "~icons/lucide/users";
    import type { CourseProps } from "$lib/datas/courses/types";
    import HeroiconsClock from "~icons/heroicons/clock";
    import HeroiconsChevronRight16Solid from "~icons/heroicons/chevron-right-16-solid";
    import type { CourseIds } from "$lib/datas/courses/constants";
    import { courseStudyType } from "$lib/datas/courses/constants";
    import LucideMonitorPlay from "~icons/lucide/monitor-play";
    interface $$Props extends CourseProps {
        idx: number;
        last: boolean;
    }

    export let title: $$Props["title"] = undefined;
    export let curriculum: $$Props["curriculum"] = [];
    export let description: $$Props["description"] = undefined;
    export let id: $$Props["id"];
    export let idx: $$Props["idx"];
    export let last: $$Props["last"];
    export let studyTypes: $$Props["studyTypes"] = [];

    let isInview = writable(false);

    $: totalSessions = curriculum.filter((c) => c.classesCountable).length;

    $: courseThumbnail = coursesThumbnail(id as CourseIds);

    $: courseUrl = routerPath.courseId(id);
</script>

{#if title}
    <li
        use:scrollRef={id}
        class="flex gap-x-1 sm:gap-x-4"
        use:inview={inviewCommonOptions}
        on:inview_enter={onInViewEnter(isInview)}
    >
        <div class="relative flex w-7 flex-col items-center sm:w-14">
            <div
                class="absolute top-4 flex size-6 items-center justify-center rounded-full bg-secondary sm:size-12"
            >
                <div class="size-3 rounded-full bg-primary sm:size-6"></div>
            </div>
            <div
                class={cx("w-1 bg-secondary sm:w-2", {
                    "mt-4 h-[calc(100%-1rem)]": idx === 0,
                    "h-full": idx !== 0,
                })}
            ></div>
        </div>
        <div
            class={cx(
                "card card-compact w-full border border-base-content/5 bg-base-100 shadow shadow-base-content/5 sm:card-normal",
                {
                    "mb-4": !last,
                },
            )}
            class:opacity-0={!$isInview}
            class:animate-fade-up={$isInview}
        >
            <div class="card-body items-start">
                <div
                    class={cx("grid w-full grid-cols-1 gap-x-16 gap-y-8", {
                        "lg:grid-cols-5": !!courseThumbnail,
                    })}
                >
                    <div
                        class="col-span-1 flex flex-col gap-y-4 text-start lg:col-span-3"
                    >
                        <div>
                            <p class="font-semibold">
                                {m.programDetails_courseRoadmap({
                                    number: idx + 1,
                                })}
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
                                <li class="badge badge-ghost gap-x-1 px-3 py-4">
                                    {courseStudyType[studyType].name}
                                    {#if studyType === "offline"}
                                        <LucideUsers
                                            class="size-4 flex-shrink-0 sm:size-5"
                                        />
                                    {:else if studyType === "online"}
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
                        <div class="prose-sm flex-grow">
                            {@html description}
                        </div>
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
                        <div class="col-span-1 self-center lg:col-span-2">
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
