export const defaultImage = 'https://i.imgur.com/uAfO3SL.jpeg';

export const routerPath = {
	admin: {
		auth: {
			authSignin: '/admin/auth/signin',
			authSignup: '/admin/auth/signup',
			authSignout: '/admin/auth/signout',
			authConfirmSignup: '/admin/auth/confirm-signup',
			authForgotPassword: '/admin/auth/forgot-password'
		},
		dashboard: '/admin',
		contents: '/admin/contents'
	}

	// cars: {
	// 	cars: '/cars',
	// 	carDetails: (id: string) => `cars/${id}`
	// },
	// devices: {
	// 	devices: '/devices',
	// 	deviceDetails: (id: string) => `devices/${id}`
	// },
	// histories: {
	// 	histories: '/histories'
	// },
	// init: {
	// 	device: '/init/device'
	// }
};

const generateLocalAPIPath = (path: string) => `/api${path}`;

export const signOutAPIRouterPath = () => {
	return {
		local: generateLocalAPIPath(`/sign-out`)
	};
};

export const REDIRECT_PARAM = 'redirect';
