<script lang="ts">
    import { cx } from "cva";

    import * as m from "$i18n/messages";

    import type { SkillTypes } from "./constant";
    import Skills from "./skills.svelte";
    import { getSkillName } from "./get-skill-name";

    interface $$Props {
        skills?: SkillTypes[];
        class?: string;
        title?: boolean;
    }

    let className: $$Props["class"] = undefined;
    export let skills: NonNullable<$$Props["skills"]> = [];
    export let title: NonNullable<$$Props["title"]> = true;
    export { className as class };
</script>

<div class="flex flex-row flex-wrap items-center gap-x-2">
    {#if title}
        <div class="font-semibold">{m.skills()}:</div>
    {/if}
    {#each skills as skill}
        <div
            class="tooltip my-0.5 rounded-full border-4 border-base-200 bg-base-100 p-1.5 transition-colors hover:border-primary"
            data-tip={getSkillName(skill)}
        >
            <Skills {skill} class={cx("size-5", className)} />
        </div>
    {/each}
</div>
