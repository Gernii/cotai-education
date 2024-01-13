<script lang="ts">
	import WhyChooseUsSVG from '$lib/assets/pages/home-page/why-choose-us.svg';

	import { Container, ContainerContent } from '$lib/components/ui/container';
	import { SectionTitle } from '$lib/components/ui/section-title';

	import * as m from '$i18n/messages';

	import Item from './item.svelte';

	import { IconIdea, IconRocket, IconTeamWork } from '$lib/components/icons';
</script>

<Container>
	<ContainerContent class="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-9">
		<div class="col-span-1 self-center md:col-span-5">
			<SectionTitle>{m.whyChooseUs_title()}</SectionTitle>
			<div class="space-y-8">
				<Item
					title={m.whyChooseUs_items_1_title()}
					description={m.whyChooseUs_items_1_description()}
				>
					<IconRocket class="size-8 sm:size-12" />
				</Item>
				<Item
					title={m.whyChooseUs_items_2_title()}
					description={m.whyChooseUs_items_2_description()}
				>
					<IconIdea class="size-8 sm:size-12" />
				</Item>
				<Item
					title={m.whyChooseUs_items_3_title()}
					description={m.whyChooseUs_items_3_description()}
				>
					<IconTeamWork class="size-8 sm:size-12" />
				</Item>
			</div>
		</div>

		<div class="col-span-1 self-center px-4 md:col-span-4">
			<img src={WhyChooseUsSVG} alt={m.whyChooseUs_thumbnail()} />
		</div>
	</ContainerContent>
</Container>
