<script lang="ts">
    import { Youtube } from "$lib/components/ui/youtube";

    import ProjectDetailsInfo from "./project-details-info.svelte";

    import type { StudentProjectProps } from "$lib/datas/student-projects/types";

    interface $$Props extends Omit<StudentProjectProps, "id"> {}

    export let title: $$Props["title"];
    export let description: $$Props["description"];
    export let className: $$Props["className"];
    export let members: $$Props["members"];
    export let externalLinks: $$Props["externalLinks"] = undefined;
    export let demoId: $$Props["demoId"] = undefined;
</script>

<div
    class="h-full space-y-4 rounded-box bg-base-100 p-4 lg:rounded-none lg:p-8"
>
    <div class="flex gap-x-8">
        <div class="flex-grow space-y-4">
            <div class="space-y-4">
                <h3 class="text-xl font-bold sm:text-2xl">{title}</h3>
                <div
                    class="float-none ml-0 block w-full sm:float-right sm:ml-2 sm:w-auto lg:hidden"
                >
                    <ProjectDetailsInfo {className} {members} {externalLinks} />
                </div>
            </div>
            <p class="prose prose-sm">
                {@html description}
            </p>
        </div>
        <div class="hidden lg:block">
            <ProjectDetailsInfo {className} {members} {externalLinks} />
        </div>
    </div>
    {#if demoId}
        <div>
            <div class="overflow-hidden rounded-box">
                <Youtube id={demoId} {title} />
            </div>
        </div>
    {/if}
</div>
