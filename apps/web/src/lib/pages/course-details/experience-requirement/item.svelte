<script lang="ts">
	import { IconCheck } from '$lib/components/icons';
</script>

<div class="flex flex-row gap-x-1 text-xl sm:gap-x-4">
	<IconCheck class="mt-1 size-6 flex-shrink-0 stroke-[3] text-secondary sm:size-8 sm:stroke-[4]" />
	<span><slot /></span>
</div>
