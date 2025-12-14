import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

// Hacer que este endpoint se renderice bajo demanda (serverless)
export const prerender = false;

// Credenciales de Gmail desde el proyecto Python
const GMAIL_USER = "notificaciones.inbyte@gmail.com";
const GMAIL_APP_PASSWORD = "jqwz sawi iohi trcp";
const LOGO_URL = "https://drive.google.com/uc?export=download&id=1XmXUx6v78W-D1pJsKuLrFHe3Ndn-6shK";
const DESTINATARIO = "carlosm@inbyte.cl";

// Configurar transporter de Nodemailer
const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 587,
	secure: false, // true para 465, false para otros puertos
	auth: {
		user: GMAIL_USER,
		pass: GMAIL_APP_PASSWORD,
	},
});

export const POST: APIRoute = async ({ request }) => {
	try {
		// Debug: ver todos los headers
		const allHeaders = Object.fromEntries(request.headers.entries());
		console.log("Headers recibidos:", allHeaders);
		
		// Verificar que el request tenga contenido (relajar validación de Content-Type para desarrollo)
		const contentType = request.headers.get("content-type") || request.headers.get("Content-Type");
		console.log("Content-Type detectado:", contentType);
		
		// En desarrollo, ser más permisivo con el Content-Type
		if (contentType && !contentType.includes("application/json")) {
			return new Response(
				JSON.stringify({ success: false, error: "Content-Type debe ser application/json", received: contentType }),
				{
					status: 400,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		// Intentar leer el body directamente como JSON (Astro lo maneja automáticamente)
		let data;
		try {
			// Primero intentar con request.json() que es más directo
			data = await request.json();
			console.log("Datos recibidos (via json()):", data);
		} catch (jsonError) {
			// Si falla, intentar leer como texto y parsear manualmente
			console.log("Error con json(), intentando como texto:", jsonError);
			const bodyText = await request.text();
			console.log("Body como texto:", bodyText);
			
			if (!bodyText || bodyText.trim() === "") {
				return new Response(
					JSON.stringify({ success: false, error: "El body de la petición está vacío" }),
					{
						status: 400,
						headers: { "Content-Type": "application/json" },
					}
				);
			}
			
			try {
				data = JSON.parse(bodyText);
				console.log("Datos parseados manualmente:", data);
			} catch (parseError) {
				console.error("Error parseando JSON:", parseError);
				return new Response(
					JSON.stringify({ success: false, error: "JSON inválido en el body de la petición" }),
					{
						status: 400,
						headers: { "Content-Type": "application/json" },
					}
				);
			}
		}

		// Validar campos requeridos
		const { nombre, email, telefono, compania, cantidad_maquinas, tipo_maquinas, mensaje } = data;

		if (!nombre || !email || !telefono || !compania || !cantidad_maquinas || !tipo_maquinas || !mensaje) {
			return new Response(
				JSON.stringify({ success: false, error: "Todos los campos son requeridos" }),
				{
					status: 400,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		// Formatear el mensaje del email (texto plano)
		const emailBody = `
Nuevo contacto desde el formulario de Inbyte

Información del contacto:
- Nombre: ${nombre}
- Correo electrónico: ${email}
- Teléfono: ${telefono}
- Compañía: ${compania}
- Cantidad de máquinas: ${cantidad_maquinas}
- Tipo de máquinas: ${tipo_maquinas}

Mensaje:
${mensaje}

---
Este mensaje fue enviado desde el formulario de contacto de Inbyte.
		`.trim();

		// HTML usando la misma estructura del proyecto Python
		const htmlBody = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuevo Contacto - Inbyte</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4;">
        <tr>
            <td align="center">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; margin-top: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                    <tr>
                        <td align="center" style="padding: 0; border-top-left-radius: 8px; border-top-right-radius: 8px;">
                            <img src="${LOGO_URL}" alt="Inbyte" style="display: block; width: 100%; max-width: 600px; height: auto; border: 0; border-top-left-radius: 8px; border-top-right-radius: 8px;">
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 30px 40px;">
                            <h2 style="color: #333333; margin-top: 0;">Nuevo contacto desde el formulario web</h2>
                            <p style="color: #555555; line-height: 1.6;">Se ha recibido un nuevo mensaje de contacto a través del formulario del sitio web de Inbyte.</p>
                            
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 20px; border: 1px solid #dddddd; border-radius: 5px;">
                                <tr style="background-color: #f9f9f9;">
                                    <td style="padding: 12px; font-weight: bold; color: #333;">📋 Información del contacto:</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px;">
                                        <p style="margin: 5px 0; color: #555555;"><strong>Nombre:</strong> ${nombre}</p>
                                        <p style="margin: 5px 0; color: #555555;"><strong>Correo electrónico:</strong> <a href="mailto:${email}" style="color: #4fe09b; text-decoration: none;">${email}</a></p>
                                        <p style="margin: 5px 0; color: #555555;"><strong>Teléfono:</strong> ${telefono}</p>
                                        <p style="margin: 5px 0; color: #555555;"><strong>Compañía:</strong> ${compania}</p>
                                        <p style="margin: 5px 0; color: #555555;"><strong>Cantidad de máquinas:</strong> ${cantidad_maquinas}</p>
                                        <p style="margin: 5px 0; color: #555555;"><strong>Tipo de máquinas:</strong> ${tipo_maquinas}</p>
                                    </td>
                                </tr>
                            </table>
                            
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 20px; border: 1px solid #dddddd; border-radius: 5px;">
                                <tr style="background-color: #f9f9f9;">
                                    <td style="padding: 12px; font-weight: bold; color: #333;">💬 Mensaje:</td>
                                </tr>
                                <tr>
                                    <td style="padding: 16px;">
                                        <p style="margin: 0; color: #555555; line-height: 1.6; white-space: pre-wrap;">${mensaje}</p>
                                    </td>
                                </tr>
                            </table>
                            
                            <p style="color: #4fe09b; font-size: 14px; line-height: 1.6; text-align: center; margin-top: 25px; padding: 10px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 5px;">
                                Puedes responder directamente a este correo para contactar al cliente.
                            </p>
                            
                            <p style="color: #555555; line-height: 1.6; margin-top: 25px;">Atentamente,<br><strong>El sistema de contacto de Inbyte</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 20px; font-size: 12px; color: #999999; border-top: 1px solid #eeeeee;">
                            <p style="margin: 0;">Este es un correo electrónico generado automáticamente, por favor no responda directamente.</p>
                            <p style="margin: 5px 0;">Inbyte Tecnologías y Servicios SPA</p>
                        </td>
                    </tr>
                </table>
                <div style="height: 20px;"></div>
            </td>
        </tr>
    </table>
</body>
</html>`;

		// Configurar el email
		const mailOptions = {
			from: GMAIL_USER,
			to: DESTINATARIO,
			replyTo: email, // Permitir responder directamente al cliente
			subject: `Nuevo contacto: ${nombre} - ${compania}`,
			text: emailBody,
			html: htmlBody,
		};

		// Enviar el email
		await transporter.sendMail(mailOptions);

		return new Response(
			JSON.stringify({ success: true, message: "Mensaje enviado exitosamente" }),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			}
		);
	} catch (error) {
		console.error("Error enviando email:", error);
		return new Response(
			JSON.stringify({
				success: false,
				error: error instanceof Error ? error.message : "Error al enviar el mensaje. Por favor intenta nuevamente.",
			}),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
};

