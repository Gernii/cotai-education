<script lang="ts">
	import { page } from '$app/stores';

	import type { HomePageDataProps } from '../types';

	import Program from './program.svelte';

	$: pd = $page.data as HomePageDataProps;
	$: courses = pd.courses;
	$: programs = pd.programs;
</script>

{#if programs}
	{#each programs as program (program.id)}
		<Program {...program} coursesDetails={courses} />
	{/each}
{/if}
