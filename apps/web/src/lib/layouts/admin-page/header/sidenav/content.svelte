<script lang="ts">
	import { page } from '$app/stores';

	import LogoCotAI from '$lib/assets/logo/CoTAI-Ver0-640.png?imagetools';

	import { Picture } from '$lib/components/ui/picture';

	import { routerPath } from '$lib/utils/constants';

	import { IconDocumentText } from '$lib/components/icons';
</script>

<div class="drawer-side z-40" style="scroll-behavior: smooth; scroll-padding-top: 5rem;">
	<label for="drawer" class="drawer-overlay" aria-label="Close menu"></label>
	<aside class="min-h-dvh w-sidebar border-r bg-base-100">
		<div
			class="sticky top-0 z-20 hidden h-header justify-center bg-base-100 bg-opacity-90 px-4 py-2 lg:flex"
		>
			<a href={routerPath.admin.dashboard}>
				<Picture meta={LogoCotAI} alt="Logo CoTAI" />
			</a>
		</div>

		<div class="h-4"></div>

		<ul class="menu px-4 py-0">
			<li>
				<a
					href={routerPath.admin.courses}
					class="group"
					class:active={$page.url.pathname === routerPath.admin.courses}
				>
					<IconDocumentText class="size-5" /> Courses
				</a>
			</li>
		</ul>
	</aside>
</div>
