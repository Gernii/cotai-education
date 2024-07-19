<script lang="ts">
    import "./styles.css";
    import { page } from "$app/stores";

    import { PUBLIC_REGISTER_NOW_URL } from "$env/static/public";

    import Thumbnail1Picture from "$lib/assets/images/homepage-thumbnail/1.jpg?imagetools";
    import Thumbnail2Picture from "$lib/assets/images/homepage-thumbnail/2.jpg?imagetools";
    import Thumbnail3Picture from "$lib/assets/images/homepage-thumbnail/3.png?imagetools";
    import Thumbnail4Picture from "$lib/assets/images/homepage-thumbnail/4.jpg?imagetools";

    import { ContainerContent } from "$lib/components/ui/container";
    import Container from "$lib/components/ui/container/container.svelte";
    import { ExternalAnchor } from "$lib/components/ui/external-anchor";

    import { scrollTo } from "$lib/libs/svelte-scrolling";

    import Image from "./image.svelte";

    import TeenyiconsDiscountSolid from "~icons/teenyicons/discount-solid";
    import { HeroRoadMap } from "$lib/features/hero-roadmap";
    import type { HeroRoadmapCourse } from "$lib/features/hero-roadmap/types";

    $: heroRoadmapCourse = $page.data.heroRoadmapCourse as HeroRoadmapCourse[];

    let isDiscountVisible = false;
    // TODO: Implement i18n
</script>

<section
    class="flex min-h-dvh w-full flex-col justify-center pt-header-space-sm"
>
    <Container>
        <ContainerContent class="space-y-8">
            <div class="flex flex-col justify-between gap-y-8 md:flex-row">
                <div
                    class="flex flex-col justify-center space-y-1 lg:space-y-4"
                >
                    <div class="space-y-2 text-xl font-bold md:space-y-6">
                        <div
                            class="space-y-1 text-3xl md:space-y-3 lg:text-4xl xl:text-6xl"
                        >
                            <p>Học tăng tốc</p>
                            <p>
                                <span class="italic text-secondary">
                                    lập trình dự án AI
                                </span>
                            </p>
                            <p>cùng kỹ sư CoTAI</p>
                        </div>
                        <div
                            class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl"
                        >
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
                <div class="flex flex-row gap-x-2">
                    <div class="flex flex-col gap-y-2">
                        <Image
                            meta={Thumbnail4Picture}
                            alt={"Đào tạo"}
                            class="image-top-left basis-3/5"
                        />
                        <Image
                            meta={Thumbnail2Picture}
                            alt={"Đào tạo"}
                            class="image-bottom-left basis-2/5"
                        />
                    </div>
                    <div class="flex flex-col gap-y-2">
                        <Image
                            meta={Thumbnail1Picture}
                            alt={"Đào tạo"}
                            class="image-top-right basis-2/5"
                        />

                        <Image
                            meta={Thumbnail3Picture}
                            alt={"Đào tạo"}
                            class="image-bottom-right basis-3/5"
                        />
                    </div>
                </div>
            </div>
            <HeroRoadMap isNavigate={false} courses={heroRoadmapCourse} />
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
