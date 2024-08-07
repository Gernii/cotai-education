import { redirect, text, type Handle, type RequestEvent } from "@sveltejs/kit";

import { ACCESS_TOKEN, BASE_URL, ID_TOKEN, REFRESH_TOKEN } from "$lib/utils/environment";
import { fetcher } from "$lib/utils/fetcher";
import type { TokenProps } from "$lib/utils/token-handler/decode-token";
import { decodeToken, removeTokens } from "$lib/utils/token-handler";
import { urlRedirect } from "$lib/utils/url-redirect";
import { routerPath } from "$lib/utils/constants";

import { sourceLanguageTag } from "$i18n/runtime";
import { sequence } from "@sveltejs/kit/hooks";
import { i18n } from "$lib/libs/i18n";
import { dev } from "$app/environment";
import { PUBLIC_HOSTNAME } from "$env/static/public";

export type Credentials = {
    refreshToken: string;
    idToken: string;
    userData: TokenProps;
};

export type GetCredentialsResponse = ReturnType<typeof getCredentials>;

const getCredentials = (event: RequestEvent) => {
    const { url, cookies } = event;
    const idToken = cookies.get(ID_TOKEN);
    const accessToken = cookies.get(ACCESS_TOKEN);
    const refreshToken = cookies.get(REFRESH_TOKEN);

    if (!(idToken && refreshToken && accessToken)) {
        removeTokens(cookies);
        const newUrl = urlRedirect(url, routerPath.admin.auth.authSignin);
        throw redirect(307, newUrl);
    }

    const userData = decodeToken(idToken);

    return {
        idToken,
        refreshToken,
        userData,
    };
};

export interface HandlePrivateFetchOptions {
    customUrl?: boolean;
    body?: BodyInit;
    searchParams?: Record<string, string | undefined | null>;
    method?: Request["method"];
    redirect?: Request["redirect"];
    headers?: Request["headers"];
}

const handlePrivateFetch = async <T>(
    event: RequestEvent,
    url: string,
    options?: HandlePrivateFetchOptions,
) => {
    const { request, fetch } = event;
    const credentials = event.locals.getCredentials();

    const createNewRequest = () => {
        let urlConvert: URL;
        if (options?.customUrl) {
            urlConvert = new URL(url);
        } else {
            urlConvert = new URL(`${BASE_URL}${url}`);
        }
        const customQueries = Object.entries(options?.searchParams ?? {});
        for (const [key, value] of customQueries) {
            if (!value) {
                continue;
            }
            urlConvert.searchParams.set(key, value);
        }

        return urlConvert;
    };

    const headers = options?.headers ?? new Headers();

    headers.set("Authorization", `Bearer ${credentials.idToken}`);
    const headerContentType = headers.get("Content-Type");

    if (!headerContentType) {
        headers.set("Content-Type", "application/json");
    }

    const baseRequest = createNewRequest();

    try {
        const res = await fetcher<T>(fetch, baseRequest, {
            body: options?.body,
            method: options?.method ?? request.method,
            headers,
        });

        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};

const mainHandle: Handle = async ({ event, resolve }) => {
    const lang = event.params.lang ?? sourceLanguageTag;

    if (event.route.id?.startsWith("/api")) {
        if (event.request.headers.get("origin") !== PUBLIC_HOSTNAME && !dev) {
            return text("Success");
        }

        event.setHeaders({ "Access-Control-Allow-Origin": PUBLIC_HOSTNAME });
    }

    event.locals.handlePrivateFetch = (url: string, options?: HandlePrivateFetchOptions) =>
        handlePrivateFetch(event, url, options);

    event.locals.getCredentials = () => getCredentials(event);

    return await resolve(event, {
        transformPageChunk({ done, html }) {
            //Only do it at the very end of the rendering process
            if (done) {
                return html.replace("%lang%", lang);
            }
        },
    });
};

export const handle = sequence(mainHandle, i18n.handle());
