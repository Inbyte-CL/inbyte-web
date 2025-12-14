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
		text: "Accueil",
		link: "/",
	},
	{
		text: "Services",
		dropdown: [
			{
				text: "Parking",
				link: "/parking",
			},
			{
				text: "Vending",
				link: "/vending",
			},
		],
	},
	{
		text: "Blog",
		link: "/blog",
	},
	{
		text: "FAQ",
		link: "/faq",
	},
	{
		text: "Contact",
		link: "/contact",
	},
];

export default navConfig;
