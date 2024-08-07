<script lang="ts">
    import { page } from "$app/stores";

    import { ContainerContent } from "$lib/components/ui/container";
    import { Picture } from "$lib/components/ui/picture";
    import { ExternalAnchor } from "$lib/components/ui/external-anchor";

    import { scrollTo } from "$lib/libs/svelte-scrolling";

    import {
        coursesBlurThumbnail,
        coursesThumbnail,
    } from "$lib/utils/courses-thumbnail";
    import { countTotalLessons } from "$lib/utils/count-total-lessons";

    import * as m from "$i18n/messages";

    import type { CourseDetailsPageDataProps } from "../types";

    import type { HeroRoadmapCourse } from "$lib/features/hero-roadmap/types";
    import HeroiconsClock from "~icons/heroicons/clock";
    import { SkillsList } from "$lib/features/skill-icons";
    import { HeroRoadMap } from "$lib/features/hero-roadmap";
    import type { CourseIds } from "$lib/datas/courses/constants";
    import { ReadMoreCustom } from "$lib/features/read-more-custom";

    $: heroRoadmapCourse = $page.data.heroRoadmapCourse as HeroRoadmapCourse[];

    $: course = $page.data.course as CourseDetailsPageDataProps;

    $: courseThumbnail = coursesThumbnail(course.id as CourseIds);

    $: courseBlurThumbnail = coursesBlurThumbnail(course.id as CourseIds);

    $: totalLessons = countTotalLessons(course.curriculum, course.id);
</script>

<section class="mb-16">
    <ContainerContent
        class="h-full space-y-16 pt-header-space-sm lg:pt-header-space"
    >
        <div class="grid grid-cols-1 gap-x-16 gap-y-16 pt-16 lg:grid-cols-5">
            <div class="col-span-1 space-y-4 lg:col-span-3">
                <div>
                    <p class="text-lg font-semibold">{m.course()}</p>
                    <h1 class="text-5xl font-extrabold text-primary">
                        {course.title}
                    </h1>
                </div>
                <div class="flex flex-wrap gap-x-4 gap-y-1">
                    <div class="flex items-center gap-x-1">
                        <HeroiconsClock
                            class="size-6 stroke-2 text-secondary"
                        />
                        <p>
                            {m.totalSessions({ number: totalLessons })}
                        </p>
                    </div>
                </div>
                <hr class="h-1 w-12 border-0 bg-secondary" />

                {#if course.descriptionHTML}
                    <ReadMoreCustom
                        textContent={course.descriptionHTML}
                        textReadmore={course.descriptionMore}
                    />
                {/if}
                {#if course.skills && course.skills.length > 0}
                    <hr class="h-1 w-12 border-0 bg-secondary" />
                    <SkillsList skills={course.skills} />
                {/if}
            </div>
            <div
                class="group card col-span-1 w-full self-start overflow-hidden border border-base-content/5 bg-base-200 shadow shadow-base-content/5 hover:shadow-lg hover:shadow-base-content/5 lg:col-span-2"
            >
                <figure class="aspect-thumbnail169">
                    {#if courseThumbnail}
                        <Picture
                            blur={courseBlurThumbnail}
                            loading="eager"
                            meta={courseThumbnail}
                            alt={m.thumbnail({ title: course.title ?? "" })}
                            imageClass="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    {/if}
                </figure>

                <div class="card-body">
                    {#if course.price}
                        <div>
                            <p class="text-sm">
                                {m.teal_grassy_parakeet_buzz()}
                            </p>
                            <p class="text-2xl font-semibold">
                                {#if course.price}
                                    {course.price.toLocaleString("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                {/if}
                            </p>
                        </div>
                    {/if}

                    {#if course.registerUrl}
                        <ExternalAnchor
                            href={course.registerUrl}
                            class="btn btn-primary btn-block"
                        >
                            {m.registerNow()}
                        </ExternalAnchor>
                    {/if}
                    {#if course.price || course.registerUrl}
                        <div class="divider uppercase">{m.or()}</div>
                    {/if}
                    <div class="space-y-2">
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <a
                            use:scrollTo={"register-form"}
                            class="btn btn-outline btn-block"
                        >
                            Tư vấn ngay
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <HeroRoadMap
            isNavigate
            courses={heroRoadmapCourse}
            currentCourse={course.id}
        />
    </ContainerContent>
</section>
