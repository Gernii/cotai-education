import { createSitemap } from 'svelte-sitemap/src/index.js';
import { loadEnv } from 'vite';

process.env = Object.assign(process.env, loadEnv('dev', process.cwd(), ''));
createSitemap(process.env.VITE_HOSTNAME, {
	debug: true,
	outDir: '.svelte-kit/cloudflare',
	ignore: ['**/admin/**', '/en']
});
