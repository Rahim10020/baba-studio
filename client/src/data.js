import signieImg from "./assets/images/signie.webp";
import notriskImg from "./assets/images/notrisk.webp";
import evincoImg from "./assets/images/evinco.webp";
import extractImg from "./assets/images/extract.webp";
import circuitsImg from "./assets/images/circuits.webp";

export const siteConfig = {
  name: "BabaStudio",
  title: "BabaStudio - On code des sites qui apportent des Clients 24/7",
  description: "On transforme votre business en machine à clients qualifiés. Sites web, applications mobiles et systèmes automatisés qui travaillent pendant que vous dormez.",
  url: "https://babastudio.vercel.app",
  email: "rahim100codeur@gmail.com",
  whatsapp: "https://wa.me/22891796115",
  whatsappNumber: "+228 91 79 61 15",
  social: {
    linkedin: "https://www.linkedin.com/company/babastudio",
    twitter: "https://x.com/babastudio",
  },
};

export const projects = [
  {
    slug: "systeme-acquisition-coaching",
    name: "Système d'Acquisition pour Coach Business",
    shortName: "Coach Pro",
    tagline: "De 2 clients/mois à 15 clients qualifiés automatiquement",
    description: "Création d'un système complet d'acquisition automatisé : landing page optimisée, tunnel de qualification, CRM intégré et séquences d'emails automatiques.",
    type: "Système d'Acquisition • Automatisation",
    image: signieImg,
    link: "#",
    featured: true,
    tldr: {
      what: "Système complet qui transforme des visiteurs froids en clients payants",
      who: "Coach business qui dépensait 3000€/mois en pub sans résultats",
      challenge: "95% des visiteurs partaient sans laisser de contact",
      outcome: "150% d'augmentation du taux de conversion, ROI positif dès le mois 2",
      whyItMatters: "Sans système, chaque lead coûte de l'argent. Avec un système, chaque lead génère du profit."
    },
    problem: {
      intro: "Le client avait un beau site, du trafic payant, mais zéro système de conversion.",
      points: [
        "3000€/mois en Google Ads, 2 clients seulement",
        "Aucun moyen de qualifier les prospects avant le call",
        "Pas de suivi automatique des leads perdus",
        "Le client perdait 90% de son budget en visiteurs non qualifiés"
      ],
      coreInsight: "Le problème n'était pas le trafic. C'était l'absence totale de système entre 'visiteur' et 'client payant'."
    }
  },

  {
    slug: "app-mobile-ecommerce",
    name: "App Mobile E-commerce avec Notifications Push",
    shortName: "Shop App",
    tagline: "30% d'achats répétés grâce aux notifications intelligentes",
    description: "Application mobile native avec système de notifications push personnalisées basées sur le comportement d'achat.",
    type: "App Mobile • React Native",
    image: notriskImg,
    link: "#",
    featured: true,
    tldr: {
      what: "Application mobile e-commerce avec système de rétention intelligent",
      who: "Boutique en ligne qui perdait 85% de ses clients après le premier achat",
      challenge: "Créer une expérience mobile native qui fidélise automatiquement",
      outcome: "+200% de valeur vie client (LTV) en 6 mois",
      whyItMatters: "Acquérir un nouveau client coûte 5x plus cher que de garder un client existant"
    }
  },

  {
    slug: "plateforme-saas-reservation",
    name: "Plateforme SaaS de Réservation pour Salons",
    shortName: "BookPro",
    tagline: "100+ salons de beauté automatisent leur prise de rendez-vous",
    description: "SaaS complet avec paiements intégrés, calendrier synchronisé, rappels SMS automatiques et tableau de bord analytics.",
    type: "SaaS • Full Stack",
    image: evincoImg,
    link: "#",
    featured: true,
    tldr: {
      what: "Système de réservation en ligne qui élimine 100% des appels téléphoniques",
      who: "Propriétaires de salons qui passaient 3h/jour au téléphone",
      challenge: "Construire un SaaS scalable, fiable et rentable",
      outcome: "100+ salons abonnés, 0 support humain nécessaire",
      whyItMatters: "Un système bien conçu remplace des heures de travail manuel"
    }
  },

  {
    slug: "tunnel-vente-formation",
    name: "Tunnel de Vente pour Formation en Ligne",
    shortName: "Formation Pro",
    tagline: "2.3M€ de CA en 12 mois avec un seul tunnel automatisé",
    description: "Tunnel de vente complet avec webinaire automatisé, séquences email, upsells et système d'affiliation intégré.",
    type: "Tunnel de Vente • Marketing Automation",
    image: extractImg,
    link: "#",
    featured: true,
    tldr: {
      what: "Machine de vente automatisée qui fonctionne 24/7 sans intervention humaine",
      who: "Expert avec une formation à 1997€, sans système de vente",
      challenge: "Transformer une expertise en machine à vendre scalable",
      outcome: "2.3M€ de CA, 47% de marge, 0 vendeur humain",
      whyItMatters: "Un bon tunnel vend pendant que vous dormez"
    }
  },

  {
    slug: "site-vitrine-conversion",
    name: "Site Vitrine Haute Conversion - Architecte",
    shortName: "Archi Pro",
    tagline: "De site vitrine mort à 25 leads qualifiés/mois",
    description: "Refonte complète avec focus sur la conversion : storytelling clair, CTAs stratégiques, formulaire qualifiant et chat widget intelligent.",
    type: "Site Web • Conversion",
    image: circuitsImg,
    link: "#",
    featured: true,
    tldr: {
      what: "Site vitrine qui ne montre pas juste des projets, mais génère des leads",
      who: "Cabinet d'architecture avec beau site mais 0 contact entrant",
      challenge: "Transformer un portfolio en machine à leads",
      outcome: "De 0 à 25 demandes de devis qualifiées par mois",
      whyItMatters: "Votre site doit travailler pour vous, pas juste exister"
    }
  },
];

export const skills = {
  expertise: [
    "Systèmes d'Acquisition",
    "Sites qui Convertissent",
    "Apps Mobile Scalables",
    "Automatisation Business",
  ],
};

// Section témoignages - À remplir avec de vrais clients
export const testimonials = [
  // Exemple de structure pour futurs témoignages:
  // {
  //   id: 1,
  //   name: "Jean Dupont",
  //   role: "Coach Business",
  //   company: "Coach Pro",
  //   image: "/path/to/image.jpg",
  //   quote: "BabaStudio a transformé mon business. De 2 à 15 clients par mois automatiquement.",
  //   result: "+650% de clients qualifiés",
  //   rating: 5
  // }
];
