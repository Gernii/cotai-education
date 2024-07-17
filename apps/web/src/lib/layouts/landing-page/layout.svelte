<script lang="ts">
    import { Footer } from "./footer";
    import { Header, type HeaderProps, SidenavContent } from "./header";

    interface $$Props {
        header?: HeaderProps;
    }

    export let header: $$Props["header"] = undefined;
</script>

<div class="drawer bg-base-200/40 dark:bg-base-100">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />

    <main class="drawer-content">
        <Header {...header} />
        <slot />
        <Footer />
    </main>

    <SidenavContent />
</div>
