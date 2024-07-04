<script lang="ts">
    import { createDialog, melt } from "@melt-ui/svelte";

    import { Picture } from "$lib/components/ui/picture";

    import { flyAndScale } from "$lib/utils/transition";

    import * as m from "$i18n/messages";

    import LucideExternalLink from "~icons/lucide/external-link";
    import LucideX from "~icons/lucide/x";

    interface $$Props {
        name: string;
        role: string;
        meta: ImgMeta[] | ImgMeta;
        url?: string;
    }

    export let name: $$Props["name"];
    export let role: $$Props["role"];
    export let meta: $$Props["meta"];
    export let url: $$Props["url"] = undefined;

    const {
        elements: {
            trigger,
            portalled,
            overlay,
            content,
            title,
            description,
            close,
        },
        states: { open },
    } = createDialog();
</script>

<button
    use:melt={$trigger}
    class="group flex w-24 flex-col items-center hover:text-primary sm:w-32 md:w-40"
>
    <slot name="avatar" />
    <div class="aspect-1 flex-shrink-0 overflow-hidden rounded-box">
        <Picture
            {meta}
            alt={m.memberAvatar({ name })}
            imageClass=" object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
    </div>
    <h3 class="text-sm font-bold sm:text-base">{name}</h3>
    <p class="text-xs sm:text-sm">{role}</p>
</button>

{#if $open}
    <div use:melt={$portalled}>
        <div use:melt={$overlay} class="fixed inset-0 z-50 bg-black/50" />
        <div
            use:melt={$content}
            class="fixed left-1/2 top-1/2 z-50 flex max-h-[85dvh] w-[95dvw] max-w-modal -translate-x-1/2 -translate-y-1/2
        flex-col gap-x-8 rounded-md bg-base-100 p-6
        shadow-lg lg:flex-row"
            transition:flyAndScale={{
                duration: 150,
                y: 8,
                start: 0.96,
            }}
        >
            <div class="size-44 flex-shrink-0">
                <Picture
                    {meta}
                    alt={m.memberAvatar({ name })}
                    imageClass="rounded-box object-cover"
                />
            </div>
            <div>
                <h2 use:melt={$title} class="text-2xl font-bold">
                    {name}
                    {#if url}
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="link inline-block hover:link-primary"
                        >
                            <LucideExternalLink />
                        </a>
                    {/if}
                </h2>
                <p class="italic">{role}</p>

                <p use:melt={$description} class="pt-4">
                    <slot name="description" />
                </p>
            </div>

            <button
                use:melt={$close}
                aria-label={m.close()}
                class="btn btn-square btn-ghost btn-sm absolute right-[10px] top-[10px]
                inline-flex"
            >
                <LucideX />
            </button>
        </div>
    </div>
{/if}
