import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import AutoImport from "astro-auto-import";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import vercel from "@astrojs/vercel";
import compress from "@playform/compress";
import icon from "astro-icon";

export default defineConfig({
	site: "https://www.inbyte.cl",

	output: "server",                    // ⭐ IMPORTANTE: habilita API Routes
	adapter: vercel({
		imageService: true,              // mantiene tu config original
	}),

	redirects: {
		"/admin": "/keystatic",
	},

	i18n: {
		defaultLocale: "en",
		locales: ["en", "fr"],
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
		keystatic(),
		sitemap({
			filter: (page) => {
				const pathname = new URL(page).pathname;

				if (
					pathname.startsWith("/fr/") ||
					pathname.startsWith("/examples/") ||
					pathname.startsWith("/sign-in") ||
					pathname.startsWith("/sign-up") ||
					pathname.startsWith("/overview") ||
					pathname.startsWith("/careers") ||
					pathname.startsWith("/categories") ||
					pathname.startsWith("/about") ||
					pathname.startsWith("/asia-vending")
				) {
					return false;
				}

				return true;
			},
		}),
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
