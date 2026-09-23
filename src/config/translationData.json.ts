import siteDataEs from "./es/siteData.json";
import navDataEs from "./es/navData.json";
import faqDataEs from "./es/faqData.json";

export const dataTranslations = {
	es: {
		siteData: siteDataEs,
		navData: navDataEs,
		faqData: faqDataEs,
	},
} as const;

export const textTranslations = {
	es: {
		hero_text: "Pagos electrónicos para vending y parking en Chile",
		hero_description:
			"Integramos POS MDB, pagos contactless, telemetría, dashboards BI y automatización para modernizar máquinas expendedoras, estacionamientos y operaciones de autoservicio.",
		back_to_all_posts: "Volver al blog",
		updated: "Actualizado",
		share_this_article: "Compartir este artículo",
		table_of_contents: "Tabla de contenidos",
	},
} as const;

export const routeTranslations = {
	es: {
		blogKey: "blog",
	},
} as const;

export const localizedCollections = {
	blog: {
		es: "blog",
	},
} as const;
