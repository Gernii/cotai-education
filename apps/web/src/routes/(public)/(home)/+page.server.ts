import {
    discordRegisterForm,
    loadValidatorRegisterForm,
} from "$lib/features/register-form/handler.server";
import { error } from "@sveltejs/kit";
import { RateLimiter } from "sveltekit-rate-limiter/server";

export const load = async () => {
    const registerForm = await loadValidatorRegisterForm();

    return { registerForm };
};

const limiter = new RateLimiter({
    IP: [5, "h"], // IP address limiter
    IPUA: [3, "m"], // IP + User Agent limiter
});

export const actions = {
    default: async (event) => {
        const { request, fetch } = event;
        // Every call to isLimited counts as a hit towards the rate limit for the event.

        if (await limiter.isLimited(event)) {
            throw error(429);
        }

        const res = await discordRegisterForm(request, fetch);

        return res;
    },
};
