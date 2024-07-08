<script lang="ts">
    import HeroPicture from "$lib/assets/pages/about/hero.jpg?imagetools";
    import OutstandingMarks2Picture from "$lib/assets/pages/about/outstanding-marks-2.png?imagetools";
    import Group3SteamHackPicture from "$lib/assets/images/group-3-steamhack.jpg?imagetools";

    import { ContainerContent } from "$lib/components/ui/container";
    import Container from "$lib/components/ui/container/container.svelte";
    import { Picture } from "$lib/components/ui/picture";

    import * as m from "$i18n/messages";

    import LucideArrowBigRight from "~icons/lucide/arrow-big-right";
    import LucideGraduationCap from "~icons/lucide/graduation-cap";
    import TeenyiconsDiscountSolid from "~icons/teenyicons/discount-solid";
    import HeroiconsCheck16Solid from "~icons/heroicons/check-16-solid";
    import { CourseIds } from "$lib/datas/courses/healpers";

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
                        <!-- {@html m.homepage_hero_title()} -->
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
                <!-- <Picture
						meta={WhoWeArePNG}
						author={'Image by storyset on Freepik'}
						alt={m.whoWeAre_thumbnail()}
					/> -->
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
            <div class="space-y-2">
                <div class="text-center">
                    <span class="font-semibold">
                        {m.weird_wild_chipmunk_accept()}
                    </span>
                    <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 323.057 323.057"
                        xml:space="preserve"
                        class="inline size-8 -rotate-90 -scale-x-100 transform fill-base-content"
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

                <div class="card bg-base-100">
                    <div
                        class="flex flex-col items-center justify-between gap-x-1 gap-y-2 px-3 py-2 sm:gap-x-4 lg:flex-row lg:px-6 lg:py-4"
                    >
                        <div
                            class="relative flex w-full flex-grow items-center justify-between gap-x-1 sm:gap-x-4"
                        >
                            <div class="w-1/2">
                                <a
                                    class="btn w-full bg-base-300"
                                    href={`#${CourseIds.python4ai}`}
                                >
                                    <LucideGraduationCap
                                        class="size-4 flex-shrink-0 lg:size-6"
                                    />
                                    <span
                                        class="text-sm sm:text-base lg:text-lg"
                                        >Python4AI</span
                                    >
                                </a>
                            </div>

                            <LucideArrowBigRight
                                class="size-6 flex-shrink-0 sm:size-8"
                            />
                            <div class="w-1/2">
                                <a
                                    class="btn w-full bg-base-300"
                                    href={`#${CourseIds.mc4ai}`}
                                >
                                    <LucideGraduationCap
                                        class="size-4 flex-shrink-0 lg:size-6"
                                    />
                                    <span
                                        class="text-sm sm:text-base lg:text-lg"
                                        >MC4AI</span
                                    >
                                </a>
                            </div>
                        </div>
                        <LucideArrowBigRight
                            class="hidden size-6 flex-shrink-0 sm:size-8 lg:block"
                        />
                        <div
                            class="relative flex w-full flex-grow items-center justify-between gap-x-1 sm:gap-x-4"
                        >
                            <div class="w-1/2">
                                <a
                                    class="btn w-full bg-base-300"
                                    href={`#${CourseIds.ml4ai}`}
                                >
                                    <LucideGraduationCap
                                        class="size-4 flex-shrink-0 lg:size-6"
                                    />
                                    <span
                                        class="text-sm sm:text-base lg:text-lg"
                                        >ML4AI</span
                                    >
                                </a>
                            </div>
                            <LucideArrowBigRight
                                class="size-6 flex-shrink-0 sm:size-8"
                            />
                            <div class="w-1/2">
                                <a
                                    class="btn w-full bg-base-300"
                                    href={`#${CourseIds.dl4ai}`}
                                >
                                    <LucideGraduationCap
                                        class="size-4 flex-shrink-0 lg:size-6"
                                    />
                                    <span
                                        class="text-sm sm:text-base lg:text-lg"
                                        >DL4AI</span
                                    >
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerContent>
    </Container>
</section>
