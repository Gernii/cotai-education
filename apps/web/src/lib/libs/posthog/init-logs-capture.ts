import { browser } from '$app/environment';

import { PUBLIC_LOGS_URL, PUBLIC_POSTHOG_TOKEN } from '$env/static/public';

import posthog from 'posthog-js';

import { getIsUserInEu, isPostHogEnvValid } from '$lib/utils/constants';

export const initLogsCapture = () => {
	if (!browser || !isPostHogEnvValid) {
		return;
	}
	const isUserInEu = getIsUserInEu();

	if (isUserInEu) {
		return;
	}

	posthog.init(PUBLIC_POSTHOG_TOKEN, {
		api_host: PUBLIC_LOGS_URL,
		disable_surveys: true,
		secure_cookie: true,
		capture_pageview: false,
		capture_pageleave: false
	});
};
