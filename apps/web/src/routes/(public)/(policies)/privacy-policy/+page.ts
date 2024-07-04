import { i18n } from "$lib/libs/i18n";
import { error } from "@sveltejs/kit";

const contentPath = {
    vi: import("./content.vi.md"),
    en: import("./content.en.md"),
} as const;

export const load = async ({ url }) => {
    const _lang = i18n.getLanguageFromUrl(url);

    try {
        const content = await contentPath[_lang];
        return {
            content: content.default,
            meta: content.metadata,
        };
    } catch (_) {
        error(404);
    }
};
