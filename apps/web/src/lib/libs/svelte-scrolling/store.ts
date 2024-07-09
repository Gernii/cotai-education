import { writable } from "svelte/store";
import { cubicInOut } from "svelte/easing";
import type { ElementReference, GlobalOptions } from "./types";

export const elements = writable<ElementReference[]>([]);
export const globalOptions = writable<GlobalOptions>({
    offset: 0,
    duration: 500,
    passive: true,
    easing: cubicInOut,
    onStart: () => undefined,
    onDone: () => undefined,
});
