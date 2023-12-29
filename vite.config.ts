import { paraglide } from '@inlang/paraglide-js-adapter-vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import sitemap from 'vite-plugin-sitemap';
import { loadEnv } from 'vite';

// @ts-ignore
export default ({ mode }) => {
	process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));
	console.log(process.env);

	return defineConfig({
		plugins: [
			sveltekit(),
			paraglide({
				project: './project.inlang',
				outdir: './src/lib/lib/i18n/messages'
			}),
			sitemap({
				hostname: process.env.VITE_HOSTNAME,
				exclude: ['/admin', '/private'],
				outDir: '.svelte-kit/cloudflare',
				generateRobotsTxt: true,
				robots: [
					{
						userAgent: '*',
						allow: ['/'],
						disallow: ['/admin', '/private', '/*.js$', '/*.json']
					}
				]
			})
		],
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}']
		},
		server: {
			port: 3000,
			host: '0.0.0.0'
		},
		esbuild: {
			drop: ['console', 'debugger']
		}
	});
};
