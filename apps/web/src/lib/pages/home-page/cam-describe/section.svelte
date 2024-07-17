<script lang="ts">
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import Cam2 from "$lib/assets/images/cam/cam-2.png?imagetools";
    import Cam3 from "$lib/assets/images/cam/cam-3.mp4";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";
    import Picture from "$lib/components/ui/picture/picture.svelte";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import DescribeItem from "./describe-item.svelte";
    import Chart_80_20 from "./chart-80-20.svelte";

    import { dataCamDescribe } from "$lib/datas/cam-describe/cam-describe";

    let camDescribe = dataCamDescribe;

    let isInview = writable(false);
</script>

<section
    class="card card-compact xl:card-normal"
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isInview)}
>
    <Container>
        <ContainerContent>
            <div
                class="text-center"
                class:opacity-0={!$isInview}
                class:animate-fade-down={$isInview}
            >
                <SectionTitle>
                    <p class="inline sm:inline-block">
                        <span class="text-primary">Accelerated Mastery</span>
                        luyện
                        <span class="text-primary">Nhanh Thành Tài</span>
                    </p>
                    <p class="inline sm:inline-block">
                        là
                        <span class="text-secondary">chiến lược</span>
                        & <span class="text-secondary">cơ hội</span>
                        để
                        <span class="text-secondary">thành công</span> trong Thời
                        đại AI
                    </p>
                </SectionTitle>
            </div>
            <div
                class="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-3 lg:gap-x-16 xl:gap-x-32"
            >
                {#each camDescribe as describe, idx}
                    <DescribeItem
                        description={describe.description}
                        title={describe.title}
                        aspectRatio={idx === 0}
                    >
                        {#if idx === 0}
                            <Chart_80_20 />
                        {:else if idx === 1}
                            <Picture meta={Cam2} />
                        {:else if idx === 2}
                            <video autoplay muted loop playsinline>
                                <source src={Cam3} type="video/mp4" />
                            </video>
                        {/if}
                    </DescribeItem>
                {/each}
            </div>
        </ContainerContent>
    </Container>
</section>
