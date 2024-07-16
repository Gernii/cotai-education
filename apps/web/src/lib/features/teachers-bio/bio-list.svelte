<script lang="ts">
    import { page } from "$app/stores";

    import { getSliderRefsContext } from "./context";
    import BioCard from "./bio-card.svelte";

    import type { TeacherBioProps } from "$lib/datas/teachers-bio/types";

    let sliderRefsContext = getSliderRefsContext();

    $: teachersBio = $page.data.teachersBio as TeacherBioProps[];

    $: currentReview = sliderRefsContext.currentReview;

    $: selectedBio = teachersBio[$currentReview];
</script>

<BioCard {...selectedBio} />
