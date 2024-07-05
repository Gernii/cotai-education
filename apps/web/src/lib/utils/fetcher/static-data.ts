import type { LoadEvent } from "@sveltejs/kit";

export interface fetcherStaticDataProps {
    id: string;
    path: string;
    fetch: LoadEvent["fetch"];
}

export const fetcherStaticData = async <T>(props: fetcherStaticDataProps) => {
    const { id, path, fetch } = props;
    try {
        const res = await fetch(`/data/${path}/${id}.json`);

        const data = await res.json();

        return { ...data, id } as T;
    } catch (e) {
        console.error(e);

        return undefined;
    }
};