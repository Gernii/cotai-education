import { error } from "@sveltejs/kit";

import { fetcherStaticData } from "$lib/utils/fetcher/static-data";
import type { CourseResponseProps } from "$lib/utils/types/data.deprecated";
import { courseMappingData } from "$lib/utils/data-mapping.server";
import {
    discordRegisterForm,
    loadValidatorRegisterForm,
} from "$lib/features/register-form/handler.server";
import { RateLimiter } from "$lib/libs/sveltekit-rate-limiter";

export const load = async ({ fetch, params }) => {
    const CourseIdDeprecated = params.course_id;

    const course = await fetcherStaticData<CourseResponseProps>({
        id: CourseIdDeprecated,
        path: "courses",
        fetch,
    });

    if (!course) {
        error(404, {
            message: "Not found",
        });
    }
    const registerForm = await loadValidatorRegisterForm();

    return {
        ...courseMappingData(course),
        id: CourseIdDeprecated,
        registerForm,
    };
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
