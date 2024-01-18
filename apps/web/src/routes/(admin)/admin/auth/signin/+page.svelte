<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	import { FormControl, InputPassword } from '$lib/components/ui/form';

	import { REDIRECT_PARAM } from '$lib/utils/constants';

	export let form;

	let isFormSubmiting = false;
</script>

<div class="card card-bordered space-y-6 shadow">
	<div class="card-body">
		<h1 class="text-center text-2xl font-semibold">Sign In</h1>
		{#if form?.errors.error}
			<div role="alert" class="alert alert-error">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 shrink-0 stroke-current"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>{form?.errors.error}</span>
			</div>
		{/if}
		<form
			method="post"
			use:enhance={() => {
				isFormSubmiting = true;
				return async ({ result }) => {
					isFormSubmiting = false;

					if (result.type === REDIRECT_PARAM) {
						goto(result.location);
					} else {
						await applyAction(result);
					}
				};
			}}
		>
			<FormControl label={'Username or email'} required={true} error={form?.errors.usernameOrEmail}>
				<input
					type="text"
					placeholder="Type username or email"
					class="input input-bordered w-full"
					name="username-or-email"
					disabled={isFormSubmiting}
					autocomplete="username"
				/>
			</FormControl>
			<FormControl label={'Password'} required={true} error={form?.errors.password}>
				<InputPassword
					disabled={isFormSubmiting}
					placeholder="Type password"
					name="password"
					autocomplete="current-password"
				/>
			</FormControl>

			<div class="pt-4">
				<button type="submit" class="btn btn-primary w-full" disabled={isFormSubmiting}>
					{#if isFormSubmiting}
						<span class="loading loading-spinner" />
					{/if}
					Sign in
				</button>
			</div>
		</form>
		<!-- <hr class="border" />

			<div class="text-center">
				<p>
					You don't have an account?{' '}
					<a class="link link-primary" href={routerPath.auth.authSignup}>Sign up</a>
				</p>
			</div> -->
	</div>
</div>
