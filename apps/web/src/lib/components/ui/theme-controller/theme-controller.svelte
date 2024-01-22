<script lang="ts">
</script>

<svelte:head>
	<script>
		try {
			var theme = localStorage.theme;
			if (!theme) {
				if (!window.matchMedia('(prefers-color-scheme: dark)').matches) {
					document.documentElement.setAttribute('data-theme', 'light');
				} else {
					document.documentElement.setAttribute('data-theme', 'dark');
				}
			} else {
				document.documentElement.setAttribute('data-theme', theme);
			}
		} catch (_) {}
	</script>
</svelte:head>
