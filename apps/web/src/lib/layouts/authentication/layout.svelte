<script lang="ts">
    import LogoCotAI from "$lib/assets/logo/CoTAI-Ver0-640.png?imagetools";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { Picture } from "$lib/components/ui/picture";
</script>

<Container>
    <ContainerContent size={3} class="mt-2 space-y-8">
        <div class="flex flex-col items-center gap-2">
            <div class="flex w-1/2">
                <Picture meta={LogoCotAI} alt="Logo CoTAI" />
            </div>
            <p class="whitespace-nowrap text-center text-xl font-bold">
                Landing Page
            </p>
        </div>

        <slot />

        <div class="w-full whitespace-nowrap text-center text-xs lg:text-base">
            Copyright © 2019-{new Date().getFullYear()} CoTAI. All Rights Reserved.
        </div>
    </ContainerContent>
</Container>
