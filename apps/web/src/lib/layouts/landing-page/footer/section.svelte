<script lang="ts">
    import LogoCotAI from "$lib/assets/logo/CoTAI-Ver0-TM-640.png?imagetools";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { Picture } from "$lib/components/ui/picture";
    import { ExternalAnchor } from "$lib/components/ui/external-anchor";

    import { scrollRef } from "$lib/libs/svelte-scrolling";

    import { routerPath } from "$lib/utils/constants";

    import * as m from "$i18n/messages";

    import ContactCard from "./contact-card.svelte";

    import LucideMail from "~icons/lucide/mail";
    import LucidePhoneCall from "~icons/lucide/phone-call";
    import { coursesMap } from "$lib/datas/courses/helpers";
    import LucideYoutube from "~icons/lucide/youtube";
    import LucideFacebook from "~icons/lucide/facebook";
    import LucideLinkedin from "~icons/lucide/linkedin";
    import LucideMapPin from "~icons/lucide/map-pin";
</script>

<footer
    id="footer"
    class="border-t border-base-content/5 bg-base-200 py-2"
    use:scrollRef={"footer"}
>
    <Container padding="top">
        <ContainerContent class="space-y-8">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2">
                <div class="space-y-8">
                    <div class="flex gap-x-8">
                        <div class="h-16 flex-shrink-0">
                            <Picture
                                meta={LogoCotAI}
                                alt={m.mainLogo()}
                                imageClass="w-auto"
                            />
                        </div>
                        <p class="text-md text-base-content/80">
                            {m.good_glad_crow_commend()}
                        </p>
                    </div>

                    <div class="space-y-6">
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <ContactCard title={m.email()}>
                                <LucideMail
                                    class="size-5 flex-shrink-0 group-hover:animate-jump"
                                    slot="icon"
                                />
                                <a
                                    href="mailto:contact@cot.ai"
                                    class="link-hover link"
                                    slot="details"
                                >
                                    contact@cot.ai
                                </a>
                            </ContactCard>

                            <ContactCard title={m.hotline()}>
                                <LucidePhoneCall
                                    class="size-5 flex-shrink-0 group-hover:animate-jump"
                                    slot="icon"
                                />
                                <a
                                    href="tel:+84815503467"
                                    class="link-hover link"
                                    slot="details"
                                >
                                    {m.phoneNumber()}
                                </a>
                            </ContactCard>
                        </div>
                        <div class="w-full space-y-2">
                            <div class="group flex flex-row gap-3">
                                <LucideMapPin
                                    class="size-5 flex-shrink-0 group-hover:animate-jump"
                                />
                                <ExternalAnchor
                                    href="https://www.google.com/maps/place/MDN+building/@10.8458901,106.6145654,17z/data=!3m1!4b1!4m5!3m4!1s0x31752b0733df578d:0x176cb06b6ce2d507!8m2!3d10.8459893!4d106.6166801"
                                    class="link-hover link text-sm"
                                    slot="details"
                                >
                                    {m.contacts_address_1()}
                                </ExternalAnchor>
                            </div>

                            <div class="group flex flex-row gap-3">
                                <LucideMapPin
                                    class="size-5 flex-shrink-0 group-hover:animate-jump"
                                />
                                <ExternalAnchor
                                    href="https://www.google.com/maps/place//@10.7640773,106.679528,17z/data=!3m1!4b1?entry=ttu"
                                    class="link-hover link text-sm"
                                >
                                    {m.contacts_address_2()}
                                </ExternalAnchor>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                    <div class="space-y-3">
                        <p
                            class="text-sm font-semibold uppercase text-base-content/80"
                        >
                            {m.course()}
                        </p>
                        <hr class="w-1/2 border-base-content/80" />
                        <ul class="space-y-2 font-semibold">
                            {#each coursesMap as [id, courseGetter]}
                                {#if courseGetter}
                                    {@const course = courseGetter()}
                                    <li>
                                        <a
                                            href={routerPath.courseId(id)}
                                            class="link-hover link"
                                        >
                                            {course.title}
                                        </a>
                                    </li>
                                {/if}
                            {/each}
                        </ul>
                    </div>
                    <div class="space-y-6">
                        <div class="space-y-3">
                            <p
                                class="text-sm font-semibold uppercase text-base-content/80"
                            >
                                {m.aboutus()}
                            </p>
                            <hr class="w-1/2 border-base-content/80" />
                            <ul class="space-y-2 font-semibold">
                                <li>
                                    <a
                                        href={routerPath.about}
                                        class="link-hover link"
                                    >
                                        {m.aboutUs()}
                                    </a>
                                </li>
                                <li>
                                    <ExternalAnchor
                                        href="https://gem.cot.ai"
                                        aria-label={m.gemCollection()}
                                        class="link-hover link"
                                    >
                                        <span>{m.gemCollection()}</span>
                                    </ExternalAnchor>
                                </li>
                                <li>
                                    <a
                                        href={routerPath.faq}
                                        aria-label={m.moving_aware_penguin_greet()}
                                        class="link-hover link"
                                    >
                                        <span>
                                            {m.moving_aware_penguin_greet()}
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!-- <div class="space-y-3">
                            <p
                                class="text-sm font-semibold uppercase text-base-content/80"
                            >
                                {m.least_livid_zebra_hush()}
                            </p>
                            <hr class="border-base-content/80" />

                            <ul class="space-y-2 font-semibold">
                                <li>
                                    <a
                                        href={routerPath.cookiePolicy}
                                        class="link-hover link"
                                        aria-label="Cookie Policy"
                                    >
                                        {m.cookiePolicy()}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={routerPath.privacyPolicy}
                                        class="link-hover link"
                                        aria-label="Privacy Policy"
                                    >
                                        {m.privacyPolicy()}
                                    </a>
                                </li>
                            </ul>
                        </div> -->
                    </div>
                </div>
            </div>
        </ContainerContent>
    </Container>
    <hr class="border-base-content/80" />
    <Container padding="none" class="py-2">
        <ContainerContent
            class="flex flex-col items-center justify-between gap-2 md:flex-row"
        >
            <p>
                © 2019 - {new Date().getFullYear()} CoTAI. All Rights Reserved
            </p>
            <div>
                <ExternalAnchor
                    href="https://www.facebook.com/cotaivn"
                    aria-label={"Facebook"}
                    class="btn btn-square"
                >
                    <LucideFacebook />
                </ExternalAnchor>
                <ExternalAnchor
                    href="https://www.linkedin.com/company/cotai/mycompany"
                    aria-label={"Linkedin"}
                    class="btn btn-square"
                >
                    <LucideLinkedin />
                </ExternalAnchor>
                <ExternalAnchor
                    href="https://www.youtube.com/@cotai"
                    aria-label={"Youtube"}
                    class="btn btn-square"
                >
                    <LucideYoutube />
                </ExternalAnchor>
            </div>
        </ContainerContent>
    </Container>
</footer>
