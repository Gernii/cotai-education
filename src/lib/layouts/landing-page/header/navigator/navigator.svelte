<script lang="ts">
	import { cx } from 'cva';

	import { LangSelector } from '../lang-selector';

	import NavigatorItem from './navigator-item.svelte';

	import * as m from '$i18n/messages';
	import { navigate } from '$lib/lib/i18n/routing';
	import NavigatorCollapse from './navigator-collapse.svelte';
	import type { layoutPrograms } from '../../types';

	interface $$Props {
		sidenav?: boolean;
		programs: layoutPrograms;
	}

	export let sidenav: NonNullable<$$Props['sidenav']> = false;
	export let programs: $$Props['programs'] = undefined;
</script>

<div
	class={cx('flex h-full flex-col ', {
		'rounded-btn bg-base-100': sidenav,
		'bg-transparent': !sidenav
	})}
>
	<nav
		class={cx('flex', {
			'flex-row items-center gap-x-3': !sidenav,
			'flex-col p-4': sidenav
		})}
	>
		{#if programs}
			<NavigatorCollapse title={m.ourCourses()} {sidenav}>
				<ul class="menu w-full">
					{#each programs as program (program.id)}
						<li>
							<a href={navigate(`/program/${program.id}`)} class="w-full whitespace-nowrap">
								{program.title}
							</a>
						</li>
					{/each}
				</ul>
			</NavigatorCollapse>
		{/if}
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
		<hr class="mb-2 w-full border" />
		<div class="flex items-center justify-between px-4 py-2">
			<p class="font-semibold">{m.language()}</p>
			<LangSelector />
		</div>
	{/if}
</div>
