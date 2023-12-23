<script lang="ts">
	import { page } from '$app/stores';

	import { Component } from '$lib/components/ui/component';

	import type { CourseDetailsPageDataProps } from './types';

	$: pd = $page.data as CourseDetailsPageDataProps;
	$: components = pd.components;
</script>

{#each components as component}
	<Component {...component} />
{/each}
