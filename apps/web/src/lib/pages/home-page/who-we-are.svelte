<script lang="ts">
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import WhoWeArePNG from "$lib/assets/pages/home-page/who-we-are.png?imagetools";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";
    import { Picture } from "$lib/components/ui/picture";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import * as m from "$i18n/messages";

    let isInview = writable(false);
</script>

<section
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isInview)}
>
    <Container>
        <ContainerContent
            class="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-9"
        >
            <div
                class="col-span-1 self-center px-4 md:col-span-4"
                class:opacity-0={!$isInview}
                class:animate-fade-left={$isInview}
            >
                <Picture
                    meta={WhoWeArePNG}
                    author={"Image by storyset on Freepik"}
                    alt={m.whoWeAre_thumbnail()}
                />
                <!-- <img src={WhoWeAreSVG} alt={m.whoWeAre_thumbnail()} /> -->
            </div>
            <div
                class="col-span-1 self-center md:col-span-5"
                class:opacity-0={!$isInview}
                class:animate-fade-right={$isInview}
            >
                <SectionTitle>{m.whoweare()}</SectionTitle>
                <div class="prose">
                    <p>{m.whoweareDescription()}</p>
                    <p>
                        {m.whoweareDescription2()}
                    </p>
                </div>
            </div>
        </ContainerContent>
    </Container>
</section>
