<script>
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import GuideItem from "./guide-item.svelte";

    import LucideRoute from "~icons/lucide/route";
    import LucideMonitorCheck from "~icons/lucide/monitor-check";
    import LucideMessagesSquare from "~icons/lucide/messages-square";
    import LucideListChecks from "~icons/lucide/list-checks";
    import LucideArrowBigRight from "~icons/lucide/arrow-big-right";

    let isInview = writable(false);
</script>

<section
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isInview)}
>
    <Container>
        <ContainerContent>
            <div
                class="text-center"
                class:opacity-0={!$isInview}
                class:animate-fade-down={$isInview}
            >
                <SectionTitle>Các bước đăng ký</SectionTitle>
            </div>
            <div
                class="flex flex-col justify-between gap-x-1 gap-y-8 sm:gap-x-4 lg:flex-row"
            >
                <div
                    class="relative flex w-full flex-grow justify-between gap-x-1 sm:gap-x-4"
                >
                    <GuideItem
                        title={"Tư vấn miễn phí giúp định hướng chương trình học"}
                    >
                        <LucideMessagesSquare
                            slot="icon"
                            class="size-10 flex-shrink-0 stroke-1 sm:size-16"
                        />
                    </GuideItem>

                    <div
                        class="flex items-center"
                        class:opacity-0={!$isInview}
                        class:animate-fade={$isInview}
                    >
                        <LucideArrowBigRight
                            class="size-6 flex-shrink-0 sm:size-8"
                        />
                    </div>

                    <GuideItem title={"Làm bài đánh giá năng lục"}>
                        <LucideListChecks
                            slot="icon"
                            class="size-10 flex-shrink-0 stroke-1 sm:size-16"
                        />
                    </GuideItem>
                </div>
                <div
                    class="flex items-center"
                    class:opacity-0={!$isInview}
                    class:animate-fade={$isInview}
                >
                    <LucideArrowBigRight
                        class="hidden size-6 flex-shrink-0 sm:size-8 lg:block"
                    />
                </div>
                <div
                    class="relative flex w-full flex-grow justify-between gap-x-1 sm:gap-x-4"
                >
                    <GuideItem title={"Lựa chọn lộ trình, khóa học phù hợp"}>
                        <LucideRoute
                            slot="icon"
                            class="size-10 flex-shrink-0 stroke-1 sm:size-16"
                        />
                    </GuideItem>

                    <div
                        class="flex items-center"
                        class:opacity-0={!$isInview}
                        class:animate-fade={$isInview}
                    >
                        <LucideArrowBigRight
                            class="size-6 flex-shrink-0 sm:size-8"
                        />
                    </div>
                    <GuideItem title={"Bắt đầu khóa học"}>
                        <LucideMonitorCheck
                            slot="icon"
                            class="size-10 flex-shrink-0 stroke-1 sm:size-16"
                        />
                    </GuideItem>
                </div>
            </div>
        </ContainerContent>
    </Container>
</section>
