<script lang="ts">
	import '../app.pcss';

	import { navigating } from '$app/stores';

	import { Toaster } from 'svelte-sonner';

	import * as m from '$i18n/messages';
</script>

<noscript>{m.noscript()}</noscript>
{#if $navigating}
	<progress class="progress progress-primary absolute top-0 z-50 h-1.5 w-screen" />
{/if}

<slot />
<Toaster position="top-right" />
