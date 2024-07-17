<script lang="ts">
    import "keen-slider/keen-slider.min.css";

    import type { HTMLButtonAttributes } from "svelte/elements";

    import Picture from "$lib/components/ui/picture/picture.svelte";

    import { cn } from "$lib/utils/classname";

    import type { TeacherBioProps } from "$lib/datas/teachers-bio/types";

    interface $$Props
        extends Pick<TeacherBioProps, "avatar">,
            HTMLButtonAttributes {
        active?: boolean;
        teacherName: TeacherBioProps["name"];
        hidden?: boolean;
    }

    export let avatar: $$Props["avatar"];
    export let teacherName: $$Props["teacherName"];
    export let active: $$Props["active"] = undefined;
    export let hidden: $$Props["hidden"] = false;

    $: buttonClasses = cn(
        "keen-slider__slide card card-bordered card-compact flex-grow bg-base-200 transition-colors hover:bg-base-200/80",
        {
            "bg-secondary/70 hover:bg-secondary/60": active,
            hidden: hidden,
        },
    );
</script>

<button
    {...$$restProps}
    on:click
    class={buttonClasses}
    aria-label={teacherName}
    title={teacherName}
>
    <div class="card-body w-full flex-grow items-center">
        <div class="size-20 overflow-hidden rounded-full">
            <Picture meta={avatar} alt={teacherName} />
        </div>
        <p class="flex-grow font-bold">{teacherName}</p>
    </div>
</button>
