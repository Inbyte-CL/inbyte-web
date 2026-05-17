import { type CollectionEntry } from "astro:content";

interface GeneralProps {
	type: "general";
	title: string;
	description: string;
	canonicalUrl: URL;
}

export interface BlogProps {
	type: "blog";
	postFrontmatter: CollectionEntry<"blog">["data"];
	image: ImageMetadata; // result of getImage() from Seo.astro
	authors: CollectionEntry<"authors">[];
	canonicalUrl: URL;
}

export type JsonLDProps = BlogProps | GeneralProps;

export default function jsonLDGenerator(props: JsonLDProps) {
	const { type } = props;
	const organizationId = "https://www.inbyte.cl/#organization";
	const websiteId = "https://www.inbyte.cl/#website";

	const organization = {
		"@type": "Organization",
		"@id": organizationId,
		name: "INBYTE",
		legalName: "Inbyte Tecnologías y Servicios SPA",
		url: "https://www.inbyte.cl/",
		logo: "https://www.inbyte.cl/favicons/web-app-manifest-512x512.png",
		email: "contacto@inbyte.cl",
		areaServed: {
			"@type": "Country",
			name: "Chile",
		},
		knowsAbout: [
			"Pagos electrónicos",
			"Vending",
			"Estacionamientos",
			"Autoservicio",
			"Telemetría",
			"Dashboards BI",
			"Integración POS MDB",
		],
	};

	const website = {
		"@type": "WebSite",
		"@id": websiteId,
		name: "INBYTE",
		url: "https://www.inbyte.cl/",
		publisher: {
			"@id": organizationId,
		},
		inLanguage: "es-CL",
	};

	const toAbsoluteUrl = (url: string, base: URL) => new URL(url, base).toString();

	const graphScript = (graph: object[]) => `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@graph": graph,
	})}</script>`;

	if (type === "blog") {
		const { postFrontmatter, image, authors, canonicalUrl } = props as BlogProps;

		const authorsJsonLdArray = authors.map((author) => {
			return {
				"@type": "Person",
				name: author.data.name,
				url: author.data.authorLink,
			};
		});

		let authorsJsonLd;

		if (authorsJsonLdArray.length === 1) {
			authorsJsonLd = authorsJsonLdArray[0];
		} else {
			authorsJsonLd = authorsJsonLdArray;
		}

		return graphScript([
			organization,
			website,
			{
				"@type": "BlogPosting",
				"@id": `${canonicalUrl.toString()}#article`,
				mainEntityOfPage: {
					"@type": "WebPage",
					"@id": canonicalUrl.toString(),
				},
				headline: postFrontmatter.title,
				description: postFrontmatter.description,
				image: toAbsoluteUrl(image.src, canonicalUrl),
				author: authorsJsonLd,
				publisher: {
					"@id": organizationId,
				},
				datePublished: new Date(postFrontmatter.pubDate).toISOString(),
				dateModified: new Date(postFrontmatter.updatedDate || postFrontmatter.pubDate).toISOString(),
				inLanguage: "es-CL",
			},
		]);
	}

	const { title, description, canonicalUrl } = props as GeneralProps;
	const pathSegments = canonicalUrl.pathname.split("/").filter(Boolean);
	const breadcrumbs = [
		{
			"@type": "ListItem",
			position: 1,
			name: "Inicio",
			item: "https://www.inbyte.cl/",
		},
		...pathSegments.map((segment, index) => ({
			"@type": "ListItem",
			position: index + 2,
			name: segment
				.split("-")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" "),
			item: `https://www.inbyte.cl/${pathSegments.slice(0, index + 1).join("/")}/`,
		})),
	];

	return graphScript([
		organization,
		website,
		{
			"@type": "WebPage",
			"@id": canonicalUrl.toString(),
			url: canonicalUrl.toString(),
			name: title,
			description,
			isPartOf: {
				"@id": websiteId,
			},
			publisher: {
				"@id": organizationId,
			},
			inLanguage: "es-CL",
		},
		{
			"@type": "BreadcrumbList",
			"@id": `${canonicalUrl.toString()}#breadcrumb`,
			itemListElement: breadcrumbs,
		},
	]);
}
