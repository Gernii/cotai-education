<script lang="ts">
    import { cx } from "cva";

    import { Picture } from "$lib/components/ui/picture";

    interface $$Props {
        meta: ImgMeta | ImgMeta[];
        blur: ImgBlur;

        alt: string;
        class?: string;
    }

    export let meta: $$Props["meta"];
    export let alt: $$Props["alt"];
    export let blur: $$Props["blur"];
    let className: $$Props["class"] = undefined;
    export { className as class };

    $: classes = cx(
        "size-40 overflow-hidden rounded-box lg:size-48",
        className,
    );
</script>

<div class={classes}>
    <Picture {meta} {alt} {blur} imageClass="object-cover" loading="eager" />
</div>
