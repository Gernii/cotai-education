<script lang="ts">
    import { page } from "$app/stores";

    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";
    import { scrollTo } from "$lib/libs/svelte-scrolling";

    import * as m from "$i18n/messages";

    import Item from "./item.svelte";

    import type { CourseProps } from "$lib/datas/courses/types";

    let isInview = writable(false);

    $: course = $page.data.course as CourseProps;

    $: whoShouldJoin = course.whoShouldJoin;
</script>

<section
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isInview)}
>
    <Container>
        <!-- <ContainerContent class="flex flex-col gap-x-16 gap-y-8 lg:flex-row"> -->
        <ContainerContent>
            <div
                class="card rounded-3xl bg-base-200 shadow-lg"
                class:opacity-0={!$isInview}
                class:animate-fade-up={$isInview}
            >
                <div class="card-body flex-col gap-x-16 gap-y-8 lg:flex-row">
                    <div class="w-full flex-grow pt-2">
                        <SectionTitle>{m.who_should_join_1()}</SectionTitle>

                        <div class="space-y-4 text-sm">
                            {#if whoShouldJoin && whoShouldJoin.length > 0}
                                {#each whoShouldJoin as item}
                                    <Item>
                                        {item}
                                    </Item>
                                {/each}
                            {/if}
                            <Item>Học sinh THPT & Trung cấp nghề</Item>
                            <Item>Sinh viên Cao đẳng & Đại học</Item>
                            <Item>Lập trình viên & Người đi làm</Item>
                        </div>
                    </div>

                    <div
                        class="h-full w-full flex-shrink-0 flex-grow lg:w-[26rem]"
                    >
                        <div class="card h-full bg-base-100">
                            <div class="card-body space-y-4">
                                <SectionTitle paddingBottom={false}>
                                    {m.needSupport()}
                                </SectionTitle>
                                <div class="text-lg font-semibold">
                                    {m.needSupport_description()}
                                </div>
                                <button
                                    class="btn btn-primary"
                                    use:scrollTo={"register-form"}
                                >
                                    Đặt lịch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerContent>
    </Container>
</section>
