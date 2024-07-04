<script lang="ts">
    import { page } from "$app/stores";

    import { ComponentData } from "$lib/components/ui/component-data";

    import type { CourseDetailsPageDataProps } from "./types";

    $: pd = $page.data as CourseDetailsPageDataProps;
    $: components = pd.components;
</script>

{#each components as component, idx}
    <ComponentData {...component} {idx} />
{/each}
