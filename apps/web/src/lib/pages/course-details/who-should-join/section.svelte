<script lang="ts">
	import { page } from '$app/stores';

	import { writable } from 'svelte/store';
	import { inview } from 'svelte-inview';

	import { Container, ContainerContent } from '$lib/components/ui/container';
	import { SectionTitle } from '$lib/components/ui/section-title';

	import { inviewCommonOptions, onInViewEnter } from '$lib/libs/inview';

	import * as m from '$i18n/messages';

	import type { CourseDetailsPageDataProps } from '../types';

	import Item from './item.svelte';

	let isInview = writable(false);

	$: pd = $page.data as CourseDetailsPageDataProps;

	$: whoShouldJoin = pd.whoShouldJoin;
</script>

{#if whoShouldJoin && whoShouldJoin.length > 0}
	<section use:inview={inviewCommonOptions} on:inview_enter={onInViewEnter(isInview)}>
		<Container>
			<!-- <ContainerContent class="flex flex-col gap-x-16 gap-y-8 lg:flex-row"> -->
			<ContainerContent>
				<div
					class="card rounded-3xl bg-base-100 shadow-lg"
					class:opacity-0={!$isInview}
					class:animate-fade-up={$isInview}
				>
					<div class="card-body flex-col gap-x-16 gap-y-8 lg:flex-row">
						<div class="w-full flex-grow pt-2">
							<SectionTitle
								>{m.who_should_join_1()}
								<span class="text-primary">{m.who_should_join_2()}</span></SectionTitle
							>

							<div class="space-y-4">
								{#each whoShouldJoin as item}
									<Item>
										{item}
									</Item>
								{/each}
							</div>
						</div>

						<div class="h-full w-full flex-shrink-0 flex-grow lg:w-[26rem]">
							<div class="card h-full bg-primary">
								<div class="card-body space-y-4 text-primary-content">
									<SectionTitle paddingBottom={false}>{m.needSupport()}?</SectionTitle>
									<div class="text-lg font-semibold">
										{m.needSupport_description()}
									</div>
									<button class="btn btn-outline border-primary-content text-primary-content">
										{m.contactNow()}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ContainerContent>
		</Container>
	</section>
{/if}
