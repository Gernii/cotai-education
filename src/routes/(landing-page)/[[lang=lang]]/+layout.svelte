<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	import { LandingPageLayout } from '$lib/layouts/landing-page';

	import { currentLang, route } from '$lib/lib/i18n/routing';

	import {
		availableLanguageTags,
		setLanguageTag,
		type AvailableLanguageTag,
		sourceLanguageTag
	} from '$i18n/runtime';

	//Use the default language if no language is given
	$: lang = ($page.params.lang as AvailableLanguageTag) ?? sourceLanguageTag;
	$: setLanguageTag(lang);

	//Set the lang attribute on the html tag
	$: if (browser) document.documentElement.lang = lang;
</script>

<svelte:head>
	{#each availableLanguageTags as lang}
		<link
			rel="alternate"
			hreflang={lang}
			href={`${$page.url.origin}${route($page.url.pathname, lang)}`}
		/>
	{/each}
</svelte:head>

{#key $currentLang}
	<LandingPageLayout>
		<slot />
	</LandingPageLayout>
{/key}
