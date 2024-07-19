<script lang="ts">
    import TorchSeg from "$lib/assets/images/skills-icon/torchseg.png?imagetools";
    import TorchMetrics from "$lib/assets/images/skills-icon/torchmetrics.png?imagetools";
    import Albumentations from "$lib/assets/images/skills-icon/albumentations.png?imagetools";
    import Interpret from "$lib/assets/images/skills-icon/interpret.png?imagetools";
    import Surprise from "$lib/assets/images/skills-icon/surprise.svg";
    import Xgboost from "$lib/assets/images/skills-icon/xgboost.png?imagetools";
    import Pillow from "$lib/assets/images/skills-icon/pillow.png?imagetools";
    import MM from "$lib/assets/images/skills-icon/mm.png?imagetools";
    import Paddle from "$lib/assets/images/skills-icon/paddle.webp";

    import Picture from "$lib/components/ui/picture/picture.svelte";

    import type { SkillTypes } from "./constant";

    import SimpleIconsOnnx from "~icons/simple-icons/onnx";
    import LogosGithubIcon from "~icons/logos/github-icon";
    import DeviconLatex from "~icons/devicon/latex";
    import LogosMarkdown from "~icons/logos/markdown";
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
    import LogosHuggingFaceIcon from "~icons/logos/hugging-face-icon";
    interface $$Props {
        skill: SkillTypes;
        class?: string;
    }

    let className: $$Props["class"] = undefined;
    export let skill: $$Props["skill"];
    export { className as class };
</script>

{#if skill === "python"}
    <LogosPython class={className} />
{:else if skill === "pillow"}
    <div class={className}>
        <Picture meta={Pillow} />
    </div>
{:else if skill === "pytorch"}
    <LogosPytorchIcon class={className} />
{:else if skill === "tensorflow"}
    <LogosTensorflow class={className} />
{:else if skill === "raspberryPi"}
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
{:else if skill === "deepLearning" || skill === "machineLearning" || skill === "ai"}
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
{:else if skill === "scikitLearn"}
    <DeviconScikitlearn class={className} />
{:else if skill === "torchseg"}
    <div class={className}>
        <Picture meta={TorchSeg} />
    </div>
{:else if skill === "torchmetrics"}
    <div class={className}>
        <Picture meta={TorchMetrics} />
    </div>
{:else if skill === "markdown"}
    <LogosMarkdown class={`${className} fill-base-content`} />
{:else if skill === "latex"}
    <DeviconLatex class={`${className} fill-base-content`} />
{:else if skill === "github"}
    <LogosGithubIcon class={`${className} fill-base-content`} />
{:else if skill === "albumentations"}
    <div class={className}>
        <Picture meta={Albumentations} />
    </div>
{:else if skill === "interpret"}
    <div class={className}>
        <Picture meta={Interpret} />
    </div>
{:else if skill === "surprise"}
    <img src={Surprise} class={className} alt={"surprise"} />
{:else if skill === "xgboost"}
    <div class={className}>
        <Picture meta={Xgboost} />
    </div>
{:else if skill === "onnx"}
    <SimpleIconsOnnx class={className} />
{:else if skill === "paddlepaddle"}
    <div class={`flex items-center justify-center ${className}`}>
        <img src={Paddle} alt={"surprise"} class="w-full" />
    </div>
{:else if skill === "openvino"}
    <div class={`flex items-center justify-center ${className}`}>
        <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABoUlEQVR4AWLAAvQAhZODbgRRFECn7n/U+oradlDERVgFtW0G5U8Uk042auMiqG2veXvf5L72ZbM4yRnPwwU6gR6jOlSLHqFjaCzqliB0HrWj4EYbOoMGuvp5l38YHBx8Wl1dLa+srOwxKysr5aCgoFNhoB3nQebphaO8vFy2IeAEPrIWFxfL7Bv6dloi4viyc3NzZSAcDoCXSzu8XNlBJDMzUxa2E4NK4yj4+/vfm81mEyCvN3boz9JCbegXDOZqwWJ0AMdkMhn9/PzuaZBRiaINSUlJu0AMF6g/q641GoBhNcMfCQkJPF6HEqUJurq6NIB8Pdv5z6r1EV+w0WKAoTyt+o7R3t6uoQF+JDpAR0eHywFEv18cwGhra+MDfLveQj5tQXCkUOt6CzyILDAmRA3i9X8QmQM5WjWwDCOC3z6IQYyllEBWVpbiKo3smpOWlqYIaYyWiBleSEVFRYoVAScsFos1Ly9PEQppUhIIRHmBAJbtZVlZmbK0tLTPxApU8Nm1UMpbrvohkMrT5qWZJsSfXRFLrXtENfJD0R7hexb5BeQxukaj1bFoAAAAAElFTkSuQmCC"
            alt={"openvino"}
            class="w-full"
        />
    </div>
{:else if skill === "mmcv" || skill === "mmdetection"}
    <div class={className}>
        <Picture meta={MM} />
    </div>
{:else if skill === "transformers"}
    <LogosHuggingFaceIcon class={className} />
{/if}
