<script lang="ts">
	import { page } from '$app/stores';

	import { ComponentData } from '$lib/components/ui/component-data';

	import type { ProgramDetailsPageDataProps } from './types';

	$: pd = $page.data as ProgramDetailsPageDataProps;
	$: components = pd.programDetails.components;
</script>

{#each components as component, idx}
	<ComponentData {...component} {idx} />
{/each}
