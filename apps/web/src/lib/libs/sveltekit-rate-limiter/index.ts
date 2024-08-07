import type { RequestEvent, MaybePromise } from "@sveltejs/kit";
import TTLCache from "@isaacs/ttlcache";
export type RateUnit =
    | "ms"
    | "100ms"
    | "250ms"
    | "500ms"
    | "s"
    | "2s"
    | "5s"
    | "10s"
    | "15s"
    | "30s"
    | "45s"
    | "m"
    | "15m"
    | "30m"
    | "h"
    | "2h"
    | "6h"
    | "12h"
    | "d";

export type Rate = [number, RateUnit];

///// Interfaces /////////////////////////////////////////////////////////////

export interface RateLimiterStore {
    add: (hash: string, unit: RateUnit) => MaybePromise<number>;
    clear: () => MaybePromise<void>;
}

export interface RateLimiterPlugin<Extra = never> {
    hash: (event: RequestEvent, extraData: Extra) => MaybePromise<string | boolean | null>;
    get rate(): Rate;
}

///// Plugins /////////////////////////////////////////////////////////////////

class IPRateLimiter implements RateLimiterPlugin {
    readonly rate: Rate;

    constructor(rate: Rate) {
        this.rate = rate;
    }

    hash(event: RequestEvent) {
        return event.getClientAddress();
    }
}

class IPUserAgentRateLimiter implements RateLimiterPlugin {
    readonly rate: Rate;

    constructor(rate: Rate) {
        this.rate = rate;
    }

    hash(event: RequestEvent) {
        const ua = event.request.headers.get("user-agent");
        if (!ua) {
            return false;
        }
        return event.getClientAddress() + ua;
    }
}

///// Stores ///////////////////////////////////////////////////////////////////

class TTLStore implements RateLimiterStore {
    private cache: TTLCache<string, number>;

    constructor(maxTTL: number, maxItems = Number.POSITIVE_INFINITY) {
        this.cache = new TTLCache({
            ttl: maxTTL,
            max: maxItems,
            noUpdateTTL: true,
        });
    }

    clear() {
        return this.cache.clear();
    }

    add(hash: string, unit: RateUnit) {
        const currentRate = this.cache.get(hash) ?? 0;
        return this.set(hash, currentRate + 1, unit);
    }

    private set(hash: string, rate: number, unit: RateUnit): number {
        this.cache.set(hash, rate, { ttl: RateLimiter.TTLTime(unit) });
        return rate;
    }
}

///// Hashing ///////////////////////////////////////////////////////

type HashFunction = (input: string) => MaybePromise<string>;

let defaultHashFunction: HashFunction;

if (globalThis?.crypto?.subtle) {
    defaultHashFunction = _subtleSha256;
}

async function _subtleSha256(str: string) {
    const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

///// Main class //////////////////////////////////////////////////////////////

export type RateLimiterOptions = Partial<{
    plugins: RateLimiterPlugin[];
    store: RateLimiterStore;
    maxItems: number;
    onLimited: (
        event: RequestEvent,
        reason: "rate" | "rejected",
    ) => MaybePromise<undefined | boolean>;

    IP: Rate;
    IPUA: Rate;
    hashFunction: HashFunction;
}>;

export class RateLimiter<Extra = never> {
    private readonly store: RateLimiterStore;
    private readonly plugins: RateLimiterPlugin[];
    private readonly onLimited: RateLimiterOptions["onLimited"] | undefined;
    private readonly hashFunction: HashFunction;

    static TTLTime(unit: RateUnit) {
        switch (unit) {
            case "s":
                return 1000;
            case "m":
                return 60000;
            case "h":
                return 60 * 60000;
            case "2s":
                return 2000;
            case "5s":
                return 5000;
            case "10s":
                return 10000;
            case "15s":
                return 15000;
            case "30s":
                return 30000;
            case "45s":
                return 45000;
            case "15m":
                return 15 * 60000;
            case "30m":
                return 30 * 60000;
            case "100ms":
                return 100;
            case "250ms":
                return 250;
            case "500ms":
                return 500;
            case "2h":
                return 2 * 60 * 60000;
            case "6h":
                return 6 * 60 * 60000;
            case "12h":
                return 12 * 60 * 60000;
            case "d":
                return 24 * 60 * 60000;
            case "ms":
                return 1;
        }
    }

    /**
     * Check if a request event is rate limited.
     * @param {RequestEvent} event
     * @returns {Promise<boolean>} true if request is limited, false otherwise
     */
    async isLimited(
        event: [Extra] extends [never] ? RequestEvent : { missing_extraData: Extra },
    ): Promise<boolean>;

    /**
     * Check if a request event is rate limited, supplying extra data that will be available for plugins.
     * @param {RequestEvent} event
     * @returns {Promise<boolean>} true if request is limited, false otherwise
     */
    async isLimited(event: RequestEvent, extraData: Extra): Promise<boolean>;

    async isLimited(event: unknown, extraData?: unknown): Promise<boolean> {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        return (await this._isLimited(event as RequestEvent, extraData as any)).limited;
    }

    /**
     * Clear all rate limits.
     */
    async clear(): Promise<void> {
        return await this.store.clear();
    }

    /**
     * Check if a request event is rate limited.
     * @param {RequestEvent} event
     * @returns {Promise<boolean>} true if request is limited, false otherwise
     */

    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: <explanation>
    protected async _isLimited(
        event: RequestEvent,
        extraData: Extra,
    ): Promise<{ limited: boolean; hash: string | null; unit: RateUnit }> {
        let limited: boolean | undefined = undefined;

        for (const plugin of this.plugins) {
            const rate = plugin.rate;
            const id = await plugin.hash(event, extraData as never);

            if (id === false) {
                if (this.onLimited) {
                    const status = await this.onLimited(event, "rejected");
                    if (status === true) {
                        return { limited: false, hash: null, unit: rate[1] };
                    }
                }
                return { limited: true, hash: null, unit: rate[1] };
            }
            if (id === null) {
                if (limited === undefined) {
                    limited = true;
                }
                continue;
            }
            limited = false;

            if (!id) {
                throw new Error(`Empty hash returned from rate limiter ${plugin.constructor.name}`);
            }

            if (id === true) {
                return { limited: false, hash: null, unit: rate[1] };
            }

            const hash = await this.hashFunction(id);
            const currentRate = await this.store.add(hash, rate[1]);

            if (currentRate > rate[0]) {
                if (this.onLimited) {
                    const status = await this.onLimited(event, "rate");
                    if (status === true) {
                        return { limited: false, hash, unit: rate[1] };
                    }
                }
                return { limited: true, hash, unit: rate[1] };
            }
        }

        return {
            limited: limited ?? false,
            hash: null,
            unit: this.plugins[this.plugins.length - 1].rate[1],
        };
    }

    constructor(options: RateLimiterOptions = {}) {
        this.plugins = [...(options.plugins ?? [])];
        this.onLimited = options.onLimited;
        this.hashFunction = options.hashFunction ?? defaultHashFunction;

        if (!this.hashFunction) {
            throw new Error(
                "No RateLimiter hash function found. Please set one with the hashFunction option.",
            );
        }

        const IPRates = options.IP;
        if (IPRates) {
            this.plugins.push(new IPRateLimiter(IPRates));
        }

        const IPUARates = options.IPUA;
        if (IPUARates) {
            this.plugins.push(new IPUserAgentRateLimiter(IPUARates));
        }

        if (!this.plugins.length) {
            throw new Error("No plugins set for RateLimiter!");
        }

        // Sort plugins by rate, if early cancelling
        this.plugins.sort((a, b) => {
            const diff = RateLimiter.TTLTime(a.rate[1]) - RateLimiter.TTLTime(b.rate[1]);
            return diff === 0 ? a.rate[0] - b.rate[0] : diff;
        });

        const maxTTL = this.plugins.reduce((acc, plugin) => {
            const rate = plugin.rate[1];
            if (rate === "ms") {
                console.warn('RateLimiter: The "ms" unit is not reliable due to OS timing issues.');
            }
            const time = RateLimiter.TTLTime(rate);
            return Math.max(time, acc);
        }, 0);

        this.store = options.store ?? new TTLStore(maxTTL, options.maxItems);
    }
}
