<script lang="ts">
    import { beforeNavigate } from "$app/navigation";

    import { cx } from "cva";

    import * as m from "$i18n/messages";

    interface $$Props {
        textContent: string;
        textReadmore?: string;
        readMoreLabel?: string;
        readLessLabel?: string;
        dotDotDot?: string;
    }

    export let textContent: $$Props["textContent"];
    export let textReadmore: $$Props["textReadmore"] = undefined;
    export let readMoreLabel: NonNullable<$$Props["readMoreLabel"]> =
        m.jumpy_proof_clownfish_gulp();
    export let readLessLabel: NonNullable<$$Props["readLessLabel"]> =
        m.basic_lucky_ibex_seek();
    export let dotDotDot: NonNullable<$$Props["dotDotDot"]> = "...";

    let isOpen = false;

    $: classNames = cx(
        "prose-sm sm:prose",
        "text-base-content",
        "prose-headings:pb-[.3em] prose-h1:border-b prose-h2:border-b",
        "prose-th:border-l prose-th:border-l-base-content/20 first:prose-th:border-l-0 prose-td:border-l prose-td:border-l-base-content/20 prose-td:px-3 prose-td:py-2 first:prose-td:border-l-0",
    );

    const onToggleOpen = () => {
        isOpen = !isOpen;
    };

    beforeNavigate(() => {
        isOpen = false;
    });
</script>

<div class={classNames}>
    {@html textContent}
    {#if textReadmore}
        {#if isOpen}
            {@html textReadmore}
        {/if}
        <button on:click={onToggleOpen} class="italic hover:text-secondary">
            {#if isOpen}
                {readLessLabel}
            {:else}
                {dotDotDot}{readMoreLabel}
            {/if}
        </button>
    {/if}
</div>
