<script lang="ts">
    import HeroPicture from "$lib/assets/pages/about/hero.jpg?imagetools";
    import OutstandingMarks2Picture from "$lib/assets/pages/about/outstanding-marks-2.png?imagetools";
    import Group3SteamHackPicture from "$lib/assets/images/group-3-steamhack.jpg?imagetools";

    import { ContainerContent } from "$lib/components/ui/container";
    import Container from "$lib/components/ui/container/container.svelte";
    import { Picture } from "$lib/components/ui/picture";

    import * as m from "$i18n/messages";

    import { roadmapParser } from "./roadmap-parser";

    import TeenyiconsDiscountSolid from "~icons/teenyicons/discount-solid";
    import HeroiconsCheck16Solid from "~icons/heroicons/check-16-solid";
    import { HeroRoadMap } from "$lib/features/hero-roadmap";

    let roadmapProgram = roadmapParser();

    let isDiscountVisible = false;
</script>

<section
    class="flex min-h-dvh w-full flex-col justify-center bg-secondary/10 pt-header-space-sm dark:bg-base-300"
>
    <Container>
        <ContainerContent>
            {#if isDiscountVisible}
                <div class="relative pb-16">
                    <div
                        class="card static -top-32 mx-auto flex w-full flex-row gap-x-2 bg-error text-error-content"
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
                </div>
            {/if}
            <div class="grid grid-cols-1 gap-y-8 md:grid-cols-2">
                <div class="space-y-1 lg:space-y-4">
                    <p class="text-lg font-bold text-primary lg:text-3xl">
                        CoTAI Education
                    </p>
                    <div class="text-xl font-bold sm:text-2xl lg:text-4xl">
                        <p>Trung tâm đào tạo</p>
                        <span
                            class="relative z-[1] after:absolute after:bottom-1 after:left-0 after:-z-[1] after:h-1 after:w-full after:bg-secondary/70 after:lg:h-2"
                        >
                            Trí Tuệ Nhân Tạo
                        </span>
                        <p>
                            <span
                                class="tooltip z-[1] text-secondary"
                                data-tip="9/2019">đầu tiên</span
                            >
                            cho học sinh
                            <span class="whitespace-nowrap">cấp 3</span>
                        </p>
                    </div>
                    <div class="text-sm lg:text-base">
                        <p>
                            <HeroiconsCheck16Solid
                                class="inline-block size-7 flex-shrink-0 text-secondary"
                            />
                            <span
                                >4 năm kinh nghiệm giảng dạy ở trường cấp 3</span
                            >
                        </p>
                        <p>
                            <HeroiconsCheck16Solid
                                class="inline-block size-7 flex-shrink-0 text-secondary"
                            />
                            <span>Đội ngũ giáo viên giỏi và tận tâm</span>
                        </p>
                        <p>
                            <HeroiconsCheck16Solid
                                class="inline-block size-7 flex-shrink-0 text-secondary"
                            />
                            <span>Hệ thống công nghệ học tập tiên tiến</span>
                        </p>
                    </div>
                </div>
                <div class="flex h-96 flex-col space-y-2">
                    <div class="h-1/2">
                        <Picture
                            meta={HeroPicture}
                            alt={m.mainLogo()}
                            imageClass="rounded-box object-cover"
                        />
                    </div>
                    <div class="grid h-1/2 grid-cols-2 gap-x-2">
                        <div class="h-32 overflow-hidden">
                            <Picture
                                meta={OutstandingMarks2Picture}
                                alt={"Đào tạo"}
                                imageClass="rounded-box object-cover"
                            />
                        </div>
                        <div class="h-32 overflow-hidden">
                            <Picture
                                meta={Group3SteamHackPicture}
                                alt={"Đào tạo"}
                                imageClass="rounded-box object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <HeroRoadMap isNavigate={false} courses={roadmapProgram} />
        </ContainerContent>
    </Container>
</section>
