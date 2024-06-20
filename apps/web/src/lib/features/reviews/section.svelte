<script lang="ts">
	import { page } from '$app/stores';
	import 'keen-slider/keen-slider.min.css';

	import KeenSlider, { type KeenSliderInstance } from 'keen-slider';
	import { cx } from 'cva';
	import { onMount } from 'svelte';

	import { Container, ContainerContent } from '$lib/components/ui/container';
	import SectionTitle from '$lib/components/ui/section-title/section-title.svelte';

	import type { LandingPage_LayoutData } from '$lib/layouts/landing-page/types';

	import * as m from '$i18n/messages';

	import Review from './review.svelte';
	import { autoSwitchSlide } from './slider-handler';
	$: pd = $page.data.layoutData as LandingPage_LayoutData;

	$: reviews = pd.reviews;

	let currentReview = 0;
	let isSlideRendered = false;

	let carouselRef: HTMLElement | undefined = undefined;
	let carouselSliderRef: KeenSliderInstance | undefined = undefined;
	const onChangeSlide = (idx: number) => {
		carouselSliderRef?.moveToIdx(idx);
	};

	onMount(() => {
		if (carouselRef === undefined) return;
		const slider = new KeenSlider(
			carouselRef,
			{
				loop: true,
				slides: {
					origin: 'auto',
					perView: 1,
					spacing: 15
				},
				detailsChanged: (s) => {
					currentReview = s.track.details.rel;
				},
				created: () => {
					isSlideRendered = true;
				}
			},
			[autoSwitchSlide(5000)]
		);

		carouselSliderRef = slider;
	});
</script>

{#if reviews}
	<Container padding="top-bottom">
		<ContainerContent>
			<SectionTitle>{m.reviewsTitle()}</SectionTitle>

			<div class="flex flex-col">
				<div class="keen-slider" bind:this={carouselRef}>
					{#each reviews as review, idx}
						<div
							class={cx('keen-slider__slide', {
								hidden: idx !== 0 && !isSlideRendered
							})}
						>
							<Review {...review} />
						</div>
					{/each}
				</div>
			</div>

			<div class="flex w-full justify-center gap-2 py-2">
				{#each [...Array(reviews.length)] as _, idx}
					<button
						class={cx('btn btn-circle  btn-xs', {
							'btn-primary': currentReview === idx,
							'bg-base-300': currentReview !== idx
						})}
						on:click={() => onChangeSlide(idx)}
						aria-label={m.reviewBullet({ idx: idx + 1 })}
					/>
				{/each}
			</div>
		</ContainerContent>
	</Container>
{/if}
