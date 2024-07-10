<script lang="ts">
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
            <div>
                <h3 class="text-2xl font-bold">{title}</h3>
                <div
                    class="float-none ml-0 block sm:float-right sm:ml-2 lg:hidden"
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
            <div
                class="relative w-full overflow-hidden rounded-box pb-[56.25%]"
            >
                <iframe
                    src={`https://www.youtube.com/embed/${demoId}`}
                    {title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    class="absolute left-0 top-0 h-full w-full object-cover"
                ></iframe>
            </div>
        </div>
    {/if}
</div>
