<script lang="ts">
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";
    import { cx } from "cva";

    import Zalo from "$lib/assets/logo/zalo.png?imagetools";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import SectionTitle from "$lib/components/ui/section-title/section-title.svelte";
    import { Picture } from "$lib/components/ui/picture";
    import { ExternalAnchor } from "$lib/components/ui/external-anchor";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";
    import { scrollRef } from "$lib/libs/svelte-scrolling";

    import { contacts } from "$lib/utils/constants";

    import * as m from "$i18n/messages";

    import InfoForm from "./info-form.svelte";

    import LucideCircleCheckBig from "~icons/lucide/circle-check-big";
    import LucidePhone from "~icons/lucide/phone";
    import LucideMail from "~icons/lucide/mail";
    import LogosMessenger from "~icons/logos/messenger";

    let isInview = writable(false);

    $: contactAnchorClassnames = (className?: string) =>
        cx(
            "group card card-compact hover:bg-base-200 hover:shadow",
            {
                "opacity-0": !$isInview,
                "animate-fade-up": $isInview,
            },
            className,
        );
</script>

<section
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isInview)}
    use:scrollRef={"register-form"}
    id="register-form"
>
    <Container>
        <ContainerContent
            class="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:gap-x-8"
        >
            <div>
                <div
                    class:opacity-0={!$isInview}
                    class:animate-fade-left={$isInview}
                >
                    <SectionTitle>
                        {@html m.major_cool_meerkat_startle()}
                    </SectionTitle>
                </div>
                <div class="space-y-6">
                    <div class="space-y-2">
                        <div class="flex items-center gap-x-2">
                            <LucideCircleCheckBig />
                            Giúp học viên xác định rõ mục tiêu ngắn hạn và dài hạn
                        </div>
                        <div class="flex items-center gap-x-2">
                            <LucideCircleCheckBig />
                            Thảo luận về chương trình đào tạo CAM
                        </div>
                        <div class="flex items-center gap-x-2">
                            <LucideCircleCheckBig />
                            Thống nhất lộ trình, hình thức và khóa học đăng ký
                        </div>
                    </div>
                    <div>
                        <ExternalAnchor
                            class={contactAnchorClassnames()}
                            href={contacts.facebook}
                        >
                            <div
                                class="card-body flex-row items-center gap-x-4"
                            >
                                <div class="group-hover:animate-jump">
                                    <LogosMessenger />
                                </div>
                                <div>
                                    <p
                                        class="text-lg font-bold group-hover:text-primary"
                                    >
                                        {m.stale_fair_pigeon_bake()}
                                    </p>
                                </div>
                            </div>
                        </ExternalAnchor>

                        <ExternalAnchor
                            class={contactAnchorClassnames("animate-delay-150")}
                            href={contacts.zalo}
                        >
                            <div
                                class="card-body flex-row items-center gap-x-4"
                            >
                                <div
                                    class="size-5 flex-shrink-0 group-hover:animate-jump"
                                >
                                    <Picture meta={Zalo} />
                                </div>
                                <div>
                                    <p
                                        class="text-lg font-bold group-hover:text-primary"
                                    >
                                        {contacts.phone.value}
                                    </p>
                                </div>
                            </div>
                        </ExternalAnchor>
                        <a
                            class={contactAnchorClassnames("animate-delay-300")}
                            href={`tel:${contacts.phone.tel}`}
                        >
                            <div
                                class="card-body flex-row items-center gap-x-4"
                            >
                                <div class="group-hover:animate-jump">
                                    <LucidePhone />
                                </div>
                                <div>
                                    <p
                                        class="text-lg font-bold group-hover:text-primary"
                                    >
                                        {contacts.phone.value}
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a
                            class={contactAnchorClassnames("animate-delay-500")}
                            href={`mailto:${contacts.email}`}
                        >
                            <div
                                class="card-body flex-row items-center gap-x-4"
                            >
                                <div class="group-hover:animate-jump">
                                    <LucideMail />
                                </div>
                                <div>
                                    <p
                                        class="text-lg font-bold group-hover:text-primary"
                                    >
                                        {contacts.email}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class:opacity-0={!$isInview} class:animate-jump-in={$isInview}>
                <InfoForm />
            </div>
        </ContainerContent>
    </Container>
</section>
