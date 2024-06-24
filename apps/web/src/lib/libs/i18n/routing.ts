import { page } from "$app/stores";

import { derived } from "svelte/store";

import { type AvailableLanguageTag, sourceLanguageTag } from "$i18n/runtime";

export const currentLang = derived(page, (a) => {
    return (a.params.lang as AvailableLanguageTag) ?? sourceLanguageTag;
});
