import type { ActionFailure } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import { type ObjectSchema, object, ref, string } from 'yup';

import { yupValidator } from '$lib/libs/yup/validator-handler.server';

import { type CognitoAuthResponse, fetchCognito } from '$lib/utils/auth';
import { routerPath } from '$lib/utils/constants';
import { COGNITO_CLIENT_ID } from '$lib/utils/environment';

export const actions = {
	default: async ({
		request,
		url
	}): Promise<
		ActionFailure<{
			errors: Readonly<Partial<Record<keyof IFormInput, string> & { error: string }>>;
		}>
	> => {
		const form = await request.formData();
		const username = form.get('username');
		const email = form.get('email');
		const password = form.get('password');
		const confirmPassword = form.get('confirm-password');

		const error = yupValidator(signupSchema).validateSync({
			username,
			email,
			password,
			confirmPassword
		});

		if (error.error !== undefined) {
			return fail(400, { errors: error.error });
		}

		const body = {
			ClientId: COGNITO_CLIENT_ID,
			Username: username,
			Password: password,
			UserAttributes: [{ Name: 'email', Value: email }]
		};

		try {
			await fetchCognito<CognitoAuthResponse>('SignUp', body);
		} catch (error) {
			return fail(400, {
				errors: {
					error: (error as string).replace('PreSignUp failed with error ', '')
				}
			});
		}

		url.pathname = routerPath.admin.auth.authSignin;

		throw redirect(303, url);
	}
};

export interface IFormInput {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const signupSchema: ObjectSchema<IFormInput> = object({
	username: string().required('Username is required'),
	email: string().email('Email is invalid').required('Email is required'),
	password: string()
		.min(8, 'Password must be at least 8 characters')
		.matches(/[A-Z]/g, 'Password must contain at least one uppercase character')
		.matches(/[a-z]/g, 'Password must contain at least one lowercase character')
		.matches(/[0-9]/g, 'Password must contain at least one number')
		.matches(/\W/g, 'Password must contain at least one special character')
		.required('Password is required'),
	confirmPassword: string()
		.oneOf([ref('password')], 'Your passwords must match')
		.required('confirm Password is required')
});
