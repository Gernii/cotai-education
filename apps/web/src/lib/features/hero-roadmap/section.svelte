<script lang="ts">
    import { cx } from "cva";

    import RoadMapItem from "./road-map-item.svelte";
    import type { HeroRoadmapCourse } from "./types";
    import { reorganizeCourses } from "./re-organize-courses";

    import LucideArrowBigRight from "~icons/lucide/arrow-big-right";
    import type { CourseIds } from "$lib/datas/courses/constants";

    interface $$Props {
        courses: HeroRoadmapCourse[];
        isNavigate?: boolean;
        currentCourse?: CourseIds;
    }

    export let courses: $$Props["courses"];
    export let isNavigate: $$Props["isNavigate"] = undefined;
    export let currentCourse: $$Props["currentCourse"] = undefined;

    $: courseArray = reorganizeCourses(courses);
</script>

<div class="space-y-2">
    <!-- <div class="text-center">
        <span class="font-semibold">
            {m.weird_wild_chipmunk_accept()}
        </span>
        <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 323.057 323.057"
            xml:space="preserve"
            class="inline size-8 -rotate-90 -scale-x-100 transform fill-base-content"
        >
            <g>
                <g>
                    <path
                        d="M281.442,256.312c-47.124,59.364-139.536,44.676-160.956-29.376c-1.224-3.672-1.836-7.956-2.448-11.628
c49.572-11.016,97.92-47.124,102.204-90.576c3.672-39.168-36.108-50.796-62.424-28.764
c-31.212,26.316-53.244,64.872-55.08,105.875c-31.824,4.284-63.036-4.284-80.172-35.496
c-28.764-52.631,9.792-123.624,61.2-144.432c5.508-1.836,3.06-10.404-2.448-8.568C10.326,33.544-26.394,132.688,21.954,191.439
c18.972,22.645,49.572,29.988,81.396,26.316c4.284,41.616,36.72,74.664,75.275,87.516c44.676,14.688,85.68-6.731,111.996-41.616
C294.906,258.147,285.725,251.416,281.442,256.312z M144.354,132.688c9.792-13.464,22.644-28.764,39.168-34.272
c15.911-5.508,21.42,16.524,22.031,26.316c0.612,12.24-7.956,23.256-15.912,31.824c-16.523,18.971-44.063,35.496-72.215,42.839
C119.262,175.527,130.89,152.272,144.354,132.688z"
                    />
                    <path
                        d="M315.713,233.668c-17.136,0-34.884,1.224-51.408,5.508c-6.731,1.836-3.672,11.016,3.061,9.792
c13.464-2.448,27.54-1.836,41.004-1.224c-0.612,7.955-1.224,16.523-2.448,24.479c-1.224,6.12-5.508,15.3-1.836,21.42
c1.836,3.061,4.896,3.061,7.956,1.836c7.344-3.06,7.344-15.912,8.568-22.644c1.836-11.017,2.447-21.42,2.447-32.437
C323.057,236.728,319.385,233.668,315.713,233.668z"
                    />
                </g>
            </g>
        </svg>
    </div> -->

    <div class="card bg-base-300">
        <div class="hidden gap-x-1 px-6 py-4 lg:flex">
            {#each courses as course, idx}
                {@const isCourseLast = idx === courses.length - 1}
                <div class="w-full flex-grow">
                    <RoadMapItem
                        title={course.title}
                        id={course.id}
                        shortTitle={course.shortTitle}
                        {isNavigate}
                        {currentCourse}
                        totalStars={course.totalStars}
                    />
                </div>
                {#if !isCourseLast}
                    <div class="flex items-center">
                        <LucideArrowBigRight
                            class="size-6 flex-shrink-0 sm:size-6"
                        />
                    </div>
                {/if}
            {/each}
        </div>
        <div
            class="flex flex-col items-center justify-between gap-x-1 gap-y-2 px-3 py-2 sm:gap-x-4 lg:hidden lg:px-6 lg:py-4"
        >
            {#each courseArray as courses, coursesIdx}
                {@const isCoursesLast = coursesIdx === courseArray.length - 1}
                <div
                    class={cx(
                        "relative flex w-full flex-grow gap-x-1 sm:gap-x-4",
                        {
                            "justify-between": !isCoursesLast,
                            "justify-center": isCoursesLast,
                        },
                    )}
                >
                    {#each courses as course, idx}
                        {@const isCourseLast = idx === courses.length - 1}

                        <div
                            class={cx({
                                "w-1/2": !isCoursesLast,
                                "min-w-[50%]": isCoursesLast,
                            })}
                        >
                            <RoadMapItem
                                title={course.title}
                                id={course.id}
                                shortTitle={course.shortTitle}
                                {isNavigate}
                                {currentCourse}
                                totalStars={course.totalStars}
                            />
                        </div>
                        {#if !isCourseLast}
                            <div class="flex items-center">
                                <LucideArrowBigRight
                                    class="size-6 flex-shrink-0 sm:size-6"
                                />
                            </div>
                        {/if}
                    {/each}
                </div>
            {/each}
        </div>
    </div>
</div>
