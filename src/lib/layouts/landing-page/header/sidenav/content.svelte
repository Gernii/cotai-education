<script lang="ts">
	import type { layoutPrograms } from '../../types';
	import { Navigator } from '../navigator';

	interface $$Props {
		programs: layoutPrograms;
	}

	export let programs: $$Props['programs'] = undefined;
</script>

<div class="drawer-side z-50 scroll-pt-20 scroll-smooth">
	<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay" />
	<aside class="h-screen w-sidebar py-2 pl-2 shadow-lg supports-[height:100dvh]:h-[100dvh]">
		<Navigator sidenav={true} {programs} />
	</aside>
</div>
