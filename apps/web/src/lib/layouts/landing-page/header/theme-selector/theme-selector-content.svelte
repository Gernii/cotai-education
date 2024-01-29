<script lang="ts">
	import { onMount } from 'svelte';

	import * as m from '$i18n/messages';

	import { DARK_THEME, LIGHT_THEME, SYSTEM_THEME } from './constants';
	import ThemeSelectorItem from './theme-selector-item.svelte';

	import HeroiconsSun from '~icons/heroicons/sun';
	import HeroiconsMoon from '~icons/heroicons/moon';
	import HeroiconsComputerDesktop from '~icons/heroicons/computer-desktop';

	let currentTheme: string | undefined = undefined;

	onMount(() => {
		const theme = localStorage.getItem('theme') ?? undefined;
		currentTheme = theme;
	});

	const themeToggle = (theme?: string) => {
		// Check if the theme is set or leave it to system choice
		if (!theme) {
			// Check if the system is not in dark mode
			if (!window.matchMedia('(prefers-color-scheme: dark)').matches) {
				localStorage.removeItem('theme');
				document.documentElement.removeAttribute('data-theme');
			}
			// System is in dark mode
			else {
				localStorage.setItem('theme', 'dark');
				document.documentElement.setAttribute('data-theme', 'dark');
			}
		}
		// If the theme is set, change to theme user choice
		else {
			localStorage.setItem('theme', theme);
			document.documentElement.setAttribute('data-theme', theme);
		}

		currentTheme = theme;
	};
</script>

<ul
	tabIndex={0}
	class="dropdown-content z-[1] space-y-1 rounded-box bg-base-100 p-2 shadow shadow-base-content/5"
>
	<ThemeSelectorItem
		active={currentTheme === LIGHT_THEME}
		on:click={() => themeToggle(LIGHT_THEME)}
	>
		<HeroiconsSun />
		{m.light()}
	</ThemeSelectorItem>
	<ThemeSelectorItem active={currentTheme === DARK_THEME} on:click={() => themeToggle(DARK_THEME)}>
		<HeroiconsMoon />
		{m.dark()}
	</ThemeSelectorItem>
	<ThemeSelectorItem
		active={currentTheme === SYSTEM_THEME}
		on:click={() => themeToggle(SYSTEM_THEME)}
	>
		<HeroiconsComputerDesktop /> <span class="whitespace-nowrap">{m.system()}</span>
	</ThemeSelectorItem>
</ul>
