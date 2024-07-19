<script lang="ts">
    import * as m from "$i18n/messages";

    import type { StudentProjectProps } from "$lib/datas/student-projects/types";

    interface $$Props
        extends Pick<
            StudentProjectProps,
            "className" | "members" | "externalLinks"
        > {}

    export let className: $$Props["className"] = undefined;
    export let members: $$Props["members"];
    export let externalLinks: $$Props["externalLinks"] = undefined;
</script>

{#if className || members.length > 0 || externalLinks}
    <div
        class="card card-bordered card-compact w-full max-w-none bg-base-100 sm:w-auto sm:max-w-64"
    >
        <table class="card-body w-full">
            <tbody>
                {#if className}
                    <tr class="w-full">
                        <td
                            class="w-full border-b-2 border-base-content/20 p-2 font-semibold"
                        >
                            {m.stock_blue_jackdaw_climb()}
                        </td>

                        <td
                            class="w-full whitespace-nowrap border-b-2 border-base-content/20 p-2"
                        >
                            {className}
                        </td>
                    </tr>
                {/if}
                {#if members.length > 0}
                    <tr class="w-full">
                        <td
                            class="w-full border-b-2 border-base-content/20 p-2 font-semibold"
                        >
                            {m.lucky_last_shell_wave()}
                        </td>
                        <td
                            class="w-full whitespace-nowrap border-b-2 border-base-content/20 p-2"
                        >
                            {#each members as member}
                                <p>{member}</p>
                            {/each}
                        </td>
                    </tr>
                {/if}
                {#if externalLinks}
                    <tr class="w-full">
                        <td
                            class="w-full border-b-2 border-base-content/20 p-2 font-semibold"
                        >
                            {m.active_sad_lionfish_jolt()}
                        </td>
                        <td
                            class="w-full space-x-1 border-b-2 border-base-content/20 p-2"
                        >
                            {#each externalLinks as externalLink}
                                <a
                                    href={externalLink.url}
                                    class="link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {externalLink.title}
                                </a>
                            {/each}
                        </td>
                    </tr>
                {/if}
            </tbody>
        </table>
    </div>
{/if}
