<script lang="ts">
	import { PUBLIC_HOSTNAME } from '$env/static/public';

	import { SEO } from '$lib/components/ui/seo';

	import { CourseDetailsPage } from '$lib/pages/course-details';

	import { coursesThumbnail } from '$lib/utils/courses-thumbnail';
	import type { CourseId } from '$lib/utils/constants';

	import { Reviews } from '$lib/features/reviews';

	export let data;

	$: courseThumbnail = coursesThumbnail(data.id as CourseId);
</script>

<SEO
	description={data.descriptionRaw}
	title={data.title}
	image={`${PUBLIC_HOSTNAME}${courseThumbnail[0].img.src}`}
/>

<CourseDetailsPage />

<Reviews />
