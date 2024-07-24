<script lang="ts">
    import { cx } from "cva";
    import { twMerge } from "tailwind-merge";

    interface $$Props {
        meta: ImgMeta[] | ImgMeta;
        blur?: ImgBlur;
        alt?: string;
        loading?: "lazy" | "eager";
        imageClass?: string;
        pictureClass?: string;
        author?: string;
    }

    export let meta: $$Props["meta"];

    export let alt: $$Props["alt"] = undefined;
    export let loading: $$Props["loading"] = "lazy";

    export let imageClass: $$Props["imageClass"] = undefined;
    export let pictureClass: $$Props["pictureClass"] = undefined;
    export let author: $$Props["author"] = undefined;

    export let blur: $$Props["blur"] = undefined;

    // if there is only one, vite-imagetools won't wrap the object in an array

    $: sources = meta instanceof Array ? meta[0].sources : meta.sources;

    $: fallback = meta instanceof Array ? meta[0].img : meta.img;
</script>

<picture class={twMerge(cx("block h-full", pictureClass))} data-author={author}>
    {#each Object.entries(sources) as [type, srcMeta]}
        <source type="image/{type}" srcset={srcMeta} />
    {/each}
    <img
        src={blur?.lqip ?? fallback.src}
        {alt}
        class={twMerge(cx("h-full w-full object-contain", imageClass))}
        loading={blur ? undefined : loading}
        width={blur?.width ?? fallback.w}
        height={blur?.height ?? fallback.h}
        style={blur?.lqip
            ? `background-image: url("${blur?.lqip}");background-size: cover;`
            : undefined}
    />
</picture>
