<script lang="ts">
    import { Picture } from "$lib/components/ui/picture";

    import { coursesThumbnail } from "$lib/utils/courses-thumbnail";

    import * as m from "$i18n/messages";

    import type { CoursesListSliderProps_Courses } from "./types";

    type $$Props = Pick<CoursesListSliderProps_Courses, "id" | "title">;

    export let id: $$Props["id"];
    export let title: $$Props["title"];

    $: courseThumbnail = coursesThumbnail(id);
</script>

<figure class="aspect-thumbnail169">
    {#key id}
        <Picture
            meta={courseThumbnail}
            alt={m.thumbnail({ title })}
            imageClass="w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
    {/key}
</figure>
