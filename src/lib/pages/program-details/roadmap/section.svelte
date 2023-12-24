<script lang="ts">
	import { page } from '$app/stores';

	import { ContainerContent, Container } from '$lib/components/ui/container';
	import SectionTitle from '$lib/components/ui/section-title/section-title.svelte';

	import * as m from '$i18n/messages';

	import type { ProgramDetailsPageDataProps } from '../types';

	import CourseCard from './course-card.svelte';

	$: pd = $page.data as ProgramDetailsPageDataProps;
	$: courseIds = pd.programDetails.coursesRoadmap;
	$: courses = pd.courses;
</script>

<Container>
	<ContainerContent>
		<SectionTitle>{m.roadmap()}</SectionTitle>
		<ul class="steps steps-vertical w-full">
			{#each courseIds as courseId, idx}
				<CourseCard {...courses[courseId]} {idx} last={idx + 1 === courseIds.length} />
			{/each}
		</ul>
	</ContainerContent>
</Container>
