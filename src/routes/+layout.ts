import { defineBaseMetaTags } from 'svelte-meta-tags';
import { SITENAME } from '$lib/helpers/app';

export const prerender = false;

export const load = ({ url }) => {
	const baseTags = defineBaseMetaTags({
		title: 'Default',
		titleTemplate: `%s | ${SITENAME}`,
		description:
			'Svelte Meta Tags is a Svelte component for managing meta tags and SEO in your Svelte applications.',
		canonical: new URL(url.pathname, url.origin).href, // creates a cleaned up URL (without hashes or query params) from your current URL
		robots: false,
		openGraph: {
			type: 'website',
			url: new URL(url.pathname, url.origin).href,
			locale: 'en_GB',
			title: 'Open Graph Title',
			description: 'Open Graph Description',
			siteName: SITENAME
		},
		facebook: {
			appId: import.meta.env.VITE_PUBLIC_FB_APP_ID ?? '1234567890'
		}
	});

	return { ...baseTags };
};
