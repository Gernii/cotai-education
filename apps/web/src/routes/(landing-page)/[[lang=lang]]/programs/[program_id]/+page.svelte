<script lang="ts">
	import { SEO } from '$lib/components/ui/seo';

	import { ProgramDetailsPage } from '$lib/pages/program-details';

	import { Reviews } from '$lib/features/reviews';

	export let data;
</script>

<SEO description={data.programDetails.rawDescription} title={data.programDetails.title} />

<ProgramDetailsPage />

<Reviews />
