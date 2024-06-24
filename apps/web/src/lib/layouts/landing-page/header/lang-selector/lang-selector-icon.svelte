<script lang="ts">
    import { cx } from "cva";

    import type { AvailableLanguageTag } from "$i18n/runtime";

    import FlagVn4x3 from "~icons/flag/vn-4x3";
    import FlagUs4x3 from "~icons/flag/us-4x3";
    interface $$Props {
        lang: AvailableLanguageTag;
    }

    export let lang: $$Props["lang"];

    $: iconClasses = cx("inline-block w-7 rounded-sm");
</script>

{#if lang === "vi"}
    <FlagVn4x3 class={iconClasses} />
{:else}
    <FlagUs4x3 class={iconClasses} />
{/if}
