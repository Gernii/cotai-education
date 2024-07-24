type ImgProps = {
    src: string;
    w: number;
};
type ImgPropsH = ImgProps & { h: number };

type ImgMeta = { img: ImgPropsH; sources: { [key: string]: string } };

type ImgBlur = {
    /** base-64-encoded image to be inlined (< 1kB, more performant than an extra network request) */
    lqip: string;
    /** your original, UNTOUCHED image URL (handled by Vite, respects all your settings) */
    src: string;
    /** width, in pixels, of full-size image */
    width: number;
    /** height, in pixels, of full-size image */
    height: number;
};

declare module "*?imagetools" {
    const outputs: ImgMeta[] | ImgMeta;
    export default outputs;
}

declare module "*&imagetools" {
    const outputs: ImgMeta[] | ImgMeta;
    export default outputs;
}
declare module "*.md";

declare module "*?lqip" {
    const lqip: ImgBlur;
    export default lqip;
}
