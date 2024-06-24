<script lang="ts">
    import { Container, ContainerContent } from "$lib/components/ui/container";

    export let data;
</script>

<section class="pt-header-space">
    <Container>
        <ContainerContent>
            <article>
                <!-- Post -->
                <div class="prose">
                    <svelte:component this={data.content} />
                </div>
            </article>
        </ContainerContent>
    </Container>
</section>
