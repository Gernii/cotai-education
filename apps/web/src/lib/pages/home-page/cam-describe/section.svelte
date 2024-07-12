<script lang="ts">
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import DescribeItem from "./describe-item.svelte";

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
            <div class="grid grid-cols-1 md:grid-cols-3">
                {#each camDescribe as describe}
                    <DescribeItem
                        description={describe.description}
                        title={describe.title}
                    />
                {/each}
            </div>
        </ContainerContent>
    </Container>
</section>
