<script lang="ts">
    import { cx } from "cva";

    import { Picture } from "$lib/components/ui/picture";

    interface $$Props {
        meta: ImgMeta | ImgMeta[];
        alt: string;
        class?: string;
    }

    export let meta: $$Props["meta"];
    export let alt: $$Props["alt"];
    let className: $$Props["class"] = undefined;
    export { className as class };

    $: classes = cx("size-48 overflow-hidden rounded-box", className);
</script>

<div class={classes}>
    <Picture {meta} {alt} imageClass="object-cover" />
</div>
