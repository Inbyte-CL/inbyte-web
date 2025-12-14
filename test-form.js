// Script de prueba para el formulario de contacto
// Ejecutar en la consola del navegador (F12) en la página de contacto

async function testContactForm() {
	console.log("🧪 Iniciando prueba del formulario de contacto...");
	
	// Datos de prueba
	const testData = {
		nombre: "Test Usuario",
		email: "test@example.com",
		telefono: "+56912345678",
		compania: "Empresa Test",
		cantidad_maquinas: "2-10",
		tipo_maquinas: "snacks",
		mensaje: "Este es un mensaje de prueba desde la consola del navegador."
	};
	
	console.log("📤 Datos a enviar:", testData);
	
	try {
		const response = await fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(testData),
		});
		
		console.log("📥 Status de respuesta:", response.status);
		console.log("📥 Headers de respuesta:", Object.fromEntries(response.headers.entries()));
		
		const responseText = await response.text();
		console.log("📥 Respuesta como texto:", responseText);
		
		try {
			const result = JSON.parse(responseText);
			console.log("✅ Respuesta parseada:", result);
			
			if (result.success) {
				console.log("✅ ¡Éxito! El email se envió correctamente.");
			} else {
				console.error("❌ Error en la respuesta:", result.error);
			}
		} catch (parseError) {
			console.error("❌ Error parseando la respuesta JSON:", parseError);
			console.error("Respuesta recibida:", responseText);
		}
		
	} catch (error) {
		console.error("❌ Error en la petición:", error);
		console.error("Detalles del error:", {
			message: error.message,
			stack: error.stack,
			name: error.name
		});
	}
}

// Ejecutar la prueba
testContactForm();


