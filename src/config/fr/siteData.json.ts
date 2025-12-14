import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "INBYTE",
	// Your website's title and description (meta fields)
	title: "Inbyte - Lider en autoatencion",
	description:
		"Soluciones de pago electrónico para máquinas expendedoras, estacionamientos y sistemas de autoservicio. Tecnología de última generación con integración MDB universal.",

	// Your information for blog post purposes
	author: {
		name: "Cosmic Themes",
		email: "creator@cosmicthemes.com",
		twitter: "Cosmic_Themes",
	},

	// default image for meta tags if the page doesn't have an image already
		defaultImage: {
		src: "/images/theme.png",
		alt: "Inbyte - Lider en autoatencion",
	},
};

export default siteData;
