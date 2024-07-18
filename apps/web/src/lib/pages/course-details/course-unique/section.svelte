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
            <div class="grid grid-cols-2 gap-2 sm:gap-12 lg:grid-cols-3">
                {#each courseUnique as unique}
                    <div class="card card-compact lg:card-normal">
                        <div
                            class="flex flex-col gap-y-2 p-2 text-center sm:card-body md:gap-y-8"
                        >
                            <div class="text-5xl md:text-7xl">
                                {unique.icon}
                            </div>
                            <p
                                class="text-xs font-bold sm:text-base md:text-lg"
                            >
                                {@html unique.title}
                            </p>
                        </div>
                    </div>
                {/each}
            </div>
        </ContainerContent>
    </Container>
</section>
