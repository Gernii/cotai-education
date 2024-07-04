import { redirect } from "@sveltejs/kit";

import { routerPath } from "$lib/utils/constants";
import { urlRedirect } from "$lib/utils/url-redirect";
import { removeTokens } from "$lib/utils/token-handler";

export const actions = {
    default: async ({ url, cookies }) => {
        removeTokens(cookies);

        const authUrl = urlRedirect(url, routerPath.admin.auth.authSignin);

        throw redirect(307, authUrl);
    },
};
