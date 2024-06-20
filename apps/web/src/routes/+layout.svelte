<script lang="ts">
	import '../app.css';
	import 'unfonts.css';
	import { navigating } from '$app/stores';
</script>

{#if $navigating}
	<progress class="progress progress-primary absolute top-0 z-50 h-1.5 w-screen" />
{/if}

<slot />
