<script lang="ts">
	import { navigate } from '$lib/libs/i18n/routing';

	import { routingPathCoursesId } from '$lib/utils/routing-path';
	import { defaultImage } from '$lib/utils/constants';

	import * as m from '$i18n/messages';

	import type { CoursesListProps_Courses } from './types';

	import { IconClock } from '$lib/components/icons';

	type $$Props = CoursesListProps_Courses;

	export let id: $$Props['id'];
	export let title: $$Props['title'] = undefined;
	export let thumbnail: $$Props['thumbnail'] = undefined;
	export let description: $$Props['description'] = undefined;
	export let totalLessons: $$Props['totalLessons'] = 0;

	$: courseNavigate = navigate(routingPathCoursesId(id));
</script>

{#if title && description}
	<li
		class="group card card-bordered card-compact overflow-hidden border-base-content/5 bg-base-100 shadow shadow-base-content/5 hover:shadow-lg hover:shadow-base-content/5"
	>
		<a href={courseNavigate}>
			<figure class="aspect-thumbnail169">
				<img
					src={thumbnail ?? defaultImage}
					alt={m.thumbnail({ title: title ?? '' })}
					height={200}
					width={448}
					loading="lazy"
					class="w-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			</figure>
		</a>

		<div class="card-body flex-none">
			<div>
				<a
					href={courseNavigate}
					class="flex-grow-0 text-base font-bold hover:text-primary lg:text-xl"
				>
					{title}
				</a>
			</div>
			<div class="flex items-center gap-x-1">
				<IconClock class="size-4" />
				<p>{m.totalSessions({ number: totalLessons })}</p>
			</div>
			<p class="line-clamp-3 flex-grow">{description}</p>
		</div>
	</li>
{/if}
