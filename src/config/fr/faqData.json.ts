import { type FaqItem } from "../types/configDataTypes";

// FAQ data for Inbyte (French version)
export const faqData: FaqItem[] = [
	{
		question: "Qu'est-ce qu'un POS MDB et pourquoi est-il important pour les distributeurs automatiques?",
		answer: `Un POS MDB est un dispositif compatible avec le protocole standard MDB utilisé par les distributeurs automatiques pour accepter les paiements électroniques. Il permet d'intégrer les cartes bancaires, NFC, portefeuilles numériques et paiements sans contact dans n'importe quelle machine.

Chez Inbyte, nous utilisons des POS de dernière génération, intégrés et certifiés pour fonctionner avec le vending au Chili, garantissant des transactions rapides et fiables.`,
	},
	{
		question: "Quels distributeurs automatiques sont compatibles avec Inbyte?",
		answer: `Pratiquement tous : machines à boissons, snacks, café, produits non alimentaires, vending industriel, machines automatiques spécialisées, kiosques libre-service et plus encore.`,
	},
	{
		question: "Puis-je installer un POS libre-service sur n'importe quel distributeur automatique?",
		answer: `Oui. La plupart des machines modernes sont compatibles avec MDB, et les plus anciennes peuvent être adaptées via des modules supplémentaires.

Inbyte effectue des évaluations techniques pour déterminer la meilleure façon d'intégrer un POS dans chaque type de machine.`,
	},
	{
		question: "Combien coûte l'installation d'un système de paiement dans un distributeur automatique?",
		answer: `Le coût dépend du type de machine, du POS requis et de l'intégration. Inbyte propose des plans évolutifs pour les petits réseaux et les grands opérateurs. Contactez-nous pour un devis adapté à votre opération.`,
	},
	{
		question: "Combien de temps faut-il pour intégrer un POS dans un distributeur automatique?",
		answer: `Le processus est rapide. Dans la plupart des cas, l'installation peut être effectuée en moins d'une heure, à condition que la machine soit compatible avec MDB.

La configuration de la télémétrie et des tableaux de bord d'Inbyte est effectuée en parallèle pour que vous puissiez voir vos données dès le premier jour.`,
	},
	{
		question: "Quels modes de paiement les distributeurs automatiques peuvent-ils accepter?",
		answer: `Les POS que nous intégrons permettent :

- Cartes de débit et de crédit
- NFC
- Apple Pay et Google Pay
- Cartes prépayées
- Paiements sans contact (contactless)

L'intégration s'adapte selon le cas d'usage et le flux de clients.`,
	},
	{
		question: "Comment puis-je surveiller les ventes et l'état de mes machines?",
		answer: `Avec notre plateforme de télémétrie et tableaux de bord BI, vous pouvez voir :

- Ventes totales et par produit
- Machines actives et hors service
- Stock en temps réel
- Classement des emplacements

Inbyte est la seule entreprise au Chili qui conçoit des tableaux de bord personnalisés par client, adaptés à l'opération réelle de chaque entreprise.`,
	},
	{
		question: "Puis-je voir les ventes de toutes mes machines de manière centralisée?",
		answer: `Absolument.

Notre plateforme permet de visualiser toutes vos machines dans un seul panneau, en filtrant par :

- Emplacement
- Date
- Produit
- Type de machine
- Métriques opérationnelles

C'est un outil clé pour les opérateurs avec de grands réseaux.`,
	},
	{
		question: "Est-il possible d'intégrer mes machines avec mon ERP, CRM ou d'autres systèmes internes?",
		answer: `Oui. Inbyte développe des intégrations sur mesure via des API, connecteurs et modules personnalisés.

Nos clients intègrent leurs machines avec des systèmes d'inventaire, de comptabilité, d'approvisionnement, de BI d'entreprise et bien plus encore.`,
	},
	{
		question: "Comment Inbyte améliore-t-il l'efficacité opérationnelle de mon entreprise de vending?",
		answer: `Par :

- Alertes précoces de pannes
- Réduction des machines sans stock
- Identification des produits à haut et bas rendement
- Itinéraires plus efficaces
- Métriques de disponibilité et de temps de fonctionnement
- Tableaux de bord personnalisés

Cela permet de prendre des décisions basées sur des données réelles en temps réel.`,
	},
	{
		question: "Ai-je besoin de connaissances techniques pour utiliser la plateforme?",
		answer: `Non.

Nos tableaux de bord sont conçus pour être clairs, intuitifs et faciles à utiliser.

De plus, nous offrons un support pour vous accompagner à chaque étape du processus.`,
	},
];

export default faqData;
