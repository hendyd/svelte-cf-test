import { definePageMetaTags } from 'svelte-meta-tags';
import { SITENAME } from '$lib/helpers/app';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: `Welcome to ${SITENAME}`,
		description:
			'Your local beauty room offering a range of professional beauty treatments using natural, organic products.',
		openGraph: {
			title: `Welcome to ${SITENAME}`,
			description:
				'Your local beauty room offering a range of professional beauty treatments using natural, organic products.',
			siteName: SITENAME
		}
	});

	return { ...pageTags };
};
