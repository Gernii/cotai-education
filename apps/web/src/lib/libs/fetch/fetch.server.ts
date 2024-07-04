import { type CognitoAuthResponse, fetchCognito } from "$lib/utils/auth";
import { COGNITO_CLIENT_ID } from "$lib/utils/environment";

export interface FetchErrors {
    auth: string;
    option: Record<string, unknown>;
}

export interface JSONResponse<T> {
    data?: T;
    errors?: FetchErrors;
    message?: string;
}

export const fetcher = async <T = Record<string, unknown>>(
    request: RequestInfo | URL,
    fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>,
    config?: (RequestInit & { customUrl?: boolean }) | undefined,
) => {
    const res = await fetch(request, { ...config });
    const data = (await res.clone().json()) as T;

    if (res.ok && data) {
        return data;
    }

    return Promise.reject(data);
};

export const refreshTokenRequest = async (refreshToken?: string) => {
    const body = {
        AuthFlow: "REFRESH_TOKEN_AUTH",
        AuthParameters: { REFRESH_TOKEN: refreshToken },
        ClientId: COGNITO_CLIENT_ID,
    };

    const res = await fetchCognito<CognitoAuthResponse>("InitiateAuth", body);

    return res;
};
