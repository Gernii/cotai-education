<script lang="ts">
	import { SectionTitle } from '$lib/components/ui/section-title';

	import CourseCard from './course-card.svelte';
	import type { CoursesListProps } from './types';

	type $$Props = CoursesListProps;

	export let title: $$Props['title'];
	export let description: $$Props['description'] = undefined;
	export let courses: $$Props['courses'];
	export let showMoreUrl: $$Props['showMoreUrl'] = undefined;
	export let showMoreText: $$Props['showMoreText'] = undefined;
	export let id: $$Props['id'] = undefined;
</script>

<div class="space-y-6 lg:space-y-10" {id}>
	{#if title}
		<div class="space-y-2 lg:space-y-4">
			<SectionTitle paddingBottom={false}>
				{title}
			</SectionTitle>

			<slot name="details-main" />

			{#if description}
				<p>{description}</p>
			{/if}

			<slot name="details-sup" />
		</div>
	{/if}

	<ul class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each courses as course}
			<CourseCard {...course} />
		{/each}
	</ul>

	{#if showMoreUrl && showMoreText}
		<div class="grid w-full justify-center">
			<a href={showMoreUrl} class="btn btn-neutral btn-wide">
				{showMoreText}
			</a>
		</div>
	{/if}
</div>
