<script lang="ts">
	import { page } from '$app/stores';

	import { onMount } from 'svelte';
	import type { ErrorResponse, LandingPageCourseAccess } from '@repo/types-bridge';

	import { courseAPIRouterPath } from '$lib/utils/constants';

	const courseAPI = courseAPIRouterPath();

	const onCourseCheckout = async () => {
		const courseAccess = `${courseAPI.courseWithId($page.params.id).local}?${
			courseAPI.action.checkout
		}`;
		try {
			const response = await fetch(courseAccess, {
				method: 'POST'
			});

			const data = (await response.json()) as LandingPageCourseAccess.Response;
			console.log(data);
		} catch (error) {
			const typedError = error as ErrorResponse<string>;
			console.log(typedError.message);
		}
	};

	onMount(() => {
		return async () => {
			await onCourseCheckout();
		};
	});
</script>
