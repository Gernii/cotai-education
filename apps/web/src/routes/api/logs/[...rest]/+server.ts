import { POSTHOG_URL } from "$env/static/private";
import { PUBLIC_LOGS_URL } from "$env/static/public";

import { json } from "@sveltejs/kit";

// This handler will respond to PUT, PATCH, DELETE, etc.
export const fallback = async ({ request, fetch, url }) => {
    const pathname = url.pathname;
    const search = url.search;

    const pathWithParams = (pathname + search).replace(PUBLIC_LOGS_URL, "");

    const req = new Request(`${POSTHOG_URL}${pathWithParams}`, request);

    req.headers.delete("cookie");

    await fetch(req);

    return json({});
};

export const trailingSlash = "ignore";
