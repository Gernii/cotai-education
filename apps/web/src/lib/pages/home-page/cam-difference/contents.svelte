<script lang="ts">
    import { createAccordion, melt } from "@melt-ui/svelte";
    import { slide } from "svelte/transition";
    import { cx } from "cva";

    import { getSelectedIdContext } from "./context";

    import { dataCamDifference } from "$lib/datas/cam-difference/cam-difference";
    import type { CamDifferenceArray } from "$lib/datas/cam-difference/types";

    let selectedIdContext = getSelectedIdContext();

    const {
        elements: { content: accordionContent, item, trigger, root },
        helpers: { isSelected },
    } = createAccordion({
        value: selectedIdContext,
    });

    let dataArray = Object.entries(dataCamDifference) as CamDifferenceArray[];
</script>

<div {...$root}>
    {#each dataArray as [id, content], idx}
        <div use:melt={$item(id)} class="transition-colors">
            <h2>
                <button
                    use:melt={$trigger(id)}
                    class={cx(
                        "w-full bg-base-200 p-5 text-left text-base font-semibold hover:bg-base-200/80 lg:text-lg",
                        {
                            "border-t border-base-content/40": idx !== 0,
                        },
                    )}
                    class:rounded-t-xl={idx === 0}
                    class:rounded-b-xl={idx === dataArray.length - 1}
                >
                    {@html content.title}
                </button>
            </h2>
            {#if $isSelected(id)}
                <div
                    use:melt={$accordionContent(id)}
                    transition:slide
                    class="border-t border-base-content/40 bg-base-300 px-10 py-4 text-sm lg:text-base"
                    class:rounded-b-xl={idx === dataArray.length - 1}
                >
                    {@html content.description}
                </div>
            {/if}
        </div>
    {/each}
</div>
