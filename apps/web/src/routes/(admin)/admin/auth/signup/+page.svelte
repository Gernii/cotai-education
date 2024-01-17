<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	import { FormControl, InputPassword, PasswordStrength } from '$lib/components/ui/form';

	import { REDIRECT_PARAM, routerPath } from '$lib/utils/constants';

	export let form;

	let passwordInputValue = '';

	let confirmPasswordInputValue = '';

	$: confirmPasswordInputNotMatch = passwordInputValue !== confirmPasswordInputValue;

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
			<FormControl label={'Username'} required error={form?.errors.username}>
				<input
					type="text"
					class="input input-bordered w-full"
					name="username"
					disabled={isFormSubmiting}
				/>
			</FormControl>

			<FormControl label={'Email'} required error={form?.errors.email}>
				<input
					type="email"
					class="input input-bordered w-full"
					name="email"
					disabled={isFormSubmiting}
				/>
			</FormControl>

			<!-- <PasswordInput
					error={form?.errors.password}
					label="Password"
					name="password"
					type="password"
					required
					bind:value={passwordInputValue}
					disabled={isFormSubmiting}
				/> -->
			<FormControl label={'Password'} required error={form?.errors.password}>
				<InputPassword
					disabled={isFormSubmiting}
					placeholder="Type password"
					name="password"
					bind:value={passwordInputValue}
				/>
			</FormControl>

			<PasswordStrength password={passwordInputValue} />

			<FormControl
				label={'Confirm password'}
				required
				error={confirmPasswordInputNotMatch
					? 'Confirm password does not match'
					: form?.errors.confirmPassword}
			>
				<InputPassword
					disabled={isFormSubmiting}
					placeholder="Type password"
					name="confirm-password"
					bind:value={confirmPasswordInputValue}
				/>
			</FormControl>

			<div class="pt-4">
				<button type="submit" class="btn btn-primary w-full" disabled={isFormSubmiting}>
					{#if isFormSubmiting}
						<span class="loading loading-spinner" />
					{/if}
					Sign up
				</button>
			</div>
		</form>
		<hr class="border" />

		<div class="text-center">
			<p>
				Already have an account?{' '}
				<a href={routerPath.admin.auth.authSignin} class="link link-primary">Sign in</a>
			</p>
		</div>
	</div>
</div>
