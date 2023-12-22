<script lang="ts">
	import type { ProgramProps } from '$lib/utils/types/data';

	import * as m from '$i18n/messages';

	type $$Props = Pick<ProgramProps, 'title' | 'description' | 'targets'>;

	export let title: $$Props['title'] = undefined;
	export let description: $$Props['description'] = undefined;
	export let targets: $$Props['targets'];
</script>

{#if title && description}
	<div class="space-y-4 lg:space-y-6">
		{#if title}
			<h1 class="text-2xl font-bold lg:text-4xl">
				{title}
			</h1>
		{/if}

		{#if targets.length > 0}
			<div>
				<span>{m.target()}:</span>{' '}
				{#each targets as target}
					<span class="badge badge-primary badge-outline">{target}</span>{' '}
				{/each}
			</div>
		{/if}
		{#if description}
			<p>{description}</p>
		{/if}
	</div>
{/if}
