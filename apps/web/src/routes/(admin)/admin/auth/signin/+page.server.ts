import type { ActionFailure } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import { type ObjectSchema, object, string } from 'yup';

import { yupValidator } from '$lib/lib/yup/validator-handler.server';

import { type CognitoAuthResponse, fetchCognito } from '$lib/utils/auth';
import { REDIRECT_PARAM, routerPath } from '$lib/utils/constants';
import { COGNITO_CLIENT_ID } from '$lib/utils/environment';
import { addTokens } from '$lib/utils/token-handler';

export const actions = {
	default: async ({
		cookies,
		request,
		url
	}): Promise<
		ActionFailure<{
			errors: Readonly<Partial<Record<keyof IFormInput, string> & { error: string }>>;
		}>
	> => {
		const form = await request.formData();
		const usernameOrEmail = form.get('username-or-email');
		const password = form.get('password');

		const error = yupValidator(signinSchema).validateSync({ usernameOrEmail, password });

		if (error.error !== undefined) {
			return fail(400, { errors: error.error });
		}

		const body = {
			AuthFlow: 'USER_PASSWORD_AUTH',
			AuthParameters: { USERNAME: usernameOrEmail, PASSWORD: password, EMAIL: usernameOrEmail },
			ClientId: COGNITO_CLIENT_ID
		};

		let fetchCognitoRes: CognitoAuthResponse;

		try {
			fetchCognitoRes = await fetchCognito<CognitoAuthResponse>('InitiateAuth', body);
		} catch (error) {
			return fail(400, {
				errors: {
					error: error as string
				}
			});
		}

		const addTokenError = addTokens(cookies, {
			idToken: fetchCognitoRes?.AuthenticationResult?.IdToken,
			refreshToken: fetchCognitoRes?.AuthenticationResult?.RefreshToken,
			accessToken: fetchCognitoRes?.AuthenticationResult?.AccessToken
		});

		if (Object.values(addTokenError).some((value) => value === false)) {
			return fail(400, {
				errors: {
					error: 'Invalid username or password'
				}
			});
		}

		const redirectTo = url.searchParams.get(REDIRECT_PARAM);
		if (redirectTo !== null) {
			throw redirect(303, redirectTo);
		}
		throw redirect(303, routerPath.admin.dashboard);
	}
};

export interface IFormInput {
	usernameOrEmail: string;
	password: string;
}

const signinSchema: ObjectSchema<IFormInput> = object({
	usernameOrEmail: string().required('Username or email is required'),
	password: string().required('Password is required')
});
