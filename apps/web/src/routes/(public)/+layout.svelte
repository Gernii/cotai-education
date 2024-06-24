<script lang="ts">
    import { ThemeController } from "$lib/components/ui/theme-controller";

    import { LandingPageLayout } from "$lib/layouts/landing-page";
</script>

<ThemeController />

<LandingPageLayout>
    <slot />
</LandingPageLayout>
