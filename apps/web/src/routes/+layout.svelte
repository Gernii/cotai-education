<script lang="ts">
    import "../app.css";
    import "unfonts.css";
    import { navigating, page } from "$app/stores";
    import { browser } from "$app/environment";
    import { afterNavigate, beforeNavigate } from "$app/navigation";

    import posthog from "posthog-js";
    import { ParaglideJS } from "@inlang/paraglide-js-adapter-sveltekit";

    import { i18n } from "$lib/libs/i18n";

    import * as m from "$i18n/messages";
    $: pathname = $page.url.pathname;

    $: isPathAllowAnalytics =
        !pathname.startsWith("/api") && !pathname.startsWith("/admin");

    $: {
        if (browser && isPathAllowAnalytics) {
            beforeNavigate(() => posthog.capture("$pageleave"));
            afterNavigate(() => posthog.capture("$pageview"));
        }
    }
</script>

<noscript>{m.noscript()}</noscript>

{#if $navigating}
    <progress
        class="progress progress-primary absolute top-0 z-50 h-1.5 w-screen"
    />
{/if}
<ParaglideJS {i18n}>
    <slot />
</ParaglideJS>

<!-- {#if browser}
	{#if getIsAllowLogsCapture() === undefined && isPathAllowAnalytics && isPostHogEnvValid}
		<CookieConsentBanner />
	{/if}
{/if} -->
