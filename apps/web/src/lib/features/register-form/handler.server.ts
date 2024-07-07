import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { schema } from "./schema";
import type { Fetch } from "$lib/utils/types/common";
import { fail } from "@sveltejs/kit";
import { DISCORD_ID, DISCORD_ROLE, DISCORD_THREAD_ID, DISCORD_TOKEN } from "$env/static/private";
import * as m from "$i18n/messages";

export const loadValidatorRegisterForm = () => superValidate(zod(schema));

export const discordRegisterForm = async (request: Request, fetch: Fetch) => {
    const form = await superValidate(request, zod(schema));

    if (!form.valid) {
        // Again, return { form } and things will just work.
        return fail(400, { form });
    }

    // ? This is the part that sends the form data to Discord
    let content = `<@&${DISCORD_ROLE}>\nHọ và tên: \`${form.data.name}\`\nEmail: \`${form.data.email}\`\nSDT: \`${form.data.phone}\``;
    if (form.data.comments) {
        content += `\nThông tin:\`\`\`${form.data.comments}\`\`\``;
    }

    const allowedMentions = {
        roles: [DISCORD_ROLE],
    };

    const headers = new Headers();

    headers.set("Content-Type", "application/json");

    try {
        await fetch(
            `https://discordapp.com/api/webhooks/${DISCORD_ID}/${DISCORD_TOKEN}${DISCORD_THREAD_ID && `?thread_id=${DISCORD_THREAD_ID}`}`,
            {
                body: JSON.stringify({ content, allowed_mentions: allowedMentions }),
                method: "POST",
                headers,
            },
        );
    } catch (error) {
        console.error(error);

        return fail(500, { form });
    }

    // Display a success status message
    return message(form, { text: m.moving_equal_moth_fulfill(), type: "success" });
};
