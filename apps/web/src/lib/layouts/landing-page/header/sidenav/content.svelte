<script lang="ts">
    import { Navigator } from "../navigator";
</script>

<div class="drawer-side z-50 scroll-pt-20 scroll-smooth">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay" />
    <aside
        class="h-dvh max-w-sidebar py-2 pl-2 shadow-lg shadow-base-content/5"
    >
        <Navigator sidenav={true} />
    </aside>
</div>
