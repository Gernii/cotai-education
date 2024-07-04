import { REDIRECT_PARAM } from "./constants";

interface UrlRedirectOptions {
    clearSearchParams?:
        | boolean
        | {
              force: boolean;
          };
}

export const urlRedirect = (url: URL, newPath: string, options?: UrlRedirectOptions) => {
    const newUrl = new URL(url);

    const clearSearchParams = () => {
        newUrl.searchParams.forEach((_value, key) => {
            if (key === REDIRECT_PARAM) {
                return;
            }
            newUrl.searchParams.delete(key);
        });
    };

    const isForceClearSearchParams =
        typeof options?.clearSearchParams === "object" && options?.clearSearchParams?.force;
    const isClearSearchParams =
        (typeof options?.clearSearchParams === "boolean" && options?.clearSearchParams) ||
        typeof options?.clearSearchParams === "object";

    if (isClearSearchParams) {
        clearSearchParams();
    }

    if (isForceClearSearchParams) {
        newUrl.searchParams.delete(REDIRECT_PARAM);
    }

    if (!(newUrl.searchParams.has(REDIRECT_PARAM) || isForceClearSearchParams)) {
        newUrl.searchParams.set(REDIRECT_PARAM, url.pathname);
    }

    newUrl.pathname = newPath;

    return newUrl;
};
