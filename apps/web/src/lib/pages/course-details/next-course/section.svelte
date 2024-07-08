<script lang="ts">
    import { page } from "$app/stores";

    import { inview } from "svelte-inview";
    import { tick } from "svelte";
    import { confetti } from "@neoconfetti/svelte";

    import { Container } from "$lib/components/ui/container";
    import ContainerContent from "$lib/components/ui/container/container-content.svelte";

    import { inviewCommonOptions } from "$lib/libs/inview";

    import { routerPath } from "$lib/utils/constants";

    import * as m from "$i18n/messages";

    import type { CourseProps } from "$lib/datas/courses/types";

    let isInview = false;
    let isConfetti = false;

    $: course = $page.data.course as CourseProps;

    $: nextCourseTitle = $page.data.nextCourseTitle as string;

    $: courseUrl = course.nextCourseId
        ? routerPath.courseId(course.nextCourseId)
        : undefined;

    const onInViewEnter = async (event: CustomEvent<ObserverEventDetails>) => {
        const { inView } = event.detail;
        if (inView) {
            isInview = true;
            await tick();
            isConfetti = true;
        }
    };
</script>

{#if courseUrl}
    <section
        use:inview={inviewCommonOptions}
        on:inview_enter={onInViewEnter}
        class:opacity-0={!isInview}
        class:animate-fade-up={isInview}
    >
        <Container>
            <ContainerContent
                class="flex flex-col items-center space-y-2 text-center"
            >
                {#if isConfetti}
                    <div>
                        <div use:confetti />
                    </div>
                {/if}
                <p class="text-lg">
                    {m.agent_muddy_finch_create()}
                </p>
                <div class="relative">
                    <span class="text-2xl font-bold">{nextCourseTitle}</span>
                    <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 323.057 323.057"
                        xml:space="preserve"
                        class="absolute -right-10 top-0 size-8 -rotate-90 -scale-x-100 transform fill-base-content"
                    >
                        <g>
                            <g>
                                <path
                                    d="M281.442,256.312c-47.124,59.364-139.536,44.676-160.956-29.376c-1.224-3.672-1.836-7.956-2.448-11.628
                    c49.572-11.016,97.92-47.124,102.204-90.576c3.672-39.168-36.108-50.796-62.424-28.764
                    c-31.212,26.316-53.244,64.872-55.08,105.875c-31.824,4.284-63.036-4.284-80.172-35.496
                    c-28.764-52.631,9.792-123.624,61.2-144.432c5.508-1.836,3.06-10.404-2.448-8.568C10.326,33.544-26.394,132.688,21.954,191.439
                    c18.972,22.645,49.572,29.988,81.396,26.316c4.284,41.616,36.72,74.664,75.275,87.516c44.676,14.688,85.68-6.731,111.996-41.616
                    C294.906,258.147,285.725,251.416,281.442,256.312z M144.354,132.688c9.792-13.464,22.644-28.764,39.168-34.272
                    c15.911-5.508,21.42,16.524,22.031,26.316c0.612,12.24-7.956,23.256-15.912,31.824c-16.523,18.971-44.063,35.496-72.215,42.839
                    C119.262,175.527,130.89,152.272,144.354,132.688z"
                                />
                                <path
                                    d="M315.713,233.668c-17.136,0-34.884,1.224-51.408,5.508c-6.731,1.836-3.672,11.016,3.061,9.792
                    c13.464-2.448,27.54-1.836,41.004-1.224c-0.612,7.955-1.224,16.523-2.448,24.479c-1.224,6.12-5.508,15.3-1.836,21.42
                    c1.836,3.061,4.896,3.061,7.956,1.836c7.344-3.06,7.344-15.912,8.568-22.644c1.836-11.017,2.447-21.42,2.447-32.437
                    C323.057,236.728,319.385,233.668,315.713,233.668z"
                                />
                            </g>
                        </g>
                    </svg>
                </div>
                <a class="btn btn-primary btn-wide" href={courseUrl}>
                    {m.home_safe_horse_bake()}
                </a>
            </ContainerContent>
        </Container>
    </section>
{/if}
