<script lang="ts">
    import type { HeroRoadmapCourse } from "./types";

    import LucideGraduationCap from "~icons/lucide/graduation-cap";

    type $$Props = Pick<HeroRoadmapCourse, "shortTitle" | "title">;

    export let title: $$Props["title"] = undefined;
    export let shortTitle: $$Props["shortTitle"] = undefined;
</script>

<div class="flex h-full flex-col items-center gap-y-1 p-2">
    <LucideGraduationCap class="size-5 flex-shrink-0 lg:size-6" />
    <p class="flex-grow text-center text-xs font-semibold">
        {title}
    </p>
    <p>
        {shortTitle}
    </p>
</div>
