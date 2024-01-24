<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	interface $$Props extends SVGAttributes<SVGElement> {}

	let className: $$Props['class'] = undefined;

	export { className as class };

	// Src: https://heroicons.com/ - outline-check
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	{...$$restProps}
	class={twMerge(className)}
>
	<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
