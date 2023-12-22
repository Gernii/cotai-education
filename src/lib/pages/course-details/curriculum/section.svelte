<script lang="ts">
	import { page } from '$app/stores';

	import { Container } from '$lib/components/ui/container';
	import ContainerContent from '$lib/components/ui/container/container-content.svelte';

	import type { CourseDetailsPageDataProps } from '../types';

	$: pd = $page.data as CourseDetailsPageDataProps;

	$: curriculum = pd.curriculum;
</script>

{#if curriculum.length > 0}
	<Container>
		<ContainerContent>
			<ul class="space-y-4">
				{#each curriculum as section}
					<li class="collapse rounded-btn border">
						{#if section.details && !section.details.hidden}
							<input type="checkbox" />
						{/if}
						<div class="collapse-title text-xl font-medium">
							{section.title}
						</div>
						{#if section.details && !section.details.hidden}
							<div class="collapse-content bg-base-200">
								{section.details.content}
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		</ContainerContent>
	</Container>
{/if}
