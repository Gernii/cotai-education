<script lang="ts">
	import { page } from '$app/stores';

	import { Container, ContainerContent } from '$lib/components/ui/container';

	import { navigate } from '$lib/lib/i18n/routing';

	import { routingPathProgramsId } from '$lib/utils/routing-path';

	import * as m from '$i18n/messages';

	import type { HomePageDataProps } from '../types';

	import CourseCard from './course-card.svelte';
	import Info from './info.svelte';

	$: pd = $page.data as HomePageDataProps;
	$: courses = pd.courses;
	$: programs = pd.programs;
</script>

{#if programs}
	{#each programs as program (program.id)}
		{@const {
			id,
			title,
			description,
			targets,
			'courses-highlighted': coursesHighlighted
		} = program}

		<Container>
			<ContainerContent class="space-y-10 lg:space-y-16">
				<Info {targets} {description} {title} />

				<ul class="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each coursesHighlighted.slice(0, 6) as courseId}
						{@const course = courses[courseId]}

						<CourseCard {...course} id={courseId} />
					{/each}
				</ul>

				<div class="grid w-full justify-center">
					<a href={navigate(routingPathProgramsId(id))} class="btn btn-neutral btn-wide">
						{m.viewProgramDetails()}
					</a>
				</div>
			</ContainerContent>
		</Container>
	{/each}
{/if}
