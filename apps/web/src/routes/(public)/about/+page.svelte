<script lang="ts">
    import { cx } from "cva";
    import { inview } from "svelte-inview";
    import { writable } from "svelte/store";

    import HeroPicture from "$lib/assets/pages/about/hero.jpg?imagetools";
    import CoTAIAIOpenDayPicture from "$lib/assets/pages/about/cotai-ai-open-day.jpg?imagetools";
    import OutstandingMarks2Picture from "$lib/assets/pages/about/outstanding-marks-2.png?imagetools";
    import LogoLeHongPhongPicture from "$lib/assets/logo/lhp.png?imagetools";
    import LogoGambaruPicture from "$lib/assets/logo/gambaru.png?imagetools";
    import LogoHCMUSPicture from "$lib/assets/logo/HCMUS.png?imagetools";
    import LogoHCMUTPicture from "$lib/assets/logo/HCMUT.png?imagetools";
    import LogoHUETPicture from "$lib/assets/logo/HUET.png?imagetools";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SEO } from "$lib/components/ui/seo";
    import { Picture } from "$lib/components/ui/picture";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import { AboutPageMembers, AboutPagePartnerItem } from "$lib/pages/about";

    import * as m from "$i18n/messages";

    let textAndImageGridClassName = cx(
        "grid grid-cols-1 gap-x-0 gap-y-4 text-justify md:grid-cols-2 md:gap-x-8 lg:gap-x-16",
    );

    let sectionH2TitleClassName = cx("text-xl font-bold sm:text-3xl");

    let wrapperClassName = cx("space-y-4 md:space-y-8");

    let isOurAdvantage = writable(false);
    let isOutstandingMarks = writable(false);
    let isOurTeam = writable(false);
    let isPartner = writable(false);
</script>

<SEO title={m.aboutus()} />

<section class="mt-header-space">
    <Container>
        <ContainerContent>
            <div>
                <Picture
                    meta={HeroPicture}
                    alt={m.mainLogo()}
                    imageClass="rounded-box"
                />
            </div>
        </ContainerContent>
    </Container>
</section>

<section>
    <Container>
        <ContainerContent class={wrapperClassName}>
            <div class="border-l-4 border-primary pl-4">
                <h1 class="text-2xl font-bold sm:text-4xl">
                    {m.ourStory()}
                </h1>
            </div>
            <div class={textAndImageGridClassName}>
                <div>
                    {@html m.ourStory_description()}
                </div>
                <div class="flex">
                    <Picture
                        meta={CoTAIAIOpenDayPicture}
                        alt={"CoTAI Ai Open Day Picture"}
                        imageClass="rounded-box h-auto"
                    />
                </div>
            </div>
        </ContainerContent>
    </Container>
</section>

<section
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isOurAdvantage)}
>
    <Container>
        <ContainerContent class={wrapperClassName}>
            <div
                class="border-l-4 border-secondary pl-4"
                class:opacity-0={!$isOurAdvantage}
                class:animate-fade={$isOurAdvantage}
            >
                <h2
                    class={sectionH2TitleClassName}
                    class:animate-fade-left={$isOurAdvantage}
                >
                    {m.ourAdvantage()}
                </h2>
            </div>
            <div
                class={textAndImageGridClassName}
                class:animate-fade-right={$isOurAdvantage}
                class:opacity-0={!$isOurAdvantage}
            >
                <div>
                    {@html m.ourAdvantage_description()}
                </div>
                <div>
                    <Picture
                        meta={CoTAIAIOpenDayPicture}
                        alt={"CoTAI Ai Open Day Picture"}
                        imageClass="rounded-box"
                    />
                </div>
            </div>
        </ContainerContent>
    </Container>
</section>

<section
    class="bg-primary/90 text-white"
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isOutstandingMarks)}
>
    <Container>
        <ContainerContent class={wrapperClassName}>
            <div
                class="border-l-4 border-secondary pl-2 sm:pl-4"
                class:opacity-0={!$isOutstandingMarks}
                class:animate-fade={$isOutstandingMarks}
            >
                <h2
                    class={sectionH2TitleClassName}
                    class:animate-fade-left={$isOutstandingMarks}
                >
                    {m.outstandingMarks()}
                </h2>
            </div>
            <div
                class={textAndImageGridClassName}
                class:animate-fade-left={$isOutstandingMarks}
                class:opacity-0={!$isOutstandingMarks}
            >
                <div>
                    {@html m.outstandingMarks_description()}
                </div>
                <div>
                    <Picture
                        meta={HeroPicture}
                        alt={"CoTAI Ai Open Day Picture"}
                        imageClass="rounded-box"
                    />
                </div>
            </div>
            <div
                class={textAndImageGridClassName}
                class:animate-fade-right={$isOutstandingMarks}
                class:opacity-0={!$isOutstandingMarks}
            >
                <div class="order-last md:order-none">
                    <Picture
                        meta={OutstandingMarks2Picture}
                        alt={"Đào tạo"}
                        imageClass="rounded-box"
                    />
                </div>
                <div>
                    {@html m.outstandingMarks_description_2()}
                </div>
            </div>
        </ContainerContent>
    </Container>
</section>

<section
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
</section>

<section
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
</section>
