<script lang="ts">
    import { cx } from "cva";

    interface $$Props {
        paddingBottom?: boolean;
        id?: string;
        class?: string;
    }

    let className: $$Props["class"] = undefined;
    export let paddingBottom: $$Props["paddingBottom"] = true;
    export let id: $$Props["id"] = undefined;
    export { className as class };

    $: className = cx(
        "text-2xl font-bold md:text-3xl lg:text-4xl",
        {
            "pb-4 sm:pb-8": paddingBottom,
        },
        className,
    );
</script>

<h1 class={className} {id}>
    <slot />
</h1>
