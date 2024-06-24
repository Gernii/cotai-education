<script lang="ts">
    import { cx } from "cva";

    import HeroiconsSun from "~icons/heroicons/sun";
    import HeroiconsMoon from "~icons/heroicons/moon";

    let iconClasses = cx("inline-block size-5");
</script>

<div class="block dark:hidden">
    <HeroiconsSun class={iconClasses} />
</div>
<div class="hidden dark:block">
    <HeroiconsMoon class={iconClasses} />
</div>
