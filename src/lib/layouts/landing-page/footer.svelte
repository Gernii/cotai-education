<script lang="ts">
	import { IconFacebook, IconLinkedin } from '$lib/components/icons';
	import { ContainerContent } from '$lib/components/ui/container';
</script>

<footer class="py-2">
	<ContainerContent class="space-y-10 text-center lg:text-start">
		<div class="flex flex-col-reverse justify-between gap-y-12 lg:flex-row">
			<div class="flex flex-col gap-10 lg:flex-row">
				<div class="space-y-5">
					<p class="text-lg font-semibold">Contacts</p>
					<address class="space-y-3 not-italic">
						<p>
							<span class="font-semibold">Email:</span>{' '}
							<a href="mailto:contact@cot.ai" class="link-hover link">contact@cot.ai</a>
						</p>
						<p>
							<span class="font-semibold">Phone:</span>{' '}
							<a href="tel:+84815503467" class="link-hover link">+84 815503467</a>
						</p>
						<div class="flex flex-row gap-x-2">
							<span class="font-semibold">Address:</span>
							<div>
								<a
									href="https://www.google.com/maps/place/MDN+building/@10.8458901,106.6145654,17z/data=!3m1!4b1!4m5!3m4!1s0x31752b0733df578d:0x176cb06b6ce2d507!8m2!3d10.8459893!4d106.6166801"
									class="link-hover link block"
								>
									An Suong Office space - MDN building, District 12, HCMC
								</a>
								<a
									href="https://www.google.com/maps/place//@10.7640773,106.679528,17z/data=!3m1!4b1?entry=ttu"
									class="link-hover link block"
								>
									Trường THPT Chuyên Lê Hồng Phong, 235 Nguyễn Văn Cừ, Q.5, TP.HCM
								</a>
								<a
									href="https://www.google.com/maps/place/F%2FC+Coffee/@10.8211744,106.6369177,21z/data=!4m15!1m8!3m7!1s0x3175296504f6eeaf:0x7aee623f96a50e4b!2zOSBOZ3V54buFbiBT4bu5IFPDoWNoLCBQaMaw4budbmcgMTUsIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!3b1!8m2!3d10.8230197!4d106.63846!16s%2Fg%2F11f10dh91s!3m5!1s0x3175290acc53959b:0xa1f1474055c95f10!8m2!3d10.821143!4d106.6368483!16s%2Fg%2F11hgdmdyxt?entry=ttu"
									class="link-hover link block"
								>
									147/9 Nguyễn Sỹ Sách, P.15, Q.Tân Bình, TP.HCM
								</a>
							</div>
						</div>
					</address>
				</div>
			</div>
			<div>
				<p class="text-7xl font-bold">Gernii</p>
			</div>
		</div>
		<div class="flex flex-col items-center justify-between gap-y-3 lg:flex-row">
			<div class="flex flex-wrap gap-x-6">
				<a href="/" aria-label={'Facebook'}>
					<IconFacebook class="h-6 w-6" />
				</a>
				<a href="/" aria-label={'Linkedin'}>
					<IconLinkedin class="h-6 w-6" />
				</a>
			</div>
			<div class="space-y-3">
				<p>Copyright 2023 © Gernii. All Rights Reserved. A subsidiary of Gernii.</p>
				<ul class="flex flex-wrap justify-center gap-x-3 font-semibold lg:justify-end">
					<li>
						<a href="/" aria-label={'Sitemap'}> Sitemap </a>
					</li>
					<li>
						<a href="/" aria-label="Cookies Policy"> Cookies Policy </a>
					</li>
					<li>
						<a href="/" aria-label="Privacy Policy"> Privacy Policy </a>
					</li>
					<li>
						<a href="/" aria-label="Terms of Use"> Terms of Use </a>
					</li>
				</ul>
			</div>
		</div>
	</ContainerContent>
</footer>
