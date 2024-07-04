import * as runtime from "$i18n/runtime";
import { createI18n } from "@inlang/paraglide-js-adapter-sveltekit";

export const i18n = createI18n(runtime, {
    exclude: ["admin", "api"],
});
