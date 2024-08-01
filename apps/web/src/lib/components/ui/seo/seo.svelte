<script lang="ts">
    import { page } from "$app/stores";

    import { PUBLIC_HOSTNAME } from "$env/static/public";

    // import SvelteSeo from 'svelte-seo';
    import type { Thing, WithContext } from "schema-dts";

    import { i18n } from "$lib/libs/i18n";

    import { contacts } from "$lib/utils/constants";

    import * as m from "$i18n/messages";
    import { languageTag } from "$i18n/runtime";

    import { serializeSchema } from "./handler";

    interface $$Props {
        title?: string;
        description?: string;
        image?: string;
        LdJsons?: (Thing | WithContext<Thing>)[];
        type?: "website" | "article";
        removeSiteNameFromTitle?: boolean;
    }

    export let title: $$Props["title"] = undefined;
    export let description: NonNullable<$$Props["description"]> =
        m.homePage_head_description();
    export let image: NonNullable<$$Props["image"]> =
        `${PUBLIC_HOSTNAME}/images/logo/CoTAI-Ver0-TM-320.png`;
    export let type: NonNullable<$$Props["type"]> = "website";
    export let removeSiteNameFromTitle: NonNullable<
        $$Props["removeSiteNameFromTitle"]
    > = false;
    export let LdJsons: NonNullable<$$Props["LdJsons"]> = [];

    $: websiteLDJson = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: PUBLIC_HOSTNAME,
        description: m.homePage_head_description(),
        alternateName: m.siteName(),
        name: title ?? m.siteName(),
    } as WithContext<Thing>;

    let organizationLDJson: WithContext<Thing> = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: m.siteName(),
        logo: `${PUBLIC_HOSTNAME}/images/logo/CoTAI-Ver0-TM-320.png`,
        url: PUBLIC_HOSTNAME,
        description: m.homePage_head_description(),
        sameAs: [
            contacts.facebook,
            contacts.zalo,
            contacts.linkedin,
            contacts.youtube,
        ],
    };
    $: currentPage = `${PUBLIC_HOSTNAME}${i18n.route($page.url.pathname)}`;

    $: formattedTitle = !removeSiteNameFromTitle
        ? title
            ? m.siteNameWithTitle({ title })
            : m.siteName()
        : title;
</script>

<svelte:head>
    <title>{formattedTitle}</title>
    <meta name="description" content={description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={currentPage} />
    <meta name="twitter:title" content={formattedTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:alt" content={formattedTitle} />
    <meta property="og:type" content={type} />
    <meta property="og:url" content={currentPage} />
    <meta property="og:title" content={formattedTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content={m.siteName()} />
    <meta property="og:image" content={image} />
    <meta property="og:locale" content={languageTag()} />
    <link rel="canonical" href={currentPage} />
    {@html serializeSchema(websiteLDJson)}

    {@html serializeSchema(organizationLDJson)}

    {#each LdJsons as ldJson}
        {@html serializeSchema(ldJson)}
    {/each}
</svelte:head>
