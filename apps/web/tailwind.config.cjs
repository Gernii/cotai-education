import AspectRatio from "@tailwindcss/aspect-ratio";
import Typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import defaultTheme from "tailwindcss/defaultTheme";
import daisyThemes from "daisyui/src/theming/themes";
import Animated from "tailwindcss-animated";
const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    // darkMode: ["class", '[data-theme="dark"]'],
    theme: {
        fontFamily: {
            sans: ['"Source Code Pro"', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            spacing: {
                "header-space": defaultTheme.spacing["20"],
                "header-space-sm": defaultTheme.spacing["16"],
                header: defaultTheme.spacing["16"],
                "header-sm": defaultTheme.spacing["14"],
                "sub-header": defaultTheme.spacing["12"],
                sidebar: defaultTheme.spacing["80"],
                modal: "40rem",
                "modal-lg": "50rem",
            },
            aspectRatio: {
                thumbnail169: "16 / 9",
                thumbnail21: "2 / 1",
                thumbnail43: "4 / 3",
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: "none", // add required value here
                        color: "inherit",
                    },
                },
            },
        },
    },
    daisyui: {
        themes: [
            {
                dark: {
                    ...daisyThemes["dark"],
                    primary: "#E68369",
                    "primary-content": "#232946",
                    secondary: "#ECCEAE",
                    "secondary-content": "#232946",

                    "base-content": "#d6e0e7",
                    "base-100": "#232946",
                    "base-200": "#0f132e",
                    "base-300": "#010115",

                    "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
                    "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
                    "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
                    "--animation-btn": "0.25s", // duration of animation when you click on button
                    "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
                    "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
                    "--border-btn": "1px", // border width of buttons
                    "--tab-border": "1px", // border width of tabs
                    "--tab-radius": "0.5rem", // border radius of tabs}
                },
            },
        ],
    },
    plugins: [Typography, AspectRatio, Animated, daisyui],
};
module.exports = config;
