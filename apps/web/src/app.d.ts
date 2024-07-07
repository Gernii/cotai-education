// See https://kit.svelte.dev/docs/types#app
import "unplugin-icons/types/svelte";
import "unplugin-fonts/client";
import type { AvailableLanguageTag } from "$i18n/runtime";
import type { ParaglideLocals } from "@inlang/paraglide-js-adapter-sveltekit";
import type { GetCredentialsResponse, HandlePrivateFetchOptions } from "./hooks.server";

// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            getCredentials: () => GetCredentialsResponse;
            handlePrivateFetch: <T>(
                url: string,
                options?: HandlePrivateFetchOptions,
            ) => Promise<T | undefined>;
            paraglide: ParaglideLocals<AvailableLanguageTag>;
        }
        // interface PageData {}
        // interface Platform {}
        namespace Superforms {
            type Message = {
                type: "error" | "success";
                text: string;
            };
        }
    }
}
