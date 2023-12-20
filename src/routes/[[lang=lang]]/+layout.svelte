<script lang="ts">
	import { page } from '$app/stores';
	import { availableLanguageTags, setLanguageTag } from '$i18n/runtime';

	import { currentLang, route } from '$lib/lib/i18n/routing';
	//Use the default language if no language is given
	$: setLanguageTag($currentLang);
</script>

<svelte:head>
	{#each availableLanguageTags as lang}
		<link rel="alternate" hreflang={lang} href={route($page.url.pathname, lang)} />
	{/each}
</svelte:head>

{#key $currentLang}
	<slot />
{/key}
