<script lang="ts">
    import type { HTMLAnchorAttributes } from "svelte/elements";

    interface $$Props extends HTMLAnchorAttributes {}

    export let target: $$Props["target"] = "_blank";
    export let rel: $$Props["rel"] = "noopener noreferrer";
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a {target} {rel} {...$$restProps}>
    <slot />
</a>
