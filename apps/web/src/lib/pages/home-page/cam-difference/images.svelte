<script>
    import { fade } from "svelte/transition";

    import CAM1 from "$lib/assets/images/cam/1.png?imagetools";
    import CAM2 from "$lib/assets/images/cam/2.png?imagetools";
    import CAM3 from "$lib/assets/images/cam/3.png?imagetools";
    import CAM4 from "$lib/assets/images/cam/4.png?imagetools";

    import { Picture } from "$lib/components/ui/picture";

    import { getSelectedIdContext } from "./context";

    let selectedIdContext = getSelectedIdContext();
</script>

{#if $selectedIdContext === "1" || $selectedIdContext === "5"}
    <div in:fade>
        <Picture meta={CAM1} pictureClass="h-auto" />
    </div>
{:else if $selectedIdContext === "2"}
    <div in:fade>
        <Picture meta={CAM2} pictureClass="h-auto" />
    </div>
{:else if $selectedIdContext === "3"}
    <div in:fade>
        <Picture meta={CAM3} pictureClass="h-auto" />
    </div>
{:else if $selectedIdContext === "4"}
    <div in:fade>
        <Picture meta={CAM4} pictureClass="h-auto" />
    </div>
{/if}
