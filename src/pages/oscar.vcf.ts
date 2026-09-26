export const prerender = true;

const vcard = [
	"BEGIN:VCARD",
	"VERSION:3.0",
	"PRODID:-//Inbyte//Oscar Tapia//ES",
	"FN:Oscar Tapia",
	"N:Tapia;Oscar;;;",
	"TITLE:Tech Lead",
	"ORG:Inbyte",
	"EMAIL;TYPE=INTERNET,WORK:oscar.tapia@inbyte.cl",
	"TEL;TYPE=CELL,VOICE:+569656921522",
	"item1.URL:https://www.inbyte.cl/",
	"item1.X-ABLabel:Inbyte",
	"END:VCARD",
].join("\r\n");

export function GET() {
	return new Response(`${vcard}\r\n`, {
		headers: {
			"Content-Type": "text/vcard; charset=utf-8",
			"Content-Disposition": 'inline; filename="Oscar-Tapia.vcf"',
			"Cache-Control": "public, max-age=86400",
		},
	});
}
