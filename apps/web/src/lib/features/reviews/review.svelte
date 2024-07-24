<script lang="ts">
    import { Picture } from "$lib/components/ui/picture";

    import * as m from "$i18n/messages";

    import ReadMore from "../read-more/read-more.svelte";

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

<div class="card-body gap-y-4">
    <div class="flex gap-x-2">
        {#if avatar}
            <div class="size-16 overflow-hidden rounded-box">
                <Picture meta={avatar} alt={name} />
            </div>
        {/if}
        <div>
            <h2 class="text-lg font-bold">{name}</h2>
            {#if classNameTitleI18n}
                <p class="text-sm uppercase">
                    {classNameTitleI18n}
                </p>
            {/if}
        </div>
    </div>

    <div class="flex-grow">
        <p class="italic">
            <ReadMore textContent={`"${review}"`} maxChars={250} />
        </p>
    </div>
</div>
