import type { LoadEvent } from '@sveltejs/kit';

export const fetcher = async <T>(input: string | URL | Request, fetch: LoadEvent['fetch']) => {
	try {
		const res = await fetch(input);

		const data = await res.json();

		return data as T;
	} catch (e) {
		console.error(e);
		return undefined;
	}
};
