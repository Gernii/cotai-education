<script lang="ts">
    import { PUBLIC_HOSTNAME } from "$env/static/public";

    import { SEO } from "$lib/components/ui/seo";

    import { CourseDetailsPage } from "$lib/pages/course-details";

    import { coursesThumbnail } from "$lib/utils/courses-thumbnail";

    import type { CourseIds } from "$lib/datas/courses/constants.js";

    export let data;

    $: course = data.course;

    $: courseThumbnail = coursesThumbnail(course.id as CourseIds);
</script>

<SEO
    description={course.descriptionRaw}
    title={course.title}
    image={`${PUBLIC_HOSTNAME}${courseThumbnail[0].img.src}`}
/>

<CourseDetailsPage />

<!-- <Reviews /> -->
