<script lang="ts">
    import { PUBLIC_HOSTNAME } from "$env/static/public";

    import { SEO } from "$lib/components/ui/seo";

    import { CourseDetailsPage } from "$lib/pages/course-details";

    import { coursesThumbnailDeprecated } from "$lib/utils/courses-thumbnail";
    import type { CourseIdDeprecated } from "$lib/utils/constants";

    export let data;

    $: courseThumbnail = coursesThumbnailDeprecated(
        data.id as CourseIdDeprecated,
    );
</script>

<SEO
    description={data.descriptionRaw}
    title={data.title}
    image={`${PUBLIC_HOSTNAME}${courseThumbnail[0].img.src}`}
/>

<CourseDetailsPage />

<!-- <Reviews /> -->
