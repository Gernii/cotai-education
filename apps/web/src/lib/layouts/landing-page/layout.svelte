<script lang="ts">
	import Footer from './footer.svelte';
	import { Header, type HeaderProps, SidenavContent } from './header';
	import { Reviews } from './reviews';

	interface $$Props {
		header?: HeaderProps;
	}

	export let header: $$Props['header'] = undefined;
</script>

<div class="drawer bg-base-200/40">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />

	<main class="drawer-content">
		<Header {...header} />
		<slot />
		<Reviews />
		<Footer />
	</main>

	<SidenavContent />
</div>
