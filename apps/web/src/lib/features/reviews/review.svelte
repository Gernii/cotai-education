<script lang="ts">
    import { Picture } from "$lib/components/ui/picture";

    import * as m from "$i18n/messages";

    import type { ReviewProps } from "$lib/datas/reviews/types";

    type $$Props = ReviewProps;

    export let name: $$Props["name"];
    export let review: $$Props["review"];
    export let className: $$Props["className"];
    export let year: $$Props["year"];
    export let avatar: $$Props["avatar"] = undefined;

    $: classNameTitleI18n = className
        ? year
            ? m.reviewCourseNameWithSubtitle({
                  title: className,
                  year,
              })
            : m.reviewCourseName({ title: className })
        : undefined;
</script>

<div
    class="card card-bordered card-compact aspect-4 h-full w-full cursor-grab bg-base-200 active:cursor-grabbing"
>
    <div class="card-body gap-y-4">
        <div class="flex gap-x-2">
            {#if avatar}
                <div class="size-16 overflow-hidden rounded-box">
                    <Picture meta={avatar} />
                </div>
            {/if}
            <div>
                <h2 class="text-xl font-bold">{name}</h2>
                {#if classNameTitleI18n}
                    <p class="text-xs italic">
                        {classNameTitleI18n}
                    </p>
                {/if}
            </div>
        </div>

        <div class="flex-grow">
            <p class="italic">"{review}"</p>
        </div>
    </div>
</div>
