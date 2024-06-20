type ImgProps = {
	src: string;
	w: number;
};
type ImgPropsH = ImgProps & { h: number };

type ImgMeta = { img: ImgPropsH; sources: { [key: string]: string } };

declare module '*?imagetools' {
	const outputs: ImgMeta[] | ImgMeta;
	export default outputs;
}

declare module '*&imagetools' {
	const outputs: ImgMeta[] | ImgMeta;
	export default outputs;
}
