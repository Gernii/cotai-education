<script lang="ts">
    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";

    import * as m from "$i18n/messages";

    import type { DataCourseUnique } from "$lib/datas/course-unique/types";

    interface $$Props {
        courseUnique: DataCourseUnique;
    }

    export let courseUnique: $$Props["courseUnique"];
</script>

<section>
    <Container>
        <ContainerContent>
            <div>
                <SectionTitle class="text-center">
                    {m.giant_cuddly_ocelot_achieve()}
                </SectionTitle>
            </div>
            <div class="grid grid-cols-3 gap-12">
                {#each courseUnique as unique}
                    <div class="card">
                        <div class="card-body gap-y-8 text-center">
                            <div class="lg:text-7xl">
                                {unique.icon}
                            </div>
                            <p class="text-lg font-bold">
                                {@html unique.title}
                            </p>
                        </div>
                    </div>
                {/each}
            </div>
        </ContainerContent>
    </Container>
</section>
