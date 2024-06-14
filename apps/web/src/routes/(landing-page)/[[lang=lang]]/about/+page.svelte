<script lang="ts">
	import { cx } from 'cva';

	import HeroPicture from '$lib/assets/pages/about/hero.jpg?imagetools';
	import CoTAIAIOpenDayPicture from '$lib/assets/pages/about/cotai-ai-open-day.jpg?imagetools';
	import OutstandingMarks2Picture from '$lib/assets/pages/about/outstanding-marks-2.png?imagetools';
	import LogoLeHongPhongPicture from '$lib/assets/logo/lhp.png?imagetools';

	import { Container, ContainerContent } from '$lib/components/ui/container';
	import { SEO } from '$lib/components/ui/seo';
	import { Picture } from '$lib/components/ui/picture';

	import { AboutPageMembers } from '$lib/pages/about';

	import * as m from '$i18n/messages';

	let textAndImageGridClassName = cx(
		'grid grid-cols-1 gap-x-0 gap-y-4 text-justify md:grid-cols-2 md:gap-x-8 lg:gap-x-16'
	);

	let sectionH2TitleClassName = cx('text-xl font-bold sm:text-3xl');

	let wrapperClassName = cx('space-y-4 md:space-y-8');
</script>

<SEO title={m.aboutus()} />
<section class="mt-header-space">
	<Container>
		<ContainerContent>
			<Picture meta={HeroPicture} alt={m.mainLogo()} imageClass="rounded-box" />
		</ContainerContent>
	</Container>
</section>

<section>
	<Container>
		<ContainerContent class={wrapperClassName}>
			<div class="border-l-4 border-primary pl-4">
				<h1 class="text-2xl font-bold sm:text-4xl">{m.ourStory()}</h1>
			</div>
			<div class={textAndImageGridClassName}>
				<div>
					{@html m.ourStory_description()}
				</div>
				<div class="flex">
					<Picture
						meta={CoTAIAIOpenDayPicture}
						alt={'CoTAI Ai Open Day Picture'}
						imageClass="rounded-box h-auto"
					/>
				</div>
			</div>
		</ContainerContent>
	</Container>
</section>

<section>
	<Container>
		<ContainerContent class={wrapperClassName}>
			<div class="border-l-4 border-secondary pl-4">
				<h1 class={sectionH2TitleClassName}>{m.ourAdvantage()}</h1>
			</div>
			<div class={textAndImageGridClassName}>
				<div>
					{@html m.ourAdvantage_description()}
				</div>
				<div>
					<Picture
						meta={CoTAIAIOpenDayPicture}
						alt={'CoTAI Ai Open Day Picture'}
						imageClass="rounded-box"
					/>
				</div>
			</div>
		</ContainerContent>
	</Container>
</section>

<section class="bg-primary/90 text-white">
	<Container>
		<ContainerContent class={wrapperClassName}>
			<div class="border-l-4 border-secondary pl-2 sm:pl-4">
				<h2 class={sectionH2TitleClassName}>{m.outstandingMarks()}</h2>
			</div>
			<div class={textAndImageGridClassName}>
				<div>
					{@html m.outstandingMarks_description()}
				</div>
				<div>
					<Picture meta={HeroPicture} alt={'CoTAI Ai Open Day Picture'} imageClass="rounded-box" />
				</div>
			</div>
			<div class={textAndImageGridClassName}>
				<div class="order-last md:order-none">
					<Picture meta={OutstandingMarks2Picture} alt={'Đào tạo'} imageClass="rounded-box" />
				</div>
				<div>
					{@html m.outstandingMarks_description_2()}
				</div>
			</div>
		</ContainerContent>
	</Container>
</section>

<section>
	<Container>
		<ContainerContent class={wrapperClassName}>
			<div class="flex justify-center">
				<div class="border-b-4 border-secondary pb-1">
					<h2 class={`${sectionH2TitleClassName} text-center`}>{m.ourTeam()}</h2>
				</div>
			</div>
			<AboutPageMembers />
		</ContainerContent>
	</Container>
</section>

<section>
	<Container>
		<ContainerContent class={wrapperClassName}>
			<div class="flex justify-center">
				<div class="border-b-4 border-secondary pb-1">
					<h2 class={`${sectionH2TitleClassName} text-center`}>{m.partner()}</h2>
				</div>
			</div>
			<div class="flex flex-wrap justify-center">
				<div class="size-40" title={m.partner_lhp_title()}>
					<Picture
						meta={LogoLeHongPhongPicture}
						alt={'CoTAI Ai Open Day Picture'}
						imageClass="rounded-box"
					/>
				</div>
			</div>
		</ContainerContent>
	</Container>
</section>
