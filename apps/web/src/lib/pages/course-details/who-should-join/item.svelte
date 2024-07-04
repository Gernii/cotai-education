<script lang="ts">
    import HeroiconsCheck16Solid from "~icons/heroicons/check-16-solid";
</script>

<div class="flex flex-row gap-x-1 sm:gap-x-4">
    <HeroiconsCheck16Solid
        class="mt-1 size-6 flex-shrink-0 text-secondary sm:size-7"
    />
    <span><slot /></span>
</div>
