<script lang="ts">
	import { Container, ContainerContent } from '$lib/components/ui/container';
	import type { ProgramProps } from '$lib/utils/types/data';
	import * as m from '$i18n/messages';
	import { navigate } from '$lib/lib/i18n/routing';

	interface $$Props {
		programs?: ProgramProps[];
	}

	export let programs: $$Props['programs'] = undefined;
</script>

{#if programs}
	{#each programs as program (program.id)}
		{@const {
			id,
			title,
			description,
			targets,
			'courses-highlighted': coursesHighlighted
		} = program}
		<Container>
			<ContainerContent class="space-y-10 lg:space-y-16">
				<div class="space-y-4 lg:space-y-6">
					{#if title}
						<h1 class="text-2xl font-bold lg:text-4xl">
							{title}
						</h1>
					{/if}

					{#if targets}
						<div>
							<span>Target:</span>{' '}
							{#each targets as target}
								<span class="badge badge-primary badge-outline">{target}</span>{' '}
							{/each}
						</div>
					{/if}
					{#if description}
						<p>{description}</p>
					{/if}
				</div>
				<ul class="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each coursesHighlighted.slice(0, 6) as courses}
						<li class="group card card-compact bg-white shadow hover:shadow-lg">
							<a href={navigate(`/course/${courses}`)}>
								<figure class="aspect-thumbnail169">
									<img
										src={'https://i.imgur.com/uAfO3SL.jpeg'}
										alt={'https://i.imgur.com/uAfO3SL.jpeg'}
										height={200}
										width={448}
										class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
									/>
								</figure>
							</a>

							<div class="card-body">
								<div>
									<a
										href={'#test'}
										class="flex-grow-0 text-base font-semibold hover:text-primary lg:text-xl"
									>
										asdasdasd
									</a>
								</div>
								<p class="line-clamp-3 flex-grow">asdasd</p>
							</div>
						</li>
					{/each}
				</ul>
				<div class="grid w-full justify-center">
					<a href={navigate(`/program/${id}`)} class="btn btn-neutral btn-wide">
						{m.viewProgramDetails()}
					</a>
				</div>
			</ContainerContent>
		</Container>
	{/each}
{/if}
