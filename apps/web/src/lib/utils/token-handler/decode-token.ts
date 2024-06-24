export const decodeToken = (token: string): TokenProps => {
    const props = parseToken<TokenParseProps>(token);

    const isExpired = props.exp * 1000 + 30 * 1000 < Date.now();

    return {
        id: props.sub,
        username: props.username ?? props["cognito:username"],
        isExpired,
        exp: props.exp,
        roles: props["cognito:groups"],
        email: props.email,
    };
};

export interface TokenProps {
    id: string;
    username?: string;
    isExpired: boolean;
    exp: number;
    roles: string[];
    email?: string;
}

interface TokenParseProps {
    auth_time: number;
    "cognito:groups": string[];
    client_id: string;
    event_id: string;
    exp: number;
    iat: number;
    iss: string;
    jti: string;
    origin_jti: string;
    scope: string;
    sub: string;
    token_use: string;
    // Add attr
    username?: string;
    "cognito:username"?: string;
    email?: string;
}

const parseToken = <T>(token: string) => {
    const base64UserDetail = token.split(".")[1];

    let data: string;

    if (typeof window !== "undefined") {
        data = window.atob(base64UserDetail);
    } else {
        data = Base64.decode(base64UserDetail);
    }

    return JSON.parse(data) as T;
};

const Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    decode: function (e: string) {
        let t = "";
        let n: number;
        let r: number;
        let i: number;
        let s: number;
        let o: number;
        let u: number;
        let a: number;
        let f = 0;
        const ereplaced = e.replace(/[^A-Za-z0-9+/=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(ereplaced.charAt(f++));
            o = this._keyStr.indexOf(ereplaced.charAt(f++));
            u = this._keyStr.indexOf(ereplaced.charAt(f++));
            a = this._keyStr.indexOf(ereplaced.charAt(f++));
            n = (s << 2) | (o >> 4);
            r = ((o & 15) << 4) | (u >> 2);
            i = ((u & 3) << 6) | a;
            t += String.fromCharCode(n);
            if (u !== 64) {
                t += String.fromCharCode(r);
            }
            if (a !== 64) {
                t += String.fromCharCode(i);
            }
        }
        t = Base64._utf8_decode(t);
        return t;
    },
    _utf8_decode: (e: string) => {
        let t = "";
        let n = 0;
        let r = 0;
        let c3 = 0;
        let c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++;
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode(((r & 31) << 6) | (c2 & 63));
                n += 2;
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode(((r & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                n += 3;
            }
        }
        // biome-ignore lint/suspicious/noControlCharactersInRegex: <explanation>
        return t.replace(/[\u0000-\u001F]+/g, "");
    },
};
