<script lang="ts">
	import WhoWeArePNG from '$lib/assets/pages/home-page/who-we-are.png?imagetools';

	import { Container, ContainerContent } from '$lib/components/ui/container';
	import { SectionTitle } from '$lib/components/ui/section-title';
	import { Picture } from '$lib/components/ui/picture';

	import * as m from '$i18n/messages';
</script>

<Container>
	<ContainerContent class="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-9">
		<div class="col-span-1 self-center px-4 md:col-span-4">
			<Picture
				meta={WhoWeArePNG}
				author={'Image by storyset on Freepik'}
				alt={m.whoWeAre_thumbnail()}
			/>
			<!-- <img src={WhoWeAreSVG} alt={m.whoWeAre_thumbnail()} /> -->
		</div>
		<div class="col-span-1 self-center md:col-span-5">
			<SectionTitle>{m.whoweare()}</SectionTitle>
			<div class="prose">
				<p>{m.whoweareDescription()}</p>
				<p>
					{m.whoweareDescription2()}
				</p>
			</div>
		</div>
	</ContainerContent>
</Container>
