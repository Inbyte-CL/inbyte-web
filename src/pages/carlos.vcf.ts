export const prerender = true;

const vcard = [
	"BEGIN:VCARD",
	"VERSION:3.0",
	"PRODID:-//Inbyte//Carlos Morales//ES",
	"FN:Carlos Morales",
	"N:Morales;Carlos;;;",
	"TITLE;CHARSET=UTF-8:Director comercial y tecnológico",
	"ORG:Inbyte",
	"EMAIL;TYPE=INTERNET,WORK:carlosm@inbyte.cl",
	"TEL;TYPE=CELL,VOICE:+569445589807",
	"item1.URL:https://www.inbyte.cl/",
	"item1.X-ABLabel:Inbyte",
	"item2.URL:https://www.linkedin.com/in/carlosmoralescaama%C3%B1o/",
	"item2.X-ABLabel:LinkedIn",
	"END:VCARD",
].join("\r\n");

export function GET() {
	return new Response(`${vcard}\r\n`, {
		headers: {
			"Content-Type": "text/vcard; charset=utf-8",
			"Content-Disposition": 'inline; filename="Carlos-Morales.vcf"',
			"Cache-Control": "public, max-age=86400",
		},
	});
}
