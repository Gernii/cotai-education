import type { Fetch } from "$lib/utils/types/common";
import { DISCORD_ID, DISCORD_ROLE, DISCORD_THREAD_ID, DISCORD_TOKEN } from "$env/static/private";
import * as v from "valibot";
import { schema } from "./schema";

export const discordContactRequest = async (unvalidatedData: unknown, fetch: Fetch) => {
    const dataValidated = v.safeParse(schema, unvalidatedData);

    if (!dataValidated.success) {
        return;
    }
    const data = dataValidated.output;

    if (!(data.email || data.phone)) {
        return;
    }

    // ? This is the part that sends the form data to Discord
    let content = `<@&${DISCORD_ROLE}>\nHọ và tên: \`${data.name}\`\nEmail: \`${data.email}\`\nSDT: \`${data.phone}\``;
    if (data.comments) {
        content += `\nThông tin:\`\`\`${data.comments}\`\`\``;
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
    }
};
