<script lang="ts">
	import type { PagesResponse } from '@repo/types-bridge';

	import type { CourseProps } from './types';
	import CourseItem from './course-item.svelte';
	interface $$Props {
		data: Promise<PagesResponse<CourseProps>>;
	}

	export let data: $$Props['data'];
</script>

{#await data}
	<div>hi</div>
{:then coursesPage}
	<ul class="grid grid-cols-6 gap-x-4 gap-y-2">
		{#each coursesPage.data as course}
			<CourseItem {...course} />
		{/each}
	</ul>
{:catch error}
	{error.message}
{/await}
