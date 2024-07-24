import { aboutUsData } from "$lib/datas/about-us/about-us.server";

export const prerender = true;

export const load = () => {
    const data = aboutUsData;

    return data;
};
