<script lang="ts">
    import { Picture } from "$lib/components/ui/picture";

    import { routingPathcoursesIdDeprecated } from "$lib/utils/routing-path";
    import { type CourseIdDeprecated } from "$lib/utils/constants";
    import { coursesThumbnailDeprecated } from "$lib/utils/courses-thumbnail";

    import * as m from "$i18n/messages";

    import type { CoursesListProps_Courses } from "./types";

    import HeroiconsClock from "~icons/heroicons/clock";

    type $$Props = CoursesListProps_Courses;

    export let id: $$Props["id"];
    export let title: $$Props["title"] = undefined;
    export let description: $$Props["description"] = undefined;
    export let totalLessons: $$Props["totalLessons"] = 0;

    $: courseNavigate = routingPathcoursesIdDeprecated(id);

    $: courseThumbnail = coursesThumbnailDeprecated(id as CourseIdDeprecated);
</script>

{#if title && description}
    <li
        class="group card card-bordered card-compact overflow-hidden border-base-content/5 bg-base-100 shadow shadow-base-content/5 hover:shadow-lg hover:shadow-base-content/5"
    >
        <a href={courseNavigate}>
            <figure class="aspect-thumbnail169">
                {#key id}
                    <Picture
                        meta={courseThumbnail}
                        alt={m.thumbnail({ title: title ?? "" })}
                        imageClass="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                {/key}
            </figure>
        </a>

        <div class="card-body">
            <div>
                <a
                    href={courseNavigate}
                    class="flex-grow-0 text-base font-bold hover:text-primary lg:text-xl"
                    {title}
                >
                    {title}
                </a>
            </div>
            <div class="flex items-center gap-x-1">
                <HeroiconsClock class="size-4" />
                <p>{m.totalSessions({ number: totalLessons })}</p>
            </div>
            <p class="line-clamp-3 flex-none">{description}</p>
        </div>
    </li>
{/if}
