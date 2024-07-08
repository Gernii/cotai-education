<script lang="ts">
    import "keen-slider/keen-slider.min.css";

    import { cx } from "cva";

    import type { CoursesListSliderProps } from "./types";
    import CourseCard from "./course-card.svelte";

    interface $$Props {
        courses: CoursesListSliderProps["courses"];
    }

    export let courses: $$Props["courses"];

    $: totalCourses = courses.length;

    $: wrapperClasses = cx("gap-x-4", {
        "flex justify-around *:max-w-96": totalCourses <= 2,
        "grid grid-cols-3": totalCourses === 3,
    });
</script>

<div class={wrapperClasses}>
    {#each courses as course}
        <CourseCard {...course} />
    {/each}
</div>
