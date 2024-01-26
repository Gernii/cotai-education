import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess({
		postcss: true
	}),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			routes: { exclude: ['<all>', '/sitemap.xml', '/robots.txt'] }
		}),
		alias: {
			$i18n: './src/lib/libs/i18n/messages'
		},
		prerender: {
			handleHttpError: ({ path, message }) => {
				console.log('path', path, message);
				// ! ignore vite-imagetools urls
				if (path.endsWith('/[object Object]') || path.endsWith('/[object%20Object]')) {
					return;
				}

				// otherwise fail the build
				throw new Error(message);
			}
		}
	}
};

export default config;
