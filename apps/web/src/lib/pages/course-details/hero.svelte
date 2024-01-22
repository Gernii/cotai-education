<script lang="ts">
	import { page } from '$app/stores';

	import { ContainerContent } from '$lib/components/ui/container';

	import * as m from '$i18n/messages';

	import type { CourseDetailsPageDataProps } from './types';

	import { TextContent } from '$lib/features/text-content';

	$: pd = $page.data as CourseDetailsPageDataProps;
</script>

<div class="mb-16 min-h-dvh">
	<ContainerContent class="h-full pt-header-space-sm lg:pt-header-space">
		<div class="grid grid-cols-1 gap-x-32 gap-y-16 pt-16 lg:grid-cols-5">
			<div class="col-span-1 space-y-8 lg:col-span-3">
				<h1 class="text-5xl font-extrabold">{pd.title}</h1>
				<TextContent text={pd.description} />
			</div>
			<div
				class="group card col-span-1 w-full self-start overflow-hidden border border-base-content/5 bg-base-100 shadow shadow-base-content/5 hover:shadow-lg hover:shadow-base-content/5 lg:col-span-2"
			>
				<figure class="aspect-thumbnail169">
					<img
						loading="lazy"
						src={pd.thumbnail}
						alt={m.thumbnail({ title: pd.title ?? '' })}
						height={200}
						width={448}
						class="w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</figure>

				<div class="card-body">
					{#if pd.registerUrl}
						<a href={pd.registerUrl} class="btn btn-primary btn-block">{m.registerNow()}</a>

						<div class="divider uppercase">{m.or()}</div>
					{/if}
					<div class="space-y-2">
						<div class="text-xl font-semibold">{m.contact()}</div>
						<address class="not-italic">
							<p><span>{m.hotline()}: </span>{m.phoneNumber()}</p>
						</address>
					</div>
				</div>
			</div>
		</div>
	</ContainerContent>
</div>
