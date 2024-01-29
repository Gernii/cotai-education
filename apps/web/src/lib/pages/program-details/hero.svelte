<script lang="ts">
	import { page } from '$app/stores';

	import { ContainerContent } from '$lib/components/ui/container';

	import { defaultImage } from '$lib/utils/constants';

	import * as m from '$i18n/messages';

	import type { ProgramDetailsPageDataProps } from './types';

	import HeroiconsBookmark from '~icons/heroicons/bookmark';
	import HeroiconsClock from '~icons/heroicons/clock';
	import { TextContent } from '$lib/features/text-content';

	$: pd = $page.data as ProgramDetailsPageDataProps;

	$: program = pd.programDetails;

	$: totalRoadmapCourses = program.coursesRoadmap.length;

	$: totalRoadmapSessions = program.coursesRoadmap.reduce(
		(prev, courseId) => prev + pd.courses[courseId].totalLessons,
		0
	);
</script>

<div class="mb-16 min-h-dvh">
	<ContainerContent class="h-full pt-header-space-sm lg:pt-header-space">
		<div class="grid grid-cols-1 gap-x-32 gap-y-16 pt-16 lg:grid-cols-5">
			<div class="col-span-1 space-y-4 lg:col-span-3">
				<div>
					<p class="text-lg font-semibold">{m.program()}</p>
					<h1 class="text-5xl font-extrabold">{program.title}</h1>
				</div>
				{#if program.targets.length > 0}
					<div>
						<span>{m.target()}:</span>{' '}
						{#each program.targets as target}
							<span class="badge badge-primary badge-outline">{target}</span>{' '}
						{/each}
					</div>
				{/if}
				<div class="flex flex-wrap gap-x-4 gap-y-1">
					<div class="flex items-center gap-x-1">
						<HeroiconsBookmark class="size-6 stroke-2 text-primary" />
						<p>{m.totalRoadmapCourses({ number: totalRoadmapCourses })}</p>
					</div>
					<div class="flex items-center gap-x-1">
						<HeroiconsClock class="size-6 stroke-2 text-primary" />
						<p>{m.totalSessions({ number: totalRoadmapSessions })}</p>
					</div>
				</div>
				<hr class="h-1 w-12 border-0 bg-secondary" />
				<TextContent text={program.description} />
				<div class="flex gap-x-4">
					<a href="#roadmap" class="btn btn-primary"> {m.roadmap()} </a>
					<a href="#courses" class="btn btn-ghost"> {m.courses()} </a>
				</div>
			</div>
			<div
				class="group card col-span-1 w-full self-start overflow-hidden border border-base-content/5 bg-base-100 shadow shadow-base-content/5 hover:shadow-lg hover:shadow-base-content/5 lg:col-span-2"
			>
				<figure class="aspect-thumbnail169">
					<img
						loading="lazy"
						src={defaultImage}
						alt={m.thumbnail({ title: program.title ?? '' })}
						height={200}
						width={448}
						class="w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</figure>

				<div class="card-body">
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
