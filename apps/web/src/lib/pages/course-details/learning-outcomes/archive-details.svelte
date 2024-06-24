<script lang="ts">
    import type { CourseProps_Archive } from "$lib/utils/types/data";

    type $$Props = CourseProps_Archive;

    export let title: $$Props["title"];
    export let description: $$Props["description"];
    import LucideTrophy from "~icons/lucide/trophy";
</script>

<div class="group card bg-base-100 hover:shadow-lg dark:hover:bg-base-200">
    <div class="card-body space-y-4">
        <LucideTrophy class="ml-2 size-8" />
        <h3 class="text-xl font-bold group-hover:text-primary">{title}</h3>
        <p class="text-base-content/80">{description}</p>
    </div>
</div>
