<script lang="ts">
    interface $$Props {
        text?: string;
    }

    export let text: $$Props["text"] = undefined;
</script>

{#if text}
    <article class="prose">
        {@html text}
    </article>
{/if}
