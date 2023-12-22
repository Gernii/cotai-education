<script lang="ts">
	import { navigate } from '$lib/lib/i18n/routing';

	import type { CourseProps } from '$lib/utils/types/data';
	import { routingPathCoursesId } from '$lib/utils/routing-path';
	import { defaultImage } from '$lib/utils/constants';

	import * as m from '$i18n/messages';

	type $$Props = CourseProps;

	export let id: $$Props['id'];
	export let title: $$Props['title'] = undefined;
	export let thumbnail: $$Props['thumbnail'] = undefined;
	export let description: $$Props['description'] = undefined;

	$: courseNavigate = navigate(routingPathCoursesId(id));
</script>

{#if title && description}
	<li class="group card card-compact overflow-hidden bg-white shadow hover:shadow-lg">
		<a href={courseNavigate}>
			<figure class="aspect-thumbnail169">
				<img
					src={thumbnail ?? defaultImage}
					alt={m.thumbnail({ title: title ?? '' })}
					height={200}
					width={448}
					class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			</figure>
		</a>

		<div class="card-body">
			<div>
				<a
					href={courseNavigate}
					class="flex-grow-0 text-base font-semibold hover:text-primary lg:text-xl"
				>
					{title}
				</a>
			</div>
			<p class="line-clamp-3 flex-grow">{description}</p>
		</div>
	</li>
{/if}
