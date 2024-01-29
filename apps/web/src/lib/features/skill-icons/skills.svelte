<script lang="ts">
	import type { SkillTypes } from './constant';

	import LogosPython from '~icons/logos/python';
	import LogosPytorchIcon from '~icons/logos/pytorch-icon';
	import LogosTensorflow from '~icons/logos/tensorflow';
	import LogosRaspberryPi from '~icons/logos/raspberry-pi';
	import LogosStreamlit from '~icons/logos/streamlit';
	import DeviconAnaconda from '~icons/devicon/anaconda';
	import LogosJavascript from '~icons/logos/javascript';
	import LogosDockerIcon from '~icons/logos/docker-icon';
	import LucideSuperscript from '~icons/lucide/superscript';
	import LucideBrainCog from '~icons/lucide/brain-cog';

	interface $$Props {
		skill: SkillTypes;
		class?: string;
	}

	let className: $$Props['class'] = undefined;
	export let skill: $$Props['skill'];
	export { className as class };
</script>

{#if skill === 'python'}
	<LogosPython class={className} />
{:else if skill === 'pytorch'}
	<LogosPytorchIcon class={className} />
{:else if skill === 'tensorflow'}
	<LogosTensorflow class={className} />
{:else if skill === 'raspberry-pi'}
	<LogosRaspberryPi class={className} />
{:else if skill === 'anaconda'}
	<DeviconAnaconda class={className} />
{:else if skill === 'streamlit'}
	<LogosStreamlit class={className} />
{:else if skill === 'javascript'}
	<LogosJavascript class={className} />
{:else if skill === 'docker'}
	<LogosDockerIcon class={className} />
{:else if skill === 'math'}
	<LucideSuperscript class={className} />
{:else if skill === 'deep-learning' || skill === 'machine-learning' || skill === 'ai'}
	<LucideBrainCog class={className} />
{/if}
