<script lang="ts">
	import HeroPicture from '$lib/assets/pages/about/hero.jpg?imagetools';
	import OutstandingMarks2Picture from '$lib/assets/pages/about/outstanding-marks-2.png?imagetools';
	import Group3SteamHackPicture from '$lib/assets/images/group-3-steamhack.jpg?imagetools';

	import { ContainerContent } from '$lib/components/ui/container';
	import Container from '$lib/components/ui/container/container.svelte';
	import { Picture } from '$lib/components/ui/picture';

	import { programIds } from '$lib/utils/constants';

	import * as m from '$i18n/messages';

	import LucideGraduationCap from '~icons/lucide/graduation-cap';
	import TeenyiconsDiscountSolid from '~icons/teenyicons/discount-solid';
	import HeroiconsCheck16Solid from '~icons/heroicons/check-16-solid';
</script>

<section
	class="flex min-h-dvh w-full flex-col justify-center bg-secondary/10 pt-header-space-sm dark:bg-base-300"
>
	<Container>
		<ContainerContent>
			<div class="relative pb-16">
				<div
					class="card static -top-32 mx-auto flex w-full flex-row gap-x-2 bg-error text-error-content"
				>
					<div class="flex flex-row gap-x-2 px-4 py-2">
						<div class="mt-1">
							<TeenyiconsDiscountSolid class="size-4 flex-shrink-0 sm:size-6" />
						</div>
						<div>
							<p class="text-base font-bold sm:text-lg">Ưu đãi lên đến 15,000,000đ</p>
							<p class="text-sm sm:text-base">Giảm 100% cho học sinh cấp 3</p>
							<p class="text-xs sm:text-sm">*Ưu đãi năm học mới trước 29/06/2024</p>
						</div>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-1 gap-y-8 md:grid-cols-2">
				<div class="space-y-1 lg:space-y-4">
					<p class="text-lg font-bold text-primary lg:text-3xl">CoTAI Education</p>
					<div class="text-xl font-bold sm:text-2xl lg:text-4xl">
						<p>Trung tâm đào tạo</p>
						<span
							class="relative z-[1] after:absolute after:bottom-1 after:left-0 after:-z-[1] after:h-1 after:w-full after:bg-secondary/70 after:lg:h-2"
						>
							Trí Tuệ Nhân Tạo
						</span>
						<p>
							<span class="tooltip z-[1] text-secondary" data-tip="9/2019">đầu tiên</span> cho học
							sinh
							<span class="whitespace-nowrap">cấp 3</span>
						</p>
						<!-- {@html m.homepage_hero_title()} -->
					</div>
					<div class="text-sm lg:text-base">
						<p>
							<HeroiconsCheck16Solid class="inline-block size-7 flex-shrink-0 text-secondary" />
							<span>4 năm kinh nghiệm giảng dạy ở trường cấp 3</span>
						</p>
						<p>
							<HeroiconsCheck16Solid class="inline-block size-7 flex-shrink-0 text-secondary" />
							<span>Đội ngũ giáo viên giỏi và tận tâm</span>
						</p>
						<p>
							<HeroiconsCheck16Solid class="inline-block size-7 flex-shrink-0 text-secondary" />
							<span>Hệ thống công nghệ học tập tiên tiến</span>
						</p>
					</div>
				</div>
				<!-- <Picture
						meta={WhoWeArePNG}
						author={'Image by storyset on Freepik'}
						alt={m.whoWeAre_thumbnail()}
					/> -->
				<div class="flex h-96 flex-col space-y-2">
					<div class="h-1/2">
						<Picture meta={HeroPicture} alt={m.mainLogo()} imageClass="rounded-box object-cover" />
					</div>
					<div class="grid h-1/2 grid-cols-2 gap-x-2">
						<div class="h-32 overflow-hidden">
							<Picture
								meta={OutstandingMarks2Picture}
								alt={'Đào tạo'}
								imageClass="rounded-box object-cover"
							/>
						</div>
						<div class="h-32 overflow-hidden">
							<Picture
								meta={Group3SteamHackPicture}
								alt={'Đào tạo'}
								imageClass="rounded-box object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="card bg-base-100">
				<div
					class="card-compact grid grid-cols-1 gap-x-2 gap-y-2 px-3 py-2 md:grid-cols-3 lg:gap-x-6 lg:px-6 lg:py-4 xl:gap-x-12"
				>
					<a class="btn" href={`#${programIds[0]}`}>
						<LucideGraduationCap class="size-4 flex-shrink-0 lg:size-6" />
						<span class="text-base lg:text-lg">Public Training</span>
					</a>
					<a class="btn" href={`#${programIds[1]}`}>
						<LucideGraduationCap class="size-4 flex-shrink-0 lg:size-6" />
						<span class="text-base lg:text-lg">Đào tạo dự án thực tế</span>
					</a>
					<a class="btn" href={`#${programIds[2]}`}>
						<LucideGraduationCap class="size-4 flex-shrink-0 lg:size-6" />
						<span class="text-base lg:text-lg">Khóa học bổ trợ</span>
					</a>
				</div>
			</div>
		</ContainerContent>
	</Container>
</section>
