<script lang="ts">
	import { Container, ContainerContent } from '$lib/components/ui/container';

	import { navigate } from '$lib/lib/i18n/routing';

	import { routingPathProgramsId } from '$lib/utils/routing-path';
	import type { CourseProps, ProgramProps } from '$lib/utils/types/data';

	import * as m from '$i18n/messages';

	import type { CoursesListProps_Courses } from '$lib/features/courses-list';
	import { CoursesList } from '$lib/features/courses-list';
	interface $$Props extends ProgramProps {
		coursesDetails: Record<string, CourseProps>;
	}

	export let coursesHighlighted: $$Props['coursesHighlighted'] = [];
	export let coursesDetails: $$Props['coursesDetails'];
	export let title: $$Props['title'] = undefined;
	export let description: $$Props['description'] = undefined;
	export let id: $$Props['id'];
	export let targets: $$Props['targets'];

	$: courses = coursesHighlighted.slice(0, 6).map((courseId) => ({
		id: courseId,
		title: coursesDetails[courseId].title,
		description: coursesDetails[courseId].description,
		thumbnail: coursesDetails[courseId].thumbnail
	})) as CoursesListProps_Courses[];
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
