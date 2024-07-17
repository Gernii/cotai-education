<script lang="ts">
    import { writable } from "svelte/store";

    import LogoCotAI from "$lib/assets/logo/CoTAI-Ver0-640.png?imagetools";

    import { Picture } from "$lib/components/ui/picture";

    import * as m from "$i18n/messages";

    import { Navigator } from "./navigator";
    import { SidenavTrigger } from "./sidenav";
    interface $$Props {
        disableScrollEvent?: boolean;
    }

    export let disableScrollEvent: NonNullable<$$Props["disableScrollEvent"]> =
        false;

    const isScroll = writable(false);

    const onScrollHandler = (e: Event) => {
        if (disableScrollEvent) return;

        const doc = e.target as Document;

        const docScrolled = isDocScrolled(doc);

        if (docScrolled === true && !$isScroll) {
            $isScroll = true;
        } else if (docScrolled === false && $isScroll) {
            $isScroll = false;
        }
    };

    const isDocScrolled = (doc: Document) => {
        if (doc.documentElement.scrollTop > 150) {
            return true;
        } else if (doc.documentElement.scrollTop <= 150) {
            return false;
        }
    };
</script>

<svelte:window on:scroll={onScrollHandler} />

<header
    class="fixed inset-x-1 top-1 z-40 h-header-sm rounded-box border border-base-content/5 bg-base-200 px-1 py-1 shadow-xl lg:h-header lg:px-2"
>
    <div class="flex h-full items-center gap-x-2 px-2 lg:gap-x-8">
        <div class="block lg:hidden">
            <SidenavTrigger />
        </div>
        <a
            href={"/"}
            class="absolute left-1/2 w-24 -translate-x-1/2 lg:static lg:translate-x-0"
        >
            <Picture meta={LogoCotAI} alt={m.mainLogo()} />
        </a>
        <div class="hidden lg:block">
            <Navigator />
        </div>
        <div class="flex flex-grow-0 lg:flex-grow" />
        <div class="hidden lg:flex">
            <!-- TODO: re-open after update ENG language   -->
            <!-- <LangSelector /> -->
            <!-- <ThemeSelector /> -->
        </div>
    </div>
</header>
