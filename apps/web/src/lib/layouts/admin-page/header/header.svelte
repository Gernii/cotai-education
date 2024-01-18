<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { cx } from 'cva';

	import LogoCotAI from '$lib/assets/logo/CoTAI-Ver0-640.png?imagetools';

	import { Picture } from '$lib/components/ui/picture';

	import { routerPath } from '$lib/utils/constants';
	import { urlRedirect } from '$lib/utils/url-redirect';

	import { HeaderScrollContext } from './context';
	import { SidenavTrigger } from './sidenav';

	import { IconArrowRightStartOnRectangle, IconUser } from '$lib/components/icons';

	const isScroll = writable(false);

	setContext(HeaderScrollContext, isScroll);

	$: signoutActionURL = urlRedirect($page.url, routerPath.admin.auth.authSignout);

	$: headerClassName = cx(
		'sticky top-0 z-30 flex h-header w-full bg-base-100 bg-opacity-90 backdrop-blur transition-shadow',
		{
			'shadow-sm': $isScroll,
			'shadow-none': !$isScroll
		}
	);

	const onScrollHandler = (e: Event) => {
		const doc = e.target as Document;

		const docScrolled = isDocScrolled(doc);

		if (docScrolled === true && !$isScroll) {
			$isScroll = true;
		} else if (docScrolled === false && $isScroll) {
			$isScroll = false;
		}
	};

	const isDocScrolled = (doc: Document) => {
		if (doc.documentElement.scrollTop > 50) {
			return true;
		} else if (doc.documentElement.scrollTop <= 50) {
			return false;
		}
	};
</script>

<svelte:window on:scroll={onScrollHandler} />

<header class={headerClassName}>
	<div class="navbar h-full min-h-fit gap-x-2 lg:gap-x-8">
		<div class="navbar-start block lg:hidden">
			<SidenavTrigger />
		</div>
		<div class="block h-full flex-shrink-0 max-lg:navbar-center lg:hidden">
			<a href={routerPath.admin.dashboard}>
				<Picture meta={LogoCotAI} alt="Logo CoTAI" />
			</a>
		</div>

		<div class="flex flex-grow-0 lg:flex-grow" />
		<div class="navbar-end">
			<div class="hidden lg:flex">
				<div class="dropdown dropdown-end">
					<div tabindex="0" role="button" class="btn btn-square btn-ghost">
						<IconUser class="size-6" />
					</div>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul tabindex="0" class="card dropdown-content z-[1] rounded-box bg-base-100 p-2 shadow">
						<li>
							<form
								method="post"
								action={`${routerPath.admin.auth.authSignout}${signoutActionURL.search}`}
								use:enhance
							>
								<button class="btn btn-error flex-nowrap">
									<IconArrowRightStartOnRectangle class="size-6" /> <span>Signout</span>
								</button>
							</form>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</header>
