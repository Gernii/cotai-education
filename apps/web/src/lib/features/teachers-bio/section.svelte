<script lang="ts">
    import "keen-slider/keen-slider.min.css";

    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import * as m from "$i18n/messages";

    import { setSliderRefsContext } from "./context";
    import ThumbnailSlider from "./thumbnail-slider.svelte";
    import BioSlider from "./bio-slider.svelte";
    import Dots from "./dots.svelte";
    import BioList from "./bio-list.svelte";

    setSliderRefsContext();

    let isInview = writable(false);
</script>

<section
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isInview)}
>
    <Container>
        <ContainerContent class="space-y-4">
            <div
                class="text-center"
                class:opacity-0={!$isInview}
                class:animate-fade-left={$isInview}
            >
                <SectionTitle>{m.giant_equal_leopard_drum()}</SectionTitle>
            </div>
            <div
                class="hidden space-y-4 lg:block"
                class:opacity-0={!$isInview}
                class:animate-fade-up={$isInview}
            >
                <ThumbnailSlider />
                <BioList />
            </div>

            <div
                class="block space-y-4 lg:hidden"
                class:opacity-0={!$isInview}
                class:animate-fade-up={$isInview}
            >
                <BioSlider />

                <Dots />
            </div>
        </ContainerContent>
    </Container>
</section>
