import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { preprocessMeltUI, sequence } from "@melt-ui/pp";
import { mdsvex } from "mdsvex";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    extensions: [".md"],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    extensions: [".svelte", ".md"],

    preprocess: sequence([
        // ... other preprocessors
        vitePreprocess(),
        mdsvex(mdsvexOptions),
        preprocessMeltUI(),
    ]),

    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter({
            routes: { exclude: ["<all>", "/sitemap.xml", "/robots.txt"] },
        }),
        alias: {
            $i18n: "./src/lib/libs/i18n/messages",
        },
    },
};

export default config;
