<script lang="ts">
    import { writable } from "svelte/store";

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

    const handleClick = () => {
        isOpen = !isOpen;
    };
</script>

<div>
    {@html finalText}
    {#if showButton}
        <span class="whitespace-nowrap">
            {!isOpen ? finalSymbol : ""}
            <button on:click={handleClick} class="italic hover:text-secondary">
                {finalLabel}
            </button>
        </span>
    {/if}
</div>
