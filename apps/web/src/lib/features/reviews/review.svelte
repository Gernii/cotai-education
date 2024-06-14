<script lang="ts">
	import type { ReviewProps } from '$lib/utils/types/data';

	import * as m from '$i18n/messages';

	type $$Props = ReviewProps;

	export let name: $$Props['name'];
	export let review: $$Props['review'];
	export let classNameTitle: $$Props['classNameTitle'] = undefined;
	export let classNameSubtitle: $$Props['classNameSubtitle'] = undefined;
	export let role: $$Props['role'] = undefined;

	$: classNameTitleI18n = classNameTitle
		? classNameSubtitle
			? m.reviewCourseNameWithSubtitle({ title: classNameTitle, subtitle: classNameSubtitle })
			: m.reviewCourseName({ title: classNameTitle })
		: undefined;
</script>

<div class="card aspect-4 cursor-grab active:cursor-grabbing">
	<div class="card-body">
		<h2 class="text-xl font-bold lg:text-3xl">{name}</h2>
		<div>
			{#if role}
				<p class="italic">{role}</p>
			{/if}
			{#if classNameTitleI18n}
				<p class="italic">
					{classNameTitleI18n}
				</p>
			{/if}
		</div>

		<div class="card card-compact h-full">
			<div class="card-body justify-center">
				<div>
					<p class="text-base italic lg:text-xl">"{review}"</p>
				</div>
			</div>
		</div>
	</div>
</div>
