export const defaultImage = '/images/logo/CoTAI-Ver0-320.png';

export const programIds = ['public-training', 'project-based-training', 'extra'];

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
		courses: '/admin/courses'
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

export const SEARCH_PARAMS_ACTION = 'action';

const generateLocalAPIAction = (action: string | number) => `${SEARCH_PARAMS_ACTION}=${action}`;

export enum CourseAPIRouterAction {
	CHECK_ACCESS,
	FORCE_ACCESS,
	CHECKOUT
}

export const courseAPIRouterPath = () => {
	const courseCheckStatusWithId = (_id: string) => {
		return {
			external: `/landing-page/course/check-status/${_id}`
		};
	};

	const courseAccessWithId = (_id: string) => {
		return {
			external: `/landing-page/course/access/${_id}`
		};
	};

	const courseForceAccessWithId = (_id: string) => {
		return {
			external: `/landing-page/course/force-access/${_id}`
		};
	};

	const courseWithId = (_id: string) => {
		return {
			local: `${routerPath.admin.courses}/${_id}`
		};
	};

	const action = {
		checkAccess: generateLocalAPIAction(CourseAPIRouterAction.CHECK_ACCESS),
		forceAccess: generateLocalAPIAction(CourseAPIRouterAction.FORCE_ACCESS),
		checkout: generateLocalAPIAction(CourseAPIRouterAction.CHECKOUT)
	};

	return {
		courseWithId,
		courseCheckStatusWithId,
		courseAccessWithId,
		courseForceAccessWithId,
		action
	};
};

export const REDIRECT_PARAM = 'redirect';
