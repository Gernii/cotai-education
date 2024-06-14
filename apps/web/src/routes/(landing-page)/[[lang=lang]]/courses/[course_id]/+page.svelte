<script lang="ts">
	import { SEO } from '$lib/components/ui/seo';

	import { CourseDetailsPage } from '$lib/pages/course-details';

	import { Reviews } from '$lib/features/reviews';

	export let data;
</script>

<SEO description={data.descriptionRaw} title={data.title} />

<CourseDetailsPage />

<Reviews />
