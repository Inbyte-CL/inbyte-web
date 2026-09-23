import { type FaqItem } from "../types/configDataTypes";

// FAQ data for Inbyte
export const faqData: FaqItem[] = [
	{
		question: "¿Qué es un POS MDB y por qué es importante para las máquinas expendedoras?",
		answer: `Un POS MDB es un dispositivo compatible con el protocolo estándar MDB utilizado por las máquinas expendedoras para aceptar pagos electrónicos. Permite integrar tarjetas bancarias, NFC, billeteras digitales y pagos sin contacto en cualquier máquina.

En Inbyte utilizamos POS de última generación, integrados y certificados para funcionar con vending en Chile, asegurando transacciones rápidas y confiables.`,
	},
	{
		question: "¿Qué máquinas expendedoras son compatibles con Inbyte?",
		answer: `Prácticamente todas: máquinas de bebidas, snacks, café, productos no alimenticios, vending industrial, máquinas automáticas especializadas, kioscos de autoservicio y más.`,
	},
	{
		question: "¿Puedo instalar un POS de autoservicio en cualquier máquina expendedora?",
		answer: `Sí. La mayoría de las máquinas modernas son compatibles con MDB, y las más antiguas pueden adaptarse mediante módulos adicionales.

Inbyte realiza evaluaciones técnicas para determinar la mejor forma de integrar un POS en cada tipo de máquina.`,
	},
	{
		question: "¿Cuánto cuesta instalar un sistema de pago en una máquina expendedora?",
		answer: `El costo depende del tipo de máquina, el POS requerido y la integración. Inbyte ofrece planes escalables para redes pequeñas y grandes operadores. Contáctanos para una cotización ajustada a tu operación.`,
	},
	{
		question: "¿Cuánto demora integrar un POS en una máquina expendedora?",
		answer: `El proceso es rápido. En la mayoría de los casos, la instalación puede realizarse en menos de una hora, siempre que la máquina sea compatible con MDB.

La configuración de telemetría y dashboards de Inbyte se realiza en paralelo para que puedas ver tus datos desde el primer día.`,
	},
	{
		question: "¿Qué métodos de pago pueden aceptar las máquinas expendedoras?",
		answer: `Los POS que integramos permiten:

- Tarjetas de débito y crédito
- NFC
- Apple Pay y Google Pay
- Tarjetas prepago
- Pagos sin contacto (contactless)

La integración se adapta según el caso de negocio y el flujo de clientes.`,
	},
	{
		question: "¿Cómo puedo monitorear las ventas y el estado de mis máquinas?",
		answer: `Con nuestra plataforma de telemetría y dashboards BI, puedes ver:

- Ventas totales y por producto
- Máquinas activas y fuera de servicio
- Stock en tiempo real
- Ranking de ubicaciones

Inbyte es la única empresa en Chile que diseña dashboards personalizados por cliente, adaptados a la operación real de cada negocio.`,
	},
	{
		question: "¿Puedo ver las ventas de todas mis máquinas de forma centralizada?",
		answer: `Absolutamente.

Nuestra plataforma permite visualizar todas tus máquinas en un solo panel, filtrando por:

- Ubicación
- Fecha
- Producto
- Tipo de máquina
- Métricas operativas

Es una herramienta clave para operadores con redes grandes.`,
	},
	{
		question: "¿Es posible integrar mis máquinas con mi ERP, CRM u otros sistemas internos?",
		answer: `Sí. Inbyte desarrolla integraciones a medida mediante APIs, conectores y módulos personalizados.

Nuestros clientes integran sus máquinas con sistemas de inventario, contabilidad, abastecimiento, BI corporativo y mucho más.`,
	},
	{
		question: "¿Cómo mejora Inbyte la eficiencia operativa de mi negocio de vending?",
		answer: `Mediante:

- Alertas tempranas de fallas
- Reducción de máquinas sin stock
- Identificación de productos de alto y bajo rendimiento
- Rutas más eficientes
- Métricas de disponibilidad y uptime
- Dashboards personalizados

Esto permite tomar decisiones basadas en datos reales en tiempo real.`,
	},
	{
		question: "¿Necesito conocimientos técnicos para utilizar la plataforma?",
		answer: `No.

Nuestros dashboards están diseñados para ser claros, intuitivos y fáciles de usar.

Además, contamos con soporte para acompañarte en cada etapa del proceso.`,
	},
];

export default faqData;
