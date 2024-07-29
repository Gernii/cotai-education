import { derived, get, writable, type Unsubscriber, type Writable } from "svelte/store";
import { getPlatform } from "./platform";
import { browser } from "$app/environment";

/** Global registry for all dynamically-created, injected media queries. */
const mediaQueriesForWebkitCompatibility: Set<string> = new Set<string>();

/** Style tag that holds all of the dynamically-created media queries. */
let mediaQueryStyleNode: HTMLStyleElement | undefined;

/** Global match media function */
let matchMedia: (query: string) => MediaQueryList;

/** Tailwindcss default breakpoints */
const BREAKPOINTS = {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
};

/** No-op matchMedia replacement for non-browser platforms. */
function noopMatchMedia(query: string): MediaQueryList {
    // Use `as any` here to avoid adding additional necessary properties for
    // the noop matcher.
    return {
        matches: query === "all" || query === "",
        media: query,
        addListener: () => {
            // no-op
        },
        removeListener: () => {
            // no-op
        },
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } as any;
}

const getMatchMedia = (query: string) => {
    const { isBrowser, WEBKIT, BLINK } = getPlatform();
    if (WEBKIT || BLINK) {
        createEmptyStyleRule(query);
    }

    if (matchMedia) {
        return matchMedia(query);
    }

    matchMedia = isBrowser && window.matchMedia ? window.matchMedia.bind(window) : noopMatchMedia;

    return matchMedia(query);
};

/**
 * Creates an empty stylesheet that is used to work around browser inconsistencies related to
 * `matchMedia`. At the time of writing, it handles the following cases:
 * 1. On WebKit browsers, a media query has to have at least one rule in order for `matchMedia`
 * to fire. We work around it by declaring a dummy stylesheet with a `@media` declaration.
 * 2. In some cases Blink browsers will stop firing the `matchMedia` listener if none of the rules
 * inside the `@media` match existing elements on the page. We work around it by having one rule
 * targeting the `body`. See https://github.com/angular/components/issues/23546.
 */
function createEmptyStyleRule(query: string) {
    if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
    }

    try {
        if (!mediaQueryStyleNode) {
            mediaQueryStyleNode = document.createElement("style");
            mediaQueryStyleNode.setAttribute("type", "text/css");
            document.head.appendChild(mediaQueryStyleNode);
        }

        if (mediaQueryStyleNode.sheet) {
            mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
            mediaQueriesForWebkitCompatibility.add(query);
        }
    } catch (e) {
        console.error(e);
    }
}

export const useMediaMatcher = (query: Writable<string>) => {
    const match = writable(false);
    const matcher = derived(query, (query) => getMatchMedia(query));

    const matcherEvent = () => {
        const matcherEvent = get(matcher);

        match.set(matcherEvent.matches);

        matcherEvent.addEventListener("change", handler);
        return () => {
            matcherEvent.removeEventListener("change", handler);
        };
    };

    let querySubcriber: Unsubscriber | undefined = undefined;
    let matcherSubcriber: Unsubscriber | undefined = undefined;

    if (browser) {
        querySubcriber = query.subscribe(() => matcherEvent());
        matcherSubcriber = matcher.subscribe(() => matcherEvent());
    }

    function handler(event: MediaQueryListEvent) {
        match.set(event.matches);
    }

    const unsubscribe = () => {
        querySubcriber?.();
        matcherSubcriber?.();
    };
    return {
        match,
        unsubscribe,
    };
};

export function useBreakpoints(breakpoint: keyof typeof BREAKPOINTS) {
    const breakpointValue = writable(BREAKPOINTS[breakpoint]);
    return useMediaMatcher(breakpointValue);
}
