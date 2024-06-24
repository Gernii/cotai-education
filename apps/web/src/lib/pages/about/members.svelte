<script lang="ts">
    import ProfileLNTHPicture from "$lib/assets/profiles/le-nguyen-thanh-huy.jpg?imagetools";
    import ProfileNQHicture from "$lib/assets/profiles/ngo-quoc-hung.jpg?imagetools";

    import * as m from "$i18n/messages";

    import MemberProfile from "./member-profile.svelte";
</script>

<div class="flex flex-wrap justify-center gap-6">
    <MemberProfile
        name={m.ngoQuocHungName()}
        role={m.ngoQuocHungRole()}
        url="https://gem.cot.ai/bio"
        meta={ProfileNQHicture}
    >
        <div slot="description">
            {m.ngoQuocHungDescription()}
        </div>
    </MemberProfile>
    <MemberProfile
        name={m.leNguyenThanhHuyName()}
        role={m.leNguyenThanhHuyRole()}
        meta={ProfileLNTHPicture}
    ></MemberProfile>
</div>
