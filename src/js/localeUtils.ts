import type { CollectionEntry, DataEntryMap } from "astro:content";
import { locales, defaultLocale } from "@/config/siteSettings.json";

export function getLocaleFromUrl(url: URL): (typeof locales)[number] {
	const [, locale] = url.pathname.split("/");

	// @ts-expect-error runtime guard for configured locales
	if (locales.includes(locale)) return locale as (typeof locales)[number];
	return defaultLocale;
}

export function filterCollectionByLanguage<T extends keyof DataEntryMap>(
	collection: CollectionEntry<T>[],
	locale: (typeof locales)[number],
	removeLocale: boolean = true,
): CollectionEntry<T>[] {
	if (!locales.includes(locale)) return [];

	const filteredCollection = collection.filter((item) => item.id.startsWith(`${locale}/`));

	if (removeLocale) {
		filteredCollection.forEach((item) => {
			item.id = removeLocaleFromSlug(item.id);
		});
	}

	return filteredCollection;
}

export function removeLocaleFromSlug(slug: string): string {
	const slugElements = slug.split("/");
	const newSlugElements = slugElements.filter(
		// @ts-expect-error runtime guard for configured locales
		(element) => !locales.includes(element),
	);

	return newSlugElements.join("/");
}
