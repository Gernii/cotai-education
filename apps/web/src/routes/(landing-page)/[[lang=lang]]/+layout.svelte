<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	import { PUBLIC_HOSTNAME } from '$env/static/public';

	import { LandingPageLayout } from '$lib/layouts/landing-page';

	import { currentLang, route } from '$lib/lib/i18n/routing';

	import {
		setLanguageTag,
		type AvailableLanguageTag,
		sourceLanguageTag,
		availableLanguageTags
	} from '$i18n/runtime';

	let hostname = PUBLIC_HOSTNAME;

	// TODO: Update after implement ENG
	// Use the default language if no language is given
	$: lang = ($page.params.lang as AvailableLanguageTag) ?? sourceLanguageTag;
	$: setLanguageTag(lang);

	// Set the lang attribute on the html tag
	$: if (browser) document.documentElement.lang = lang;
</script>

<link rel="alternate" hreflang={'vi'} href={`${hostname}${route($page.url.pathname, 'vi')}`} />

<!-- TODO: Update after implement ENG -->
<svelte:head>
	{#each availableLanguageTags as lang}
		<link rel="alternate" hreflang={lang} href={`${hostname}${route($page.url.pathname, lang)}`} />
	{/each}
</svelte:head>

{#key $currentLang}
	<LandingPageLayout>
		<slot />
	</LandingPageLayout>
{/key}
