<script lang="ts">
	import { page } from '$app/stores';

	import { Container, ContainerContent } from '$lib/components/ui/container';
	import { SectionTitle } from '$lib/components/ui/section-title';

	import * as m from '$i18n/messages';

	import type { CourseDetailsPageDataProps } from '../types';

	import Archives from './archives.svelte';

	$: pd = $page.data as CourseDetailsPageDataProps;

	$: archives = pd.archives;
</script>

{#if archives && archives.length > 0}
	<Container>
		<ContainerContent>
			<SectionTitle class="text-center">{m.learningoutcomes()}</SectionTitle>
			<div class="space-y-8">
				{#each archives as archiveGroup}
					<Archives archives={archiveGroup} />
				{/each}
			</div>
		</ContainerContent>
	</Container>
{/if}
