<script lang="ts">
	import { Header, SidenavContent } from './header';
</script>

<div class="drawer bg-base-100 lg:drawer-open">
	<input id="drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<Header />
		<div class="pt-6" />
		<slot />
	</div>
	<SidenavContent />
</div>
