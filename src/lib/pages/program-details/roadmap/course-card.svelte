<script lang="ts">
	import { cx } from 'cva';

	import { Markdown } from '$lib/components/ui/markdown';

	import { navigate } from '$lib/lib/i18n/routing';

	import type { CourseProps } from '$lib/utils/types/data';

	import * as m from '$i18n/messages';

	import { IconChevronRight, IconClock } from '$lib/components/icons';

	interface $$Props extends CourseProps {
		idx: number;
		last: boolean;
	}

	export let title: $$Props['title'] = undefined;
	export let curriculum: $$Props['curriculum'] = [];
	export let description: $$Props['description'] = undefined;
	export let id: $$Props['id'];
	export let thumbnail: $$Props['thumbnail'] = undefined;
	export let idx: $$Props['idx'];
	export let last: $$Props['last'];

	$: totalSessions = curriculum.filter((c) => c.classesCountable).length;

	$: console.log(curriculum);
</script>

{#if title}
	<li class="flex gap-x-4">
		<div class="relative flex w-14 flex-col items-center">
			<div class="absolute top-4 flex size-12 items-center justify-center rounded-full bg-primary">
				<div class="size-6 rounded-full bg-secondary"></div>
			</div>
			<div
				class={cx('w-2 bg-primary', {
					'mt-4 h-[calc(100%-1rem)]': idx === 0,
					'h-full': idx !== 0
				})}
			></div>
		</div>
		<div
			class={cx('card  w-full border border-base-content/5 shadow shadow-base-content/5', {
				'mb-4': !last
			})}
		>
			<div class="card-body items-start">
				<div
					class={cx('grid grid-cols-1 gap-x-16 gap-y-8 ', {
						'lg:grid-cols-5': !!thumbnail
					})}
				>
					<div class="col-span-1 space-y-4 text-start lg:col-span-3">
						<div>
							<p class="font-semibold">{m.programDetails_courseRoadmap({ number: idx + 1 })}</p>
							<h1 class="text-xl font-bold">
								<a href={navigate(`/courses/${id}`)} class="link-hover link hover:text-primary">
									{title}
								</a>
							</h1>
						</div>
						<div class="flex items-center gap-x-1">
							<IconClock class="size-5 stroke-2" />
							<p>{m.totalSessions({ number: totalSessions })}</p>
						</div>
						<Markdown text={description} />
						<div class="card-actions">
							<a href={navigate(`/courses/${id}`)} class="btn btn-primary">
								{m.showDetails()}
								<IconChevronRight class="size-4 stroke-2" />
							</a>
						</div>
					</div>
					{#if thumbnail}
						<div class="col-span-1 self-center lg:col-span-2">
							<div class="overflow-hidden rounded-box">
								<figure class="aspect-thumbnail43">
									<img
										loading="lazy"
										src={thumbnail}
										alt={m.thumbnail({ title: title })}
										height={200}
										width={448}
										class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
									/>
								</figure>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</li>
{/if}
