import { COGNITO_URL } from "./environment";

export interface FetchCognitoOptions {
    method: "POST" | "GET" | "PUT";
}

export const fetchCognito = async <T>(contentAction: string, body: unknown) => {
    interface ErrorBody {
        message: string;
        __type: string;
    }

    const res = await fetch(COGNITO_URL, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": `AWSCognitoIdentityProviderService.${contentAction}`,
        },
    });

    const json = await res.clone().json();
    if (res.status >= 400) {
        throw (json as ErrorBody).message;
    }
    return json as T;
};

export const tokenExpiresAfter1Month = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    return date;
};

export interface CognitoAuthResponse {
    AuthenticationResult?: {
        AccessToken: string;
        RefreshToken: string;
        IdToken: string;
    };
}

export interface AuthResponse {
    tokens?: {
        accessToken: string;
        refreshToken: string;
        idToken: string;
    };
    profile?: Record<string, string>;
}

export interface SignInMutationProps {
    username: string;
    password: string;
}
