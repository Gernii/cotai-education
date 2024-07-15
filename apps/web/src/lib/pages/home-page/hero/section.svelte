<script lang="ts">
    import "./styles.css";
    import { page } from "$app/stores";

    import { PUBLIC_REGISTER_NOW_URL } from "$env/static/public";

    import OutstandingMarks2Picture from "$lib/assets/pages/about/outstanding-marks-2.png?imagetools";

    import { ContainerContent } from "$lib/components/ui/container";
    import Container from "$lib/components/ui/container/container.svelte";
    import { ExternalAnchor } from "$lib/components/ui/external-anchor";

    import { scrollTo } from "$lib/libs/svelte-scrolling";

    import { roadmapParser } from "./roadmap-parser";
    import Image from "./image.svelte";

    import TeenyiconsDiscountSolid from "~icons/teenyicons/discount-solid";
    import { HeroRoadMap } from "$lib/features/hero-roadmap";
    import type { CourseProps } from "$lib/datas/courses/types";

    $: courseRoadmap = $page.data.courseRoadmap as CourseProps[];

    $: roadmapProgram = roadmapParser(courseRoadmap);

    let isDiscountVisible = false;
    // TODO: Implement i18n
</script>

<section
    class="flex min-h-dvh w-full flex-col justify-center bg-primary/10 pt-header-space-sm dark:bg-base-300"
>
    <Container>
        <ContainerContent class="space-y-8">
            <div class="flex flex-row justify-between gap-y-8">
                <div
                    class="flex flex-col justify-center space-y-1 lg:space-y-4"
                >
                    <div class="space-y-6 text-xl font-bold">
                        <div class="space-y-3 text-4xl lg:text-5xl xl:text-6xl">
                            <p>Học tăng tốc</p>
                            <p>
                                <span
                                    class="relative z-[1] after:absolute after:bottom-1 after:left-0 after:-z-[1] after:h-1 after:w-full after:bg-primary/70 after:lg:h-2"
                                >
                                    lập trình dự án AI
                                </span>
                            </p>
                            <p>cùng kỹ sư CoTAI</p>
                        </div>
                        <div class="text-2xl lg:text-3xl xl:text-4xl">
                            from <span class="italic">zero</span> to
                            <p>
                                <span class="text-primary">
                                    Accelerated Mastery
                                </span>
                                in AI
                            </p>
                        </div>
                    </div>

                    <div>
                        <ExternalAnchor
                            class="btn btn-secondary text-nowrap text-primary-content"
                            href={PUBLIC_REGISTER_NOW_URL}
                        >
                            Đăng ký ngay
                        </ExternalAnchor>
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <a
                            class="btn btn-ghost text-nowrap border-0 text-secondary"
                            use:scrollTo={"register-form"}
                        >
                            Liên hệ tư vấn
                        </a>
                    </div>
                </div>
                <div class="hidden flex-col gap-y-6 md:flex">
                    <div class="flex gap-x-6">
                        <Image
                            meta={OutstandingMarks2Picture}
                            alt={"Đào tạo"}
                            class="image-top-left"
                        />
                        <Image
                            meta={OutstandingMarks2Picture}
                            alt={"Đào tạo"}
                            class="image-top-right"
                        />
                    </div>
                    <div class="flex gap-x-6">
                        <Image
                            meta={OutstandingMarks2Picture}
                            alt={"Đào tạo"}
                            class="image-bottom-left"
                        />
                        <Image
                            meta={OutstandingMarks2Picture}
                            alt={"Đào tạo"}
                            class="image-bottom-right"
                        />
                    </div>
                </div>
            </div>
            <HeroRoadMap isNavigate={false} courses={roadmapProgram} />
            {#if isDiscountVisible}
                <div
                    class="card flex-row gap-x-2 bg-error text-primary-content"
                >
                    <div class="flex flex-row gap-x-2 px-4 py-2">
                        <div class="mt-1">
                            <TeenyiconsDiscountSolid
                                class="size-4 flex-shrink-0 sm:size-6"
                            />
                        </div>
                        <div>
                            <p class="text-base font-bold sm:text-lg">
                                Ưu đãi lên đến 15,000,000đ
                            </p>
                            <p class="text-sm sm:text-base">
                                Giảm 100% cho học sinh cấp 3
                            </p>
                            <p class="text-xs sm:text-sm">
                                *Ưu đãi năm học mới trước 29/06/2024
                            </p>
                        </div>
                    </div>
                </div>
            {/if}
        </ContainerContent>
    </Container>
</section>
