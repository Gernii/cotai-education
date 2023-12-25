<script lang="ts">
	import CoTAILogo from '$lib/assets/logo/CoTAI-Ver0-640.png';

	import { Container, ContainerContent } from '$lib/components/ui/container';

	import { navigate } from '$lib/lib/i18n/routing';

	import * as m from '$i18n/messages';

	import { IconFacebook, IconLinkedin, IconYoutube } from '$lib/components/icons';
</script>

<footer class="border-t bg-base-200 py-2" id="contact">
	<Container padding="top">
		<ContainerContent class="space-y-10 text-center lg:text-start">
			<div class="flex flex-col-reverse justify-between gap-12 lg:flex-row">
				<div class="flex flex-col gap-10 lg:flex-row">
					<div class="space-y-5">
						<p class="text-lg font-semibold">{m.contacts()}</p>
						<address class="space-y-3 not-italic">
							<p>
								<span class="font-semibold">{m.email()}:</span>{' '}
								<a href="mailto:contact@cot.ai" class="link-hover link">contact@cot.ai</a>
							</p>
							<p>
								<span class="font-semibold">{m.hotline()}:</span>{' '}
								<a href="tel:+84815503467" class="link-hover link">
									{m.phoneNumber()}
								</a>
							</p>
							<div class="flex flex-col gap-x-2 lg:flex-row">
								<span class="font-semibold">{m.address()}:</span>
								<div class="space-y-1">
									<a
										href="https://www.google.com/maps/place/MDN+building/@10.8458901,106.6145654,17z/data=!3m1!4b1!4m5!3m4!1s0x31752b0733df578d:0x176cb06b6ce2d507!8m2!3d10.8459893!4d106.6166801"
										class="link-hover link block"
										target="_blank"
										rel="noopener noreferrer"
									>
										{m.contacts_address_1()}
									</a>
									<a
										href="https://www.google.com/maps/place//@10.7640773,106.679528,17z/data=!3m1!4b1?entry=ttu"
										class="link-hover link block"
										target="_blank"
										rel="noopener noreferrer"
									>
										{m.contacts_address_2()}
									</a>
									<a
										href="https://www.google.com/maps/place/F%2FC+Coffee/@10.8211744,106.6369177,21z/data=!4m15!1m8!3m7!1s0x3175296504f6eeaf:0x7aee623f96a50e4b!2zOSBOZ3V54buFbiBT4bu5IFPDoWNoLCBQaMaw4budbmcgMTUsIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!3b1!8m2!3d10.8230197!4d106.63846!16s%2Fg%2F11f10dh91s!3m5!1s0x3175290acc53959b:0xa1f1474055c95f10!8m2!3d10.821143!4d106.6368483!16s%2Fg%2F11hgdmdyxt?entry=ttu"
										class="link-hover link block"
										target="_blank"
										rel="noopener noreferrer"
									>
										{m.contacts_address_3()}
									</a>
								</div>
							</div>
						</address>
					</div>
				</div>
				<div class="h-36">
					<img
						loading="lazy"
						src={CoTAILogo}
						alt={m.mainLogo()}
						class="h-full w-full object-contain"
					/>
				</div>
			</div>
			<div class="flex flex-col items-center justify-between gap-y-3 lg:flex-row">
				<div class="flex flex-wrap gap-x-4">
					<a
						href="https://www.facebook.com/cotaivn"
						aria-label={'Facebook'}
						class="btn btn-square"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IconFacebook class="size-6" />
					</a>
					<a
						href="https://www.linkedin.com/company/cotai/mycompany/"
						aria-label={'Linkedin'}
						class="btn btn-square"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IconLinkedin class="size-6" />
					</a>
					<a
						href="https://www.youtube.com/@cotai"
						aria-label={'Youtube'}
						class="btn btn-square"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IconYoutube class="size-6" />
					</a>
				</div>
				<!-- ! fix this -->
				<div class="space-y-3">
					<p>Copyright 2023 © CoTAI Academy. All Rights Reserved. A subsidiary of CoTAI.</p>
					<ul class="hidden flex-wrap justify-center gap-x-3 font-semibold lg:justify-end">
						<li>
							<a href={navigate('/')} aria-label={'Sitemap'}>Sitemap</a>
						</li>
						<li>
							<a href={navigate('/')} aria-label="Cookies Policy">Cookies Policy</a>
						</li>
						<li>
							<a href={navigate('/')} aria-label="Privacy Policy">Privacy Policy</a>
						</li>
						<li>
							<a href={navigate('/')} aria-label="Terms of Use">Terms of Use</a>
						</li>
					</ul>
				</div>
			</div>
		</ContainerContent>
	</Container>
</footer>
