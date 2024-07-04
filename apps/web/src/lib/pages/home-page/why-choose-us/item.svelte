<script lang="ts">
    interface $$Props {
        title: string;
        description: string;
    }
    export let title: $$Props["title"];
    export let description: $$Props["description"];
</script>

<div class="group flex gap-x-6">
    <div
        class="pl-4 pt-2 transition-transform duration-300 group-hover:scale-105 group-hover:text-primary"
    >
        <slot />
    </div>
    <div class="prose space-y-2">
        <h2 class="mb-0 group-hover:text-primary">{title}</h2>
        <p>
            {description}
        </p>
    </div>
</div>
