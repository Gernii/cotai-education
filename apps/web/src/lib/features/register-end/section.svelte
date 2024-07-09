<script>
    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import { Container, ContainerContent } from "$lib/components/ui/container";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    let isInview = writable(false);
</script>

<section
    use:inview={inviewCommonOptions}
    on:inview_enter={onInViewEnter(isInview)}
>
    <Container>
        <ContainerContent>
            <div
                class="card card-bordered bg-base-100 shadow-lg"
                class:opacity-0={!$isInview}
                class:animate-fade-up={$isInview}
            >
                <div class="card-body flex-col gap-x-8 gap-y-6 md:flex-row">
                    <div class="flex-grow">
                        <h2 class="text-2xl font-bold">
                            Nâng tầm đổi mới và sáng tạo cho cuộc sống tươi đẹp
                        </h2>
                        <p class="text-sm">
                            ENABLING INNOVATION AND CREATIVITY FOR SOCIAL GOOD
                        </p>
                    </div>
                    <div>
                        <button class="btn btn-primary text-nowrap">
                            Đăng ký ngay
                        </button>
                    </div>
                </div>
            </div>
        </ContainerContent>
    </Container>
</section>
