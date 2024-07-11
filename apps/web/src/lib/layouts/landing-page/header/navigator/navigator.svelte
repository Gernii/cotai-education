<script lang="ts">
    import { cx } from "cva";

    import { routingPathAboutUs } from "$lib/utils/routing-path";
    import { routerPath } from "$lib/utils/constants";

    import * as m from "$i18n/messages";

    import { ThemeSelector } from "../theme-selector";

    import NavigatorItem from "./navigator-item.svelte";
    import NavigatorCollapse from "./navigator-collapse.svelte";

    import LucideGem from "~icons/lucide/gem";
    import HeroiconsXMark from "~icons/heroicons/x-mark";
    import { coursesMap } from "$lib/datas/courses/healpers";
    interface $$Props {
        sidenav?: boolean;
    }

    export let sidenav: NonNullable<$$Props["sidenav"]> = false;
</script>

<div
    class={cx("flex h-full flex-col ", {
        "rounded-btn bg-base-100": sidenav,
        "bg-transparent": !sidenav,
    })}
>
    {#if sidenav}
        <div class="flex w-full justify-end pr-2 pt-2">
            <label
                for="my-drawer"
                aria-label="close sidebar"
                class="btn btn-square btn-ghost btn-md"
            >
                <HeroiconsXMark class="size-8" />
            </label>
        </div>
    {/if}

    <nav
        class={cx("flex", {
            "flex-row items-center gap-x-3": !sidenav,
            "flex-col p-4": sidenav,
        })}
    >
        <NavigatorItem
            href={routingPathAboutUs()}
            target="_self"
            aria-label={m.aboutUs()}
        >
            {m.aboutUs()}
        </NavigatorItem>
        {#if coursesMap.size > 0}
            <NavigatorCollapse title={m.ourPrograms()} {sidenav}>
                <ul class="menu w-full">
                    {#each coursesMap as [id, courseGetter]}
                        {#if courseGetter}
                            {@const course = courseGetter()}
                            <li>
                                <a
                                    href={routerPath.courseId(id)}
                                    class={cx("w-full", {
                                        "whitespace-nowrap": !sidenav,
                                    })}
                                >
                                    {course.title}
                                </a>
                            </li>
                        {/if}
                    {/each}
                </ul>
            </NavigatorCollapse>
        {/if}

        <NavigatorItem
            href="https://gem.cot.ai/"
            rel="noopener noreferrer"
            aria-label={m.gemCollection()}
            class="text-orange-500 hover:text-orange-600"
            target="_blank"
        >
            {#if !sidenav}
                <LucideGem />
            {/if}
            {m.gemCollection()}

            {#if sidenav}
                <LucideGem />
            {/if}
        </NavigatorItem>

        <NavigatorItem href="#footer" target="_self" aria-label={m.contact()}>
            {m.contact()}
        </NavigatorItem>
    </nav>
    {#if sidenav}
        <hr class="mb-2 w-full border border-base-content/5" />
        <!-- TODO: re-open after update ENG language   -->
        <!-- <div class="flex items-center justify-between px-4 py-2">
			<p class="font-semibold">{m.language()}</p>
			<LangSelector />
		</div> -->
        <div class="flex items-center justify-between px-4 py-2">
            <p class="font-semibold">{m.theme()}</p>
            <ThemeSelector />
        </div>
    {/if}
</div>
