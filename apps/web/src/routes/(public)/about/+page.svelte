<script lang="ts">
    import { cx } from "cva";
    import { inview } from "svelte-inview";
    import { writable } from "svelte/store";

    import HeroPicture from "$lib/assets/pages/about/hero.jpg?imagetools";
    import LogoCirclePicture from "$lib/assets/images/about-us/1b.png?imagetools";
    import OurPride1Picture from "$lib/assets/images/about-us/2.jpg?imagetools";
    import OurPride2Picture from "$lib/assets/images/about-us/3.png?imagetools";
    import PayForwardPicture from "$lib/assets/images/about-us/4.jpg?imagetools";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SEO } from "$lib/components/ui/seo";
    import { Picture } from "$lib/components/ui/picture";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import * as m from "$i18n/messages";

    import { RegisterEnd } from "$lib/features/register-end";

    export let data;

    $: visionAndMissionDescription = data.visionAndMissionDescription;
    $: ourPride = data.ourPride;
    $: payForward = data.payForward;

    let textAndImageGridClassName = cx(
        "grid grid-cols-1 items-center gap-x-0 gap-y-4 text-justify md:grid-cols-5 md:gap-x-8 lg:gap-x-16",
    );

    let sectionH2TitleClassName = cx("text-xl font-bold sm:text-3xl");

    let wrapperClassName = cx("space-y-4");

    let isOurPride = writable(false);
    let isPayForward = writable(false);
</script>

<SEO title={m.aboutus()} />

<section class="mt-header-space">
    <Container>
        <ContainerContent class={wrapperClassName}>
            <div class="border-l-4 border-primary pl-4">
                <h1 class="text-2xl font-bold sm:text-4xl">
                    {m.ourStory()}
                </h1>
            </div>
            <div class={textAndImageGridClassName}>
                <div class="prose md:col-span-3">
                    {@html visionAndMissionDescription}
                </div>
                <div class="flex md:col-span-2">
                    <Picture
                        meta={LogoCirclePicture}
                        loading="eager"
                        alt={m.ourStory()}
                        imageClass="rounded-box h-auto"
                    />
                </div>
            </div>
        </ContainerContent>
    </Container>
</section>

<section
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isOurPride)}
>
    <Container>
        <ContainerContent class={wrapperClassName}>
            <div
                class="border-l-4 border-secondary pl-4"
                class:opacity-0={!$isOurPride}
                class:animate-fade={$isOurPride}
            >
                <h2
                    class={sectionH2TitleClassName}
                    class:animate-fade-left={$isOurPride}
                >
                    {m.fuzzy_bland_crocodile_surge()}
                </h2>
            </div>
            <div
                class="text-xl"
                class:animate-fade-left={$isOurPride}
                class:opacity-0={!$isOurPride}
            >
                {@html ourPride.subtitle}
            </div>
            <div
                class="prose text-justify md:col-span-3"
                class:animate-fade-right={$isOurPride}
                class:opacity-0={!$isOurPride}
            >
                {@html ourPride.main}
            </div>
            <div
                class={textAndImageGridClassName}
                class:animate-fade-right={$isOurPride}
                class:opacity-0={!$isOurPride}
            >
                <div class="md:col-span-2">
                    <Picture
                        meta={OurPride1Picture}
                        alt={m.fuzzy_bland_crocodile_surge()}
                        imageClass="rounded-box"
                    />
                </div>
                <div class="prose md:col-span-3">
                    {@html ourPride.sub[0]}
                </div>
            </div>
            <div
                class={textAndImageGridClassName}
                class:animate-fade-right={$isOurPride}
                class:opacity-0={!$isOurPride}
            >
                <div class="md:col-span-2">
                    <Picture
                        meta={OurPride2Picture}
                        alt={m.fuzzy_bland_crocodile_surge()}
                        imageClass="rounded-box"
                    />
                </div>
                <div class="prose md:col-span-3">
                    {@html ourPride.sub[1]}
                </div>
            </div>
        </ContainerContent>
    </Container>
</section>

<section
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isPayForward)}
>
    <Container>
        <ContainerContent class={wrapperClassName}>
            <div
                class={textAndImageGridClassName}
                class:animate-fade-right={$isPayForward}
                class:opacity-0={!$isPayForward}
            >
                <div class="col-span-3">
                    <div class="pb-4">
                        <div
                            class="border-l-4 border-secondary pl-4"
                            class:opacity-0={!$isPayForward}
                            class:animate-fade={$isPayForward}
                        >
                            <h2
                                class={sectionH2TitleClassName}
                                class:animate-fade-left={$isPayForward}
                            >
                                {m.simple_tasty_koala_embrace()}
                            </h2>
                        </div>
                    </div>
                    <div class="prose md:col-span-3">
                        {@html payForward}
                    </div>
                </div>
                <div class="md:col-span-2">
                    <Picture
                        meta={PayForwardPicture}
                        alt={m.simple_tasty_koala_embrace()}
                        imageClass="rounded-box"
                    />
                </div>
            </div>
            <div
                class:opacity-0={!$isPayForward}
                class:animate-fade-up={$isPayForward}
                class="space-y-4"
            >
                <div class="card bg-base-content/10 p-4 text-secondary">
                    {m.wide_royal_haddock_blink()}
                </div>
                <Picture
                    meta={HeroPicture}
                    alt={m.simple_tasty_koala_embrace()}
                    imageClass="rounded-box"
                />
            </div>
        </ContainerContent>
    </Container>
</section>

<RegisterEnd />
<!-- <section
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isOurTeam)}
>
    <Container>
        <ContainerContent class={wrapperClassName}>
            <div class="flex justify-center">
                <div
                    class="border-b-4 border-secondary pb-1"
                    class:opacity-0={!$isOurTeam}
                    class:animate-fade={$isOurTeam}
                >
                    <h2
                        class={`${sectionH2TitleClassName} text-center`}
                        class:animate-fade-down={$isOurTeam}
                    >
                        {m.ourTeam()}
                    </h2>
                </div>
            </div>
            <div
                class:animate-fade-up={$isOurTeam}
                class:opacity-0={!$isOurTeam}
            >
                <AboutPageMembers />
            </div>
        </ContainerContent>
    </Container>
</section> -->

<!-- <section
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isPartner)}
>
    <Container>
        <ContainerContent class={wrapperClassName}>
            <div class="flex justify-center">
                <div
                    class="border-b-4 border-secondary pb-1"
                    class:opacity-0={!$isPartner}
                    class:animate-fade={$isPartner}
                >
                    <h2
                        class={`${sectionH2TitleClassName} text-center`}
                        class:animate-fade-down={$isPartner}
                    >
                        {m.partner()}
                    </h2>
                </div>
            </div>
            <div
                class="flex flex-wrap items-center justify-center gap-10"
                class:animate-fade-up={$isPartner}
                class:opacity-0={!$isPartner}
            >
                <AboutPagePartnerItem
                    meta={LogoLeHongPhongPicture}
                    name={m.partner_lhp_title()}
                />
                <AboutPagePartnerItem
                    meta={LogoHCMUSPicture}
                    name={m.partner_universityOfScience_title()}
                />
                <AboutPagePartnerItem
                    meta={LogoHCMUTPicture}
                    name={m.partner_universityOfTechnology_title()}
                />
                <AboutPagePartnerItem
                    meta={LogoHUETPicture}
                    name={m.partner_engineeringAndTechnologyHueUniversity_title()}
                />
                <AboutPagePartnerItem
                    meta={LogoGambaruPicture}
                    name={m.partner_gambaru_title()}
                />
            </div>
        </ContainerContent>
    </Container>
</section> -->
