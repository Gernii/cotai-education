<script lang="ts">
    import Article from "./article.svelte";

    interface $$Props {
        editable?: boolean;
        text?: string;
    }

    export let editable: NonNullable<$$Props["editable"]> = false;
    export let text: $$Props["text"] = undefined;
</script>

{#if editable}
    {#await import("./editor.svelte") then Editor}
        <Editor.default />
    {/await}
{:else}
    <Article {text} />
{/if}
