<script lang="ts">
    import HeroiconsCheck16Solid from "~icons/heroicons/check-16-solid";
</script>

<li class="flex flex-row gap-x-1 sm:gap-x-2">
    <HeroiconsCheck16Solid
        class="mt-1 size-6 flex-shrink-0 text-secondary sm:size-7"
    />
    <div class="prose prose-sm lg:prose-base"><slot /></div>
</li>
