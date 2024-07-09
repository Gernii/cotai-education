import type { Coord, ElementReference } from "../types";

export const getElement = (
    elementsList: ElementReference[],
    reference: string,
): HTMLElement | null => {
    const elements = elementsList.filter((element) => {
        const elementRef = element.reference;

        return elementRef === reference;
    });

    return elements.length ? elements[0].node : null;
};

export const getPosition = (element: HTMLElement): Coord => {
    return { y: element.offsetTop, x: element.offsetLeft };
};
