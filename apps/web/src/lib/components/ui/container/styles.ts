import { cva } from "cva";

import type { ContainerCVAProps, ContainerContentCVAProps } from "./types";

export const containerClassNameHandler = cva<ContainerCVAProps>("", {
    variants: {
        padding: {
            bottom: "pb-12 pt-2 sm:pb-16 sm:pt-4 lg:pb-16 lg:pt-4",
            top: "pb-2 pt-12 sm:pb-4 sm:pt-16 lg:pb-4 lg:pt-16",
            "top-bottom": "py-12 md:py-16",
            none: "",
        },
    },
    defaultVariants: {
        padding: "top-bottom",
    },
});

export const containerContentClassNameHandler = cva<ContainerContentCVAProps>("mx-auto", {
    variants: {
        size: {
            1: "max-w-xs",
            2: "max-w-sm",
            3: "max-w-md",
            4: "max-w-lg",
            5: "max-w-xl",
            6: "max-w-2xl",
            7: "max-w-3xl",
            8: "max-w-4xl",
            9: "max-w-5xl",
            10: "max-w-6xl",
            11: "max-w-7xl",
            12: "max-w-screen-xl",
            13: "max-w-screen-2xl",
            0: "",
        },
        padding: {
            true: "px-2 sm:px-3",
            false: "",
        },
    },
    defaultVariants: {
        size: 10,
        padding: true,
    },
});
