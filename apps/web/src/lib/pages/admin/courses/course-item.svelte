<script lang="ts">
    import { goto } from "$app/navigation";

    import { cx } from "cva";
    import { toast } from "svelte-sonner";

    import { courseAPIRouterPath, defaultImage } from "$lib/utils/constants";

    import {
        ContentSyncStatus,
        type ErrorResponse,
        type LandingPageCourseCheckStatus,
        type LandingPageCourseForceAccess,
    } from "../../../../../../../packages/types-bridge/src";

    import type { Deprecated_CourseProps } from "./types";

    type $$Props = Deprecated_CourseProps;

    export let id: $$Props["id"];
    export let title: $$Props["title"];
    export let thumbnail: NonNullable<$$Props["thumbnail"]> = defaultImage;

    $: console.log(thumbnail);

    const courseAPI = courseAPIRouterPath();

    let dialogRef: HTMLDialogElement | undefined = undefined;

    let isCourseAccessed = false;
    let usernameAccessed: string | undefined = undefined;
    let userIdAccessed: string | undefined = undefined;

    const clearState = () => {
        isCourseAccessed = false;
        usernameAccessed = undefined;
        userIdAccessed = undefined;
    };

    const onCourseAccess = async () => {
        clearState();
        dialogRef?.showModal();
        const checkCourseAccess = `${courseAPI.courseWithId(id).local}?${courseAPI.action.checkAccess}`;
        try {
            const response = await fetch(checkCourseAccess, {
                method: "GET",
            });

            const data =
                (await response.json()) as LandingPageCourseCheckStatus.Response;

            if (data.status === ContentSyncStatus.NOT_SYNCED) {
                goto(courseAPI.courseWithId(id).local);
            } else {
                isCourseAccessed = true;
                usernameAccessed = data.username;
                userIdAccessed = data["user-id"];
            }
        } catch (error) {
            const typedError = error as ErrorResponse<string>;
            console.log(typedError.message);
        }
    };

    const onCourseForceAccess = async () => {
        if (userIdAccessed === undefined) {
            toast.error(
                "Something went wrong. no user found, please try again.",
            );
            return;
        }
        const forceAccess = `${courseAPI.courseWithId(id).local}?${courseAPI.action.forceAccess}`;
        try {
            const body: LandingPageCourseForceAccess.RequestBody = {
                "force-stop-user-id": userIdAccessed,
            };
            const response = await fetch(forceAccess, {
                method: "POST",
                body: JSON.stringify(body),
            });

            const data =
                (await response.json()) as LandingPageCourseForceAccess.Response;

            if (data.success) {
                goto(courseAPI.courseWithId(id).local);
            } else {
                toast.error("Something went wrong. Please try again later.");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again later.");
        }
    };
</script>

<li>
    <button
        class={cx("btn", {
            "btn-error": isCourseAccessed,
            "btn-primary": !isCourseAccessed,
        })}
        on:click={onCourseAccess}
    >
        {title}
    </button>
    <dialog class="modal" bind:this={dialogRef}>
        <div class="modal-box">
            <form method="dialog">
                <button
                    class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
                    >✕</button
                >
            </form>

            <h3 class="text-lg font-bold">
                Checking access to course: {title}
            </h3>
            {#if isCourseAccessed}
                <div class="pt-4">
                    <p class="text-gray-500">
                        <span class="font-semibold text-error"
                            >{usernameAccessed}</span
                        >
                        have already accessed this course. Do you want to force access?
                    </p>
                </div>

                <div class="modal-action">
                    <form method="dialog">
                        <button class="btn btn-ghost">Close</button>
                    </form>
                    <button
                        class="btn btn-error"
                        on:click={onCourseForceAccess}
                    >
                        Force Access
                    </button>
                </div>
            {/if}
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</li>
