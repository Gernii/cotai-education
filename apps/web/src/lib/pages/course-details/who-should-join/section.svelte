<script lang="ts">
    import { page } from "$app/stores";

    import { Container, ContainerContent } from "$lib/components/ui/container";

    import * as m from "$i18n/messages";

    import ItemsSection from "./items-section.svelte";

    import type { CourseProps } from "$lib/datas/courses/types";

    $: course = $page.data.course as CourseProps;

    let hardcodedWhoShouldJoin = [
        "Học sinh THPT & Trung cấp nghề",
        "Sinh viên Cao đẳng & Đại học",
        "Lập trình viên & Người đi làm",
    ];

    $: whoShouldJoin = [...course.whoShouldJoin, ...hardcodedWhoShouldJoin];
    $: learningOutcomes = course.learningOutcomes;
</script>

<section class="hidden md:block">
    <Container>
        <ContainerContent
            class="card card-compact rounded-3xl shadow-lg lg:card-normal md:bg-base-200"
        >
            <div class="card-body">
                <div
                    class="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 xl:gap-x-16"
                >
                    <ItemsSection
                        items={whoShouldJoin}
                        sectionTitle={m.who_should_join_1()}
                    />
                    <ItemsSection
                        items={learningOutcomes}
                        sectionTitle={m.chunky_less_rat_build()}
                    />
                </div>
            </div>
        </ContainerContent>
    </Container>
</section>

<section class="block md:hidden">
    <Container>
        <ContainerContent>
            <ItemsSection
                items={whoShouldJoin}
                sectionTitle={m.who_should_join_1()}
            />
        </ContainerContent>
    </Container>
</section>

<section class="block md:hidden">
    <Container>
        <ContainerContent>
            <ItemsSection
                items={learningOutcomes}
                sectionTitle={m.chunky_less_rat_build()}
            />
        </ContainerContent>
    </Container>
</section>
