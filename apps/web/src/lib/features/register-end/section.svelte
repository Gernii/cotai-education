<script>
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Container, ContainerContent } from "$lib/components/ui/container";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import HugeiconsAiInnovation02 from "~icons/hugeicons/ai-innovation-02";

    let isInview = writable(false);
</script>

<section
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isInview)}
>
    <Container>
        <ContainerContent>
            <div
                class="card card-bordered bg-base-200 shadow-lg"
                class:opacity-0={!$isInview}
                class:animate-fade-up={$isInview}
            >
                <div
                    class="card-body flex-col items-center gap-x-8 gap-y-4 text-center"
                >
                    <h2 class="text-xl font-bold md:text-2xl">
                        Khơi nguồn đổi mới & thúc đẩy sáng tạo cho cuộc sống
                        tươi đẹp <HugeiconsAiInnovation02 class="inline" />
                    </h2>
                    <div class="flex w-full justify-center">
                        <hr class="w-1/3 border-primary" />
                    </div>
                    <p class="text-md md:text-2xl">
                        Enabling innovation and creativity for social good <HugeiconsAiInnovation02
                            class="inline"
                        />
                    </p>
                </div>
            </div>
        </ContainerContent>
    </Container>
</section>
