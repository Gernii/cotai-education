import type { Cookies } from "@sveltejs/kit";

import { tokenExpiresAfter1Month } from "../auth";
import { ACCESS_TOKEN, ID_TOKEN, REFRESH_TOKEN } from "../environment";

import type { Tokens } from "./types";

export const addTokens = (cookies: Cookies, tokens: Tokens) => {
    const tokenSuccess = {
        idToken: false,
        refreshToken: false,
        accessToken: false,
    };

    const expires = tokenExpiresAfter1Month();

    if (tokens.idToken) {
        cookies.set(ID_TOKEN, tokens.idToken, {
            sameSite: "strict",
            secure: true,
            expires,
            path: "/",
        });
        tokenSuccess.idToken = true;
    }

    if (tokens.accessToken) {
        cookies.set(ACCESS_TOKEN, tokens.accessToken, {
            sameSite: "strict",
            secure: true,
            expires,
            path: "/",
        });
        tokenSuccess.accessToken = true;
    }

    if (tokens.refreshToken) {
        cookies.set(REFRESH_TOKEN, tokens.refreshToken, {
            sameSite: "strict",
            secure: true,
            expires,
            path: "/",
        });
        tokenSuccess.refreshToken = true;
    }
    return tokenSuccess;
};
