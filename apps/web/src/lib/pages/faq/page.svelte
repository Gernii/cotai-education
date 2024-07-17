<script lang="ts">
    import { page } from "$app/stores";

    import type { FAQProps } from "$lib/datas/faq/types";
    import { FAQ } from "$lib/features/fag";

    $: faqs = $page.data.faqs as FAQProps[] | undefined;
</script>

<div class="mt-header-space"></div>
{#if faqs}
    <FAQ {faqs} />
{/if}
