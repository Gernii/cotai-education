<script lang="ts">
    import LogoCotAI from "$lib/assets/logo/CoTAI-Ver0-640.png?imagetools";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { Picture } from "$lib/components/ui/picture";
    import { ExternalAnchor } from "$lib/components/ui/external-anchor";

    import { scrollRef } from "$lib/libs/svelte-scrolling";

    import { routerPath } from "$lib/utils/constants";

    import * as m from "$i18n/messages";

    import ContactCard from "./contact-card.svelte";

    import LucideGem from "~icons/lucide/gem";
    import LucideMail from "~icons/lucide/mail";
    import LucideClock from "~icons/lucide/clock";
    import LucidePhoneCall from "~icons/lucide/phone-call";
    import { coursesMap } from "$lib/datas/courses/healpers";
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
            <div
                class="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-3 lg:grid-cols-2"
            >
                <div class="space-y-4">
                    <div class="h-16">
                        <Picture
                            meta={LogoCotAI}
                            alt={m.mainLogo()}
                            imageClass="w-auto"
                        />
                    </div>
                    <p class="text-base-content/80">
                        {m.good_glad_crow_commend()}
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
                </div>
                <div
                    class="col-span-1 grid grid-cols-1 gap-x-8 gap-y-6 md:col-span-2 md:grid-cols-2 lg:col-span-1"
                >
                    <div class="space-y-3">
                        <p
                            class="text-sm font-semibold uppercase text-base-content/80"
                        >
                            {m.course()}
                        </p>
                        <hr class="border-base-content/80" />
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
                            <hr class="border-base-content/80" />
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
                                        class="link-hover link link-secondary"
                                    >
                                        <span>{m.gemCollection()}</span>
                                        <LucideGem class="inline" />
                                    </ExternalAnchor>
                                </li>
                            </ul>
                        </div>
                        <div class="space-y-3">
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
                        </div>
                    </div>
                </div>
            </div>
            <div class="space-y-6">
                <div class="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-3">
                    <ContactCard title={m.email()}>
                        <LucideMail
                            class="size-8 flex-shrink-0 group-hover:animate-jump"
                            slot="icon"
                        />
                        <a
                            href="mailto:contact@cot.ai"
                            class="link-hover link text-lg font-semibold"
                            slot="details"
                        >
                            contact@cot.ai
                        </a>
                    </ContactCard>

                    <ContactCard title={m.hotline()}>
                        <LucidePhoneCall
                            class="size-8 flex-shrink-0 group-hover:animate-jump"
                            slot="icon"
                        />
                        <a
                            href="tel:+84815503467"
                            class="link-hover link text-lg font-semibold"
                            slot="details"
                        >
                            {m.phoneNumber()}
                        </a>
                    </ContactCard>

                    <ContactCard title={m.safe_clear_sparrow_aim()}>
                        <LucideClock
                            class="size-8 flex-shrink-0 group-hover:animate-jump"
                            slot="icon"
                        />
                        <p class="text-lg font-semibold" slot="details">
                            Mon-Fri: 8:00 - 17:30
                        </p>
                    </ContactCard>
                </div>
                <div class="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-3">
                    <ContactCard
                        title={m.tired_bland_leopard_bubble({ idx: 1 })}
                    >
                        <LucideMapPin
                            class="size-8 flex-shrink-0 group-hover:animate-jump"
                            slot="icon"
                        />
                        <ExternalAnchor
                            href="https://www.google.com/maps/place/MDN+building/@10.8458901,106.6145654,17z/data=!3m1!4b1!4m5!3m4!1s0x31752b0733df578d:0x176cb06b6ce2d507!8m2!3d10.8459893!4d106.6166801"
                            class="link-hover link text-sm font-semibold"
                            slot="details"
                        >
                            <p>{m.weary_white_mallard_trip()}</p>
                            <p>
                                {m.contacts_address_1()}
                            </p>
                        </ExternalAnchor>
                    </ContactCard>

                    <ContactCard
                        title={m.tired_bland_leopard_bubble({ idx: 2 })}
                    >
                        <LucideMapPin
                            class="size-8 flex-shrink-0 group-hover:animate-jump"
                            slot="icon"
                        />
                        <ExternalAnchor
                            href="https://www.google.com/maps/place//@10.7640773,106.679528,17z/data=!3m1!4b1?entry=ttu"
                            class="link-hover link text-sm font-semibold"
                            slot="details"
                        >
                            <p>{m.clean_due_carp_clap()}</p>
                            <p>
                                {m.contacts_address_2()}
                            </p>
                        </ExternalAnchor>
                    </ContactCard>

                    <ContactCard
                        title={m.tired_bland_leopard_bubble({ idx: 3 })}
                    >
                        <LucideMapPin
                            class="size-8 flex-shrink-0 group-hover:animate-jump"
                            slot="icon"
                        />
                        <ExternalAnchor
                            href="https://www.google.com/maps/place/F%2FC+Coffee/@10.8211744,106.6369177,21z/data=!4m15!1m8!3m7!1s0x3175296504f6eeaf:0x7aee623f96a50e4b!2zOSBOZ3V54buFbiBT4bu5IFPDoWNoLCBQaMaw4budbmcgMTUsIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!3b1!8m2!3d10.8230197!4d106.63846!16s%2Fg%2F11f10dh91s!3m5!1s0x3175290acc53959b:0xa1f1474055c95f10!8m2!3d10.821143!4d106.6368483!16s%2Fg%2F11hgdmdyxt?entry=ttu"
                            class="link-hover link text-sm font-semibold"
                            slot="details"
                        >
                            {m.contacts_address_3()}
                        </ExternalAnchor>
                    </ContactCard>
                </div>
            </div>
        </ContainerContent>
    </Container>
    <hr class="border-base-content/80" />
    <Container padding="none" class="py-2">
        <ContainerContent>
            <p>
                © 2019 - {new Date().getFullYear()} CoTAI. All Rights Reserved
            </p>
        </ContainerContent>
    </Container>
</footer>
