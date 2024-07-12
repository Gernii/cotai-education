/**
 * Returns the RGBA color value with the specified opacity.
 *
 * @param color - The color value in RGB format.
 * @param opacity - The opacity value between 0 and 100.
 * @returns The RGBA color value with the specified opacity.
 */
export const handleColorRGBA = (color: string, opacity: number) => {
    return `rgba(${color}, ${opacity / 100})`;
};
