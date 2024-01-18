import type { LoadEvent } from '@sveltejs/kit';

export const fetcher = async <T>(
	fetch: LoadEvent['fetch'],
	input: string | URL | Request,
	init?: RequestInit | undefined
) => {
	try {
		const res = await fetch(input, init);

		const data = await res.json();

		return data as T;
	} catch (e) {
		console.error(e);
		return undefined;
	}
};
