<script lang="ts">
    import * as m from "$i18n/messages";

    import LogosYoutubeIcon from "~icons/logos/youtube-icon";
    interface $$Props {
        id: string;
        title: string;
    }

    export let id: $$Props["id"];
    export let title: $$Props["title"];

    let isVideoRequestedToPlay = false;

    const onRequestedToPlay = () => {
        isVideoRequestedToPlay = true;
    };
</script>

<div class="relative w-full pb-[56.25%]">
    {#if isVideoRequestedToPlay}
        <iframe
            src={`https://www.youtube.com/embed/${id}`}
            {title}
            frameborder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            class="absolute left-0 top-0 h-full w-full object-cover"
        ></iframe>
    {:else}
        <button
            class="absolute left-0 top-0 h-full w-full"
            on:click={onRequestedToPlay}
        >
            <img
                src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                alt={title}
                loading="lazy"
                class="h-full w-full object-cover"
                title={m.stock_cute_lemming_spin()}
            />
            <LogosYoutubeIcon
                class="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 sm:size-20"
            />
        </button>
    {/if}
</div>
