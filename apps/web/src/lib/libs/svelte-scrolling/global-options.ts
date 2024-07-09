import { get } from "svelte/store";
import { globalOptions } from "./store";
import type { GlobalOptions } from "./types";

const globalOpts = get(globalOptions);

export const getGlobalOptions = (): GlobalOptions => {
    return globalOpts;
};

/**
 * Override global options
 *
 * @param options - The global options
 */

export const setGlobalOptions = (options: GlobalOptions): void => {
    globalOptions.update(() => Object.assign(globalOpts, options));
};
