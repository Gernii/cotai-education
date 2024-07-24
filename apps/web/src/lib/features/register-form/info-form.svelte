<script lang="ts">
    import { page } from "$app/stores";

    import { toast } from "svelte-sonner";
    import type { EventHandler } from "svelte/elements";

    import { routerPath } from "$lib/utils/constants";

    import * as m from "$i18n/messages";

    import LucideMail from "~icons/lucide/mail";
    import LucidePhone from "~icons/lucide/phone";
    import LucideUser from "~icons/lucide/user";
    import LucideMailCheck from "~icons/lucide/mail-check";

    let name = "";
    let email = "";
    let phone = "";
    let comments = "";
    let submited = false;
    let submiting = false;

    $: {
        if ($page.form && $page.form.status === 429) {
            toast.error(m.sad_ornate_samuel_praise());
        }
    }

    const onSubmit: EventHandler<SubmitEvent, HTMLFormElement> = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        submiting = true;

        try {
            await fetch(routerPath.api.contact, {
                method: "post",

                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    comments,
                }),
            });
        } catch (error) {
            console.error(error);
        }

        submiting = false;
        submited = true;
    };
</script>

<div class="card card-bordered bg-base-200">
    <div class="card-body space-y-6">
        <div class="ml-1">
            <h2 class="card-title">
                <span>
                    {m.tense_happy_zebra_file()}
                </span>
            </h2>
            <p class="text-sm text-base-content/50">
                {m.antsy_petty_gecko_grip()}
            </p>
        </div>
        {#if submited}
            <div
                class="group card card-bordered animate-fade-up border-success bg-success/5 text-success"
            >
                <div class="card-body">
                    <div
                        class="trans flex justify-center group-hover:animate-jump"
                    >
                        <LucideMailCheck class="size-16" />
                    </div>
                    <h3 class="px-8 text-center text-xl font-bold">
                        {m.moving_equal_moth_fulfill()}
                    </h3>
                </div>
            </div>
        {:else}
            <form on:submit={onSubmit} class="space-y-4">
                <div class="form-control">
                    <label class="input input-bordered flex items-center gap-2">
                        <LucideUser />
                        <input
                            type="text"
                            name="name"
                            bind:value={name}
                            placeholder={m.fancy_every_slug_pride()}
                            class="w-full"
                        />
                    </label>
                </div>
                <div class="form-control">
                    <label class="input input-bordered flex items-center gap-2">
                        <LucideMail />
                        <input
                            type="email"
                            name="email"
                            bind:value={email}
                            placeholder={m.lost_sound_lizard_bask()}
                            class="w-full"
                        />
                    </label>
                </div>
                <div class="form-control">
                    <label class="input input-bordered flex items-center gap-2">
                        <LucidePhone />
                        <input
                            type="tel"
                            name="phone"
                            bind:value={phone}
                            placeholder={m.nimble_deft_guppy_agree()}
                            class="w-full"
                        />
                    </label>
                </div>

                <div>
                    <label class="form-control">
                        <textarea
                            class="textarea textarea-bordered"
                            name="comments"
                            bind:value={comments}
                            placeholder={m.sharp_stout_gull_dance()}
                        />
                    </label>
                </div>

                <div class="flex justify-end">
                    <button
                        class="btn btn-primary"
                        type="submit"
                        disabled={submiting}
                    >
                        {#if submiting}
                            <span class="loading loading-spinner"></span>
                        {/if}
                        {m.north_alert_jannes_dial()}
                    </button>
                </div>
            </form>
        {/if}
    </div>
</div>
