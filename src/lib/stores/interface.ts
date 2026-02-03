import { writable, type Writable } from 'svelte/store';

export const menuToggle = writable('');
export const headerHeight = writable(0);
export const menuColor = writable('');
export const pageScrolled = writable(false);
export const scrollDistance = writable(0);
export const anchorInView = writable('');
export const hideAnchorNav = writable('');

export const showCookieBanner: Writable<boolean> = writable(false);
export const allowAllCookies: Writable<boolean> = writable(false);
