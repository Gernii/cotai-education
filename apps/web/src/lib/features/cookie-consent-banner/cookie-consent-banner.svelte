<script lang="ts">
    import posthog from "posthog-js";

    import { initLogsCapture } from "$lib/libs/posthog/init-logs-capture";

    import * as m from "$i18n/messages";
    let isSelected = false;

    const onAccept = () => {
        initLogsCapture();
        posthog.opt_in_capturing();
        posthog._start_queue_if_opted_in();
        isSelected = true;
    };

    const onDecline = () => {
        initLogsCapture();
        posthog.opt_out_capturing();
        posthog._start_queue_if_opted_in();

        isSelected = true;
    };
</script>

{#if !isSelected}
    <div class="fixed bottom-2 left-2 mx-2 max-w-96 p-2">
        <div class="card card-bordered card-compact bg-base-200 shadow-xl">
            <div class="card-body">
                <h2 class="text-xl font-semibold">This site uses cookies</h2>
                <p>
                    {m.cookieConsentBanner_description()}
                </p>
                <button class="btn btn-primary btn-block" on:click={onAccept}>
                    Chấp nhận
                </button>
                <button class="btn btn-ghost btn-block" on:click={onDecline}>
                    Từ chối
                </button>
            </div>
        </div>
    </div>
{/if}
