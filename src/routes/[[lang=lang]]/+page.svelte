<script lang="ts">
	import * as m from '$i18n/messages';
	import { LandingPageLayout } from '$lib/layouts/landing-page';
</script>

<LandingPageLayout>
	<div class="h-screen">{m.hello_world()}</div>
	<div class="h-screen">{m.hello_world()}</div>
	<div class="h-screen">{m.hello_world()}</div>
</LandingPageLayout>
