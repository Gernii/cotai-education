<script lang="ts">
    import { Picture } from "$lib/components/ui/picture";

    import type { TeacherBioProps } from "$lib/datas/teachers-bio/types";

    type $$Props = TeacherBioProps;

    export let avatar: $$Props["avatar"];
    export let name: $$Props["name"];
    export let role: $$Props["role"];
    export let details: $$Props["details"] = undefined;
</script>

<div class="card h-full w-full bg-base-100">
    <div class="card-body flex-col gap-x-8 md:flex-row">
        <div class="w-32 sm:w-44 md:w-72">
            <div class="overflow-hidden rounded-box">
                <Picture meta={avatar} alt={name} />
            </div>
        </div>

        <div class="space-y-4 md:space-y-6">
            <div>
                <h2 class="text-2xl font-bold">
                    {name}
                </h2>
                <p class="italic">{role}</p>
            </div>

            {#if details}
                <p class="prose">{@html details}</p>
            {/if}
        </div>
    </div>
</div>
