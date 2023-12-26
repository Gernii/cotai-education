<script lang="ts">
	import { page } from '$app/stores';

	import { ContainerContent } from '$lib/components/ui/container';
	import { Markdown } from '$lib/components/ui/markdown';

	import * as m from '$i18n/messages';

	import type { CourseDetailsPageDataProps } from './types';

	$: pd = $page.data as CourseDetailsPageDataProps;
</script>

<div class="hero mb-16 min-h-screen supports-[min-height:100dvh]:min-h-[100dvh]">
	<ContainerContent class="h-full pt-header-space-sm lg:pt-header-space">
		<div class="grid grid-cols-1 gap-x-32 gap-y-16 pt-16 lg:grid-cols-5">
			<div class="col-span-1 space-y-8 lg:col-span-3">
				<h1 class="text-5xl font-extrabold">{pd.title}</h1>
				<Markdown text={pd.description} />
			</div>
			<div
				class="group card col-span-1 w-full self-start overflow-hidden border bg-white shadow hover:shadow-lg lg:col-span-2"
			>
				<figure class="aspect-thumbnail169">
					<img
						loading="lazy"
						src={pd.thumbnail}
						alt={m.thumbnail({ title: pd.title ?? '' })}
						height={200}
						width={448}
						class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</figure>

				<div class="card-body gap-y-4">
					<div>
						<p class="text-sm">{m.studyprice()}</p>
						<p class="text-2xl font-semibold">
							{#if pd.price}
								{pd.price.toLocaleString('vi-VN', {
									style: 'currency',
									currency: 'VND'
								})}
							{:else}
								{m.contact()}
							{/if}
						</p>
					</div>
					<div class="card-actions flex-col">
						<a href="/" class="btn btn-primary btn-block">{m.registerNow()}</a>

						<div class="divider uppercase">{m.or()}</div>
						<div class="space-y-2">
							<div class="text-xl font-semibold">{m.contact()}</div>
							<address class="not-italic">
								<p><span>{m.hotline()}: </span>{m.phoneNumber()}</p>
							</address>
						</div>
					</div>
				</div>
			</div>
		</div>
	</ContainerContent>
</div>
