import type { Coord, GlobalOptions } from "../types";
import { HeadingSize } from "./constants";
import { smoothScroll } from "./smooth-scroll";

export const scrolling = async (coord: Coord, options: GlobalOptions): Promise<void> => {
    const { duration, easing, offset } = options;

    const startY = window.scrollY;
    const startX = window.scrollX;
    const endX = coord.x + offset - HeadingSize;
    const endY = coord.y + offset - HeadingSize;

    await smoothScroll(
        {
            start: {
                x: startX,
                y: startY,
            },
            end: {
                x: endX,
                y: endY,
            },
            duration,
            easing,
        },
        (coord: Coord) => {
            window.scroll(coord.x, coord.y);
        },
    );
};
