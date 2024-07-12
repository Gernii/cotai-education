import { writable, type Writable } from "svelte/store";
import { getContext, setContext } from "svelte";
import type { CamDifferenceIds } from "$lib/datas/cam-difference/types";

type SelectedId = CamDifferenceIds;
type Context = Writable<SelectedId>;

export function setSelectedIdContext(id: CamDifferenceIds) {
    const selectedId = writable<SelectedId>(id);
    setContext("selectedId", selectedId);
}

export function getSelectedIdContext() {
    return getContext<Context>("selectedId");
}
