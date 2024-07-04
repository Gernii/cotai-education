<script lang="ts">
    import { Editor } from "@tiptap/core";
    import StarterKit from "@tiptap/starter-kit";
    import { onMount, onDestroy } from "svelte";

    interface $$Props {
        content?: object;
    }

    export let content: NonNullable<$$Props["content"]> = {
        type: "doc",
        content: [{ type: "paragraph" }],
    };

    let element: HTMLElement;
    let editor: Editor | null = null;

    const initEditor = async () => {
        editor?.destroy();

        editor = new Editor({
            element,
            extensions: [StarterKit],
            content,
            onTransaction: () => {
                // force re-render so `editor.isActive` works as expected
                editor = editor;
            },
        });
    };

    onMount(() => {
        element.innerHTML = "";
        initEditor();
    });

    onDestroy(() => {
        if (editor) {
            editor.destroy();
        }
    });
</script>

<div
    class="prose prose-sm sm:prose focus:outline-none"
    translate="no"
    bind:this={element}
></div>
