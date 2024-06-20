<script lang="ts">
	import { page } from '$app/stores';

	import { writable } from 'svelte/store';
	import { inview } from 'svelte-inview';

	import { Container, ContainerContent } from '$lib/components/ui/container';
	import { SectionTitle } from '$lib/components/ui/section-title';

	import { inviewCommonOptions, onInViewEnter } from '$lib/libs/inview';

	import * as m from '$i18n/messages';

	import type { CourseDetailsPageDataProps } from '../types';

	import Archives from './archives.svelte';

	let isInview = writable(false);

	$: pd = $page.data as CourseDetailsPageDataProps;

	$: archives = pd.archives;
</script>

{#if archives && archives.length > 0}
	<section use:inview={inviewCommonOptions} on:inview_enter={onInViewEnter(isInview)}>
		<Container>
			<ContainerContent>
				<div class:opacity-0={!$isInview} class:animate-fade-down={$isInview}>
					<SectionTitle class="text-center">{m.learningoutcomes()}</SectionTitle>
				</div>
				<div class="space-y-8" class:opacity-0={!$isInview} class:animate-fade-up={$isInview}>
					{#each archives as archiveGroup}
						<Archives archives={archiveGroup} />
					{/each}
				</div>
			</ContainerContent>
		</Container>
	</section>
{/if}
