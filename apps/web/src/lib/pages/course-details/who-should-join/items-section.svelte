<script lang="ts">
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { SectionTitle } from "$lib/components/ui/section-title";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import Item from "./item.svelte";

    interface $$Props {
        items: string[];
        sectionTitle: string;
    }

    export let items: $$Props["items"];
    export let sectionTitle: $$Props["sectionTitle"];

    let isInview = writable(false);
</script>

<div
    class="card max-md:bg-base-200"
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isInview)}
>
    <div class="space-y-4 p-4 text-sm sm:p-8 md:p-0 lg:text-base">
        <SectionTitle paddingBottom={false}>{sectionTitle}</SectionTitle>
        <ul class="space-y-3">
            {#each items as item}
                <Item>
                    {item}
                </Item>
            {/each}
        </ul>
    </div>
</div>
