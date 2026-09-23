import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import AutoImport from "astro-auto-import";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import compress from "@playform/compress";
import icon from "astro-icon";

export default defineConfig({
	site: "https://www.inbyte.cl",

	output: "server",
	adapter: vercel({
		imageService: true,
	}),

	i18n: {
		defaultLocale: "es",
		locales: ["es"],
		routing: {
			prefixDefaultLocale: false,
		},
	},

	markdown: {
		shikiConfig: {
			theme: "css-variables",
			wrap: true,
		},
	},

	integrations: [
		AutoImport({
			imports: ["@/components/admonition/Admonition.astro"],
		}),
		mdx(),
		react(),
		icon(),
		compress({
			HTML: true,
			JavaScript: true,
			CSS: false,
			Image: false,
			SVG: false,
		}),
	],

	vite: {
		plugins: [tailwindcss()],
		build: {
			assetsInlineLimit: 0,
		},
		server: {
			host: true,
			port: 4321,
		},
	},
});
