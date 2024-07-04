<script lang="ts">
    import { cx } from "cva";
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Picture } from "$lib/components/ui/picture";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import type { CourseProps } from "$lib/utils/types/data";
    import { coursesThumbnail } from "$lib/utils/courses-thumbnail";
    import type { CourseId } from "$lib/utils/constants";

    import * as m from "$i18n/messages";

    import HeroiconsClock from "~icons/heroicons/clock";
    import HeroiconsChevronRight16Solid from "~icons/heroicons/chevron-right-16-solid";
    import { TextContent } from "$lib/features/text-content";

    interface $$Props extends CourseProps {
        idx: number;
        last: boolean;
    }

    export let title: $$Props["title"] = undefined;
    export let curriculum: $$Props["curriculum"] = [];
    export let description: $$Props["description"] = undefined;
    export let id: $$Props["id"];
    export let thumbnail: $$Props["thumbnail"] = undefined;
    export let idx: $$Props["idx"];
    export let last: $$Props["last"];

    let isInview = writable(false);

    $: totalSessions = curriculum.filter((c) => c.classesCountable).length;

    $: courseThumbnail = coursesThumbnail(id as CourseId);
</script>

{#if title}
    <li
        class="flex gap-x-1 sm:gap-x-4"
        use:inview={inviewCommonOptions}
        on:inview_enter={onInViewEnter(isInview)}
    >
        <div class="relative flex w-7 flex-col items-center sm:w-14">
            <div
                class="absolute top-4 flex size-6 items-center justify-center rounded-full bg-primary sm:size-12"
            >
                <div class="size-3 rounded-full bg-secondary sm:size-6"></div>
            </div>
            <div
                class={cx("w-1 bg-primary sm:w-2", {
                    "mt-4 h-[calc(100%-1rem)]": idx === 0,
                    "h-full": idx !== 0,
                })}
            ></div>
        </div>
        <div
            class={cx(
                "card w-full border border-base-content/5 bg-base-100 shadow shadow-base-content/5",
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
                        "lg:grid-cols-5": !!thumbnail,
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
                                    href={`/courses/${id}`}
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
                        <div class="flex-grow">
                            <TextContent text={description} />
                        </div>
                        <div class="card-actions">
                            <a href={`/courses/${id}`} class="btn btn-primary">
                                {m.showDetails()}
                                <HeroiconsChevronRight16Solid
                                    class="size-4 stroke-2"
                                />
                            </a>
                        </div>
                    </div>
                    {#if thumbnail}
                        <div class="col-span-1 self-center lg:col-span-2">
                            <div class="overflow-hidden rounded-box">
                                <figure>
                                    {#key id}
                                        <Picture
                                            meta={courseThumbnail}
                                            alt={m.thumbnail({
                                                title: title ?? "",
                                            })}
                                            imageClass="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    {/key}
                                </figure>
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </li>
{/if}
