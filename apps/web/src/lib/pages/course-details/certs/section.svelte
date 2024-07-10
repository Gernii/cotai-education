<script lang="ts">
    import { onDestroy, tick } from "svelte";
    import { inview } from "svelte-inview";
    import { confetti } from "@neoconfetti/svelte";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";

    import * as m from "$i18n/messages";

    import CertsSlide from "./certs-slide.svelte";

    import LucideCheckCheck from "~icons/lucide/check-check";

    let results = [
        m.royal_odd_stingray_roar(),
        m.these_tidy_bulldog_aspire(),
        m.low_crisp_iguana_jolt(),
        m.known_misty_firefox_commend(),
    ];

    let isInview = false;
    let isConfetti = false;

    let delayConfettiTimeout: number | undefined = undefined;
    let delayConfetti = false;

    const onInViewEnter = async (event: CustomEvent<ObserverEventDetails>) => {
        const { inView } = event.detail;
        if (inView && !delayConfetti) {
            delayConfetti = true;
            isConfetti = false;
            isInview = true;
            await tick();
            isConfetti = true;
            delayConfettiTimeout = window.setTimeout(() => {
                delayConfetti = false;
            }, 10000);
        }
    };

    onDestroy(() => {
        if (delayConfettiTimeout) {
            window.clearTimeout(delayConfettiTimeout);
        }
    });

    const inviewCommonOptions = {
        unobserveOnEnter: false,
        rootMargin: "-20%",
    };
</script>

<section use:inview={inviewCommonOptions} on:inview_enter={onInViewEnter}>
    <Container>
        <ContainerContent>
            {#if isConfetti}
                <div class="flex justify-center">
                    <div use:confetti />
                </div>
            {/if}
            <div class:opacity-0={!isInview} class:animate-fade-left={isInview}>
                <SectionTitle>
                    {@html m.every_mild_gadfly_attend()}
                </SectionTitle>
            </div>
            <div class="grid grid-cols-2 gap-x-16">
                <ul
                    class="space-y-2 text-lg font-semibold"
                    class:opacity-0={!isInview}
                    class:animate-fade-right={isInview}
                >
                    {#each results as result}
                        <li
                            class="group flex items-center gap-x-2 hover:text-primary"
                        >
                            <LucideCheckCheck
                                class="size-7 flex-shrink-0 text-secondary group-hover:animate-jump"
                            />
                            {result}
                        </li>
                    {/each}

                    <li class="text-xs font-normal italic">
                        * Chứng nhận hoàn thành được cấp nếu kết quả học tập đạt
                        đủ điều kiện theo yêu cầu của từng khóa học
                    </li>
                </ul>
                <div
                    class:opacity-0={!isInview}
                    class:animate-fade-left={isInview}
                >
                    <CertsSlide />
                </div>
            </div>
        </ContainerContent>
    </Container>
</section>
