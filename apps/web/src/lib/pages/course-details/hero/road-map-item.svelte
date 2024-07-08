<script lang="ts">
    import { CourseIds } from "$lib/datas/courses/constants";
    import LucideGraduationCap from "~icons/lucide/graduation-cap";

    interface $$Props {
        active: boolean;
        title: string;
    }

    export let active: $$Props["active"];
    export let title: $$Props["title"];
</script>

<div class="w-1/2">
    <a
        class="btn w-full"
        class:bg-base-300={!active}
        class:btn-primary={active}
        href={!active ? CourseIds.dl4ai : undefined}
    >
        <LucideGraduationCap class="size-4 flex-shrink-0 lg:size-6" />
        <span class="text-sm sm:text-base lg:text-lg">{title}</span>
    </a>
</div>
