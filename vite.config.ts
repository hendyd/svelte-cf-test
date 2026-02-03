import { sveltekit } from "@sveltejs/kit/vite";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	plugins: [sveltekit(), enhancedImages()],

	css: {
		preprocessorOptions: {
			scss: {
				quietDeps: true,
				silenceDeprecations: ["import", "global-builtin", "slash-div"],

				loadPaths: [
					path.resolve(__dirname, "src/styles"),
					path.resolve(__dirname, "node_modules"),
				],

				additionalData: `@import "./framework.scss"; @import "./app.scss";`,
			},
		},
	},

	build: { minify: "esbuild", cssCodeSplit: true, sourcemap: true },
	server: { open: true, fs: {} },
});
