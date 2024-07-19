<script lang="ts">
    import { writable } from "svelte/store";
    import { cx } from "cva";

    import * as m from "$i18n/messages";

    import { getMaxCharacters, getMaxWords, isFullText } from "./utils";

    interface $$Props {
        textContent: string;
        readMoreLabel?: string;
        readLessLabel?: string;
        maxChars?: number;
        maxWords?: number;
        dotDotDot?: string;
    }

    export let textContent: $$Props["textContent"];
    export let readMoreLabel: NonNullable<$$Props["readMoreLabel"]> =
        m.jumpy_proof_clownfish_gulp();
    export let readLessLabel: NonNullable<$$Props["readLessLabel"]> =
        m.basic_lucky_ibex_seek();
    export let maxChars: $$Props["maxChars"] = undefined;
    export let dotDotDot: NonNullable<$$Props["dotDotDot"]> = "...";
    export let maxWords: $$Props["maxWords"] = undefined;

    let text = writable<string | undefined>(undefined);
    let isOpen = false;
    let cleanText = textContent.replace(/\s+/g, " ").trim();
    $: finalLabel = isOpen ? readLessLabel : readMoreLabel;
    $: maxCharsText = getMaxCharacters({
        maxCharacters: maxChars,
        isOpen,
        children: cleanText,
        text,
    });
    $: finalText = getMaxWords({
        maxWords,
        isOpen,
        children: maxCharsText,
        text,
    });
    $: finalSymbol = isOpen ? "" : dotDotDot;
    $: showButton = !isOpen && isFullText(finalText, cleanText) ? false : true;

    $: classNames = cx(
        "prose-sm sm:prose",
        "text-base-content",
        "prose-headings:pb-[.3em] prose-h1:border-b prose-h2:border-b",
        "prose-th:border-l prose-th:border-l-base-content/20 first:prose-th:border-l-0 prose-td:border-l prose-td:border-l-base-content/20 prose-td:px-3 prose-td:py-2 first:prose-td:border-l-0",
    );

    const handleClick = () => {
        isOpen = !isOpen;
    };
</script>

{#key textContent}
    <div class={classNames}>
        {@html finalText}
        {#if showButton}
            <span class="whitespace-nowrap">
                {!isOpen ? finalSymbol : ""}
                <button
                    on:click={handleClick}
                    class="italic hover:text-secondary"
                >
                    {finalLabel}
                </button>
            </span>
        {/if}
    </div>
{/key}
