<script lang="ts">
	import { page } from '$app/stores';

	import { Container, ContainerContent } from '$lib/components/ui/container';

	import { navigate } from '$lib/lib/i18n/routing';

	import { routingPathProgramsId } from '$lib/utils/routing-path';

	import * as m from '$i18n/messages';

	import type { HomePageDataProps, HomePageData_ProgramProps } from '../types';

	import type { CoursesListProps_Courses } from '$lib/features/courses-list';
	import { CoursesList } from '$lib/features/courses-list';

	type $$Props = HomePageData_ProgramProps;

	export let coursesHighlighted: $$Props['coursesHighlighted'] = [];
	export let title: $$Props['title'] = undefined;
	export let description: $$Props['description'] = undefined;
	export let id: $$Props['id'];
	export let targets: $$Props['targets'];

	$: pd = $page.data as HomePageDataProps;

	$: pdCourses = pd.courses;

	$: courses = coursesHighlighted.slice(0, 6).map(
		(courseId): CoursesListProps_Courses => ({
			id: courseId,
			title: pdCourses[courseId].title,
			description: pdCourses[courseId].description,
			thumbnail: pdCourses[courseId].thumbnail,
			totalLessons: pdCourses[courseId].totalLessons
		})
	);
</script>

{#if title}
	<Container>
		<ContainerContent>
			<CoursesList
				{courses}
				{title}
				{description}
				showMoreUrl={navigate(routingPathProgramsId(id))}
				showMoreText={m.viewProgramDetails()}
			>
				<svelte:fragment slot="details-main">
					{#if targets.length > 0}
						<div>
							<span>{m.target()}:</span>{' '}
							{#each targets as target}
								<span class="badge badge-primary badge-outline">{target}</span>{' '}
							{/each}
						</div>
					{/if}
				</svelte:fragment>
			</CoursesList>
		</ContainerContent>
	</Container>
{/if}
