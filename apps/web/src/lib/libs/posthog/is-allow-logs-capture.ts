import { browser } from "$app/environment";

import { PUBLIC_POSTHOG_TOKEN } from "$env/static/public";

/**
 * This function can only run on the client side
 */
export const getIsAllowLogsCapture = () => {
    if (!browser) {
        return;
    }
    const isAllowCapture = localStorage.getItem(`__ph_opt_in_out_${PUBLIC_POSTHOG_TOKEN}`);

    if (isAllowCapture === null) {
        return undefined;
    }

    if (isAllowCapture === "0") {
        return false;
    }

    return true;
};
