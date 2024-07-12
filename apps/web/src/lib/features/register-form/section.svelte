<script lang="ts">
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import SectionTitle from "$lib/components/ui/section-title/section-title.svelte";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import { contacts } from "$lib/utils/constants";

    import * as m from "$i18n/messages";

    import InfoForm from "./info-form.svelte";

    import LucidePhone from "~icons/lucide/phone";
    import LucideMail from "~icons/lucide/mail";
    import LogosMessenger from "~icons/logos/messenger";

    let isInview = writable(false);
</script>

<section
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isInview)}
>
    <Container>
        <ContainerContent
            class="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:gap-x-16"
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
                <div class="flex flex-col">
                    <a
                        class="group card card-compact delay-0 hover:bg-base-100 hover:shadow"
                        href={contacts.facebook}
                        class:opacity-0={!$isInview}
                        class:animate-fade-up={$isInview}
                    >
                        <div class="card-body flex-row items-center gap-x-4">
                            <div class="group-hover:animate-jump">
                                <LogosMessenger />
                            </div>
                            <div>
                                <p
                                    class="text-lg font-bold group-hover:text-primary"
                                >
                                    {m.stale_fair_pigeon_bake()}
                                </p>
                                <p class="text-sm text-base-content/50">
                                    {m.aqua_game_ostrich_leap()}
                                </p>
                            </div>
                        </div>
                    </a>
                    <a
                        class="group card card-compact animate-delay-150 hover:bg-base-100 hover:shadow"
                        href={`tel:${contacts.phone.tel}`}
                        class:opacity-0={!$isInview}
                        class:animate-fade-up={$isInview}
                    >
                        <div class="card-body flex-row items-center gap-x-4">
                            <div class="group-hover:animate-jump">
                                <LucidePhone />
                            </div>
                            <div>
                                <p
                                    class="text-lg font-bold group-hover:text-primary"
                                >
                                    {m.nimble_low_lamb_cuddle()}
                                </p>
                                <p class="text-sm text-base-content/50">
                                    {m.mushy_teary_monkey_drum({
                                        phone: contacts.phone.tel,
                                    })}
                                </p>
                            </div>
                        </div>
                    </a>
                    <a
                        class="group card card-compact animate-delay-300 hover:bg-base-100 hover:shadow"
                        href={`mailto:${contacts.email}`}
                        class:opacity-0={!$isInview}
                        class:animate-fade-up={$isInview}
                    >
                        <div class="card-body flex-row items-center gap-x-4">
                            <div class="group-hover:animate-jump">
                                <LucideMail />
                            </div>
                            <div>
                                <p
                                    class="text-lg font-bold group-hover:text-primary"
                                >
                                    {m.green_petty_ocelot_dazzle()}
                                </p>
                                <p class="text-sm text-base-content/50">
                                    {m.free_such_otter_clip({
                                        email: contacts.email,
                                    })}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class:opacity-0={!$isInview} class:animate-jump-in={$isInview}>
                <InfoForm />
            </div>
        </ContainerContent>
    </Container>
</section>
