<script lang="ts">
	import HeroiconsCheck from '~icons/heroicons/check';
</script>

<div class="flex flex-row gap-x-1 text-xl sm:gap-x-4">
	<HeroiconsCheck
		class="mt-1 size-6 flex-shrink-0 stroke-[3] text-secondary sm:size-8 sm:stroke-[4]"
	/>
	<span><slot /></span>
</div>
