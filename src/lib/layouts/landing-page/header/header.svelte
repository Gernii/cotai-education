<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import CoTAILogo from '$lib/assets/logo/CoTAI-Ver0-640.png';

	import { navigate } from '$lib/lib/i18n/routing';

	import * as m from '$i18n/messages';

	import { HeaderScrollContext } from './context';
	import { LangSelector } from './lang-selector';
	import { Navigator } from './navigator';
	import { SidenavTrigger } from './sidenav';
	import { headerClassNameHandler } from './styles';

	interface $$Props {
		disableScrollEvent?: boolean;
	}

	export let disableScrollEvent: NonNullable<$$Props['disableScrollEvent']> = false;

	const isScroll = writable(false);

	setContext(HeaderScrollContext, isScroll);

	$: headerClassName = headerClassNameHandler({
		disableScrollEvent
	});

	const onScrollHandler = (e: Event) => {
		if (disableScrollEvent) return;

		const doc = e.target as Document;

		const docScrolled = isDocScrolled(doc);

		if (docScrolled === true && !$isScroll) {
			$isScroll = true;
		} else if (docScrolled === false && $isScroll) {
			$isScroll = false;
		}
	};

	const isDocScrolled = (doc: Document) => {
		if (doc.documentElement.scrollTop > 150) {
			return true;
		} else if (doc.documentElement.scrollTop <= 150) {
			return false;
		}
	};
</script>

<svelte:window on:scroll={onScrollHandler} />

<header class={headerClassName}>
	<div class="navbar h-full min-h-fit gap-x-2 lg:gap-x-8">
		<div class="navbar-start block lg:hidden">
			<SidenavTrigger />
		</div>
		<div class="h-full flex-shrink-0 max-lg:navbar-center">
			<a href={navigate('/')} class="inline-block h-full w-full">
				<img src={CoTAILogo} alt={m.mainLogo()} class="h-full w-full object-contain" />
			</a>
		</div>

		<div class="hidden lg:block">
			<Navigator />
		</div>
		<div class="flex flex-grow-0 lg:flex-grow" />
		<div class="navbar-end">
			<div class="hidden lg:flex">
				<LangSelector />
			</div>
		</div>
	</div>
</header>
