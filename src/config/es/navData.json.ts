/**
 * * This file is used to define the navigation links for the site.
 * Notes:
 * 1 level of dropdown is supported
 * Mega menus look best with 3-5 columns, but supports anything > 2 columns
 * If using icons, the icon should be saved in the src/icons folder. If filename is "tabler/icon.svg" then input "tabler/icon"
 * Recommend getting icons from https://tabler.io/icons
 */

// types
import { type navItem } from "../types/configDataTypes";

const navConfig: navItem[] = [
	{
		text: "Inicio",
		link: "/",
	},
	{
		text: "Servicios",
		dropdown: [
			{
				text: "Vending",
				link: "/vending",
			},
			{
				text: "POS MDB",
				link: "/pos-mdb-vending",
			},
			{
				text: "Pago con tarjeta",
				link: "/maquinas-expendedoras-pago-tarjeta",
			},
			{
				text: "Telemetría vending",
				link: "/telemetria-vending",
			},
			{
				text: "Autoservicio",
				link: "/autoservicio-vending",
			},
			{
				text: "Parking",
				link: "/parking",
			},
		],
	},
	{
		text: "Alternativas",
		dropdown: [
			{
				text: "Alternativa a Transbank",
				link: "/alternativa-transbank-vending",
			},
		],
	},
	{
		text: "Blog",
		link: "/blog",
	},
	{
		text: "Preguntas frecuentes",
		link: "/faq",
	},
	{
		text: "Contacto",
		link: "/contact",
	},
];

export default navConfig;
