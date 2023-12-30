<script lang="ts">
	import { cx } from 'cva';

	import { IconChevronDown } from '$lib/components/icons';

	interface $$Props {
		title: string;
		sidenav?: boolean;
	}

	export let title: $$Props['title'];
	export let sidenav: $$Props['sidenav'] = undefined;

	let isActive = false;

	const onActiveToggle = () => {
		isActive = !isActive;
	};
</script>

{#if sidenav}
	<div
		class={cx('collapse rounded-btn', {
			'collapse-open': isActive
		})}
	>
		<button class="btn btn-ghost w-full flex-nowrap justify-between" on:click={onActiveToggle}>
			<span class="whitespace-nowrap">{title}</span>
			<IconChevronDown class="size-4" />
		</button>
		<div class="collapse-content">
			<slot />
		</div>
	</div>
{:else}
	<div class="dropdown dropdown-hover">
		<div tabindex="0" role="button" class="btn btn-ghost w-full flex-nowrap">
			<span class="whitespace-nowrap">{title}</span>
			<IconChevronDown class="size-4" />
		</div>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div
			tabindex="0"
			class="card dropdown-content card-compact z-[1] min-w-[10rem] bg-base-100 shadow shadow-base-content/5"
		>
			<slot />
		</div>
	</div>
{/if}
