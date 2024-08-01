<script lang="ts">
    import { PUBLIC_HOSTNAME } from "$env/static/public";

    import { SEO } from "$lib/components/ui/seo";

    import { CourseDetailsPage } from "$lib/pages/course-details";
    import { getCourseLdJson } from "$lib/pages/course-details/ld-json.js";

    import { coursesThumbnail } from "$lib/utils/courses-thumbnail";

    import type { CourseIds } from "$lib/datas/courses/constants.js";

    export let data;

    $: course = data.course;

    $: courseThumbnail = coursesThumbnail(course.id as CourseIds);

    $: ldJsonCourse = getCourseLdJson(course, [courseThumbnail[0].img.src]);
</script>

<SEO
    description={course.descriptionRaw}
    title={course.title}
    image={`${PUBLIC_HOSTNAME}${courseThumbnail[0].img.src}`}
    LdJsons={[ldJsonCourse]}
/>

<CourseDetailsPage />
