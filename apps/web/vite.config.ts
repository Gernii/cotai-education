import { paraglide } from "@inlang/paraglide-js-adapter-sveltekit/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { imagetools } from "vite-imagetools";
import Unfonts from "unplugin-fonts/vite";
import Icons from "unplugin-icons/vite";
import lqip from "vite-plugin-lqip";
const supportedExtensions = ["png", "jpg", "jpeg"];
const defaultImageToolsWidth = "320;640;1280";

// biome-ignore lint/style/noDefaultExport: <explanation>
export default defineConfig(({ mode }) => {
    return {
        plugins: [
            sveltekit(),
            lqip(),
            imagetools({
                cache: {
                    enabled: true,
                    dir: "./node_modules/.cache/imagetools",
                    retention: 172800,
                },
                defaultDirectives: (url) => {
                    const searchParams = url.searchParams;

                    const extension = url.pathname.substring(url.pathname.lastIndexOf(".") + 1);

                    if (
                        supportedExtensions.includes(extension) &&
                        typeof searchParams.get("imagetools") === "string"
                    ) {
                        const width = url.searchParams.get("w") ?? undefined;

                        return new URLSearchParams({
                            format: `webp;${extension}`,
                            w: width ?? defaultImageToolsWidth,
                            as: "picture",
                        });
                    }
                    return new URLSearchParams();
                },
            }),
            Unfonts({
                // Fontsource API
                fontsource: {
                    /**
                     * Fonts families lists
                     */
                    families: [
                        {
                            /**
                             * Name of the font family.
                             * Require the `@fontsource/mulish` package to be installed.
                             */
                            name: "Source Code Pro",
                            /**
                             * Load only a subset of the font family.
                             */
                            weights: [400, 500, 600, 700, 800],
                            /**
                             * Restrict the font styles to load.
                             */
                            styles: ["normal"],
                        },
                    ],
                },
            }),
            Icons({
                compiler: "svelte",
                defaultClass: "size-5 flex-shrink-0",
            }),
            paraglide({
                project: "./project.inlang",
                outdir: "./src/lib/libs/i18n/messages",
            }),
        ],
        test: {
            include: ["src/**/*.{test,spec}.{js,ts}"],
        },
        server: {
            port: 3000,
            host: "0.0.0.0",
        },
        esbuild: {
            drop: mode === "production" ? ["console", "debugger"] : [],
        },
    };
});
