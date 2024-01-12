<script lang="ts">
	import { page } from '$app/stores';

	import { cx } from 'cva';

	import { navigate } from '$lib/lib/i18n/routing';

	import { routingPathProgramsId } from '$lib/utils/routing-path';

	import * as m from '$i18n/messages';

	import type { LandingPage_LayoutData } from '../../types';

	import NavigatorItem from './navigator-item.svelte';
	import NavigatorCollapse from './navigator-collapse.svelte';

	interface $$Props {
		sidenav?: boolean;
	}

	export let sidenav: NonNullable<$$Props['sidenav']> = false;

	$: pd = $page.data as { layoutData: LandingPage_LayoutData };

	$: programs = pd.layoutData.programs;
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
		{#if programs.length > 0}
			<NavigatorCollapse title={m.ourPrograms()} {sidenav}>
				<ul class="menu w-full">
					{#each programs as program}
						<li>
							<a
								href={navigate(routingPathProgramsId(program.id))}
								class="w-full whitespace-nowrap"
							>
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
			target="_blank"
		>
			{m.gemCollection()}
		</NavigatorItem>
	</nav>
	<!-- TODO: re-open after update ENG language   -->
	<!-- {#if sidenav}
		<hr class="mb-2 w-full border border-base-content/5" />
		<div class="flex items-center justify-between px-4 py-2">
			<p class="font-semibold">{m.language()}</p>
			<LangSelector />
		</div>
	{/if} -->
</div>
