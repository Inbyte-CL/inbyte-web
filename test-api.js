// Script de prueba para el endpoint de contacto
import http from 'http';

const testData = {
	nombre: "Test Usuario",
	email: "test@example.com",
	telefono: "+56912345678",
	compania: "Empresa Test",
	cantidad_maquinas: "2-10",
	tipo_maquinas: "snacks",
	mensaje: "Este es un mensaje de prueba desde Node.js"
};

const postData = JSON.stringify(testData);

const options = {
	hostname: 'localhost',
	port: 4321,
	path: '/api/contact',
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'Content-Type': 'application/json',
		'Content-Length': Buffer.byteLength(postData)
	}
};

console.log('📤 Headers enviados:', options.headers);

console.log('🧪 Enviando petición de prueba...');
console.log('📤 Datos:', testData);

const req = http.request(options, (res) => {
	console.log(`📥 Status Code: ${res.statusCode}`);
	console.log(`📥 Headers:`, res.headers);
	
	let data = '';
	
	res.on('data', (chunk) => {
		data += chunk;
	});
	
	res.on('end', () => {
		console.log('📥 Respuesta completa:', data);
		try {
			const parsed = JSON.parse(data);
			console.log('✅ Respuesta parseada:', parsed);
			if (parsed.success) {
				console.log('✅ ¡Éxito! El email se envió correctamente.');
			} else {
				console.error('❌ Error:', parsed.error);
			}
		} catch (e) {
			console.error('❌ Error parseando JSON:', e.message);
		}
	});
});

req.on('error', (error) => {
	console.error('❌ Error en la petición:', error);
});

req.write(postData);
req.end();

