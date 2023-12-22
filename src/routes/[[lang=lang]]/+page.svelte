<script lang="ts">
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
</LandingPageLayout>
