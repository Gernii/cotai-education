<script lang="ts">
	import { writable } from 'svelte/store';
	import { inview } from 'svelte-inview';

	import WhyChooseUsPNG from '$lib/assets/pages/home-page/why-choose-us.png?imagetools';

	import { Container, ContainerContent } from '$lib/components/ui/container';
	import { SectionTitle } from '$lib/components/ui/section-title';
	import { Picture } from '$lib/components/ui/picture';

	import { inviewCommonOptions, onInViewEnter } from '$lib/libs/inview';

	import * as m from '$i18n/messages';

	import Item from './item.svelte';

	import HeroiconsRocketLaunch from '~icons/heroicons/rocket-launch';
	import HeroiconsLightBulb from '~icons/heroicons/light-bulb';
	import HeroiconsUserGroup from '~icons/heroicons/user-group';

	let isInview = writable(false);
</script>

<section use:inview={inviewCommonOptions} on:inview_enter={onInViewEnter(isInview)}>
	<Container>
		<ContainerContent class="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-9">
			<div
				class="col-span-1 self-center md:col-span-5"
				class:opacity-0={!$isInview}
				class:animate-fade-right={$isInview}
			>
				<SectionTitle>{m.whyChooseUs_title()}</SectionTitle>
				<div class="space-y-8">
					<Item
						title={m.whyChooseUs_items_1_title()}
						description={m.whyChooseUs_items_1_description()}
					>
						<HeroiconsRocketLaunch class="size-8 sm:size-12" />
					</Item>
					<Item
						title={m.whyChooseUs_items_2_title()}
						description={m.whyChooseUs_items_2_description()}
					>
						<HeroiconsLightBulb class="size-8 sm:size-12" />
					</Item>
					<Item
						title={m.whyChooseUs_items_3_title()}
						description={m.whyChooseUs_items_3_description()}
					>
						<HeroiconsUserGroup class="size-8 sm:size-12" />
					</Item>
				</div>
			</div>

			<div
				class="col-span-1 self-center px-4 md:col-span-4"
				class:opacity-0={!$isInview}
				class:animate-fade-left={$isInview}
			>
				<Picture
					meta={WhyChooseUsPNG}
					author={'Image by storyset on Freepik'}
					alt={m.whyChooseUs_thumbnail()}
				/>
			</div>
		</ContainerContent>
	</Container>
</section>
