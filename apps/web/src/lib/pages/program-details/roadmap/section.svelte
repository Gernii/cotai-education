<script lang="ts">
	import { page } from '$app/stores';

	import { writable } from 'svelte/store';
	import { inview } from 'svelte-inview';

	import { ContainerContent, Container } from '$lib/components/ui/container';
	import SectionTitle from '$lib/components/ui/section-title/section-title.svelte';

	import { inviewCommonOptions, onInViewEnter } from '$lib/libs/inview';

	import * as m from '$i18n/messages';

	import type { ProgramDetailsPageDataProps } from '../types';

	import CourseCard from './course-card.svelte';

	$: pd = $page.data as ProgramDetailsPageDataProps;
	$: courseIds = pd.programDetails.coursesRoadmap;
	$: courses = pd.courses;

	let isInview = writable(false);
</script>

<section use:inview={inviewCommonOptions} on:inview_enter={onInViewEnter(isInview)}>
	<Container>
		<ContainerContent>
			<div class:opacity-0={!$isInview} class:animate-fade-left={$isInview}>
				<SectionTitle id="roadmap">{m.roadmap()}</SectionTitle>
			</div>
			<ul class="w-full">
				{#each courseIds as courseId, idx}
					<CourseCard {...courses[courseId]} {idx} last={idx + 1 === courseIds.length} />
				{/each}
			</ul>
		</ContainerContent>
	</Container>
</section>
