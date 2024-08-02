<script lang="ts">
    import { page } from "$app/stores";

    import { createCollapsible, melt } from "@melt-ui/svelte";
    import { cx } from "cva";
    import { slide } from "svelte/transition";

    import { Picture } from "$lib/components/ui/picture";
    import { ContentRenderer } from "$lib/components/ui/content-renderer";
    import { Video } from "$lib/components/ui/video";

    import * as m from "$i18n/messages";

    import type {
        CourseProps,
        CurriculumProps,
    } from "$lib/datas/courses/types";
    import LucideChevronDown from "~icons/lucide/chevron-down";

    interface $$Props extends CurriculumProps {
        forceOpen?: boolean;
        class?: string;
    }

    export let title: $$Props["title"] = undefined;
    export let details: $$Props["details"] = undefined;
    export let forceOpen: $$Props["forceOpen"] = undefined;
    export let images: $$Props["images"] = undefined;
    export let videos: $$Props["videos"] = undefined;

    let className: string | undefined = undefined;

    export { className as class };

    const {
        elements: { root, content, trigger },
        states: { open },
    } = createCollapsible({
        forceVisible: true,
        defaultOpen: forceOpen ?? false,
    });

    $: classnames = cx("hover:bg-base-200/80", className);

    $: course = $page.data.course as CourseProps;
    $: hideCurriculumImages = course.hideCurriculumImages;
</script>

<div use:melt={$root}>
    <button
        class={classnames}
        use:melt={$trigger}
        aria-label={m.glad_antsy_gecko_explore()}
    >
        <span class="prose w-full font-semibold">{@html title}</span>
        <LucideChevronDown
            class={cx("size-6 transform duration-200 ease-in-out", {
                "rotate-180": $open,
                "rotate-0": !$open,
            })}
        />
    </button>

    {#if $open}
        <div class="bg-base-300" use:melt={$content} transition:slide>
            <div
                class={cx("p-4 sm:p-8", {
                    "grid grid-cols-1 gap-x-8 md:grid-cols-2":
                        (images || videos) && !hideCurriculumImages,
                })}
            >
                <div>
                    {#if $$slots.default}
                        <slot />
                    {:else if details}
                        <div class="prose prose-sm sm:prose-base">
                            <ContentRenderer
                                content={details.content}
                                disabledProse
                            />
                        </div>
                    {/if}
                </div>
                {#if images && !hideCurriculumImages}
                    <div class="overflow-hidden rounded-box">
                        <Picture meta={images[0]} />
                    </div>
                {/if}
                {#if videos && !hideCurriculumImages}
                    <div class="overflow-hidden rounded-box">
                        <Video
                            src={videos[0]}
                            autoplay
                            muted
                            loop
                            playsinline
                        />
                    </div>
                {/if}
            </div>
        </div>
    {/if}
</div>
