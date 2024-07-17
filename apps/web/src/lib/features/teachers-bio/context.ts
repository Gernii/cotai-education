import { get, writable, type Writable } from "svelte/store";
import { getContext, setContext } from "svelte";
import type { KeenSliderInstance } from "keen-slider";

interface SliderRefs {
    teachersBioRef: Writable<HTMLElement | undefined>;
    teachersBioSliderRef: Writable<KeenSliderInstance | undefined>;
    teachersThumbnailsRef: Writable<HTMLElement | undefined>;
    teachersThumbnailsSliderRef: Writable<KeenSliderInstance | undefined>;
    currentReview: Writable<number>;
    onChangeSlide: (idx: number) => void;
}

export function setSliderRefsContext() {
    const teachersBioRef = writable<HTMLElement | undefined>(undefined);
    const teachersBioSliderRef = writable<KeenSliderInstance | undefined>(undefined);
    const teachersThumbnailsRef = writable<HTMLElement | undefined>(undefined);
    const teachersThumbnailsSliderRef = writable<KeenSliderInstance | undefined>(undefined);
    const currentReview = writable<number>(0);

    const onChangeSlide = (idx: number) => {
        const teachersBioSlider = get(teachersBioSliderRef);
        teachersBioSlider?.moveToIdx(idx);
    };
    setContext<SliderRefs>("SliderRefs", {
        teachersBioRef,
        teachersBioSliderRef,
        teachersThumbnailsRef,
        teachersThumbnailsSliderRef,
        currentReview,
        onChangeSlide,
    });
}

export function getSliderRefsContext() {
    return getContext<SliderRefs>("SliderRefs");
}
