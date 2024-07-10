import { dataStudentProjects } from "$lib/datas/student-projects/student-projects.server";
import { dataTeachersBio } from "$lib/datas/teachers-bio/teachers-bio.server";
import {
    discordRegisterForm,
    loadValidatorRegisterForm,
} from "$lib/features/register-form/handler.server";
import { RateLimiter } from "$lib/libs/sveltekit-rate-limiter";
import { error } from "@sveltejs/kit";

export const load = async () => {
    const registerForm = await loadValidatorRegisterForm();

    const teachersBio = dataTeachersBio;

    const studentProjects = dataStudentProjects;

    return { registerForm, teachersBio, studentProjects };
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
