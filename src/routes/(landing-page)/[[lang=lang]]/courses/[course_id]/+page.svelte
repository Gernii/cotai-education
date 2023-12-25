<script>
	import { SEO } from '$lib/components/ui/seo';

	import { CourseDetailsPage } from '$lib/pages/course-details';

	export let data;
</script>

<SEO description={data.description} title={data.title} />

<CourseDetailsPage />
