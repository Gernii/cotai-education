import * as v from "valibot";
export const schema = v.object({
    name: v.string(),
    email: v.optional(v.pipe(v.string(), v.email())),
    phone: v.optional(v.pipe(v.string(), v.maxLength(15), v.minLength(9), v.regex(/^([+]?\d+)$/))),
    comments: v.optional(v.string()),
});

export type Schema = v.InferOutput<typeof schema>;
