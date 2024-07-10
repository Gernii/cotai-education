<script lang="ts">
    interface $$Props {
        title: string;
    }

    export let title: $$Props["title"];
</script>

<div class="group card card-compact bg-base-100 lg:card-normal">
    <div class="card-body flex-row gap-4">
        <slot name="icon" />
        <div>
            <p class="text-sm">{title}</p>
            <slot name="details" />
        </div>
    </div>
</div>
