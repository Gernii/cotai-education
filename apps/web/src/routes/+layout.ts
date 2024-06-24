import { initLogsCapture } from "$lib/libs/posthog/init-logs-capture";

export const load = () => {
    initLogsCapture();
};
