<script lang="ts">
    import { page } from "$app/stores";

    import { superForm } from "sveltekit-superforms";
    import { toast } from "svelte-sonner";

    import * as m from "$i18n/messages";

    import type { SchemaSuperValidated } from "./schema";

    import LucideMail from "~icons/lucide/mail";
    import LucidePhone from "~icons/lucide/phone";
    import LucideUser from "~icons/lucide/user";
    import LucideMailCheck from "~icons/lucide/mail-check";
    let {
        form,
        message,
        errors,
        constraints,
        enhance,
        capture,
        restore,
        submitting,
    } = superForm($page.data.registerForm as SchemaSuperValidated);

    $: {
        if ($page.form && $page.form.status === 429) {
            toast.error(m.sad_ornate_samuel_praise());
        }
    }

    export const snapshot = { capture, restore };
</script>

<div class="card card-bordered bg-base-100">
    <div class="card-body space-y-6">
        <div class="ml-1">
            <h2 class="card-title">
                <span>
                    {@html m.tense_happy_zebra_file()}
                </span>
            </h2>
            <p class="text-sm text-base-content/50">
                {m.antsy_petty_gecko_grip()}
            </p>
        </div>
        {#if $message?.type === "success"}
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
                        {$message?.text}
                    </h3>
                </div>
            </div>
        {:else}
            <form method="post" use:enhance>
                <div class="form-control">
                    <label
                        class="input input-bordered flex items-center gap-2"
                        class:input-error={$errors.name}
                    >
                        <LucideUser />
                        <input
                            type="text"
                            name="name"
                            aria-invalid={$errors.name ? "true" : undefined}
                            bind:value={$form.name}
                            {...$constraints.name}
                            placeholder={m.fancy_every_slug_pride()}
                            class="w-full"
                        />
                    </label>
                    <div class="label">
                        {#if $errors.name}
                            <span class="label-text-alt">
                                {$errors.name[0]}
                            </span>
                        {/if}
                    </div>
                </div>
                <div class="form-control">
                    <label
                        class="input input-bordered flex items-center gap-2"
                        class:input-error={$errors.email}
                    >
                        <LucideMail />
                        <input
                            type="email"
                            name="email"
                            aria-invalid={$errors.email ? "true" : undefined}
                            bind:value={$form.email}
                            {...$constraints.email}
                            placeholder={m.lost_sound_lizard_bask()}
                            class="w-full"
                        />
                    </label>
                    <div class="label">
                        {#if $errors.email}
                            <span class="label-text-alt">
                                {$errors.email[0]}
                            </span>
                        {/if}
                    </div>
                </div>
                <div class="form-control">
                    <label
                        class="input input-bordered flex items-center gap-2"
                        class:input-error={$errors.phone}
                    >
                        <LucidePhone />
                        <input
                            type="tel"
                            name="phone"
                            aria-invalid={$errors.phone ? "true" : undefined}
                            bind:value={$form.phone}
                            {...$constraints.phone}
                            placeholder={m.nimble_deft_guppy_agree()}
                            class="w-full"
                        />
                    </label>
                    <div class="label">
                        {#if $errors.phone}
                            <span class="label-text-alt">
                                {$errors.phone[0]}
                            </span>
                        {/if}
                    </div>
                </div>

                <div>
                    <label class="form-control">
                        <textarea
                            class="textarea textarea-bordered"
                            name="comments"
                            aria-invalid={$errors.comments ? "true" : undefined}
                            bind:value={$form.comments}
                            {...$constraints.comments}
                            placeholder={m.sharp_stout_gull_dance()}
                        />
                    </label>
                    <div class="label">
                        {#if $errors.comments}
                            <span class="label-text-alt">
                                {$errors.comments}
                            </span>
                        {/if}
                    </div>
                </div>

                <div>
                    <button
                        class="btn btn-primary w-full"
                        type="submit"
                        disabled={$submitting}
                    >
                        {#if $submitting}
                            <span class="loading loading-spinner"></span>
                        {/if}
                        {m.north_alert_jannes_dial()}
                    </button>
                </div>
            </form>
        {/if}
    </div>
</div>
