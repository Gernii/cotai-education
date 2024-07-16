<script lang="ts">
    import { ContentRenderer } from "$lib/components/ui/content-renderer";
    import { Picture } from "$lib/components/ui/picture";

    import type { TeacherBioProps } from "$lib/datas/teachers-bio/types";

    type $$Props = TeacherBioProps;

    export let avatar: $$Props["avatar"];
    export let name: $$Props["name"];
    export let role: $$Props["role"];
    export let details: $$Props["details"] = undefined;
</script>

<div class="card card-compact h-full w-full bg-base-100 sm:card-normal">
    <div class="card-body flex-col gap-x-8 md:flex-row">
        <div class="w-32 overflow-hidden rounded-box sm:w-44 md:w-72">
            <Picture meta={avatar} alt={name} />
        </div>

        <div class="space-y-4 md:space-y-6">
            <div>
                <h2 class="text-2xl font-bold">
                    {name}
                </h2>
                <p class="italic">{role}</p>
            </div>

            {#if details}
                <div class="card bg-base-200">
                    <div class="p-4">
                        <ContentRenderer content={details} />
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>
