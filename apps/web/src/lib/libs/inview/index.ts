import type { Writable } from 'svelte/store';

export const inviewCommonOptions = {
	unobserveOnEnter: true,
	rootMargin: '-20%'
};

export const onInViewEnter =
	(inviewStore: Writable<boolean>) => (event: CustomEvent<ObserverEventDetails>) => {
		const { inView } = event.detail;
		inviewStore.set(inView);
	};
