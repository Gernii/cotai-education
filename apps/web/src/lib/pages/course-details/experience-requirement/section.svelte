<script lang="ts">
    import { page } from "$app/stores";

    import { writable } from "svelte/store";
    import { inview } from "svelte-inview";

    import Requirement from "$lib/assets/pages/course-details/requirement.png?imagetools";

    import { Container, ContainerContent } from "$lib/components/ui/container";
    import { SectionTitle } from "$lib/components/ui/section-title";
    import { Picture } from "$lib/components/ui/picture";

    import { inviewCommonOptions, onInViewEnter } from "$lib/libs/inview";

    import * as m from "$i18n/messages";

    import type { CourseDetailsPageDataProps } from "../types";

    import Item from "./item.svelte";

    let isInview = writable(false);

    $: pd = $page.data as CourseDetailsPageDataProps;

    $: experienceRequirement = pd.experienceRequirement;
</script>

{#if experienceRequirement && experienceRequirement.length > 0}
    <section
        use:inview={inviewCommonOptions}
        on:inview_enter={onInViewEnter(isInview)}
    >
        <Container>
            <ContainerContent
                class="flex flex-col gap-x-16 gap-y-8 lg:flex-row"
            >
                <div
                    class="w-full flex-shrink-0 sm:w-96"
                    class:opacity-0={!$isInview}
                    class:animate-fade-right={$isInview}
                >
                    <Picture
                        meta={Requirement}
                        author={"Image by storyset on Freepik"}
                        alt={m.experienceRequirement_imageAlt()}
                    />
                </div>
                <div
                    class="w-full flex-grow pt-2"
                    class:opacity-0={!$isInview}
                    class:animate-fade-left={$isInview}
                >
                    <div>
                        <SectionTitle
                            >{m.experience()}
                            <span class="text-primary">{m.requirement()}?</span
                            ></SectionTitle
                        >
                    </div>

                    <div class="space-y-4">
                        {#each experienceRequirement as requirement}
                            <Item>
                                {requirement}
                            </Item>
                        {/each}
                    </div>
                </div>

                <!-- <div class="w-full flex-shrink-0 lg:w-[26rem]">
				<div class="card bg-primary">
					<div class="card-body space-y-4 text-primary-content">
						<SectionTitle paddingBottom={false}>{m.needSupport()}?</SectionTitle>
						<div class="text-lg font-semibold">
							{m.needSupport_description()}
						</div>
						<button class="btn btn-outline border-primary-content text-primary-content">
							{m.contactNow()}
						</button>
					</div>
				</div>
			</div> -->
            </ContainerContent>
        </Container>
    </section>
{/if}
