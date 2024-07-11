<script lang="ts">
    interface $$Props {
        title: string;
    }

    export let title: $$Props["title"];
</script>

<div class="group card card-compact bg-base-100">
    <div class="card-body flex-row gap-3">
        <slot name="icon" />
        <div>
            <p class="text-sm">{title}</p>
            <slot name="details" />
        </div>
    </div>
</div>
