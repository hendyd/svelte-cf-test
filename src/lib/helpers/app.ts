import type { Page } from '@sveltejs/kit';

export const SITENAME = import.meta.env.VITE_PUBLIC_SITENAME ?? '';

export const ucfirst = (str: string): string => {
	return capitalizeFirstLetter(str);
};

export const capitalizeFirstLetter = (string: string): string => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const safeGetComputedStyle = (el: Element) => {
	if (typeof window === 'undefined') return null;
	return getComputedStyle(el);
};

export const getBreakpointValue = (size: string): number | null => {
	const computedStyle = safeGetComputedStyle(document.documentElement);
	if (computedStyle) {
		const value = computedStyle
			.getPropertyValue(`--bs-breakpoint-${size}`)
			.replace('px', '')
			.trim();
		return parseInt(value);
	}

	return null;
};

export const isCurrent = (page: Page, link: string) => {
	return page.url.pathname.startsWith(link);
};
