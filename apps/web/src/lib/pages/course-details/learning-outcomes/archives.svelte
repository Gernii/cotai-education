<script lang="ts">
    import type { Deprecated_CourseProps_Archive } from "$lib/utils/types/data.deprecated";

    import ArchiveDetails from "./archive-details.svelte";

    interface $$Props {
        archives: Deprecated_CourseProps_Archive[];
    }

    export let archives: $$Props["archives"];
</script>

{#if archives.length === 1}
    <div class="grid grid-cols-1 gap-x-8 lg:grid-cols-4">
        <div class="col-start-1 lg:col-span-2 lg:col-start-2">
            <ArchiveDetails
                description={archives[0].description}
                title={archives[0].title}
            />
        </div>
    </div>
{:else if archives.length === 2}
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ArchiveDetails
            description={archives[0].description}
            title={archives[0].title}
        />
        <ArchiveDetails
            description={archives[1].description}
            title={archives[1].title}
        />
    </div>
{/if}
