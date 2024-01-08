<script lang="ts">
	import { navigate } from '$lib/lib/i18n/routing';

	import * as m from '$i18n/messages';

	import Image from './image.svelte';
</script>

<div class="fixed inset-0 flex flex-col items-center justify-center gap-2">
	<div class="flex h-5/6 w-5/6 flex-col items-center lg:h-3/4 lg:w-3/4 lg:flex-row">
		<div class="w-full sm:w-1/2">
			<Image />
		</div>
		<div class="w-full space-y-6 sm:w-1/2">
			<h1 class="text-6xl font-semibold lg:text-9xl">404</h1>
			<h2 class="text-2xl font-semibold lg:text-4xl">{m.error404_title()}</h2>
			<p>
				{m.error404_description()}
			</p>

			<div class="space-x-2">
				<a class="btn btn-primary" href={navigate('/')}> {m.homepage()} </a>
			</div>
		</div>
	</div>
</div>
