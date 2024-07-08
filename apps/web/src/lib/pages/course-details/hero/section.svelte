<script lang="ts">
    import { page } from "$app/stores";

    import { ContainerContent } from "$lib/components/ui/container";
    import { Picture } from "$lib/components/ui/picture";

    import { coursesThumbnailDeprecated } from "$lib/utils/courses-thumbnail";
    import type { CourseIdDeprecated } from "$lib/utils/constants";

    import * as m from "$i18n/messages";

    import type { CourseDetailsPageDataProps } from "../types";

    import Roadmap from "./roadmap.svelte";

    import HeroiconsClock from "~icons/heroicons/clock";
    import { TextContent } from "$lib/features/text-content";
    import { SkillsList } from "$lib/features/skill-icons";

    $: pd = $page.data as CourseDetailsPageDataProps;

    $: courseThumbnail = coursesThumbnailDeprecated(
        pd.id as CourseIdDeprecated,
    );
</script>

<section class="mb-16">
    <ContainerContent
        class="h-full space-y-16 pt-header-space-sm lg:pt-header-space"
    >
        <div class="grid grid-cols-1 gap-x-32 gap-y-16 pt-16 lg:grid-cols-5">
            <div class="col-span-1 space-y-4 lg:col-span-3">
                <div>
                    <p class="text-lg font-semibold">{m.course()}</p>
                    <h1 class="text-5xl font-extrabold">{pd.title}</h1>
                </div>
                <div class="flex flex-wrap gap-x-4 gap-y-1">
                    <div class="flex items-center gap-x-1">
                        <HeroiconsClock class="size-6 stroke-2 text-primary" />
                        <p>{m.totalSessions({ number: pd.totalLessons })}</p>
                    </div>
                </div>
                <hr class="h-1 w-12 border-0 bg-secondary" />

                <TextContent text={pd.description} />

                {#if pd.skills && pd.skills.length > 0}
                    <hr class="h-1 w-12 border-0 bg-secondary" />
                    <SkillsList skills={pd.skills} />
                {/if}
            </div>
            <div
                class="group card col-span-1 w-full self-start overflow-hidden border border-base-content/5 bg-base-100 shadow shadow-base-content/5 hover:shadow-lg hover:shadow-base-content/5 lg:col-span-2"
            >
                <figure class="aspect-thumbnail169">
                    {#if courseThumbnail}
                        <Picture
                            meta={courseThumbnail}
                            alt={m.thumbnail({ title: pd.title ?? "" })}
                            imageClass="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    {/if}
                </figure>

                <div class="card-body">
                    {#if pd.registerUrl}
                        <a
                            href={pd.registerUrl}
                            class="btn btn-primary btn-block"
                            >{m.registerNow()}</a
                        >

                        <div class="divider uppercase">{m.or()}</div>
                    {/if}
                    <div class="space-y-2">
                        <div class="text-xl font-semibold">{m.contact()}</div>
                        <address class="not-italic">
                            <p><span>{m.hotline()}: </span>{m.phoneNumber()}</p>
                        </address>
                    </div>
                </div>
            </div>
        </div>
        <Roadmap />
    </ContainerContent>
</section>