<script lang="ts">
	import Footer from './footer.svelte';
	import { Header, type HeaderProps, SidenavContent } from './header';
	import type { layoutPrograms } from './types';

	interface $$Props {
		header?: HeaderProps;
		programs: layoutPrograms;
	}

	export let header: $$Props['header'] = undefined;
	export let programs: $$Props['programs'] = undefined;
</script>

<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />

	<main class="drawer-content">
		<Header {...header} {programs} />
		<slot />
		<Footer />
	</main>

	<SidenavContent {programs} />
</div>
