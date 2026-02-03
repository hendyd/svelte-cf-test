import type { RequestHandler } from './$types';

const BASE_URL = import.meta.env.VITE_PUBLIC_DOMAIN;

export const GET: RequestHandler = async () => {
	const pages = [''];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `
	<url>
		<loc>${BASE_URL}${page}</loc>
		<changefreq>weekly</changefreq>
		<priority>0.8</priority>
	</url>`
	)
	.join('')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
