<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/state';
	import { isCurrent } from '$lib/helpers/app';
	import AnchorNavigation from '../anchor/AnchorNavigation.svelte';
	import { logo } from '$lib/components';

	let scrolled: boolean = $state(false);
	let scrollPause: boolean = $state(false);
	let scrollPauseTimeout: ReturnType<typeof setTimeout> | null = $state(null);
	let header: HTMLElement | null = $state(null);

	const handleScroll = () => {
		if (scrollPauseTimeout) clearTimeout(scrollPauseTimeout);
		scrollPause = false;
		scrolled = window.scrollY > 10;

		scrollPauseTimeout = setTimeout(() => {
			scrollPause = true;
		}, 1000);
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();
	});
</script>

<header class="main-header" class:scrolled class:scrollPause bind:this={header}>
	<div class="container">
		<div class="row">
			<div class="col-3 col-md-1">
				<enhanced:img src={logo} alt="Logo" class="main-header__logo img-fluid" />
			</div>
			<div class="col-6 col-md-8 d-flex align-items-center">
				<AnchorNavigation />
			</div>
			<div class="col-3 d-flex justify-content-end align-items-center">
				<a
					href="https://uk.nyrorganic.com/shop/sharonpettit"
					class="main-header__shop-link btn btn-outline-primary"
					target="_blank"
				>
					<i class="bi bi-basket"></i> Shop
				</a>
			</div>
		</div>
	</div>
</header>
