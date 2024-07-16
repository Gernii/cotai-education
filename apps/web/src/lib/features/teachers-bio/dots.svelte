<script lang="ts">
    import { page } from "$app/stores";

    import { cx } from "cva";

    import { getSliderRefsContext } from "./context";

    import type { TeacherBioProps } from "$lib/datas/teachers-bio/types";

    let sliderRefsContext = getSliderRefsContext();

    $: teachersBio = $page.data.teachersBio as TeacherBioProps[];

    $: currentReview = sliderRefsContext.currentReview;
</script>

<div class="flex w-full justify-center gap-2 py-2">
    {#each [...Array(teachersBio.length)] as _, idx}
        <button
            class={cx("btn btn-circle  btn-xs", {
                "btn-primary": $currentReview === idx,
                "bg-base-300 dark:bg-base-100": $currentReview !== idx,
            })}
            on:click={() => sliderRefsContext.onChangeSlide(idx)}
            aria-label={`${idx + 1}`}
            title={`${idx + 1}`}
        />
    {/each}
</div>
