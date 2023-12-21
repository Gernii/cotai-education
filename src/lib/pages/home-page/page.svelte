<script lang="ts">
	import type { ProgramProps } from '$lib/utils/types/data';
	import Hero from './hero.svelte';
	import { Programs } from './programs';

	interface $$Props {
		programs?: ProgramProps[];
	}

	export let programs: $$Props['programs'] = undefined;
</script>

<Hero />
<Programs {programs} />
