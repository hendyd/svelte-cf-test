import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$styles: path.resolve("./src/styles"),
		},
	},
	onwarn: (warning, handler) => {
		const { code } = warning;
		if (code.startsWith("a11y-")) return;
		if (code === "missing-exports-condition") return;
		if (code === "a11y-no-static-element-interactions") return;
		if (code === "svelte-ignore a11y-autofocus") return;
		if (code === "vite-plugin-svelte-preprocess-many-dependencies") return;
		if (code.startsWith("css-unused-selector")) return;

		handler(warning);
	},
};

export default config;
