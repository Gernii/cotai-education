<script lang="ts">
    import { page } from "$app/stores";

    import { onDestroy, tick } from "svelte";
    import { inview } from "svelte-inview";
    import { confetti } from "@neoconfetti/svelte";

    import CertDefaltTemplate from "$lib/assets/images/certs/template.jpg?imagetools";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";
    import { Picture } from "$lib/components/ui/picture";

    import * as m from "$i18n/messages";

    import CertsSlide from "./certs-slide.svelte";

    import type { CourseProps } from "$lib/datas/courses/types";
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

    $: course = $page.data.course as CourseProps;

    $: totalCerts = course.certs ? course.certs.length : 0;

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

            <div class="grid grid-cols-1 gap-x-16 gap-y-4 md:grid-cols-2">
                <div>
                    <div
                        class:opacity-0={!isInview}
                        class:animate-fade-left={isInview}
                    >
                        <SectionTitle>
                            {@html m.every_mild_gadfly_attend()}
                        </SectionTitle>
                    </div>
                    <ul
                        class="space-y-2 text-base font-semibold sm:text-lg"
                        class:opacity-0={!isInview}
                        class:animate-fade-right={isInview}
                    >
                        {#each results as result}
                            <li
                                class="group flex items-center gap-x-2 hover:text-secondary"
                            >
                                <LucideCheckCheck
                                    class="size-7 flex-shrink-0 text-secondary group-hover:animate-jump"
                                />
                                {result}
                            </li>
                        {/each}

                        <li class="text-xs font-normal italic">
                            {m.aloof_chunky_oryx_flip()}
                        </li>
                    </ul>
                </div>
                <div
                    class:opacity-0={!isInview}
                    class:animate-fade-left={isInview}
                >
                    {#if totalCerts > 0}
                        <CertsSlide />
                    {:else}
                        <Picture
                            meta={CertDefaltTemplate}
                            alt={course.title
                                ? m.maroon_soft_sheep_jump({
                                      title: course.title,
                                  })
                                : ""}
                        />
                    {/if}
                </div>
            </div>
        </ContainerContent>
    </Container>
</section>
