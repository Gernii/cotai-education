<script lang="ts">
	import { cx } from 'cva';

	import { LangSelector } from '../lang-selector';

	import NavigatorItem from './navigator-item.svelte';

	import * as m from '$i18n/messages';
	import { IconChevronDown } from '$lib/components/icons';
	import { navigate } from '$lib/lib/i18n/routing';

	interface $$Props {
		sidenav?: boolean;
	}

	export let sidenav: NonNullable<$$Props['sidenav']> = false;
</script>

<div
	class="dark:bg-tertiary-900 flex h-full flex-col bg-base-100 xl:bg-transparent xl:dark:bg-transparent"
>
	<nav
		class={cx('flex', {
			'flex-row items-center gap-x-3': !sidenav,
			'flex-col p-4': sidenav
		})}
	>
		<div class="dropdown" />
		<div class="dropdown dropdown-hover">
			<div tabindex="0" role="button" class="btn btn-ghost flex-nowrap">
				<span class="whitespace-nowrap">Our courses</span>
				<IconChevronDown class="h-4 w-4" />
			</div>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div
				tabindex="0"
				class="card dropdown-content card-compact z-[1] min-w-[10rem] bg-base-100 shadow"
			>
				<ul class="menu">
					<li><a href={navigate('/')}>Item 1</a></li>
					<li><a href={navigate('/')}>Item 2</a></li>
				</ul>
			</div>
		</div>

		<NavigatorItem href="#contact" target="_self" aria-label={m.contact()}>
			{m.contact()}
		</NavigatorItem>

		<NavigatorItem
			href="https://gem.cot.ai/"
			rel="noopener noreferrer"
			aria-label={m.gemCollection()}
			class="text-orange-500 hover:text-orange-600"
		>
			{m.gemCollection()}
		</NavigatorItem>
	</nav>
	{#if sidenav}
		<hr class="dark:border-tertiary-800 mb-2 w-full border" />
	{/if}
	<div class="flex items-center justify-between px-4 py-2 lg:hidden lg:p-0">
		<p class="block font-semibold lg:hidden">{m.language()}</p>
		<LangSelector />
	</div>
</div>
