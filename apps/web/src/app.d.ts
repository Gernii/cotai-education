// See https://kit.svelte.dev/docs/types#app
import 'unplugin-icons/types/svelte';
import 'unplugin-fonts/client';

import type { GetCredentialsResponse, HandlePrivateFetchOptions } from './hooks.server';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			getCredentials: () => GetCredentialsResponse;
			handlePrivateFetch: <T>(
				url: string,
				options?: HandlePrivateFetchOptions
			) => Promise<T | undefined>;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
