<script lang="ts">
	import { page } from '$app/stores';

	import SvelteSeo from 'svelte-seo';

	import * as m from '$i18n/messages';

	interface $$Props {
		title?: string;
		description?: string;
		SEOImage?: string;
	}

	export let title: $$Props['title'] = undefined;
	export let description: $$Props['description'] = undefined;
	export let SEOImage: $$Props['SEOImage'] = `${$page.url.origin}/images/logo/CoTAI-Ver0-320.png`;

	$: contentTitle = title ? m.siteNameWithTitle({ title }) : m.siteName();
</script>

<svelte:head>
	<SvelteSeo
		title={contentTitle}
		{description}
		openGraph={{
			title: contentTitle,
			type: 'website',
			url: $page.url.href,
			site_name: m.siteName(),
			description
		}}
		twitter={{
			card: 'summary_large_image',
			title: contentTitle,
			description,
			image: SEOImage
		}}
		jsonLd={{
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			url: $page.url.origin,
			description: m.homePage_head_description(),
			name: m.siteName()
		}}
	/>
</svelte:head>
<!-- extend={{
    // extending the default link tags
    link: [
        { rel: 'icon', href: '/favicon.ico', type: 'image/png' },
        { rel: 'apple-touch-icon', href: '/favicon.ico', type: 'image/png' },
        { rel: 'apple-touch-startup-image', href: '/favicon.ico', type: 'image/png' }
    ],
    meta: [
        {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        },
        {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }
    ]
    // extending the default meta tags
}} -->
