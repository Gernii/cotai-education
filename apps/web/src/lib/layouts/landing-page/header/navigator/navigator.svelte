<script lang="ts">
    import { cx } from "cva";

    import { routerPath } from "$lib/utils/constants";

    import * as m from "$i18n/messages";

    import { ThemeSelector } from "../theme-selector";

    import NavigatorItem from "./navigator-item.svelte";
    import NavigatorCollapse from "./navigator-collapse.svelte";

    import HeroiconsXMark from "~icons/heroicons/x-mark";
    import { coursesMap } from "$lib/datas/courses/helpers";
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
            href={routerPath.home}
            aria-label={m.lucky_suave_flamingo_stir()}
        >
            {m.lucky_suave_flamingo_stir()}
        </NavigatorItem>

        {#if coursesMap.size > 0}
            <NavigatorCollapse title={m.ourPrograms()} {sidenav}>
                <ul class="menu w-full shadow-2xl">
                    {#each coursesMap as [id, courseGetter]}
                        {#if courseGetter}
                            {@const course = courseGetter()}
                            <li>
                                <a
                                    href={routerPath.courseId(id)}
                                    class={cx("w-full", {
                                        "whitespace-nowrap hover:bg-primary":
                                            !sidenav,
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

        <NavigatorItem href={routerPath.about} aria-label={m.aboutUs()}>
            {m.aboutUs()}
        </NavigatorItem>

        <NavigatorItem
            href="https://gem.cot.ai/"
            rel="noopener noreferrer"
            aria-label={m.gemCollection()}
            target="_blank"
        >
            {m.gemCollection()}
        </NavigatorItem>

        <NavigatorItem href="#footer" aria-label={m.contact()}>
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
