<script>
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import * as m from "$i18n/messages";

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
                    <GuideItem title={m.teal_red_panda_gaze()}>
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

                    <GuideItem title={m.muddy_bright_kangaroo_mix()}>
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
                    <GuideItem title={m.icy_full_octopus_nurture()}>
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
                    <GuideItem title={m.quick_good_bear_foster()}>
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
