import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "INBYTE",
	// Your website's title and description (meta fields)
	title: "Inbyte | Pagos electrónicos para vending y parking en Chile",
	description:
		"Soluciones de pago electrónico, telemetría y dashboards BI para máquinas vending, estacionamientos y autoservicio en Chile.",

	// Your information for blog post purposes
	author: {
		name: "INBYTE",
		email: "contacto@inbyte.cl",
		twitter: "inbyte_cl",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/theme.png",
		alt: "INBYTE: pagos electrónicos para vending y parking en Chile",
	},
};

export default siteData;
