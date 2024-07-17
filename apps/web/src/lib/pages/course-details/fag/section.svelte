<script lang="ts">
    import { page } from "$app/stores";

    import type { FAQProps } from "$lib/datas/faq/types";
    import type { CourseProps } from "$lib/datas/courses/types";
    import { FAQ } from "$lib/features/fag";

    $: course = $page.data.course as CourseProps;
    $: generalFaqs = $page.data.faqs as FAQProps[] | undefined;

    $: courseFaqs = course.faqs;

    $: faqs = [...(courseFaqs ?? []), ...(generalFaqs ?? [])];
</script>

{#if faqs.length > 0}
    <FAQ {faqs} external />
{/if}
