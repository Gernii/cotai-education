<script lang="ts">
	import { navigating } from '$app/stores';

	import * as m from '$i18n/messages';

	import '../app.pcss';
</script>

<noscript>{m.noscript()}</noscript>
{#if $navigating}
	<progress class="progress progress-primary absolute top-0 z-50 h-1.5 w-screen" />
{/if}
<slot />
