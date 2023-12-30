import { paraglide } from '@inlang/paraglide-js-adapter-vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';
// @ts-ignore
export default ({ mode }) => {
	process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

	return defineConfig({
		plugins: [
			sveltekit(),
			paraglide({
				project: './project.inlang',
				outdir: './src/lib/lib/i18n/messages'
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
