<script lang="ts">
    import { Picture } from "$lib/components/ui/picture";

    interface $$Props {
        name: string;
        meta: ImgMeta[] | ImgMeta;
    }

    export let name: $$Props["name"];
    export let meta: $$Props["meta"];
</script>

<div class="w-32" title={name}>
    <Picture {meta} alt={name} imageClass="rounded-box" pictureClass="h-auto" />
</div>
