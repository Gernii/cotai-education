<script lang="ts">
	import * as m from '$i18n/messages';
	import { LandingPageLayout } from '$lib/layouts/landing-page';
	import { HomePage } from '$lib/pages/home-page';

	export let data;

	$: layoutPrograms = data.programs?.map((program) => ({
		id: program.id,
		title: program.title
	}));
</script>

<LandingPageLayout programs={layoutPrograms}>
	<HomePage programs={data.programs} />
	<div>{data.data}</div>
	<div class="h-screen">{m.hello_world()}</div>
	<div class="h-screen">{m.hello_world()}</div>
</LandingPageLayout>
