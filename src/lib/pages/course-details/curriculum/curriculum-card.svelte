<script lang="ts">
	import { cx } from 'cva';

	import type { CurriculumProps } from '$lib/utils/types/data';

	import { IconChevronDown } from '$lib/components/icons';
	import { TextContent } from '$lib/features/text-content';

	type $$Props = CurriculumProps;

	export let title: $$Props['title'] = undefined;
	export let details: $$Props['details'] = undefined;

	let isContentOpen = true;

	const contentOpenToggle = () => {
		isContentOpen = !isContentOpen;
	};

	$: isContentEnabled = details && !details.hidden;
</script>

<li
	class={cx('collapse border border-base-content/5', {
		'collapse-open': isContentOpen,
		'collapse-close': !isContentOpen
	})}
>
	<div class="collapse-title flex items-center justify-between pe-4 text-xl font-medium">
		<span>{title}</span>
		{#if isContentEnabled}
			<button class="btn btn-square btn-ghost btn-sm" on:click={contentOpenToggle}>
				<IconChevronDown class="size-6 stroke-2" />
			</button>
		{/if}
	</div>
	{#if details && isContentEnabled}
		<div class="collapse-content bg-base-200">
			<div class="pt-2">
				<TextContent text={details.content} />
			</div>
		</div>
	{/if}
</li>
