import { type SiteSettingsProps } from "./types/configDataTypes";

export const locales = ["es"] as const;
export const defaultLocale = "es" as const;

export const localeMap = {
	es: "es-CL",
} as const;

export const languageSwitcherMap = {
	es: "ES",
} as const;

export const siteSettings: SiteSettingsProps = {
	useViewTransitions: true,
	copyLinkButtons: true,
	useAnimations: true,
};

export default siteSettings;
