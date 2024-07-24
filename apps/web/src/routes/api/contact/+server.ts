import { discordContactRequest } from "$lib/features/register-form/handler.server.js";
import { RateLimiter } from "$lib/libs/sveltekit-rate-limiter";

import { json } from "@sveltejs/kit";

const limiter = new RateLimiter({
    IP: [5, "h"], // IP address limiter
    IPUA: [2, "m"], // IP + User Agent limiter
});

// This handler will respond to PUT, PATCH, DELETE, etc.
export const POST = async (event) => {
    const { request, fetch } = event;
    // Every call to isLimited counts as a hit towards the rate limit for the event.

    if (await limiter.isLimited(event)) {
        return json({});
    }

    const body = await request.json();

    await discordContactRequest(body, fetch);

    return json({});
};
