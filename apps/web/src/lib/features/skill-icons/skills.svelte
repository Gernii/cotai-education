<script lang="ts">
    import TorchSeg from "$lib/assets/images/skills-icon/torchseg.png?imagetools";

    import Picture from "$lib/components/ui/picture/picture.svelte";

    import type { SkillTypes } from "./constant";

    import LogosMatplotlibIcon from "~icons/logos/matplotlib-icon";
    import DeviconKeras from "~icons/devicon/keras";
    import LogosNumpy from "~icons/logos/numpy";
    import LogosOpencv from "~icons/logos/opencv";
    import LogosPython from "~icons/logos/python";
    import LogosPytorchIcon from "~icons/logos/pytorch-icon";
    import LogosTensorflow from "~icons/logos/tensorflow";
    import LogosRaspberryPi from "~icons/logos/raspberry-pi";
    import LogosStreamlit from "~icons/logos/streamlit";
    import DeviconAnaconda from "~icons/devicon/anaconda";
    import LogosJavascript from "~icons/logos/javascript";
    import LogosDockerIcon from "~icons/logos/docker-icon";
    import LucideSuperscript from "~icons/lucide/superscript";
    import LucideBrainCog from "~icons/lucide/brain-cog";
    import DeviconPandasWordmark from "~icons/devicon/pandas-wordmark";
    import DeviconPlotly from "~icons/devicon/plotly";
    import DeviconScikitlearn from "~icons/devicon/scikitlearn";
    interface $$Props {
        skill: SkillTypes;
        class?: string;
    }

    let className: $$Props["class"] = undefined;
    export let skill: $$Props["skill"];
    export { className as class };
</script>

{#if skill === "python" || skill === "pillow"}
    <LogosPython class={className} />
{:else if skill === "pytorch"}
    <LogosPytorchIcon class={className} />
{:else if skill === "tensorflow"}
    <LogosTensorflow class={className} />
{:else if skill === "raspberry-pi"}
    <LogosRaspberryPi class={className} />
{:else if skill === "anaconda"}
    <DeviconAnaconda class={className} />
{:else if skill === "streamlit"}
    <LogosStreamlit class={className} />
{:else if skill === "javascript"}
    <LogosJavascript class={className} />
{:else if skill === "docker"}
    <LogosDockerIcon class={className} />
{:else if skill === "math"}
    <LucideSuperscript class={className} />
{:else if skill === "opencv"}
    <LogosOpencv class={className} />
{:else if skill === "deep-learning" || skill === "machine-learning" || skill === "ai"}
    <LucideBrainCog class={className} />
{:else if skill === "numpy"}
    <LogosNumpy class={className} />
{:else if skill === "keras"}
    <DeviconKeras class={className} />
{:else if skill === "matplotlib"}
    <LogosMatplotlibIcon class={className} />
{:else if skill === "pandas"}
    <DeviconPandasWordmark class={className} />
{:else if skill === "plotly"}
    <DeviconPlotly class={className} />
{:else if skill === "scikit-learn"}
    <DeviconScikitlearn class={className} />
{:else if skill === "torchseg"}
    <div class="size-8">
        <Picture meta={TorchSeg} />
    </div>
{/if}
