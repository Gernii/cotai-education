<script lang="ts">
    import { page } from "$app/stores";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";

    import * as m from "$i18n/messages";

    import FaqCard from "./faq-card.svelte";

    import type { CourseProps } from "$lib/datas/courses/types";

    $: course = $page.data.course as CourseProps;

    $: faqs = course.faqs;
</script>

{#if faqs}
    <section>
        <Container>
            <ContainerContent>
                <div class="text-center">
                    <SectionTitle>{m.large_less_scallop_gasp()}</SectionTitle>
                </div>
                <ul class="space-y-4">
                    {#each faqs as faq, idx}
                        <FaqCard {...faq} isFirst={idx === 0} />
                    {/each}
                </ul>
            </ContainerContent>
        </Container>
    </section>
{/if}
