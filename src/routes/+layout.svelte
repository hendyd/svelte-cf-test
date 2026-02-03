<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';
	import { onDestroy, onMount } from 'svelte';
	import { AdvertSlot as Advert } from '$lib/components';
	import { Header, Footer } from '$lib/components/global';
	import { page } from '$app/state';
	import { MetaTags, deepMerge } from 'svelte-meta-tags';
	import { pageScrolled, scrollDistance } from '$lib/stores/interface';
	import { SITENAME } from '$lib/helpers/app';
	import AdvertImage from '$lib/assets/independent-consultant-long-logo.jpg';

	let { data, children } = $props();

	let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags));

	onMount(() => {
		const handleScroll = () => {
			pageScrolled.set(window.scrollY > 0);
			scrollDistance.set(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // run once on mount

		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head>
	<MetaTags {...metaTags} />
	<link rel="icon" href={favicon} />
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
	/>
</svelte:head>

<main class="main" class:scrolled={$pageScrolled}>
	<div class="main__wrapper">
		<Header />

		{@render children()}

		<Advert
			mediaSrc={AdvertImage}
			alt="Advert"
			linkUrl="https://uk.nyrorganic.com/shop/sharonpettit"
		/>

		<Footer />
	</div>
</main>
