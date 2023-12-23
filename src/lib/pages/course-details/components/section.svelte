<script lang="ts">
	import { page } from '$app/stores';

	import type { CourseDetailsPageDataProps } from '../types';

	import Component from './component.svelte';
	$: pd = $page.data as CourseDetailsPageDataProps;
	$: components = pd.components;
</script>

{#each components as component}
	<Component {...component} />
{/each}
