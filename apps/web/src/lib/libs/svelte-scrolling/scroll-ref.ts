import { get } from "svelte/store";
import { elements } from "./store";
import { sanitize } from "$lib/utils/sanitize";

/**
 * Adds a reference to the elements that `scrollTo` should scroll
 *
 * @param reference - The reference element
 */

export const scrollRef = (node: HTMLElement, reference: string) => {
    if (!reference) {
        throw new Error("scrollRef require a reference");
    }

    const elementsList = get(elements);

    elementsList.push({
        node,
        reference: sanitize(reference),
    });

    return {
        destroy() {
            elementsList.length = 0; // empty the elements list
        },
    };
};
