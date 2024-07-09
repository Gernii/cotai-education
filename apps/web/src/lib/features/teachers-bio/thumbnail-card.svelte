<script lang="ts">
    import "keen-slider/keen-slider.min.css";

    import type { HTMLButtonAttributes } from "svelte/elements";
    import { cx } from "cva";

    import Picture from "$lib/components/ui/picture/picture.svelte";

    import type { TeacherBioProps } from "$lib/datas/teachers-bio/types";

    interface $$Props
        extends Pick<TeacherBioProps, "avatar">,
            HTMLButtonAttributes {
        active?: boolean;
        teacherName: TeacherBioProps["name"];
    }

    export let avatar: $$Props["avatar"];
    export let teacherName: $$Props["teacherName"];
    export let active: $$Props["active"] = undefined;

    $: buttonClasses = cx(
        "card card-bordered card-compact bg-base-100 transition-colors",
        {
            "bg-secondary/5 ring-2 ring-secondary hover:bg-secondary/10":
                active,
        },
    );
</script>

<button on:click class={buttonClasses}>
    <span class="card-body w-full items-center">
        <div class="size-20 overflow-hidden rounded-full">
            <Picture meta={avatar} alt={teacherName} />
        </div>
        <p class="font-bold">{teacherName}</p>
    </span>
</button>
