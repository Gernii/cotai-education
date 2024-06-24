import { redirect, type RequestEvent } from "@sveltejs/kit";

import { refreshTokenRequest } from "$lib/libs/fetch/fetch.server";

import { ID_TOKEN, REFRESH_TOKEN } from "$lib/utils/environment";
import { addTokens, decodeToken, removeTokens } from "$lib/utils/token-handler";
import { urlRedirect } from "$lib/utils/url-redirect";
import { routerPath } from "$lib/utils/constants";
import type { CognitoAuthResponse } from "$lib/utils/auth";

import type { LayoutServerLoad } from "./$types";

const validateTokens = async (event: RequestEvent) => {
    const { cookies, url } = event;
    const idToken = cookies.get(ID_TOKEN);

    const onSignOut = () => {
        removeTokens(cookies);
        const authUrl = urlRedirect(url, routerPath.admin.auth.authSignin);
        throw redirect(307, authUrl);
    };

    if (!idToken) {
        onSignOut();
        return;
    }

    const userData = decodeToken(idToken);

    if (userData.isExpired) {
        const refreshToken = cookies.get(REFRESH_TOKEN);

        let refreshData: CognitoAuthResponse | undefined = undefined;
        try {
            refreshData = await refreshTokenRequest(refreshToken);
        } catch (_err) {
            onSignOut();
        }

        const addTokenError = addTokens(cookies, {
            accessToken: refreshData?.AuthenticationResult?.AccessToken,
            idToken: refreshData?.AuthenticationResult?.IdToken,
        });

        if (addTokenError.accessToken === false || addTokenError.idToken === false) {
            onSignOut();
        }
    }
};

export const load: LayoutServerLoad = async (event) => {
    if (event.route.id?.startsWith("/(admin)/admin/auth")) {
        removeTokens(event.cookies);
    }
    if (
        event.route.id?.startsWith("/(admin)/admin/(protected)") ||
        event.route.id?.startsWith("/api/(protected)")
    ) {
        await validateTokens(event);
    }
};
