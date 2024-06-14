<script lang="ts">
	import { SEO } from '$lib/components/ui/seo';

	import { HomePage } from '$lib/pages/home-page';

	import * as m from '$i18n/messages';

	import { Reviews } from '$lib/features/reviews';
</script>

<SEO description={m.homePage_head_description()} />

<HomePage />

<Reviews />
