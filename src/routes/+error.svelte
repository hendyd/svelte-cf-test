<script lang="ts">
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.ico';
	import image from '$lib/assets/towel-bottle-flowers.jpg';
	import { HeroBanner } from '$lib/components';
</script>

<svelte:head>
	<title>{page.status} | {page.error?.message}</title>
	<link rel="icon" href={favicon} />
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
	/>
</svelte:head>

<HeroBanner
	type="image"
	title="Whoops - {page.status}"
	content="<p>The page you are looking for cannot be found.</p>"
	media={image}
	linkText="Back home"
	linkUrl="/"
/>
