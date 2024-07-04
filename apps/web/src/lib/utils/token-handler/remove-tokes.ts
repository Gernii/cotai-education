import type { Cookies } from "@sveltejs/kit";

import { ACCESS_TOKEN, ID_TOKEN, REFRESH_TOKEN } from "../environment";

export const removeTokens = (cookies: Cookies) => {
    cookies.delete(ID_TOKEN, { path: "/" });
    cookies.delete(ACCESS_TOKEN, { path: "/" });
    cookies.delete(REFRESH_TOKEN, { path: "/" });
};
