import { z } from "zod";
import * as m from "$i18n/messages";

export const schema = z.object({
    name: z.string(),
    email: z.string().email(m.loud_fine_mole_approve()).optional(),
    phone: z
        .string()
        .max(15, m.cute_aqua_eel_stab())
        .min(9, m.cute_aqua_eel_stab())
        .refine((value) => /^([+]?\d+)$/.test(value), m.cute_aqua_eel_stab())
        .optional(),
    comments: z.string().optional(),
});
