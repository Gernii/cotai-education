<script lang="ts">
	import { page } from '$app/stores';

	import { Container } from '$lib/components/ui/container';
	import ContainerContent from '$lib/components/ui/container/container-content.svelte';
	import SectionTitle from '$lib/components/ui/section-title/section-title.svelte';

	import * as m from '$i18n/messages';

	import type { CourseDetailsPageDataProps } from '../types';

	import CurriculumCard from './curriculum-card.svelte';

	$: pd = $page.data as CourseDetailsPageDataProps;

	$: curriculum = pd.curriculum;
</script>

{#if curriculum.length > 0}
	<Container>
		<ContainerContent>
			<SectionTitle>{m.curriculum()}</SectionTitle>

			<ul class="space-y-4">
				{#each curriculum as section}
					<CurriculumCard {...section} />
				{/each}
			</ul>
		</ContainerContent>
	</Container>
{/if}
