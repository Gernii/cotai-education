import { get } from "svelte/store";
import { elements } from "./store";
import type { ScrollToOptions } from "./types";
import { getGlobalOptions } from "./global-options";
import { sanitize } from "$lib/utils/sanitize";
import { getElement, getPosition } from "./shared/uitls";
import { scrolling } from "./shared/scrolling";

const elementsList = get(elements);

// handle with scrolling
const handle = async (event: Event, options: ScrollToOptions): Promise<void> => {
    if (!options.passive) {
        event.preventDefault();
    }

    const { ref, onDone, onStart } = options;

    const { duration, offset, easing } = options;

    const element = getElement(elementsList, ref);

    if (!element) {
        throw new Error(`Element reference '${ref}' not found`);
    }

    const endPosition = getPosition(element);

    if (onStart) {
        onStart({ element, offset, duration, endPosition });
    }

    await scrolling(endPosition, { duration, offset, easing });

    if (onDone) {
        onDone({ element, offset, duration, endPosition });
    }
};

/**
 * Listens for click (touchstart) events and scrolls to elements with smooth animation
 *
 * @param options - The element reference or global options
 */

export const scrollTo = (node: HTMLElement, options: string | ScrollToOptions) => {
    if (!options) {
        throw new Error("scrollTo require a options");
    }

    let opts: ScrollToOptions = {
        ref: "",
        ...getGlobalOptions(),
    };

    if (typeof options === "string") {
        opts.ref = options;
    } else {
        opts = Object.assign(opts, options);
    }

    opts.ref = sanitize(opts.ref);

    if (!opts.ref) {
        throw new Error("scrollTo require a reference");
    }

    if (node instanceof HTMLAnchorElement) {
        node.href = `#${opts.ref}`;
    }

    if (node instanceof HTMLAnchorElement === false) {
        node.style.cursor = "pointer";
    }

    const _handler = (event: MouseEvent | TouchEvent) => handle(event, opts);

    node.addEventListener("click", _handler, { passive: opts.passive });
    node.addEventListener("touchstart", _handler, { passive: opts.passive });

    return {
        destroy() {
            node.removeEventListener("click", _handler);
            node.removeEventListener("touchstart", _handler);
        },
    };
};
