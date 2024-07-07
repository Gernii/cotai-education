<script lang="ts">
    import { Container, ContainerContent } from "$lib/components/ui/container";
    import SectionTitle from "$lib/components/ui/section-title/section-title.svelte";

    import { contacts } from "$lib/utils/constants";

    import * as m from "$i18n/messages";

    import InfoForm from "./info-form.svelte";

    import LucidePhone from "~icons/lucide/phone";
    import LucideMail from "~icons/lucide/mail";
    import LogosMessenger from "~icons/logos/messenger";
</script>

<section>
    <Container>
        <ContainerContent>
            <SectionTitle>
                {@html m.major_cool_meerkat_startle()}
            </SectionTitle>
            <div
                class="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:gap-x-16"
            >
                <div class="flex flex-col">
                    <a
                        class="group card card-compact hover:bg-base-100 hover:shadow"
                        href={contacts.facebook}
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
                        class="group card card-compact hover:bg-base-100 hover:shadow"
                        href={`tel:${contacts.phone.tel}`}
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
                        class="group card card-compact hover:bg-base-100 hover:shadow"
                        href={`mailto:${contacts.email}`}
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
                <InfoForm />
            </div>
        </ContainerContent>
    </Container>
</section>
