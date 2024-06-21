<script lang="ts">
	import '../app.css';
	import 'unfonts.css';
	import { navigating, page } from '$app/stores';
	import { browser } from '$app/environment';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	import posthog from 'posthog-js';

	$: pathname = $page.url.pathname;

	$: isPathAllowAnalytics = !pathname.startsWith('/api') && !pathname.startsWith('/admin');

	$: {
		if (browser && isPathAllowAnalytics) {
			beforeNavigate(() => posthog.capture('$pageleave'));
			afterNavigate(() => posthog.capture('$pageview'));
		}
	}
</script>

{#if $navigating}
	<progress class="progress progress-primary absolute top-0 z-50 h-1.5 w-screen" />
{/if}

<slot />

<!-- {#if browser}
	{#if getIsAllowLogsCapture() === undefined && isPathAllowAnalytics && isPostHogEnvValid}
		<CookieConsentBanner />
	{/if}
{/if} -->
