<script lang="ts">
	import * as m from '$i18n/messages';
	import { ContainerContent } from '$lib/components/ui/container';
</script>

<div class="hero h-screen overflow-hidden supports-[height:100dvh]:h-[100dvh]">
	<ContainerContent
		size={0}
		class="relative grid h-full content-center sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl"
	>
		<div class="text-shadow-sm space-y-5 text-center text-primary shadow-base-content">
			<p class="text-4xl font-bold sm:text-5xl lg:font-extrabold xl:text-7xl">
				{m.homepage_hero_title()}
			</p>
		</div>
	</ContainerContent>
</div>
