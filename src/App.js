import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, ArrowRight, CalendarDays, Users, Search, Minus, Plus, CreditCard, Headphones, BadgeCheck, ChevronDown, ChevronLeft, ChevronRight, Bed, Maximize, User, X, Wifi, Car, Waves, Sun, UtensilsCrossed, Wind, Tv, Bath, Coffee, Star, Grid3X3, Share2, Heart, Key, Sparkles, Shield, Clock, Target, Gem, Calendar, BookOpen, Twitter, Linkedin, Upload, Home, Building, Castle, HelpCircle, Check, Send, MessageSquare } from "lucide-react"
const HandHeart = Heart;;

// ===========================================
// DATA - Properties
// ===========================================

const properties = [
  {
    id: "casavo-le-tholonet",
    name: "Casavo",
    subtitle: "Le Tholonet",
    type: "appartement",
    neighborhood: "Le Tholonet",
    location: "Aix-en-Provence",
    address: "Chemin de la Palette, 13100 Le Tholonet",
    coordinates: { lat: 43.5213, lng: 5.5139 },
    price: 250,
    cleaningFee: 80,
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    size: "120",
    rating: 5.0,
    reviews: 18,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800",
    ],
    shortDescription: "Mas provençal authentique avec piscine et oliveraie",
    longDescription: "Niché au cœur du Tholonet, ce mas provençal authentique vous accueille dans un cadre d'exception. La propriété a été entièrement rénovée avec le souci du détail, mêlant charme de l'ancien et confort moderne.\n\nLe séjour lumineux s'ouvre sur une terrasse ombragée par des platanes centenaires, offrant une vue imprenable sur la montagne Sainte-Victoire. La cuisine équipée haut de gamme ravira les amateurs de gastronomie provençale.\n\nLes trois chambres, décorées avec goût, disposent chacune de leur propre caractère. La piscine chauffée et l'oliveraie privée complètent ce tableau idyllique pour des vacances inoubliables.",
    amenities: ["Wifi", "Climatisation", "Piscine", "Parking gratuit", "Cuisine équipée", "Lave-linge", "Terrasse", "Barbecue", "Draps fournis", "Serviettes", "TV écran plat", "Jardin privé"],
    houseRules: ["Non-fumeur", "Pas d'animaux", "Pas de fêtes", "Arrivée: 16h-20h", "Départ: avant 11h"],
    reviewsList: [
      { id: 1, name: "Marie L.", date: "Novembre 2025", rating: 5, comment: "Un vrai havre de paix ! La vue sur la Sainte-Victoire est à couper le souffle. Nous reviendrons." },
      { id: 2, name: "Jean-Pierre D.", date: "Octobre 2025", rating: 5, comment: "Propriété exceptionnelle, très bien équipée. Les hôtes sont aux petits soins." },
      { id: 3, name: "Sophie M.", date: "Septembre 2025", rating: 5, comment: "Séjour parfait en famille. Les enfants ont adoré la piscine !" },
    ],
  },
  {
    id: "villa-provence-aix-centre",
    name: "Villa Provence",
    subtitle: "Aix-Centre",
    type: "appartement",
    neighborhood: "Centre-ville",
    location: "Aix-en-Provence",
    address: "Rue Cardinale, 13100 Aix-en-Provence",
    coordinates: { lat: 43.5263, lng: 5.4474 },
    price: 400,
    cleaningFee: 120,
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    size: "200",
    rating: 4.9,
    reviews: 24,
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
    ],
    shortDescription: "Hôtel particulier du XVIIIe au cœur du centre historique",
    longDescription: "Cet hôtel particulier du XVIIIe siècle incarne l'élégance aixoise dans toute sa splendeur. Situé dans le prestigieux quartier Mazarin, à deux pas du Cours Mirabeau, il offre un cadre exceptionnel pour découvrir Aix-en-Provence.\n\nLes hauts plafonds ornés de moulures, les parquets en point de Hongrie et les cheminées d'époque créent une atmosphère unique. Chaque pièce a été décorée avec un mobilier raffiné alliant antiquités et design contemporain.\n\nLe jardin intérieur privatif, rare dans le centre-ville, vous offre un écrin de verdure et de tranquillité au cœur de l'effervescence urbaine.",
    amenities: ["Wifi haut débit", "Climatisation", "Jardin privé", "Cuisine équipée", "Lave-vaisselle", "Lave-linge", "Sèche-linge", "TV connectée", "Enceinte Sonos", "Draps luxe", "Machine à café Nespresso", "Cave à vin"],
    houseRules: ["Non-fumeur", "Animaux sur demande", "Pas de fêtes", "Arrivée: 15h-21h", "Départ: avant 11h"],
    reviewsList: [
      { id: 1, name: "Caroline B.", date: "Novembre 2025", rating: 5, comment: "Un appartement d'exception dans un immeuble historique. Décoration sublime." },
      { id: 2, name: "Thomas R.", date: "Octobre 2025", rating: 5, comment: "Emplacement parfait, on a tout fait à pied. Superbe jardin intérieur." },
      { id: 3, name: "Emma G.", date: "Septembre 2025", rating: 4, comment: "Magnifique appartement. Seul petit bémol, les escaliers sans ascenseur." },
    ],
  },
  {
    id: "latelier-cours-mirabeau",
    name: "L'Atelier",
    subtitle: "Cours Mirabeau",
    type: "appartement",
    neighborhood: "Cours Mirabeau",
    location: "Aix-en-Provence",
    address: "Cours Mirabeau, 13100 Aix-en-Provence",
    coordinates: { lat: 43.5269, lng: 5.4499 },
    price: 180,
    cleaningFee: 60,
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    size: "75",
    rating: 4.8,
    reviews: 36,
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
    ],
    shortDescription: "Loft d'artiste avec vue sur le Cours Mirabeau",
    longDescription: "Ancien atelier d'artiste transformé en loft contemporain, ce bien unique offre une vue imprenable sur le mythique Cours Mirabeau et ses platanes centenaires.\n\nLes grandes verrières inondent l'espace de lumière naturelle, créant une atmosphère inspirante. Le mobilier design et les œuvres d'art locales confèrent au lieu un caractère bohème-chic très recherché.\n\nIdéalement situé au-dessus des cafés emblématiques du Cours, vous profiterez de l'animation aixoise tout en conservant la tranquillité de votre cocon.",
    amenities: ["Wifi fibre", "Climatisation", "Cuisine équipée", "Machine à café", "TV 4K", "Lave-linge", "Balcon", "Vue exceptionnelle", "Parking à proximité", "Draps fournis"],
    houseRules: ["Non-fumeur", "Pas d'animaux", "Pas de fêtes", "Arrivée: 15h-19h", "Départ: avant 10h"],
    reviewsList: [
      { id: 1, name: "Lucas V.", date: "Novembre 2025", rating: 5, comment: "La vue sur le Cours Mirabeau est incroyable ! Appartement très bien agencé." },
      { id: 2, name: "Amélie F.", date: "Octobre 2025", rating: 5, comment: "On se sent comme dans un film ! Déco magnifique et emplacement parfait." },
      { id: 3, name: "Pierre K.", date: "Août 2025", rating: 4, comment: "Super séjour, juste un peu bruyant le weekend avec les terrasses en bas." },
    ],
  },
  {
    id: "bastide-du-soleil",
    name: "Bastide du Soleil",
    subtitle: "Puyricard",
    type: "villa",
    neighborhood: "Puyricard",
    location: "Aix-en-Provence",
    address: "Route de Puyricard, 13540 Puyricard",
    coordinates: { lat: 43.5731, lng: 5.4147 },
    price: 550,
    cleaningFee: 180,
    guests: 10,
    bedrooms: 5,
    bathrooms: 4,
    size: "300",
    rating: 5.0,
    reviews: 12,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800",
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    ],
    shortDescription: "Bastide de charme avec parc arboré et piscine à débordement",
    longDescription: "Cette bastide du XIXe siècle, entièrement restaurée, trône majestueusement au milieu d'un parc de 2 hectares planté de pins parasols et de chênes centenaires.\n\nL'intérieur allie le charme des demeures provençales traditionnelles au confort le plus moderne. Les cinq chambres en suite offrent chacune une vue unique sur le parc ou la piscine à débordement qui surplombe la vallée.\n\nLa cuisine d'été équipée, le court de tennis et les jardins à la française font de cette propriété un lieu d'exception pour des vacances en famille ou entre amis.",
    amenities: ["Wifi", "Climatisation", "Piscine à débordement", "Pool house", "Court de tennis", "Cuisine d'été", "Barbecue", "Parking 6 places", "Jardin 2ha", "Draps luxe", "Service de conciergerie", "Chef à domicile sur demande"],
    houseRules: ["Non-fumeur à l'intérieur", "Animaux acceptés", "Événements sur demande", "Arrivée: 16h-20h", "Départ: avant 11h"],
    reviewsList: [
      { id: 1, name: "Famille Dubois", date: "Octobre 2025", rating: 5, comment: "Une semaine de rêve en famille ! La bastide est encore plus belle en vrai." },
      { id: 2, name: "Antoine M.", date: "Septembre 2025", rating: 5, comment: "Service impeccable, propriété exceptionnelle. Le chef à domicile était incroyable." },
      { id: 3, name: "Claire et Marc", date: "Août 2025", rating: 5, comment: "Nous avons fêté notre anniversaire de mariage ici. Magique !" },
    ],
  },
  {
    id: "le-mazet-eguilles",
    name: "Le Mazet",
    subtitle: "Éguilles",
    type: "appartement",
    neighborhood: "Éguilles",
    location: "Aix-en-Provence",
    address: "Chemin des Vignes, 13510 Éguilles",
    coordinates: { lat: 43.5694, lng: 5.3564 },
    price: 200,
    cleaningFee: 70,
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    size: "90",
    rating: 4.7,
    reviews: 28,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800",
    ],
    shortDescription: "Mazet provençal avec jardin méditerranéen",
    longDescription: "Ce mazet de caractère vous invite à vivre l'authenticité provençale dans le charmant village d'Éguilles, l'un des plus beaux villages perchés de la région.\n\nEntièrement rénové dans le respect des traditions, il conserve ses tomettes anciennes, ses poutres apparentes et sa cheminée en pierre. Le jardin méditerranéen, planté de lavandes et de romarins, embaume l'air des senteurs de Provence.\n\nÀ seulement 15 minutes d'Aix-en-Provence, vous profiterez du calme de la campagne tout en restant proche de toutes les commodités.",
    amenities: ["Wifi", "Cuisine équipée", "Cheminée", "Jardin privé", "Terrasse", "Barbecue", "Parking", "Lave-linge", "TV", "Livres et jeux"],
    houseRules: ["Non-fumeur", "Animaux acceptés", "Pas de fêtes", "Arrivée: 16h-19h", "Départ: avant 10h"],
    reviewsList: [
      { id: 1, name: "Isabelle C.", date: "Novembre 2025", rating: 5, comment: "Un vrai coup de cœur ! Le mazet est plein de charme et le village magnifique." },
      { id: 2, name: "Michel et Anne", date: "Octobre 2025", rating: 4, comment: "Très belle propriété, bien équipée. Parfait pour se ressourcer." },
      { id: 3, name: "Julie P.", date: "Septembre 2025", rating: 5, comment: "Le jardin est un petit paradis. On a passé des heures à bouquiner dehors." },
    ],
  },
  {
    id: "le-jardin-de-ponteves",
    name: "Le Jardin de Pontevès",
    subtitle: "Centre Historique",
    type: "appartement",
    neighborhood: "Centre Historique",
    location: "Aix-en-Provence",
    address: "Rue d'Italie, 13100 Aix-en-Provence",
    coordinates: { lat: 43.5283, lng: 5.4515 },
    price: 220,
    cleaningFee: 75,
    guests: 5,
    bedrooms: 2,
    bathrooms: 2,
    size: "100",
    rating: 5.0,
    reviews: 27,
    images: [
      "https://customer-assets.emergentagent.com/job_property-platform-34/artifacts/dw7vfymq_salon-2.jpg",
      "https://customer-assets.emergentagent.com/job_property-platform-34/artifacts/erb3otky_salon-3.jpg",
      "https://customer-assets.emergentagent.com/job_property-platform-34/artifacts/7zcmbk2z_salon-4.jpg",
      "https://customer-assets.emergentagent.com/job_property-platform-34/artifacts/q016mr99_cuisine-1.jpg",
      "https://customer-assets.emergentagent.com/job_property-platform-34/artifacts/powlygo4_chambre1-1.jpg",
    ],
    shortDescription: "Appartement d'exception à deux pas du Cours Mirabeau",
    longDescription: "Plus qu'un simple appartement, Le Jardin de Pontevès offre une adresse exceptionnelle à quelques mètres du Cours Mirabeau, au cœur du centre historique d'Aix-en-Provence.\n\nCet appartement de standing bénéficie d'une décoration soignée mêlant style contemporain et touches provençales. Les grandes fenêtres offrent une luminosité remarquable et une vue sur les toits de la vieille ville.\n\nLa cuisine ouverte entièrement équipée et les deux salles de bain modernes garantissent tout le confort nécessaire pour un séjour parfait. Un havre de paix au cœur de l'effervescence aixoise.",
    amenities: ["Wifi fibre", "Climatisation", "Cuisine équipée", "Lave-vaisselle", "Machine à café Nespresso", "Lave-linge", "Sèche-linge", "TV connectée", "Draps premium", "Serviettes de bain", "Produits d'accueil", "Fer à repasser"],
    houseRules: ["Non-fumeur", "Pas d'animaux", "Pas de fêtes", "Arrivée: 15h-20h", "Départ: avant 11h"],
    reviewsList: [
      { id: 1, name: "François B.", date: "Novembre 2025", rating: 5, comment: "Appartement parfait, très bien situé. On recommande à 100% !" },
      { id: 2, name: "Sarah L.", date: "Octobre 2025", rating: 5, comment: "Magnifique appartement, déco sublime et emplacement idéal pour visiter Aix." },
      { id: 3, name: "David et Julie", date: "Septembre 2025", rating: 5, comment: "Notre meilleur Airbnb ! Tout était parfait du début à la fin." },
    ],
  },
];

// ===========================================
// DATA - Neighborhoods / Quartiers
// ===========================================

const neighborhoods = [
  {
    id: "aix-centre-cours-mirabeau",
    name: "Aix-Centre",
    subtitle: "Cours Mirabeau",
    slug: "aix-centre",
    shortDescription: "Le cœur battant d'Aix-en-Provence, entre fontaines et terrasses de café.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600",
    propertyCount: 3,
    content: {
      intro: "Le centre historique d'Aix-en-Provence, dominé par le majestueux Cours Mirabeau, est l'âme de la ville. Cette avenue bordée de platanes centenaires, de fontaines et de cafés emblématiques, incarne l'art de vivre provençal depuis le XVIIe siècle.",
      history: "Créé en 1649, le Cours Mirabeau a été conçu comme une promenade aristocratique. Ses hôtels particuliers aux façades ouvragées témoignent de la richesse passée de la noblesse parlementaire. Aujourd'hui, il reste le lieu de rendez-vous incontournable des Aixois et des visiteurs.",
      atmosphere: "Flâner sur le Cours, c'est s'imprégner d'une atmosphère unique : le murmure des fontaines, l'ombre fraîche des platanes, le parfum des calissons qui s'échappe des confiseries. Les terrasses des Deux Garçons et du Grillon invitent à la contemplation.",
      highlights: [
        { name: "Fontaine de la Rotonde", description: "Monument emblématique à l'entrée du Cours" },
        { name: "Cathédrale Saint-Sauveur", description: "Chef-d'œuvre mélangeant roman, gothique et baroque" },
        { name: "Quartier Mazarin", description: "Ruelles élégantes et hôtels particuliers du XVIIe" },
        { name: "Marché aux fleurs", description: "Chaque mardi, jeudi et samedi sur la Place de l'Hôtel de Ville" },
      ],
      restaurants: [
        { name: "Les Deux Garçons", type: "Brasserie historique", description: "Institution aixoise depuis 1792" },
        { name: "Le Formal", type: "Gastronomique", description: "Cuisine créative étoilée au cœur de la ville" },
        { name: "Chez Féraud", type: "Provençal", description: "Authentique cuisine du terroir" },
      ],
      activities: [
        "Visite guidée sur les pas de Cézanne",
        "Dégustation de calissons chez le Roy René",
        "Shopping dans les boutiques du centre",
        "Concert au Grand Théâtre de Provence",
      ],
    },
  },
  {
    id: "le-tholonet",
    name: "Le Tholonet",
    subtitle: "Au pied de la Sainte-Victoire",
    slug: "le-tholonet",
    shortDescription: "Village provençal authentique aux portes de la montagne Sainte-Victoire.",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
    heroImage: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1600",
    propertyCount: 1,
    content: {
      intro: "Le Tholonet, petit village de 2 500 âmes, est le gardien de la Sainte-Victoire. C'est ici que Paul Cézanne venait planter son chevalet pour immortaliser cette montagne légendaire. Un lieu hors du temps, où la Provence se révèle dans toute son authenticité.",
      history: "Habité depuis l'époque romaine, Le Tholonet doit sa renommée au peintre Cézanne qui y réalisa plus de 80 tableaux. Le Château du Tholonet, du XVIIe siècle, et son parc à l'anglaise témoignent d'un passé aristocratique préservé.",
      atmosphere: "Ici, le temps semble suspendu. Les cigales chantent dans les pins, l'air embaume le romarin et le thym sauvage. Les mas en pierre dorée se fondent dans un paysage de vignes et d'oliviers, dominé par la silhouette majestueuse de la Sainte-Victoire.",
      highlights: [
        { name: "Montagne Sainte-Victoire", description: "Randonnées et panoramas exceptionnels" },
        { name: "Atelier de Cézanne", description: "Sur les traces du maître impressionniste" },
        { name: "Château du Tholonet", description: "Parc et jardins ouverts au public" },
        { name: "Aqueduc de Roquefavour", description: "Monument historique impressionnant" },
      ],
      restaurants: [
        { name: "Chez Thomé", type: "Provençal", description: "Terrasse avec vue sur la Sainte-Victoire" },
        { name: "Le Relais Cézanne", type: "Bistronomique", description: "Cuisine du marché raffinée" },
      ],
      activities: [
        "Randonnée au sommet de la Sainte-Victoire",
        "Circuit Cézanne en vélo électrique",
        "Dégustation au Domaine de Saint-Ser",
        "Baignade au barrage de Bimont",
      ],
    },
  },
  {
    id: "puyricard",
    name: "Puyricard",
    subtitle: "La campagne chic",
    slug: "puyricard",
    shortDescription: "Bastides de charme et douceur de vivre dans la campagne aixoise.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
    propertyCount: 1,
    content: {
      intro: "Puyricard incarne l'élégance de la campagne provençale. Ce village résidentiel prisé, à seulement 10 minutes d'Aix-en-Provence, offre le parfait équilibre entre tranquillité rurale et proximité urbaine. Ses bastides de charme attirent une clientèle exigeante en quête d'authenticité.",
      history: "Ancienne seigneurie médiévale, Puyricard s'est développé autour de son église du XIe siècle. Au XXe siècle, il est devenu le refuge des familles aisées cherchant le calme de la campagne sans s'éloigner des commodités d'Aix.",
      atmosphere: "Puyricard, c'est le chant des oiseaux au lever du soleil, les allées de cyprès menant à des propriétés cachées, les marchés de producteurs locaux. Une douceur de vivre qui séduit les amoureux de la Provence authentique.",
      highlights: [
        { name: "Chocolaterie de Puyricard", description: "Artisan chocolatier renommé internationalement" },
        { name: "Église romane", description: "Joyau architectural du XIe siècle" },
        { name: "Domaines viticoles", description: "Route des vins Côtes de Provence" },
        { name: "Marchés de producteurs", description: "Produits frais et artisanaux" },
      ],
      restaurants: [
        { name: "Le Clos de la Violette", type: "Gastronomique", description: "Étoilé Michelin, cuisine d'exception" },
        { name: "La Table de Puyricard", type: "Provençal", description: "Produits locaux et terroir" },
      ],
      activities: [
        "Visite de la chocolaterie et dégustation",
        "Balades équestres dans la campagne",
        "Golf International d'Aix-en-Provence",
        "Pique-nique dans les vignes",
      ],
    },
  },
  {
    id: "eguilles",
    name: "Éguilles",
    subtitle: "Village perché",
    slug: "eguilles",
    shortDescription: "Charmant village perché offrant des panoramas sur la Provence.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    heroImage: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1600",
    propertyCount: 1,
    content: {
      intro: "Perché sur une colline à 15 minutes d'Aix-en-Provence, Éguilles offre un panorama à 360° sur la Provence : la Sainte-Victoire à l'est, les Alpilles à l'ouest, et la mer au sud par temps clair. Ce village de caractère a su préserver son authenticité.",
      history: "Éguilles tire son nom du latin 'aquae' (les eaux), en référence aux nombreuses sources qui alimentaient autrefois le village. Son château du XVIIe siècle, aujourd'hui mairie, domine fièrement les ruelles médiévales.",
      atmosphere: "Ici, on vit au rythme provençal. Les ruelles ombragées invitent à la flânerie, la place du village accueille les parties de pétanque, et les terrasses des cafés offrent des couchers de soleil inoubliables sur le pays d'Aix.",
      highlights: [
        { name: "Vieux village", description: "Ruelles médiévales et maisons de pierre" },
        { name: "Château-Mairie", description: "Architecture classique du XVIIe" },
        { name: "Panorama 360°", description: "Vue exceptionnelle sur toute la Provence" },
        { name: "Lavoir ancien", description: "Témoin du patrimoine rural" },
      ],
      restaurants: [
        { name: "Le Bistrot d'Éguilles", type: "Bistronomique", description: "Cuisine de saison créative" },
        { name: "La Table Paysanne", type: "Provençal", description: "Produits du terroir en circuit court" },
      ],
      activities: [
        "Randonnée sur les collines environnantes",
        "Visite des ateliers d'artistes",
        "Marchés nocturnes d'été",
        "Yoga et bien-être en pleine nature",
      ],
    },
  },
  {
    id: "pays-aix",
    name: "Pays d'Aix",
    subtitle: "Les alentours",
    slug: "pays-aix",
    shortDescription: "Explorez les trésors cachés autour d'Aix-en-Provence.",
    image: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=800",
    heroImage: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=1600",
    propertyCount: 0,
    content: {
      intro: "Le Pays d'Aix, c'est 36 communes unies par un art de vivre commun. Des villages perchés du Luberon aux calanques de la Côte Bleue, en passant par les vignobles de Palette, cette région offre une diversité de paysages et d'expériences unique en Provence.",
      history: "Terre de passage entre Alpes et Méditerranée, le Pays d'Aix a été façonné par des siècles d'histoire. Des oppidums celto-ligures aux bastides du XVIIIe siècle, chaque village raconte un chapitre de l'histoire provençale.",
      atmosphere: "Chaque village a sa personnalité : la sophistication de Rognes, le charme pittoresque de Vauvenargues (où repose Picasso), l'authenticité de Jouques, la fraîcheur de Ventabren. Un voyage à travers le temps et les terroirs.",
      highlights: [
        { name: "Calanques de la Côte Bleue", description: "Criques secrètes entre Marseille et Martigues" },
        { name: "Oppidum d'Entremont", description: "Site archéologique celto-ligure" },
        { name: "Villages du Luberon", description: "Gordes, Roussillon, Bonnieux à 45 min" },
        { name: "Vignoble de Palette", description: "L'une des plus petites AOC de France" },
      ],
      restaurants: [
        { name: "Chez Bruno", type: "Trufficole", description: "Temple de la truffe à Lorgues" },
        { name: "La Petite Maison", type: "Provençal", description: "Cuisine de grand-mère à Cucuron" },
      ],
      activities: [
        "Route des vins en 2CV décapotable",
        "Kayak dans les calanques",
        "Marchés provençaux du dimanche",
        "Vol en montgolfière au lever du soleil",
      ],
    },
  },
];

// ===========================================
// DATA - Blog Articles
// ===========================================

const blogArticles = [
  {
    id: "que-faire-aix-en-provence-week-end",
    title: "Que faire à Aix-en-Provence le temps d'un week-end",
    slug: "que-faire-aix-en-provence-week-end",
    excerpt: "De la découverte du centre historique aux balades dans la campagne environnante, voici notre guide pour un week-end parfait à Aix-en-Provence.",
    category: "Quartiers",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
    author: "Emilio Arias",
    date: "15 décembre 2025",
    readTime: "8 min",
    content: [
      {
        type: "paragraph",
        text: "Aix-en-Provence, cité d'art et d'histoire, dévoile ses charmes à ceux qui prennent le temps de la découvrir. Entre fontaines centenaires, ruelles pavées et terrasses ensoleillées, la ville de Cézanne offre un concentré d'art de vivre provençal."
      },
      {
        type: "heading",
        text: "Jour 1 : Le cœur historique"
      },
      {
        type: "paragraph",
        text: "Commencez votre découverte par le mythique Cours Mirabeau, artère principale bordée de platanes centenaires. Attablez-vous aux Deux Garçons, institution depuis 1792, pour un café en terrasse. Flânez ensuite dans le quartier Mazarin, admirez les hôtels particuliers du XVIIe siècle et leurs portes sculptées."
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
        caption: "Les fontaines du Cours Mirabeau"
      },
      {
        type: "heading",
        text: "Jour 2 : Sur les pas de Cézanne"
      },
      {
        type: "paragraph",
        text: "Le matin, visitez l'atelier de Cézanne, conservé tel qu'à sa mort en 1906. L'après-midi, prenez la route du Tholonet jusqu'au pied de la Sainte-Victoire, motif obsessionnel du maître. Les plus courageux tenteront l'ascension jusqu'à la Croix de Provence."
      },
      {
        type: "quote",
        text: "La Sainte-Victoire au lever du soleil est un spectacle qui ne se décrit pas, il se vit.",
        author: "Paul Cézanne"
      },
      {
        type: "heading",
        text: "Nos adresses secrètes"
      },
      {
        type: "paragraph",
        text: "Pour le déjeuner, échappez-vous au Mas de la Violette, table étoilée nichée dans les vignes. Le soir, testez la cuisine bistronomique du Zinc d'Hugo, repaire des Aixois avertis. Et pour ramener un souvenir gourmand, direction la confiserie du Roy René pour ses calissons d'exception."
      }
    ],
    relatedArticles: ["meilleurs-restaurants-aix-en-provence", "randonnee-sainte-victoire-guide"]
  },
  {
    id: "meilleurs-restaurants-aix-en-provence",
    title: "Les 10 meilleurs restaurants d'Aix-en-Provence",
    slug: "meilleurs-restaurants-aix-en-provence",
    excerpt: "Notre sélection des tables incontournables, des bistrots authentiques aux étoilés, pour découvrir la gastronomie aixoise.",
    category: "Gastronomie",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200",
    author: "Maximilien Veronico",
    date: "10 décembre 2025",
    readTime: "6 min",
    content: [
      {
        type: "paragraph",
        text: "Aix-en-Provence est une ville où l'on mange bien. Très bien même. Entre tables étoilées, bistrots de quartier et terrasses cachées, voici notre sélection des meilleures adresses testées et approuvées par l'équipe EmiRise."
      },
      {
        type: "heading",
        text: "1. Le Clos de la Violette ★★"
      },
      {
        type: "paragraph",
        text: "Doublement étoilé, ce restaurant gastronomique est l'adresse incontournable d'Aix. Le chef Jean-Marc Banzo sublime les produits provençaux dans un cadre raffiné avec terrasse sur jardin. Réservation indispensable, comptez 150€ par personne."
      },
      {
        type: "heading",
        text: "2. Le Formal ★"
      },
      {
        type: "paragraph",
        text: "Niché dans une ruelle du centre, Le Formal propose une cuisine créative qui joue avec les textures et les saveurs. Menu dégustation remarquable. Une étoile amplement méritée."
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200",
        caption: "Cuisine provençale raffinée"
      },
      {
        type: "heading",
        text: "3. Chez Féraud"
      },
      {
        type: "paragraph",
        text: "L'authentique. Pieds paquets, daube provençale, tielle sétoise... Ici on cuisine comme les grands-mères. Cadre rustique, accueil chaleureux, addition douce. Notre coup de cœur pour un déjeuner dominical."
      },
      {
        type: "paragraph",
        text: "Et aussi : Le Zinc d'Hugo pour l'ambiance, La Fromagerie du Passage pour un plateau, L'Esprit de la Violette pour le bistrot chic, Pierre Reboul pour l'audace, Le Petit Verdot pour les vins naturels..."
      }
    ],
    relatedArticles: ["que-faire-aix-en-provence-week-end", "vins-provence-route-degustation"]
  },
  {
    id: "randonnee-sainte-victoire-guide",
    title: "Randonnée Sainte-Victoire : le guide complet",
    slug: "randonnee-sainte-victoire-guide",
    excerpt: "Itinéraires, conseils pratiques et points de vue à ne pas manquer pour conquérir le sommet emblématique de Provence.",
    category: "Activités",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200",
    author: "Emilio Arias",
    date: "5 décembre 2025",
    readTime: "10 min",
    content: [
      {
        type: "paragraph",
        text: "La montagne Sainte-Victoire, immortalisée par Cézanne dans plus de 80 tableaux, est le symbole de la Provence. Son ascension est un pèlerinage pour tout amoureux de la région. Voici notre guide pour une randonnée réussie."
      },
      {
        type: "heading",
        text: "L'itinéraire classique : depuis Vauvenargues"
      },
      {
        type: "paragraph",
        text: "Départ du parking des Cabassols. Comptez 3h de montée pour atteindre la Croix de Provence (945m). Le sentier est bien balisé mais technique sur la fin. Apportez de bonnes chaussures et au moins 2 litres d'eau par personne."
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=1200",
        caption: "Vue depuis le sommet de la Sainte-Victoire"
      },
      {
        type: "heading",
        text: "Alternative : le prieuré par le versant sud"
      },
      {
        type: "paragraph",
        text: "Plus accessible, ce parcours depuis le parking de Bimont permet d'atteindre le prieuré Notre-Dame de Sainte-Victoire en 1h30. Idéal pour les familles ou par forte chaleur."
      },
      {
        type: "quote",
        text: "Regardez cette Sainte-Victoire. Quelle grandeur, quelle impérieux de soif de soleil !",
        author: "Paul Cézanne"
      },
      {
        type: "heading",
        text: "Conseils pratiques"
      },
      {
        type: "paragraph",
        text: "Partez tôt le matin en été (avant 7h). Le mistral peut souffler fort au sommet, prévoyez une veste. En juillet-août, l'accès au massif est réglementé en cas de risque incendie. Consultez la préfecture avant de partir."
      }
    ],
    relatedArticles: ["que-faire-aix-en-provence-week-end", "villages-perches-luberon"]
  },
  {
    id: "vins-provence-route-degustation",
    title: "Route des vins de Provence : les domaines à visiter",
    slug: "vins-provence-route-degustation",
    excerpt: "De Palette à Cassis, découvrez les plus beaux domaines viticoles de la région aixoise pour des dégustations mémorables.",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200",
    author: "Maximilien Veronico",
    date: "28 novembre 2025",
    readTime: "7 min",
    content: [
      {
        type: "paragraph",
        text: "La Provence est la plus ancienne région viticole de France. Autour d'Aix-en-Provence, plusieurs appellations d'exception méritent le détour : Palette, Coteaux d'Aix, Sainte-Victoire... Suivez-nous sur la route des vins."
      },
      {
        type: "heading",
        text: "Palette : la pépite méconnue"
      },
      {
        type: "paragraph",
        text: "Avec seulement 50 hectares, Palette est l'une des plus petites AOC de France. Le Château Simone, propriété familiale depuis 5 générations, produit des vins d'une complexité rare. La visite des caves troglodytes est inoubliable."
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200",
        caption: "Vignobles au pied de la Sainte-Victoire"
      },
      {
        type: "heading",
        text: "Côtes de Provence Sainte-Victoire"
      },
      {
        type: "paragraph",
        text: "Cette appellation récente (2005) produit des rosés d'exception grâce à un terroir calcaire unique. Le Domaine de Saint-Ser offre une vue spectaculaire sur la montagne et des vins à la hauteur du panorama."
      },
      {
        type: "paragraph",
        text: "Nos autres coups de cœur : Château La Coste pour l'art contemporain, Mas de Cadenet pour l'authenticité, et Domaine de la Brillane pour les vins bio."
      }
    ],
    relatedArticles: ["meilleurs-restaurants-aix-en-provence", "que-faire-aix-en-provence-week-end"]
  },
  {
    id: "villages-perches-luberon",
    title: "Les plus beaux villages perchés du Luberon",
    slug: "villages-perches-luberon",
    excerpt: "Gordes, Roussillon, Bonnieux... Partez à la découverte des joyaux du Luberon, à moins d'une heure d'Aix-en-Provence.",
    category: "Quartiers",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200",
    author: "Emilio Arias",
    date: "20 novembre 2025",
    readTime: "9 min",
    content: [
      {
        type: "paragraph",
        text: "À 45 minutes d'Aix-en-Provence, le Luberon déploie ses villages perchés comme autant de joyaux posés sur les collines. Ces communes classées parmi les plus beaux villages de France méritent largement l'excursion."
      },
      {
        type: "heading",
        text: "Gordes, le majestueux"
      },
      {
        type: "paragraph",
        text: "Accroché à flanc de falaise, Gordes est sans doute le plus photographié des villages du Luberon. Ses maisons de pierre blonde, son château Renaissance et ses ruelles en calades forment un ensemble d'une beauté saisissante."
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
        caption: "Vue panoramique sur Gordes"
      },
      {
        type: "heading",
        text: "Roussillon et ses ocres"
      },
      {
        type: "paragraph",
        text: "Classé parmi les plus beaux villages de France, Roussillon doit sa célébrité à ses façades aux teintes flamboyantes, du jaune au rouge sang. Le sentier des ocres offre une balade surréaliste dans d'anciennes carrières."
      },
      {
        type: "heading",
        text: "Bonnieux, le secret"
      },
      {
        type: "paragraph",
        text: "Moins touristique que ses voisins, Bonnieux n'en est pas moins charmant. Son église romane au sommet du village offre un panorama exceptionnel sur le Luberon et les Monts de Vaucluse."
      }
    ],
    relatedArticles: ["randonnee-sainte-victoire-guide", "que-faire-aix-en-provence-week-end"]
  },
  {
    id: "emirise-nouveaux-biens-2025",
    title: "EmiRise accueille 5 nouvelles propriétés d'exception",
    slug: "emirise-nouveaux-biens-2025",
    excerpt: "Découvrez les dernières merveilles qui rejoignent notre collection : bastides, mas provençaux et appartements de caractère.",
    category: "Actualités EmiRise",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
    author: "Équipe EmiRise",
    date: "1 décembre 2025",
    readTime: "4 min",
    content: [
      {
        type: "paragraph",
        text: "L'année 2025 a été riche en découvertes pour EmiRise. Notre sélection s'enrichit de 5 propriétés d'exception, soigneusement choisies pour leur caractère unique et leurs prestations haut de gamme."
      },
      {
        type: "heading",
        text: "La Bastide des Oliviers"
      },
      {
        type: "paragraph",
        text: "Cette bastide du XVIIIe siècle, nichée dans un écrin de verdure à Puyricard, incarne l'élégance provençale. Ses 6 chambres, sa piscine à débordement et son oliveraie centenaire en font un lieu d'exception pour les grandes réceptions."
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200",
        caption: "La Bastide des Oliviers, nouvelle propriété EmiRise"
      },
      {
        type: "heading",
        text: "Le Loft Cézanne"
      },
      {
        type: "paragraph",
        text: "Ancien atelier d'artiste transformé en loft contemporain, cette adresse unique surplombe le Cours Mirabeau. Ses 150m², ses verrières d'époque et sa terrasse privative séduiront les amateurs d'espaces atypiques."
      },
      {
        type: "paragraph",
        text: "Et aussi : Le Mas de la Sainte-Victoire, L'Appartement Mazarin et La Villa des Alpilles rejoignent notre collection. Découvrez-les dès maintenant sur notre site."
      }
    ],
    relatedArticles: ["que-faire-aix-en-provence-week-end", "meilleurs-restaurants-aix-en-provence"]
  }
];

// Blog categories
const blogCategories = [
  { id: "all", name: "Tous les articles" },
  { id: "quartiers", name: "Quartiers" },
  { id: "culture", name: "Culture" },
  { id: "gastronomie", name: "Gastronomie" },
  { id: "activites", name: "Activités" },
  { id: "actualites-emirise", name: "Actualités EmiRise" }
];

// ===========================================
// DATA - Client Reviews
// ===========================================

const clientReviews = [
  {
    id: 1,
    name: "Marie-Claire D.",
    rating: 5,
    date: "Novembre 2025",
    property: "Casavo — Le Tholonet",
    propertyId: "casavo-le-tholonet",
    comment: "Un séjour absolument parfait ! La maison est encore plus belle que sur les photos. La vue sur la Sainte-Victoire au lever du soleil est magique. L'équipe EmiRise a été aux petits soins. Nous reviendrons sans hésiter."
  },
  {
    id: 2,
    name: "Thomas B.",
    rating: 5,
    date: "Octobre 2025",
    property: "Le Jardin de Pontevès — Centre Historique",
    propertyId: "le-jardin-de-ponteves",
    comment: "Emplacement idéal à deux pas du Cours Mirabeau. L'appartement est décoré avec beaucoup de goût. On s'est sentis comme chez nous. Les recommandations de restaurants étaient excellentes !"
  },
  {
    id: 3,
    name: "Sophie & Laurent M.",
    rating: 5,
    date: "Septembre 2025",
    property: "Bastide du Soleil — Puyricard",
    propertyId: "bastide-du-soleil",
    comment: "Une bastide de rêve pour notre anniversaire de mariage. La piscine à débordement, le parc, le calme absolu... Tout était parfait. Le service de conciergerie nous a organisé un dîner privé mémorable."
  },
  {
    id: 4,
    name: "Jean-Philippe R.",
    rating: 5,
    date: "Août 2025",
    property: "L'Atelier — Cours Mirabeau",
    propertyId: "latelier-cours-mirabeau",
    comment: "Ce loft est unique ! Les verrières, la lumière, la vue sur le Cours... On se croirait dans un film. Idéal pour un couple. Petit conseil : réservez une table aux Deux Garçons juste en bas !"
  },
  {
    id: 5,
    name: "Famille Dubois",
    rating: 5,
    date: "Juillet 2025",
    property: "Le Mazet — Éguilles",
    propertyId: "le-mazet-eguilles",
    comment: "Vacances en famille parfaites ! Le mazet est plein de charme, le jardin sent la lavande, et le village d'Éguilles est magnifique. Les enfants ont adoré. Un vrai havre de paix à 15 min d'Aix."
  }
];

const PropertyCard = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = property.images || [property.image];

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  return (
    <Link to={`/logement/${property.id}`} className="group block" data-testid={`property-card-${property.id}`}>
      {/* Image Carousel */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-5" data-testid="property-carousel">
        {/* Images */}
        <div 
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img 
              key={index}
              src={img}
              alt={`${property.name} - ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-700"
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-md"
              aria-label="Image précédente"
              data-testid="carousel-prev-btn"
            >
              <ChevronLeft className="w-4 h-4 text-[#2D2A26]" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-md"
              aria-label="Image suivante"
              data-testid="carousel-next-btn"
            >
              <ChevronRight className="w-4 h-4 text-[#2D2A26]" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5" data-testid="carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => goToImage(e, index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white w-4' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Voir image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Property Info */}
      <div>
        {/* Name & Subtitle */}
        <h3 className="text-lg font-serif text-[#2D2A26] mb-1 group-hover:text-[#C9A961] transition-colors duration-300">
          {property.name} {property.subtitle && <span className="text-[#9A9189]">— {property.subtitle}</span>}
        </h3>

        {/* Location */}
        <p className="text-xs tracking-[0.1em] uppercase text-[#9A9189] mb-3">
          {property.neighborhood || property.location}
        </p>

        {/* Key Info with Icons */}
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1.5 text-[#6B635A]">
            <Maximize className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span className="text-sm">{property.size}m²</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#6B635A]">
            <Bed className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span className="text-sm">{property.bedrooms} ch.</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#6B635A]">
            <User className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span className="text-sm">{property.guests} pers.</span>
          </div>
        </div>

        {/* Price */}
        <p className="text-sm">
          <span className="text-[#9A9189]">À partir de </span>
          <span className="font-medium text-[#2D2A26]">{property.price}€</span>
          <span className="text-[#9A9189]"> / nuit</span>
        </p>
      </div>
    </Link>
  );
};

// ===========================================
// NEIGHBORHOOD CARD COMPONENT
// ===========================================

const NeighborhoodCard = ({ neighborhood, size = 'default' }) => {
  return (
    <Link 
      to={`/explorer/${neighborhood.slug}`} 
      className="group block relative overflow-hidden rounded-lg"
      data-testid={`neighborhood-card-${neighborhood.slug}`}
    >
      <div className={`relative ${size === 'large' ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        {/* Background Image */}
        <img 
          src={neighborhood.image}
          alt={neighborhood.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/70 mb-1">
            {neighborhood.subtitle}
          </p>
          <h3 className="text-xl lg:text-2xl font-serif text-white mb-2 group-hover:text-[#C9A961] transition-colors duration-300">
            {neighborhood.name}
          </h3>
          <p className="text-sm text-white/80 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {neighborhood.shortDescription}
          </p>
        </div>

        {/* Arrow indicator */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-white/20">
          <ArrowRight className="w-5 h-5 text-white" />
        </div>
      </div>
    </Link>
  );
};

// ===========================================
// BLOG CARD COMPONENT
// ===========================================

const BlogCard = ({ article, size = 'default' }) => {
  return (
    <Link 
      to={`/journal/${article.slug}`}
      className="group block"
      data-testid={`blog-card-${article.slug}`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden rounded-lg mb-4 ${size === 'featured' ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        <img 
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-[#2D2A26] text-xs tracking-[0.1em] uppercase px-3 py-1.5 rounded-full">
            {article.category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="space-y-3">
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-[#9A9189]">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime} de lecture</span>
        </div>
        
        {/* Title */}
        <h3 className={`font-serif text-[#2D2A26] group-hover:text-[#C9A961] transition-colors ${size === 'featured' ? 'text-2xl' : 'text-xl'}`}>
          {article.title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-[#6B635A] text-sm line-clamp-2 leading-relaxed">
          {article.excerpt}
        </p>
        
        {/* Read More */}
        <div className="flex items-center gap-2 text-sm text-[#C9A961] font-medium group-hover:gap-3 transition-all">
          <span>Lire l'article</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};

// ===========================================
// REVIEWS CAROUSEL COMPONENT
// ===========================================

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clientReviews.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clientReviews.length) % clientReviews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clientReviews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative" data-testid="reviews-carousel">
      {/* Main Review Card */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {clientReviews.map((review) => (
            <div 
              key={review.id}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="bg-white rounded-xl p-8 lg:p-10 shadow-sm max-w-3xl mx-auto text-center">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? 'fill-[#C9A961] text-[#C9A961]' : 'text-[#E8E0D5]'}`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg lg:text-xl text-[#2D2A26] leading-relaxed mb-8 font-serif italic">
                  "{review.comment}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-medium text-[#2D2A26] mb-1">{review.name}</p>
                  <Link 
                    to={`/logement/${review.propertyId}`}
                    className="text-sm text-[#C9A961] hover:underline"
                  >
                    {review.property}
                  </Link>
                  <p className="text-xs text-[#9A9189] mt-1">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#C9A961] hover:text-white transition-colors z-10"
        aria-label="Avis précédent"
        data-testid="reviews-prev"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#C9A961] hover:text-white transition-colors z-10"
        aria-label="Avis suivant"
        data-testid="reviews-next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8" data-testid="reviews-dots">
        {clientReviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#C9A961]' : 'bg-[#E8E0D5] hover:bg-[#C9A961]/50'
            }`}
            aria-label={`Aller à l'avis ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// ===========================================
// SCROLL TO TOP COMPONENT
// ===========================================

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// ===========================================
// HEADER COMPONENT - Highstay inspired
// ===========================================

const Header = ({ heroLogoVisible = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('FR');
  const [email, setEmail] = useState('');
  const location = useLocation();
  
  // Track scroll position for logo animation
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      
      // Calculate scroll progress (0 to 1) over the first 300px of scroll
      const progress = Math.min(scrollY / 300, 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const isHomepage = location.pathname === "/";
  
  // Simple binary switch: header is white when scrolled, transparent when not
  const headerBg = scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent";
  const textColor = scrolled && !menuOpen ? "text-[#2D2A26]" : "text-white";
  
  // Logo color changes based on scroll (for the single floating logo)
  const logoColor = menuOpen ? "text-[#2D2A26]" : (scrolled ? "text-[#2D2A26]" : "text-white");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
    alert('Merci pour votre inscription !');
    setEmail('');
  };

  return (
    <>
      {/* Header - instant switch, no animation on homepage */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${isHomepage ? '' : 'transition-all duration-300'} ${headerBg}`}>
        <div className="px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 lg:h-24">
            
            {/* Left - Burger Menu */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-3 group"
              aria-label="Menu"
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span className={`block h-[1.5px] w-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[9px] bg-[#2D2A26]' : textColor === 'text-white' ? 'bg-white' : 'bg-[#2D2A26]'}`}></span>
                <span className={`block h-[1.5px] w-full transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'} ${textColor === 'text-white' && !menuOpen ? 'bg-white' : 'bg-[#2D2A26]'}`}></span>
                <span className={`block h-[1.5px] w-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[9px] bg-[#2D2A26]' : textColor === 'text-white' ? 'bg-white' : 'bg-[#2D2A26]'}`}></span>
              </div>
              <span className={`hidden lg:block text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${menuOpen ? 'text-[#2D2A26]' : textColor}`}>
                Menu
              </span>
            </button>

            {/* Center - Logo placeholder for non-homepage (homepage has floating logo) */}
            {!isHomepage && (
              <Link 
                to="/" 
                className="absolute left-1/2 -translate-x-1/2"
              >
                <span className={`text-2xl lg:text-3xl font-serif tracking-wide ${logoColor}`}>
                  EmiRise
                </span>
              </Link>
            )}

            {/* Right - Contact + Language */}
            <div className="flex items-center gap-4 lg:gap-8">
              <Link 
                to="/contact"
                className={`hidden sm:block text-xs tracking-[0.15em] uppercase transition-colors duration-300 hover:opacity-70 ${menuOpen ? 'text-[#2D2A26]' : textColor}`}
              >
                Nous contacter
              </Link>
              
              {/* Language Selector */}
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setLanguage('FR')}
                  className={`text-xs tracking-wider transition-colors duration-300 ${language === 'FR' ? 'opacity-100' : 'opacity-50 hover:opacity-70'} ${menuOpen ? 'text-[#2D2A26]' : textColor}`}
                >
                  FR
                </button>
                <span className={`text-xs ${menuOpen ? 'text-[#2D2A26]' : textColor} opacity-30`}>/</span>
                <button 
                  onClick={() => setLanguage('EN')}
                  className={`text-xs tracking-wider transition-colors duration-300 ${language === 'EN' ? 'opacity-100' : 'opacity-50 hover:opacity-70'} ${menuOpen ? 'text-[#2D2A26]' : textColor}`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Side Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Side Menu Panel */}
      <div 
        className={`fixed top-0 left-0 h-full w-full sm:w-[420px] bg-[#FAF8F5] z-50 transition-transform duration-500 ease-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="h-full flex flex-col">
          {/* Menu Header */}
          <div className="px-6 lg:px-10 h-20 lg:h-24 flex items-center">
            <button 
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 group"
              aria-label="Fermer le menu"
            >
              <div className="relative w-6 h-5 flex flex-col justify-center">
                <span className="block h-[1.5px] w-full bg-[#2D2A26] rotate-45 absolute"></span>
                <span className="block h-[1.5px] w-full bg-[#2D2A26] -rotate-45 absolute"></span>
              </div>
              <span className="hidden lg:block text-xs tracking-[0.2em] uppercase text-[#2D2A26]">
                Fermer
              </span>
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto px-6 lg:px-10 py-8">
            {/* Main Navigation */}
            <nav className="mb-12">
              <ul className="space-y-1">
                <li>
                  <Link 
                    to="/appartements" 
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 text-2xl lg:text-3xl font-serif text-[#2D2A26] hover:text-[#C9A961] transition-colors duration-300 border-b border-[#E8E0D5]"
                  >
                    Nos Appartements
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/villas" 
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 text-2xl lg:text-3xl font-serif text-[#2D2A26] hover:text-[#C9A961] transition-colors duration-300 border-b border-[#E8E0D5]"
                  >
                    Nos Villas
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 text-2xl lg:text-3xl font-serif text-[#2D2A26] hover:text-[#C9A961] transition-colors duration-300 border-b border-[#E8E0D5]"
                  >
                    Nos Services et Expériences
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/proprietaires" 
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 text-2xl lg:text-3xl font-serif text-[#2D2A26] hover:text-[#C9A961] transition-colors duration-300 border-b border-[#E8E0D5]"
                  >
                    Rejoindre notre portfolio
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Secondary Navigation */}
            <nav className="mb-12">
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/explorer" 
                    onClick={() => setMenuOpen(false)}
                    className="text-sm tracking-[0.1em] uppercase text-[#6B635A] hover:text-[#2D2A26] transition-colors duration-300"
                  >
                    Les incontournables
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/journal" 
                    onClick={() => setMenuOpen(false)}
                    className="text-sm tracking-[0.1em] uppercase text-[#6B635A] hover:text-[#2D2A26] transition-colors duration-300"
                  >
                    Journal
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/a-propos" 
                    onClick={() => setMenuOpen(false)}
                    className="text-sm tracking-[0.1em] uppercase text-[#6B635A] hover:text-[#2D2A26] transition-colors duration-300"
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    onClick={() => setMenuOpen(false)}
                    className="text-sm tracking-[0.1em] uppercase text-[#6B635A] hover:text-[#2D2A26] transition-colors duration-300"
                  >
                    Besoin d'aide
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Newsletter - Fixed at bottom */}
          <div className="px-6 lg:px-10 py-8 border-t border-[#E8E0D5] bg-[#FAF8F5]">
            <p className="text-xs tracking-[0.15em] uppercase text-[#6B635A] mb-4">
              Newsletter
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                required
                className="flex-1 px-4 py-3 text-sm bg-white border border-[#E8E0D5] focus:outline-none focus:border-[#C9A961] transition-colors"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-[#2D2A26] text-white text-xs tracking-[0.1em] uppercase hover:bg-[#C9A961] transition-colors duration-300"
              >
                OK
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

// ===========================================
// FOOTER COMPONENT
// ===========================================

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Newsletter error:', error);
    }
  };

  return (
    <footer className="bg-[#2D2A26] text-white" data-testid="footer">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Col 1: Brand + Social */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-serif tracking-wide text-white">EmiRise</span>
            </Link>
            <p className="mt-6 text-sm text-white/60 leading-relaxed">
              Locations de prestige à Aix-en-Provence et ses environs. 
              Découvrez l'art de vivre provençal à travers notre collection 
              de biens d'exception.
            </p>
            <div className="flex gap-3 mt-8">
              <a 
                href="https://instagram.com/emirise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#C9A961] hover:border-[#C9A961] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com/emirise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#C9A961] hover:border-[#C9A961] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/company/emirise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#C9A961] hover:border-[#C9A961] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-[#C9A961]">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/appartements" className="text-sm text-white/60 hover:text-white transition-colors">
                  Nos Appartements
                </Link>
              </li>
              <li>
                <Link to="/villas" className="text-sm text-white/60 hover:text-white transition-colors">
                  Nos Villas
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-white/60 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/explorer" className="text-sm text-white/60 hover:text-white transition-colors">
                  Explorer Aix
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-sm text-white/60 hover:text-white transition-colors">
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Informations */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-[#C9A961]">Informations</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/a-propos" className="text-sm text-white/60 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/proprietaires" className="text-sm text-white/60 hover:text-white transition-colors">
                  Rejoindre notre portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/60 hover:text-white transition-colors">
                  Besoin d'aide
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-sm text-white/60 hover:text-white transition-colors">
                  CGV
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-[#C9A961]">Newsletter</h4>
            <p className="text-sm text-white/60 mb-4">
              Recevez nos dernières offres et inspirations.
            </p>
            {isSubscribed ? (
              <div className="flex items-center gap-2 text-[#C9A961]">
                <Check className="w-5 h-5" />
                <span className="text-sm">Merci pour votre inscription !</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#C9A961] transition-colors"
                  data-testid="newsletter-email"
                />
                <button
                  type="submit"
                  className="w-full bg-[#C9A961] text-[#2D2A26] py-3 text-sm tracking-[0.1em] uppercase font-medium hover:bg-white transition-colors rounded-lg"
                  data-testid="newsletter-submit"
                >
                  S'inscrire
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © 2026 EmiRise — Tous droits réservés
            </p>
            <div className="flex items-center gap-6">
              <Link to="/mentions-legales" className="text-xs text-white/40 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <span className="text-white/20">|</span>
              <Link to="/confidentialite" className="text-xs text-white/40 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ===========================================
// LAYOUT COMPONENT
// ===========================================

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// ===========================================
// AIRBNB-STYLE SEARCH BAR COMPONENT
// ===========================================

const AirbnbSearchBar = ({ onSearch }) => {
  const [activeField, setActiveField] = useState(null); // 'destination', 'dates', 'guests'
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState({ adults: 2, children: 0 });
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const searchRef = useRef(null);
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setActiveField(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const destinations = [
    { id: 'all', name: 'Toutes les destinations', subtitle: 'Aix-en-Provence et environs' },
    { id: 'centre', name: 'Centre Historique', subtitle: 'Aix-en-Provence' },
    { id: 'cours-mirabeau', name: 'Cours Mirabeau', subtitle: 'Aix-en-Provence' },
    { id: 'tholonet', name: 'Le Tholonet', subtitle: 'Campagne aixoise' },
    { id: 'puyricard', name: 'Puyricard', subtitle: 'Campagne aixoise' },
    { id: 'eguilles', name: 'Éguilles', subtitle: 'Village perché' },
  ];

  // Calendar helpers
  const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 
                      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  const dayNames = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    let startDay = firstDay.getDay() - 1;
    if (startDay < 0) startDay = 6;
    
    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const getNextMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 1);
  
  const isDateDisabled = (date) => {
    if (!date) return true;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isDateSelected = (date) => {
    if (!date) return false;
    if (checkIn && date.toDateString() === checkIn.toDateString()) return 'start';
    if (checkOut && date.toDateString() === checkOut.toDateString()) return 'end';
    if (checkIn && checkOut && date > checkIn && date < checkOut) return 'between';
    return false;
  };

  const handleDateClick = (date) => {
    if (isDateDisabled(date)) return;
    
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(date);
      setCheckOut(null);
    } else if (date > checkIn) {
      setCheckOut(date);
    } else {
      setCheckIn(date);
      setCheckOut(null);
    }
  };

  const formatDate = (date) => {
    if (!date) return null;
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  };

  const formatDateRange = () => {
    if (!checkIn && !checkOut) return 'Quand ?';
    if (checkIn && !checkOut) return `${formatDate(checkIn)} - ...`;
    return `${formatDate(checkIn)} - ${formatDate(checkOut)}`;
  };

  const totalGuests = guests.adults + guests.children;

  const handleSearch = () => {
    onSearch?.({
      destination,
      checkIn,
      checkOut,
      guests: totalGuests
    });
    setActiveField(null);
  };

  const renderCalendarMonth = (monthDate) => {
    const days = getDaysInMonth(monthDate);
    
    return (
      <div className="flex-1 min-w-[280px]">
        <div className="text-center mb-4">
          <span className="text-sm font-semibold text-[#2D2A26]">
            {monthNames[monthDate.getMonth()]} {monthDate.getFullYear()}
          </span>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map((day, i) => (
            <div key={i} className="text-center text-xs text-[#9A9189] font-medium py-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((date, i) => {
            const selected = isDateSelected(date);
            const disabled = isDateDisabled(date);
            
            return (
              <button
                key={i}
                type="button"
                disabled={disabled || !date}
                onClick={() => handleDateClick(date)}
                className={`
                  relative h-10 text-sm rounded-full transition-all duration-150
                  ${!date ? 'invisible' : ''}
                  ${disabled ? 'text-[#D4C8B8] cursor-not-allowed' : 'hover:bg-[#F5F0E8] cursor-pointer'}
                  ${selected === 'start' ? 'bg-[#2D2A26] text-white hover:bg-[#2D2A26] rounded-r-none' : ''}
                  ${selected === 'end' ? 'bg-[#2D2A26] text-white hover:bg-[#2D2A26] rounded-l-none' : ''}
                  ${selected === 'between' ? 'bg-[#F5F0E8] rounded-none' : ''}
                  ${!selected && !disabled && date ? 'text-[#2D2A26]' : ''}
                `}
              >
                {date?.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div ref={searchRef} className="relative z-20 px-4 lg:px-6 -mb-20 lg:-mb-14">
      <div className="max-w-4xl mx-auto">
        {/* Search Bar */}
        <div className={`bg-white rounded-full shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-300 ${activeField ? 'shadow-[0_12px_50px_rgba(0,0,0,0.2)]' : ''}`}>
          <div className="flex items-center">
            
            {/* Destination */}
            <button
              type="button"
              onClick={() => setActiveField(activeField === 'destination' ? null : 'destination')}
              className={`flex-1 py-4 px-6 text-left rounded-full transition-all duration-200 ${activeField === 'destination' ? 'bg-white shadow-lg' : 'hover:bg-[#F5F0E8]'}`}
            >
              <div className="text-[10px] tracking-[0.15em] uppercase text-[#2D2A26] font-semibold mb-0.5">
                Destination
              </div>
              <div className={`text-sm ${destination ? 'text-[#2D2A26] font-medium' : 'text-[#9A9189]'}`}>
                {destinations.find(d => d.id === destination)?.name || 'Rechercher une destination'}
              </div>
            </button>

            <div className="w-px h-8 bg-[#E8E0D5]" />

            {/* Dates */}
            <button
              type="button"
              onClick={() => setActiveField(activeField === 'dates' ? null : 'dates')}
              className={`flex-1 py-4 px-6 text-left rounded-full transition-all duration-200 ${activeField === 'dates' ? 'bg-white shadow-lg' : 'hover:bg-[#F5F0E8]'}`}
            >
              <div className="text-[10px] tracking-[0.15em] uppercase text-[#2D2A26] font-semibold mb-0.5">
                Dates
              </div>
              <div className={`text-sm ${checkIn ? 'text-[#2D2A26] font-medium' : 'text-[#9A9189]'}`}>
                {formatDateRange()}
              </div>
            </button>

            <div className="w-px h-8 bg-[#E8E0D5]" />

            {/* Guests */}
            <button
              type="button"
              onClick={() => setActiveField(activeField === 'guests' ? null : 'guests')}
              className={`flex-1 py-4 px-6 text-left rounded-full transition-all duration-200 ${activeField === 'guests' ? 'bg-white shadow-lg' : 'hover:bg-[#F5F0E8]'}`}
            >
              <div className="text-[10px] tracking-[0.15em] uppercase text-[#2D2A26] font-semibold mb-0.5">
                Voyageurs
              </div>
              <div className={`text-sm ${totalGuests > 0 ? 'text-[#2D2A26] font-medium' : 'text-[#9A9189]'}`}>
                {totalGuests > 0 ? `${totalGuests} voyageur${totalGuests > 1 ? 's' : ''}` : 'Ajouter des voyageurs'}
              </div>
            </button>

            {/* Search Button */}
            <div className="pr-2">
              <button
                type="button"
                onClick={handleSearch}
                className="flex items-center gap-2 bg-[#C9A961] hover:bg-[#B8944D] text-white py-3 px-5 rounded-full transition-all duration-200 font-medium text-sm"
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Rechercher</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dropdowns */}
        {activeField && (
          <div className="absolute left-0 right-0 mt-3 px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-[0_12px_50px_rgba(0,0,0,0.15)] overflow-hidden">
                
                {/* Destination Dropdown */}
                {activeField === 'destination' && (
                  <div className="p-6">
                    <div className="text-xs tracking-[0.1em] uppercase text-[#9A9189] font-medium mb-4">
                      Rechercher par quartier
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {destinations.map((dest) => (
                        <button
                          key={dest.id}
                          type="button"
                          onClick={() => {
                            setDestination(dest.id);
                            setActiveField('dates');
                          }}
                          className={`text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                            destination === dest.id 
                              ? 'border-[#2D2A26] bg-[#FAF8F5]' 
                              : 'border-[#E8E0D5] hover:border-[#C9A961] hover:bg-[#FAF8F5]'
                          }`}
                        >
                          <div className="text-sm font-semibold text-[#2D2A26]">{dest.name}</div>
                          <div className="text-xs text-[#9A9189] mt-0.5">{dest.subtitle}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dates Dropdown - Calendar */}
                {activeField === 'dates' && (
                  <div className="p-6">
                    {/* Tabs */}
                    <div className="flex justify-center mb-6">
                      <div className="inline-flex bg-[#F5F0E8] rounded-full p-1">
                        <button className="px-6 py-2 text-sm font-medium rounded-full bg-white shadow-sm text-[#2D2A26]">
                          Dates
                        </button>
                        <button className="px-6 py-2 text-sm font-medium rounded-full text-[#9A9189] hover:text-[#2D2A26] transition-colors">
                          Flexible
                        </button>
                      </div>
                    </div>

                    {/* Calendar Navigation */}
                    <div className="flex items-center justify-between mb-4">
                      <button
                        type="button"
                        onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
                        className="p-2 hover:bg-[#F5F0E8] rounded-full transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-[#2D2A26]" />
                      </button>
                      <div className="flex-1" />
                      <button
                        type="button"
                        onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
                        className="p-2 hover:bg-[#F5F0E8] rounded-full transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 text-[#2D2A26]" />
                      </button>
                    </div>

                    {/* Two Month Calendar */}
                    <div className="flex gap-8 justify-center">
                      {renderCalendarMonth(currentMonth)}
                      {renderCalendarMonth(getNextMonth(currentMonth))}
                    </div>

                    {/* Flexibility Options */}
                    <div className="flex justify-center gap-2 mt-6 pt-6 border-t border-[#E8E0D5]">
                      {['Dates exactes', '± 1 jour', '± 2 jours', '± 3 jours', '± 7 jours'].map((option, i) => (
                        <button
                          key={option}
                          type="button"
                          className={`px-4 py-2 text-xs rounded-full border transition-all duration-200 ${
                            i === 0 
                              ? 'border-[#2D2A26] bg-white text-[#2D2A26]' 
                              : 'border-[#E8E0D5] text-[#9A9189] hover:border-[#C9A961]'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Guests Dropdown */}
                {activeField === 'guests' && (
                  <div className="p-6">
                    {/* Adults */}
                    <div className="flex items-center justify-between py-4 border-b border-[#E8E0D5]">
                      <div>
                        <div className="text-sm font-semibold text-[#2D2A26]">Adultes</div>
                        <div className="text-xs text-[#9A9189]">13 ans et plus</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setGuests({...guests, adults: Math.max(1, guests.adults - 1)})}
                          disabled={guests.adults <= 1}
                          className="w-8 h-8 rounded-full border border-[#E8E0D5] flex items-center justify-center hover:border-[#2D2A26] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          <Minus className="w-4 h-4 text-[#2D2A26]" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center text-[#2D2A26]">{guests.adults}</span>
                        <button
                          type="button"
                          onClick={() => setGuests({...guests, adults: Math.min(16, guests.adults + 1)})}
                          className="w-8 h-8 rounded-full border border-[#E8E0D5] flex items-center justify-center hover:border-[#2D2A26] transition-colors"
                        >
                          <Plus className="w-4 h-4 text-[#2D2A26]" />
                        </button>
                      </div>
                    </div>

                    {/* Children */}
                    <div className="flex items-center justify-between py-4">
                      <div>
                        <div className="text-sm font-semibold text-[#2D2A26]">Enfants</div>
                        <div className="text-xs text-[#9A9189]">2 à 12 ans</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setGuests({...guests, children: Math.max(0, guests.children - 1)})}
                          disabled={guests.children <= 0}
                          className="w-8 h-8 rounded-full border border-[#E8E0D5] flex items-center justify-center hover:border-[#2D2A26] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          <Minus className="w-4 h-4 text-[#2D2A26]" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center text-[#2D2A26]">{guests.children}</span>
                        <button
                          type="button"
                          onClick={() => setGuests({...guests, children: Math.min(8, guests.children + 1)})}
                          className="w-8 h-8 rounded-full border border-[#E8E0D5] flex items-center justify-center hover:border-[#2D2A26] transition-colors"
                        >
                          <Plus className="w-4 h-4 text-[#2D2A26]" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ===========================================
// PAGE COMPONENTS
// ===========================================

// Homepage
const HomePage = () => {
  const [logoTop, setLogoTop] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(800);
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef(null);
  
  // Constants for logo positioning
  const HEADER_POSITION = 24; // Final position in header (px from top)
  const START_POSITION_VH = 35; // Start position (% of viewport height)
  
  useEffect(() => {
    // Initial setup
    const vh = window.innerHeight;
    setViewportHeight(vh);
    const startPx = (START_POSITION_VH / 100) * vh;
    setLogoTop(startPx);
    
    // Scroll handler with requestAnimationFrame for smooth 60fps updates
    let ticking = false;
    
    const updateLogoPosition = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      const vh = window.innerHeight;
      const startPx = (START_POSITION_VH / 100) * vh;
      
      // Calculate ratio: logo should reach header when hero is scrolled out
      // Hero height ≈ 100vh, so we want logo at header after ~(startPx - HEADER_POSITION) scroll
      const travelDistance = startPx - HEADER_POSITION;
      const scrollDistance = vh * 0.5; // Logo reaches header after scrolling 50vh
      const ratio = travelDistance / scrollDistance;
      
      // Direct calculation: position = startPx - scrollY * ratio, clamped at header
      const newTop = Math.max(HEADER_POSITION, startPx - currentScrollY * ratio);
      setLogoTop(newTop);
      
      ticking = false;
    };
    
    const onScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(updateLogoPosition);
        ticking = true;
      }
    };
    
    const onResize = () => {
      const vh = window.innerHeight;
      setViewportHeight(vh);
      updateLogoPosition();
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    
    // Initial position
    updateLogoPosition();
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const handleSearch = (searchParams) => {
    console.log('Search params:', searchParams);
  };

  // Logo color: white when in hero area, dark when at header
  const isInHeader = logoTop <= HEADER_POSITION + 10;
  const logoColor = isInHeader ? "text-[#2D2A26]" : "text-white";

  return (
    <>
      {/* SINGLE Floating Logo - glides smoothly with scroll */}
      <div 
        className="fixed left-1/2 z-[60] pointer-events-none"
        style={{
          top: `${logoTop}px`,
          transform: 'translateX(-50%)',
          // NO CSS transition - position is calculated every frame
        }}
      >
        <Link to="/" className="pointer-events-auto">
          <span 
            className={`text-2xl lg:text-3xl font-serif tracking-wide ${logoColor}`}
            style={{
              textShadow: isInHeader ? 'none' : '0 2px 15px rgba(0,0,0,0.4)'
            }}
          >
            EmiRise
          </span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920"
            alt="Villa de luxe en Provence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>

        {/* Hero Content - Tagline at ~45% */}
        <div className="relative flex-1 flex flex-col items-center text-center px-6 pt-24 pb-48 lg:pb-56"
          style={{ paddingTop: '45vh' }}
        >
          <p 
            className="text-sm md:text-base lg:text-lg text-white/90 tracking-[0.2em] uppercase font-light"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}
          >
            Location de prestige à Aix-en-Provence
          </p>
        </div>

        {/* Airbnb-Style Search Bar */}
        <AirbnbSearchBar onSearch={handleSearch} />
      </section>

      {/* Avantages Section */}
      <section className="bg-[#FAF8F5] pt-32 lg:pt-28 pb-16 lg:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Avantage 1 */}
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-white shadow-sm flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-[#C9A961]" />
              </div>
              <h3 className="text-sm font-medium text-[#2D2A26] mb-2 tracking-wide">Réservation directe</h3>
              <p className="text-sm text-[#6B635A]">Sans frais de plateforme</p>
            </div>

            {/* Avantage 2 */}
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-white shadow-sm flex items-center justify-center">
                <Headphones className="w-6 h-6 text-[#C9A961]" />
              </div>
              <h3 className="text-sm font-medium text-[#2D2A26] mb-2 tracking-wide">Conciergerie dédiée</h3>
              <p className="text-sm text-[#6B635A]">Service personnalisé 24/7</p>
            </div>

            {/* Avantage 3 */}
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-white shadow-sm flex items-center justify-center">
                <BadgeCheck className="w-6 h-6 text-[#C9A961]" />
              </div>
              <h3 className="text-sm font-medium text-[#2D2A26] mb-2 tracking-wide">Biens sélectionnés</h3>
              <p className="text-sm text-[#6B635A]">Qualité vérifiée et premium</p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Preview Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 lg:mb-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#9A9189] mb-3">Notre sélection</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2D2A26]">Nos Appartements</h2>
            </div>
            <Link 
              to="/appartements" 
              className="hidden md:inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-[#2D2A26] hover:text-[#C9A961] transition-colors mt-6 md:mt-0"
            >
              Voir tout
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {properties.filter(p => p.type === 'appartement').slice(0, 6).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden text-center mt-10">
            <Link 
              to="/appartements" 
              className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-[#2D2A26] hover:text-[#C9A961] transition-colors"
            >
              Découvrir tous nos appartements
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Villas Section */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 lg:mb-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#9A9189] mb-3">Collection prestige</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2D2A26]">Nos Villas</h2>
            </div>
            <Link 
              to="/villas" 
              className="hidden md:inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-[#2D2A26] hover:text-[#C9A961] transition-colors mt-6 md:mt-0"
            >
              Voir tout
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Villas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {properties.filter(p => p.type === 'villa').slice(0, 2).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden text-center mt-10">
            <Link 
              to="/villas" 
              className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-[#2D2A26] hover:text-[#C9A961] transition-colors"
            >
              Découvrir toutes nos villas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Explorer Nos Quartiers Section */}
      <section className="py-20 lg:py-28 bg-white" data-testid="explorer-section">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 lg:mb-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#9A9189] mb-3">Découvrir</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2D2A26]">Explorer nos quartiers</h2>
            </div>
            <Link 
              to="/explorer" 
              className="hidden md:inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-[#2D2A26] hover:text-[#C9A961] transition-colors mt-6 md:mt-0"
            >
              Voir tous les quartiers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Neighborhoods Grid - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {neighborhoods.slice(0, 4).map((neighborhood) => (
              <NeighborhoodCard key={neighborhood.id} neighborhood={neighborhood} />
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden text-center mt-10">
            <Link 
              to="/explorer" 
              className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-[#2D2A26] hover:text-[#C9A961] transition-colors"
            >
              Explorer tous les quartiers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Service Exceptionnel */}
      <section className="relative py-24 lg:py-32" data-testid="service-section">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920"
            alt="Intérieur luxueux"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Title */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A961] mb-4">Notre engagement</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 max-w-3xl mx-auto leading-tight">
              Un service exceptionnel et une équipe dédiée
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Chaque séjour est unique. Notre équipe s'engage à rendre le vôtre inoubliable.
            </p>
          </div>

          {/* 4 Service Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Block 1 - Accueil personnalisé */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 lg:p-8 border border-white/10 hover:bg-white/15 transition-colors group">
              <div className="w-14 h-14 rounded-full bg-[#C9A961]/20 flex items-center justify-center mb-6 group-hover:bg-[#C9A961]/30 transition-colors">
                <Key className="w-6 h-6 text-[#C9A961]" />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">Accueil personnalisé</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Remise des clés en personne, visite guidée du logement et guide complet du séjour avec nos meilleures adresses.
              </p>
            </div>

            {/* Block 2 - Conciergerie sur mesure */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 lg:p-8 border border-white/10 hover:bg-white/15 transition-colors group">
              <div className="w-14 h-14 rounded-full bg-[#C9A961]/20 flex items-center justify-center mb-6 group-hover:bg-[#C9A961]/30 transition-colors">
                <Sparkles className="w-6 h-6 text-[#C9A961]" />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">Conciergerie sur mesure</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Réservations de restaurants, organisation d'activités, transferts aéroport et services personnalisés.
              </p>
            </div>

            {/* Block 3 - Qualité garantie */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 lg:p-8 border border-white/10 hover:bg-white/15 transition-colors group">
              <div className="w-14 h-14 rounded-full bg-[#C9A961]/20 flex items-center justify-center mb-6 group-hover:bg-[#C9A961]/30 transition-colors">
                <Shield className="w-6 h-6 text-[#C9A961]" />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">Qualité garantie</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Chaque bien est minutieusement inspecté et préparé avec soin avant votre arrivée. Rien n'est laissé au hasard.
              </p>
            </div>

            {/* Block 4 - Support 24/7 */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 lg:p-8 border border-white/10 hover:bg-white/15 transition-colors group">
              <div className="w-14 h-14 rounded-full bg-[#C9A961]/20 flex items-center justify-center mb-6 group-hover:bg-[#C9A961]/30 transition-colors">
                <Clock className="w-6 h-6 text-[#C9A961]" />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">Support 24/7</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Notre équipe reste disponible à tout moment pour répondre à vos questions et assurer votre tranquillité.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 lg:mt-16">
            <Link 
              to="/services"
              className="inline-flex items-center gap-2 bg-white text-[#2D2A26] px-8 py-4 text-sm tracking-[0.1em] uppercase font-medium hover:bg-[#C9A961] hover:text-white transition-colors"
            >
              Découvrir nos services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Journal / Blog Section */}
      <section className="py-20 lg:py-28 bg-white" data-testid="journal-section">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 lg:mb-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#9A9189] mb-3">Inspirations</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2D2A26]">Notre journal</h2>
            </div>
            <Link 
              to="/journal" 
              className="hidden md:inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-[#2D2A26] hover:text-[#C9A961] transition-colors mt-6 md:mt-0"
            >
              Lire notre journal
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Articles Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {blogArticles.slice(0, 3).map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden text-center mt-10">
            <Link 
              to="/journal" 
              className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-[#2D2A26] hover:text-[#C9A961] transition-colors"
            >
              Lire notre journal
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]" data-testid="reviews-section">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-[#9A9189] mb-3">Témoignages</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2D2A26] mb-4">
              Ce que disent nos voyageurs
            </h2>
            <p className="text-[#6B635A] max-w-xl mx-auto">
              Découvrez les expériences vécues par ceux qui nous ont fait confiance.
            </p>
          </div>

          {/* Reviews Carousel */}
          <ReviewsCarousel />

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mt-12 pt-12 border-t border-[#E8E0D5]">
            <div className="text-center">
              <p className="text-3xl font-serif text-[#C9A961]">4.9/5</p>
              <p className="text-sm text-[#6B635A]">Note moyenne</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-serif text-[#C9A961]">500+</p>
              <p className="text-sm text-[#6B635A]">Voyageurs satisfaits</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-serif text-[#C9A961]">98%</p>
              <p className="text-sm text-[#6B635A]">Recommandent EmiRise</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1920"
            alt="Provence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative text-center px-6">
          <p className="text-white/80 text-sm tracking-luxury uppercase mb-4">Propriétaires</p>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Rejoignez notre portfolio</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Confiez-nous la gestion de votre bien et bénéficiez de notre expertise en location de prestige.
          </p>
          <Link to="/proprietaires" className="btn-primary bg-white text-text-primary border-white hover:bg-transparent hover:text-white">
            En savoir plus
          </Link>
        </div>
      </section>
    </>
  );
};

// Apartments List Page
const AppartementsPage = () => {
  const apartments = properties.filter(p => p.type === "appartement");
  return (
    <Layout>
      <div className="pt-24 lg:pt-32" data-testid="appartements-page">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9A9189] mb-3">Nos biens</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2D2A26] mb-4" data-testid="appartements-title">Appartements</h1>
          <p className="text-[#6B635A] max-w-2xl mb-12 lg:mb-16">
            Découvrez notre collection d'appartements d'exception au cœur d'Aix-en-Provence. 
            Chaque bien est sélectionné pour son caractère unique et ses prestations haut de gamme.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" data-testid="appartements-grid">
            {apartments.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Villas List Page
const VillasPage = () => {
  const villas = properties.filter(p => p.type === "villa");
  return (
    <Layout>
      <div className="pt-24 lg:pt-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9A9189] mb-3">Collection prestige</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2D2A26] mb-4">Villas</h1>
          <p className="text-[#6B635A] max-w-2xl mb-12 lg:mb-16">
            Des villas d'exception avec piscine et jardins privés en Provence. 
            Le luxe et la tranquillité au cœur de la nature provençale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {villas.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Property Detail Page (Skeleton)
const PropertyPage = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [guestsDropdownOpen, setGuestsDropdownOpen] = useState(false);

  // Calculate nights and total price
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  const nights = calculateNights();
  const subtotal = nights * (property?.price || 0);
  const cleaningFee = property?.cleaningFee || 0;
  const total = subtotal + cleaningFee;

  // Get similar properties
  const similarProperties = properties
    .filter(p => p.id !== id && p.type === property?.type)
    .slice(0, 3);

  // Open lightbox
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Navigate lightbox
  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  // Get amenity icon
  const getAmenityIcon = (amenity) => {
    const lower = amenity.toLowerCase();
    if (lower.includes('wifi') || lower.includes('internet')) return <Wifi className="w-5 h-5" />;
    if (lower.includes('parking') || lower.includes('voiture')) return <Car className="w-5 h-5" />;
    if (lower.includes('piscine') || lower.includes('pool')) return <Waves className="w-5 h-5" />;
    if (lower.includes('terrasse') || lower.includes('jardin') || lower.includes('balcon')) return <Sun className="w-5 h-5" />;
    if (lower.includes('cuisine') || lower.includes('café') || lower.includes('vaisselle')) return <UtensilsCrossed className="w-5 h-5" />;
    if (lower.includes('climatisation') || lower.includes('clim')) return <Wind className="w-5 h-5" />;
    if (lower.includes('tv') || lower.includes('télé')) return <Tv className="w-5 h-5" />;
    if (lower.includes('salle de bain') || lower.includes('serviette') || lower.includes('draps')) return <Bath className="w-5 h-5" />;
    if (lower.includes('lit') || lower.includes('chambre')) return <Bed className="w-5 h-5" />;
    return <Coffee className="w-5 h-5" />;
  };

  if (!property) {
    return (
      <Layout>
        <div className="pt-24 lg:pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif text-[#2D2A26] mb-4">Logement non trouvé</h1>
            <Link to="/appartements" className="text-[#C9A961] hover:underline">
              Retour aux appartements
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-20 lg:pt-24" data-testid="property-detail-page">
        
        {/* Photo Gallery */}
        <section className="relative">
          <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-6">
            {/* Desktop Gallery Grid */}
            <div className="hidden lg:grid grid-cols-4 grid-rows-2 gap-2 h-[500px] rounded-xl overflow-hidden">
              {/* Main Image */}
              <div 
                className="col-span-2 row-span-2 relative cursor-pointer group"
                onClick={() => openLightbox(0)}
              >
                <img 
                  src={property.images[0]} 
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              
              {/* Secondary Images */}
              {property.images.slice(1, 5).map((img, index) => (
                <div 
                  key={index}
                  className="relative cursor-pointer group overflow-hidden"
                  onClick={() => openLightbox(index + 1)}
                >
                  <img 
                    src={img} 
                    alt={`${property.name} - ${index + 2}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              ))}
              
              {/* Show All Photos Button */}
              <button
                onClick={() => openLightbox(0)}
                className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium text-[#2D2A26] hover:bg-white transition-colors shadow-lg"
                data-testid="show-all-photos-btn"
              >
                <Grid3X3 className="w-4 h-4" />
                Voir les {property.images.length} photos
              </button>
            </div>

            {/* Mobile Gallery */}
            <div className="lg:hidden relative aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src={property.images[0]} 
                alt={property.name}
                className="w-full h-full object-cover"
                onClick={() => openLightbox(0)}
              />
              <button
                onClick={() => openLightbox(0)}
                className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2 text-xs font-medium"
              >
                <Grid3X3 className="w-3 h-3" />
                {property.images.length} photos
              </button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Left Column - Property Details */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Header Info */}
              <div className="border-b border-[#E8E0D5] pb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#9A9189] mb-2">
                      {property.neighborhood} • {property.location}
                    </p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2D2A26]" data-testid="property-title">
                      {property.name} <span className="text-[#9A9189]">— {property.subtitle}</span>
                    </h1>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-3 rounded-full border border-[#E8E0D5] hover:border-[#2D2A26] transition-colors">
                      <Share2 className="w-5 h-5 text-[#6B635A]" />
                    </button>
                    <button className="p-3 rounded-full border border-[#E8E0D5] hover:border-[#2D2A26] transition-colors">
                      <Heart className="w-5 h-5 text-[#6B635A]" />
                    </button>
                  </div>
                </div>
                
                {/* Key Specs */}
                <div className="flex flex-wrap gap-6 mt-6">
                  <div className="flex items-center gap-2 text-[#6B635A]">
                    <Maximize className="w-5 h-5" />
                    <span>{property.size} m²</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#6B635A]">
                    <Bed className="w-5 h-5" />
                    <span>{property.bedrooms} chambre{property.bedrooms > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#6B635A]">
                    <Bath className="w-5 h-5" />
                    <span>{property.bathrooms} salle{property.bathrooms > 1 ? 's' : ''} de bain</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#6B635A]">
                    <Users className="w-5 h-5" />
                    <span>{property.guests} voyageur{property.guests > 1 ? 's' : ''} max</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-3 mt-6">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-[#C9A961] text-[#C9A961]" />
                    <span className="font-medium text-[#2D2A26]">{property.rating}</span>
                  </div>
                  <span className="text-[#9A9189]">•</span>
                  <span className="text-[#6B635A]">{property.reviews} avis</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-serif text-[#2D2A26] mb-6">À propos de ce logement</h2>
                <div className="prose prose-lg max-w-none">
                  {property.longDescription?.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-[#6B635A] leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-serif text-[#2D2A26] mb-6">Équipements</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities?.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-[#FAF8F5]">
                      <div className="text-[#C9A961]">
                        {getAmenityIcon(amenity)}
                      </div>
                      <span className="text-[#2D2A26] text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Map */}
              <div>
                <h2 className="text-2xl font-serif text-[#2D2A26] mb-6">Localisation</h2>
                <div className="bg-[#FAF8F5] rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-[#C9A961] mt-1" />
                    <div>
                      <p className="text-[#2D2A26] font-medium">{property.neighborhood}</p>
                      <p className="text-[#6B635A] text-sm">{property.address || property.location}</p>
                    </div>
                  </div>
                  {/* Map Placeholder */}
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-[#E8E0D5]">
                    <iframe
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(property.address || property.location)}&zoom=14`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    />
                  </div>
                </div>
              </div>

              {/* Availability Calendar Placeholder */}
              <div>
                <h2 className="text-2xl font-serif text-[#2D2A26] mb-6">Disponibilités</h2>
                <div className="bg-[#FAF8F5] rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-[#C9A961]"></div>
                      <span className="text-sm text-[#6B635A]">Disponible</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-[#E8E0D5]"></div>
                      <span className="text-sm text-[#6B635A]">Indisponible</span>
                    </div>
                  </div>
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(day => (
                      <div key={day} className="text-xs font-medium text-[#9A9189] py-2">{day}</div>
                    ))}
                    {Array.from({ length: 35 }, (_, i) => {
                      const isAvailable = Math.random() > 0.3;
                      const day = (i % 31) + 1;
                      return (
                        <div 
                          key={i} 
                          className={`py-3 rounded-lg text-sm ${
                            isAvailable 
                              ? 'bg-white text-[#2D2A26] hover:bg-[#C9A961] hover:text-white cursor-pointer transition-colors' 
                              : 'bg-[#E8E0D5] text-[#9A9189] cursor-not-allowed'
                          }`}
                        >
                          {day <= 31 ? day : ''}
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-xs text-[#9A9189] mt-4 text-center">
                    Calendrier indicatif. Contactez-nous pour vérifier les disponibilités exactes.
                  </p>
                </div>
              </div>

              {/* House Rules */}
              <div>
                <h2 className="text-2xl font-serif text-[#2D2A26] mb-6">Règles de la maison</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.houseRules?.map((rule, index) => (
                    <div key={index} className="flex items-center gap-3 text-[#6B635A]">
                      <div className="w-2 h-2 rounded-full bg-[#C9A961]"></div>
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-serif text-[#2D2A26]">Avis des voyageurs</h2>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-[#C9A961] text-[#C9A961]" />
                    <span className="font-medium text-[#2D2A26]">{property.rating}</span>
                    <span className="text-[#9A9189]">({property.reviews} avis)</span>
                  </div>
                </div>
                <div className="space-y-6">
                  {property.reviewsList?.map((review) => (
                    <div key={review.id} className="border-b border-[#E8E0D5] pb-6 last:border-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#C9A961] flex items-center justify-center text-white font-medium">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-[#2D2A26]">{review.name}</p>
                            <p className="text-sm text-[#9A9189]">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < review.rating ? 'fill-[#C9A961] text-[#C9A961]' : 'text-[#E8E0D5]'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-[#6B635A]">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white border border-[#E8E0D5] rounded-xl p-6 shadow-lg" data-testid="booking-sidebar">
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-serif text-[#2D2A26]">{property.price}€</span>
                    <span className="text-[#9A9189]">/ nuit</span>
                  </div>
                </div>

                {/* Date Inputs */}
                <div className="grid grid-cols-2 gap-0 mb-4">
                  <div className="border border-[#E8E0D5] rounded-tl-lg p-3">
                    <label className="block text-[10px] tracking-[0.1em] uppercase text-[#9A9189] mb-1">Arrivée</label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-transparent text-[#2D2A26] text-sm focus:outline-none"
                      data-testid="checkin-input"
                    />
                  </div>
                  <div className="border border-l-0 border-[#E8E0D5] rounded-tr-lg p-3">
                    <label className="block text-[10px] tracking-[0.1em] uppercase text-[#9A9189] mb-1">Départ</label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn}
                      className="w-full bg-transparent text-[#2D2A26] text-sm focus:outline-none"
                      data-testid="checkout-input"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="relative mb-6">
                  <div 
                    className="border border-[#E8E0D5] rounded-b-lg p-3 cursor-pointer"
                    onClick={() => setGuestsDropdownOpen(!guestsDropdownOpen)}
                  >
                    <label className="block text-[10px] tracking-[0.1em] uppercase text-[#9A9189] mb-1">Voyageurs</label>
                    <div className="flex items-center justify-between">
                      <span className="text-[#2D2A26] text-sm">{guests} voyageur{guests > 1 ? 's' : ''}</span>
                      <ChevronDown className={`w-4 h-4 text-[#9A9189] transition-transform ${guestsDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                  
                  {guestsDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white rounded-lg shadow-xl border border-[#E8E0D5] z-30">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#2D2A26]">Voyageurs</span>
                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            onClick={() => setGuests(Math.max(1, guests - 1))}
                            className="w-8 h-8 rounded-full border border-[#E8E0D5] flex items-center justify-center hover:border-[#2D2A26] transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-sm font-medium w-6 text-center">{guests}</span>
                          <button
                            type="button"
                            onClick={() => setGuests(Math.min(property.guests, guests + 1))}
                            className="w-8 h-8 rounded-full border border-[#E8E0D5] flex items-center justify-center hover:border-[#2D2A26] transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-[#9A9189] mt-2">{property.guests} voyageurs maximum</p>
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                {nights > 0 && (
                  <div className="border-t border-[#E8E0D5] pt-4 mb-6 space-y-3">
                    <div className="flex justify-between text-[#6B635A]">
                      <span>{property.price}€ x {nights} nuit{nights > 1 ? 's' : ''}</span>
                      <span>{subtotal}€</span>
                    </div>
                    <div className="flex justify-between text-[#6B635A]">
                      <span>Frais de ménage</span>
                      <span>{cleaningFee}€</span>
                    </div>
                    <div className="flex justify-between font-medium text-[#2D2A26] pt-3 border-t border-[#E8E0D5]">
                      <span>Total</span>
                      <span>{total}€</span>
                    </div>
                  </div>
                )}

                {/* Book Button */}
                <button 
                  className="w-full bg-[#2D2A26] text-white py-4 px-6 rounded-lg text-sm tracking-[0.1em] uppercase font-medium hover:bg-[#C9A961] transition-colors duration-300"
                  data-testid="booking-btn"
                >
                  {nights > 0 ? 'Réserver' : 'Vérifier la disponibilité'}
                </button>

                <p className="text-xs text-[#9A9189] text-center mt-4">
                  Aucun montant ne sera débité pour le moment
                </p>

                {/* Contact */}
                <div className="border-t border-[#E8E0D5] pt-6 mt-6">
                  <p className="text-sm text-[#6B635A] mb-3">Une question sur ce logement ?</p>
                  <Link 
                    to="/contact" 
                    className="flex items-center justify-center gap-2 w-full border border-[#2D2A26] text-[#2D2A26] py-3 px-6 rounded-lg text-sm tracking-[0.1em] uppercase font-medium hover:bg-[#2D2A26] hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <section className="bg-[#FAF8F5] py-16 lg:py-24">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
              <h2 className="text-3xl font-serif text-[#2D2A26] mb-10">Vous aimerez aussi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {similarProperties.map((prop) => (
                  <PropertyCard key={prop.id} property={prop} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center" data-testid="lightbox">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 text-white hover:text-[#C9A961] transition-colors z-10"
              aria-label="Fermer"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 text-white text-sm">
              {lightboxIndex + 1} / {property.images.length}
            </div>

            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 p-3 text-white hover:text-[#C9A961] transition-colors z-10"
              aria-label="Image précédente"
              data-testid="lightbox-prev-btn"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 p-3 text-white hover:text-[#C9A961] transition-colors z-10"
              aria-label="Image suivante"
              data-testid="lightbox-next-btn"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <img
              src={property.images[lightboxIndex]}
              alt={`${property.name} - ${lightboxIndex + 1}`}
              className="max-h-[85vh] max-w-[90vw] object-contain"
            />

            {/* Thumbnails */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {property.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxIndex(index)}
                  className={`w-16 h-12 rounded overflow-hidden transition-opacity ${
                    index === lightboxIndex ? 'ring-2 ring-[#C9A961]' : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

// Services Page
const ServicesPage = () => {
  return (
    <Layout>
      <div className="pt-24 lg:pt-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
          <p className="text-sm tracking-luxury uppercase text-text-muted mb-4">Expériences</p>
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Services & Expériences</h1>
          <p className="text-text-secondary max-w-2xl">
            Conciergerie, transferts, expériences sur-mesure... Page à compléter.
          </p>
        </div>
      </div>
    </Layout>
  );
};

// Explorer Page - Listing all neighborhoods
const ExplorerPage = () => {
  return (
    <Layout>
      <div className="pt-24 lg:pt-32" data-testid="explorer-page">
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600"
            alt="Aix-en-Provence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
            <div className="max-w-[1400px] mx-auto">
              <p className="text-xs tracking-[0.2em] uppercase text-white/70 mb-3">Découvrir</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
                Explorer nos quartiers
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">
                D'Aix-en-Provence aux villages du Pays d'Aix, découvrez les trésors de la Provence.
              </p>
            </div>
          </div>
        </div>

        {/* Neighborhoods Grid */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
          {/* Featured - First 2 neighborhoods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {neighborhoods.slice(0, 2).map((neighborhood) => (
              <NeighborhoodCard key={neighborhood.id} neighborhood={neighborhood} size="large" />
            ))}
          </div>

          {/* Other neighborhoods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.slice(2).map((neighborhood) => (
              <NeighborhoodCard key={neighborhood.id} neighborhood={neighborhood} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-[#FAF8F5] py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-[#2D2A26] mb-4">
              Vous ne savez pas où séjourner ?
            </h2>
            <p className="text-[#6B635A] mb-8 max-w-xl mx-auto">
              Notre équipe est à votre disposition pour vous conseiller le quartier idéal selon vos envies.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#2D2A26] text-white px-8 py-4 text-sm tracking-[0.1em] uppercase hover:bg-[#C9A961] transition-colors"
            >
              Nous contacter
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

// Neighborhood Detail Page - Article
const NeighborhoodPage = () => {
  const { slug } = useParams();
  const neighborhood = neighborhoods.find(n => n.slug === slug);
  
  // Get properties in this neighborhood
  const neighborhoodProperties = properties.filter(p => {
    const pNeighborhood = p.neighborhood?.toLowerCase() || '';
    const nName = neighborhood?.name?.toLowerCase() || '';
    const nSubtitle = neighborhood?.subtitle?.toLowerCase() || '';
    return pNeighborhood.includes(nName) || 
           pNeighborhood.includes(nSubtitle) ||
           nName.includes(pNeighborhood) ||
           nSubtitle.includes(pNeighborhood);
  });

  if (!neighborhood) {
    return (
      <Layout>
        <div className="pt-24 lg:pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif text-[#2D2A26] mb-4">Quartier non trouvé</h1>
            <Link to="/explorer" className="text-[#C9A961] hover:underline">
              Retour aux quartiers
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-20 lg:pt-24" data-testid="neighborhood-detail-page">
        
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <img 
            src={neighborhood.heroImage || neighborhood.image}
            alt={neighborhood.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
            <div className="max-w-[1400px] mx-auto">
              <Link 
                to="/explorer"
                className="inline-flex items-center gap-2 text-white/70 text-sm mb-4 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Tous les quartiers
              </Link>
              <p className="text-xs tracking-[0.2em] uppercase text-[#C9A961] mb-3">
                {neighborhood.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
                Découvrir {neighborhood.name}
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Article Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div>
                <p className="text-lg lg:text-xl text-[#2D2A26] leading-relaxed font-serif">
                  {neighborhood.content.intro}
                </p>
              </div>

              {/* History */}
              <div>
                <h2 className="text-2xl font-serif text-[#2D2A26] mb-4">Un peu d'histoire</h2>
                <p className="text-[#6B635A] leading-relaxed">
                  {neighborhood.content.history}
                </p>
              </div>

              {/* Atmosphere */}
              <div>
                <h2 className="text-2xl font-serif text-[#2D2A26] mb-4">L'ambiance</h2>
                <p className="text-[#6B635A] leading-relaxed">
                  {neighborhood.content.atmosphere}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-serif text-[#2D2A26] mb-6">À ne pas manquer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {neighborhood.content.highlights.map((highlight, index) => (
                    <div key={index} className="bg-[#FAF8F5] rounded-lg p-5">
                      <h3 className="font-medium text-[#2D2A26] mb-1">{highlight.name}</h3>
                      <p className="text-sm text-[#6B635A]">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Restaurants */}
              <div>
                <h2 className="text-2xl font-serif text-[#2D2A26] mb-6">Où manger</h2>
                <div className="space-y-4">
                  {neighborhood.content.restaurants.map((restaurant, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 border border-[#E8E0D5] rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-[#C9A961]/10 flex items-center justify-center flex-shrink-0">
                        <UtensilsCrossed className="w-5 h-5 text-[#C9A961]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#2D2A26]">{restaurant.name}</h3>
                        <p className="text-xs tracking-[0.1em] uppercase text-[#C9A961] mb-1">{restaurant.type}</p>
                        <p className="text-sm text-[#6B635A]">{restaurant.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div>
                <h2 className="text-2xl font-serif text-[#2D2A26] mb-6">Activités recommandées</h2>
                <ul className="space-y-3">
                  {neighborhood.content.activities.map((activity, index) => (
                    <li key={index} className="flex items-center gap-3 text-[#6B635A]">
                      <div className="w-2 h-2 rounded-full bg-[#C9A961]"></div>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar - Properties in this neighborhood */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-[#FAF8F5] rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-serif text-[#2D2A26] mb-4">
                    Nos logements à {neighborhood.name}
                  </h3>
                  
                  {neighborhoodProperties.length > 0 ? (
                    <div className="space-y-4">
                      {neighborhoodProperties.slice(0, 3).map((property) => (
                        <Link 
                          key={property.id}
                          to={`/logement/${property.id}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            <img 
                              src={property.images[0]}
                              alt={property.name}
                              className="w-20 h-16 object-cover rounded"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-[#2D2A26] group-hover:text-[#C9A961] transition-colors truncate">
                                {property.name}
                              </h4>
                              <p className="text-xs text-[#9A9189]">{property.bedrooms} ch. • {property.guests} pers.</p>
                              <p className="text-sm text-[#2D2A26] font-medium">{property.price}€/nuit</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-[#6B635A]">
                      Aucun logement disponible pour le moment dans ce quartier. Contactez-nous pour plus d'informations.
                    </p>
                  )}
                </div>

                {/* CTA */}
                <Link 
                  to={neighborhoodProperties.length > 0 ? "/appartements" : "/contact"}
                  className="w-full flex items-center justify-center gap-2 bg-[#2D2A26] text-white py-4 px-6 rounded-lg text-sm tracking-[0.1em] uppercase font-medium hover:bg-[#C9A961] transition-colors"
                >
                  {neighborhoodProperties.length > 0 ? (
                    <>Voir nos logements</>
                  ) : (
                    <>Nous contacter</>
                  )}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other Neighborhoods */}
        <section className="bg-[#FAF8F5] py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <h2 className="text-2xl md:text-3xl font-serif text-[#2D2A26] mb-10">
              Découvrir d'autres quartiers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighborhoods
                .filter(n => n.slug !== slug)
                .slice(0, 3)
                .map((n) => (
                  <NeighborhoodCard key={n.id} neighborhood={n} />
                ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

// Journal Page - Blog Listing
const JournalPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Filter articles by category
  const filteredArticles = activeCategory === 'all' 
    ? blogArticles 
    : blogArticles.filter(article => 
        article.category.toLowerCase().replace(/\s+/g, '-').replace('é', 'e') === activeCategory
      );

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <Layout>
      <div className="pt-24 lg:pt-32" data-testid="journal-page">
        {/* Hero Section */}
        <div className="relative h-[40vh] min-h-[350px]">
          <img 
            src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1600"
            alt="Journal EmiRise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
            <div className="max-w-[1400px] mx-auto">
              <p className="text-xs tracking-[0.2em] uppercase text-[#C9A961] mb-3">Inspirations</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
                Notre journal
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">
                Guides, bonnes adresses et inspirations pour découvrir la Provence autrement.
              </p>
            </div>
          </div>
        </div>

        {/* Filters & Content */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12 border-b border-[#E8E0D5] pb-6">
            {blogCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm tracking-[0.05em] rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-[#2D2A26] text-white'
                    : 'bg-[#FAF8F5] text-[#6B635A] hover:bg-[#E8E0D5]'
                }`}
                data-testid={`filter-${category.id}`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          {paginatedArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {paginatedArticles.map((article, index) => (
                  <BlogCard 
                    key={article.id} 
                    article={article} 
                    size={index === 0 && currentPage === 1 ? 'featured' : 'default'}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-[#E8E0D5] disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#2D2A26] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === index + 1
                          ? 'bg-[#2D2A26] text-white'
                          : 'border border-[#E8E0D5] hover:border-[#2D2A26]'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-[#E8E0D5] disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#2D2A26] transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="w-12 h-12 text-[#9A9189] mx-auto mb-4" />
              <p className="text-[#6B635A]">Aucun article dans cette catégorie pour le moment.</p>
            </div>
          )}
        </div>

        {/* Newsletter CTA */}
        <section className="bg-[#FAF8F5] py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-[#9A9189] mb-3">Newsletter</p>
            <h2 className="text-2xl md:text-3xl font-serif text-[#2D2A26] mb-4">
              Recevez nos derniers articles
            </h2>
            <p className="text-[#6B635A] mb-8 max-w-xl mx-auto">
              Inspirations, bonnes adresses et actualités EmiRise directement dans votre boîte mail.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="flex-1 px-4 py-3 border border-[#E8E0D5] rounded-lg focus:outline-none focus:border-[#C9A961]"
              />
              <button 
                type="submit"
                className="bg-[#2D2A26] text-white px-6 py-3 text-sm tracking-[0.1em] uppercase hover:bg-[#C9A961] transition-colors rounded-lg"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

// Article Detail Page
const ArticlePage = () => {
  const { slug } = useParams();
  const article = blogArticles.find(a => a.slug === slug);
  
  // Get related articles
  const relatedArticles = article?.relatedArticles
    ? blogArticles.filter(a => article.relatedArticles.includes(a.slug))
    : blogArticles.filter(a => a.category === article?.category && a.slug !== slug).slice(0, 2);

  if (!article) {
    return (
      <Layout>
        <div className="pt-24 lg:pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif text-[#2D2A26] mb-4">Article non trouvé</h1>
            <Link to="/journal" className="text-[#C9A961] hover:underline">
              Retour au journal
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Render content block
  const renderContent = (block, index) => {
    switch (block.type) {
      case 'paragraph':
        return <p key={index} className="text-[#6B635A] leading-relaxed mb-6">{block.text}</p>;
      case 'heading':
        return <h2 key={index} className="text-2xl font-serif text-[#2D2A26] mt-10 mb-4">{block.text}</h2>;
      case 'image':
        return (
          <figure key={index} className="my-8">
            <img src={block.url} alt={block.caption} className="w-full rounded-lg" />
            {block.caption && (
              <figcaption className="text-sm text-[#9A9189] mt-2 text-center italic">{block.caption}</figcaption>
            )}
          </figure>
        );
      case 'quote':
        return (
          <blockquote key={index} className="my-8 border-l-4 border-[#C9A961] pl-6 py-2">
            <p className="text-xl font-serif text-[#2D2A26] italic mb-2">"{block.text}"</p>
            {block.author && <cite className="text-sm text-[#9A9189]">— {block.author}</cite>}
          </blockquote>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="pt-20 lg:pt-24" data-testid="article-page">
        
        {/* Hero Image */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </section>

        {/* Article Content */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 -mt-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Main Content */}
            <article className="lg:col-span-2 bg-white rounded-xl p-8 lg:p-12 shadow-lg">
              {/* Back link */}
              <Link 
                to="/journal"
                className="inline-flex items-center gap-2 text-[#9A9189] text-sm mb-6 hover:text-[#C9A961] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Retour au journal
              </Link>

              {/* Category Badge */}
              <span className="inline-block bg-[#FAF8F5] text-[#C9A961] text-xs tracking-[0.1em] uppercase px-3 py-1.5 rounded-full mb-4">
                {article.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2D2A26] mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-[#9A9189] mb-8 pb-8 border-b border-[#E8E0D5]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                {article.content.map((block, index) => renderContent(block, index))}
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-[#E8E0D5]">
                <p className="text-sm text-[#9A9189] mb-4">Partager cet article</p>
                <div className="flex gap-3">
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center hover:bg-[#C9A961] hover:text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center hover:bg-[#C9A961] hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center hover:bg-[#C9A961] hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Booking CTA */}
              <div className="bg-[#2D2A26] rounded-xl p-6 text-center">
                <p className="text-[#C9A961] text-xs tracking-[0.2em] uppercase mb-2">Envie de découvrir Aix ?</p>
                <h3 className="text-xl font-serif text-white mb-4">Réservez votre séjour</h3>
                <p className="text-white/70 text-sm mb-6">
                  Appartements et villas d'exception au cœur de la Provence.
                </p>
                <Link 
                  to="/appartements"
                  className="block w-full bg-white text-[#2D2A26] py-3 px-6 text-sm tracking-[0.1em] uppercase font-medium hover:bg-[#C9A961] hover:text-white transition-colors rounded-lg"
                >
                  Voir nos logements
                </Link>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="bg-[#FAF8F5] rounded-xl p-6">
                  <h3 className="text-lg font-serif text-[#2D2A26] mb-6">Articles similaires</h3>
                  <div className="space-y-4">
                    {relatedArticles.slice(0, 3).map((related) => (
                      <Link 
                        key={related.id}
                        to={`/journal/${related.slug}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          <img 
                            src={related.image}
                            alt={related.title}
                            className="w-20 h-16 object-cover rounded"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-[#C9A961] mb-1">{related.category}</p>
                            <h4 className="text-sm font-medium text-[#2D2A26] group-hover:text-[#C9A961] transition-colors line-clamp-2">
                              {related.title}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Newsletter Sticky */}
              <div className="bg-white border border-[#E8E0D5] rounded-xl p-6 sticky top-28">
                <h3 className="text-lg font-serif text-[#2D2A26] mb-3">Newsletter</h3>
                <p className="text-sm text-[#6B635A] mb-4">
                  Recevez nos derniers articles et inspirations.
                </p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Votre email" 
                    className="w-full px-4 py-2.5 text-sm border border-[#E8E0D5] rounded-lg focus:outline-none focus:border-[#C9A961]"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-[#2D2A26] text-white py-2.5 text-sm tracking-[0.1em] uppercase hover:bg-[#C9A961] transition-colors rounded-lg"
                  >
                    S'inscrire
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </section>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="bg-[#FAF8F5] py-16 lg:py-20 mt-16">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
              <h2 className="text-2xl md:text-3xl font-serif text-[#2D2A26] mb-10">
                À lire également
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogArticles
                  .filter(a => a.slug !== slug)
                  .slice(0, 3)
                  .map((article) => (
                    <BlogCard key={article.id} article={article} />
                  ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

// About Page
const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Emilio Arias",
      role: "Co-fondateur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      bio: "Passionné par l'immobilier de prestige et l'art de vivre provençal."
    },
    {
      name: "Maximilien Veronico",
      role: "Co-fondateur",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Expert en hospitalité et expérience client haut de gamme."
    }
  ];

  // Values data
  const values = [
    {
      icon: <Gem className="w-6 h-6" />,
      title: "Excellence",
      description: "Nous ne faisons aucun compromis sur la qualité. Chaque détail compte pour créer des séjours mémorables."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Authenticité",
      description: "Nous célébrons le patrimoine provençal et partageons les trésors cachés de notre région."
    },
    {
      icon: <HandHeart className="w-6 h-6" />,
      title: "Hospitalité",
      description: "L'accueil chaleureux est notre signature. Chaque voyageur est traité comme un invité de marque."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Sélection rigoureuse",
      description: "Seuls les biens répondant à nos critères exigeants intègrent notre collection."
    }
  ];

  return (
    <Layout>
      <div className="pt-20 lg:pt-24" data-testid="about-page">
        
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
            alt="Provence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
            <div className="max-w-[1400px] mx-auto">
              <p className="text-xs tracking-[0.2em] uppercase text-[#C9A961] mb-3">À propos</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">Notre histoire</h1>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#9A9189] mb-4">Qui sommes-nous</p>
                <h2 className="text-3xl md:text-4xl font-serif text-[#2D2A26] mb-8">
                  EmiRise, l'art du séjour d'exception en Provence
                </h2>
                <div className="space-y-6 text-[#6B635A] leading-relaxed">
                  <p>
                    Fondée en 2024 par Emilio Arias et Maximilien Veronico, EmiRise est née d'une passion commune : 
                    révéler la beauté authentique de la Provence à travers des séjours d'exception.
                  </p>
                  <p>
                    Notre approche est simple : sélectionner les plus belles propriétés de la région, 
                    les préparer avec le plus grand soin, et accompagner chaque voyageur comme nous le ferions 
                    pour nos proches. Pas de standardisation, pas de compromis. Juste l'excellence.
                  </p>
                  <p>
                    Installés à Aix-en-Provence, nous connaissons chaque ruelle, chaque domaine viticole, 
                    chaque table qui mérite le détour. Cette connaissance intime du territoire, nous la 
                    mettons au service de nos voyageurs pour leur offrir une expérience vraiment authentique.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
                  alt="Intérieur EmiRise"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-8 -left-8 bg-[#C9A961] text-white p-8 rounded-lg max-w-xs hidden lg:block">
                  <p className="text-4xl font-serif mb-2">2024</p>
                  <p className="text-sm text-white/80">Année de création d'EmiRise</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 lg:py-28 bg-[#FAF8F5]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-[#9A9189] mb-4">Notre vision</p>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#2D2A26] max-w-4xl mx-auto leading-relaxed">
              "Révéler l'art de vivre provençal à travers des séjours d'exception, 
              où chaque moment devient un souvenir précieux."
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-[#C9A961]"></div>
              <span className="text-[#C9A961] text-sm tracking-[0.1em] uppercase">Emilio & Maximilien</span>
              <div className="w-12 h-[1px] bg-[#C9A961]"></div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.2em] uppercase text-[#9A9189] mb-3">L'équipe</p>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2D2A26]">Les fondateurs</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-serif text-[#2D2A26] mb-1">{member.name}</h3>
                  <p className="text-[#C9A961] text-sm tracking-[0.1em] uppercase mb-3">{member.role}</p>
                  <p className="text-[#6B635A] text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-28 bg-[#2D2A26]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.2em] uppercase text-[#C9A961] mb-3">Ce qui nous guide</p>
              <h2 className="text-3xl md:text-4xl font-serif text-white">Nos valeurs</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#C9A961]/20 flex items-center justify-center mx-auto mb-6 text-[#C9A961]">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-serif text-white mb-3">{value.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-20 bg-[#FAF8F5]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-serif text-[#C9A961] mb-2">15+</p>
                <p className="text-[#6B635A] text-sm">Propriétés d'exception</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-serif text-[#C9A961] mb-2">500+</p>
                <p className="text-[#6B635A] text-sm">Voyageurs accueillis</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-serif text-[#C9A961] mb-2">4.9</p>
                <p className="text-[#6B635A] text-sm">Note moyenne</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-serif text-[#C9A961] mb-2">24/7</p>
                <p className="text-[#6B635A] text-sm">Support disponible</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CTA 1 - Discover Properties */}
              <Link 
                to="/appartements"
                className="group relative overflow-hidden rounded-xl aspect-[16/9] flex items-end"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
                  alt="Nos logements"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="relative p-8 w-full">
                  <p className="text-xs tracking-[0.2em] uppercase text-white/70 mb-2">Voyageurs</p>
                  <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-[#C9A961] transition-colors">
                    Découvrir nos logements
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <span>Explorer la collection</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* CTA 2 - Join Portfolio */}
              <Link 
                to="/proprietaires"
                className="group relative overflow-hidden rounded-xl aspect-[16/9] flex items-end"
              >
                <img 
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800"
                  alt="Propriétaires"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="relative p-8 w-full">
                  <p className="text-xs tracking-[0.2em] uppercase text-white/70 mb-2">Propriétaires</p>
                  <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-[#C9A961] transition-colors">
                    Rejoindre notre portfolio
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

// Owners Page
const OwnersPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    propertyType: '',
    location: '',
    size: '',
    bedrooms: '',
    description: '',
    message: ''
  });
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const propertyTypes = [
    { value: 'appartement', label: 'Appartement', icon: <Building className="w-5 h-5" /> },
    { value: 'villa', label: 'Villa', icon: <Home className="w-5 h-5" /> },
    { value: 'maison', label: 'Maison', icon: <Castle className="w-5 h-5" /> },
    { value: 'autre', label: 'Autre', icon: <HelpCircle className="w-5 h-5" /> }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...newFiles].slice(0, 10)); // Max 10 files
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/owners`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Owner form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="pt-24 lg:pt-32 min-h-screen bg-[#FAF8F5]" data-testid="owners-success">
          <div className="max-w-2xl mx-auto px-6 lg:px-12 py-20 text-center">
            <div className="w-20 h-20 bg-[#C9A961]/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-10 h-10 text-[#C9A961]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif text-[#2D2A26] mb-4">
              Merci pour votre demande !
            </h1>
            <p className="text-[#6B635A] mb-8">
              Nous avons bien reçu les informations concernant votre bien. 
              Notre équipe vous contactera dans les 48 heures pour discuter de votre projet.
            </p>
            <Link 
              to="/"
              className="inline-flex items-center gap-2 bg-[#2D2A26] text-white px-8 py-4 text-sm tracking-[0.1em] uppercase hover:bg-[#C9A961] transition-colors"
            >
              Retour à l'accueil
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-20 lg:pt-24" data-testid="owners-page">
        
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920"
            alt="Villa de luxe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
            <div className="max-w-[1400px] mx-auto">
              <p className="text-xs tracking-[0.2em] uppercase text-[#C9A961] mb-3">Propriétaires</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
                Rejoindre notre portfolio
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24 bg-[#FAF8F5]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              
              {/* Left Column - Info */}
              <div className="lg:col-span-1">
                <div className="sticky top-28">
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2D2A26] mb-6">
                    Confiez-nous votre bien d'exception
                  </h2>
                  <p className="text-[#6B635A] leading-relaxed mb-8">
                    Vous êtes propriétaire d'un bien d'exception en Provence ? 
                    Rejoignez notre collection de logements soigneusement sélectionnés 
                    et bénéficiez de notre expertise en gestion locative haut de gamme.
                  </p>

                  {/* Benefits */}
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#C9A961]/20 flex items-center justify-center flex-shrink-0">
                        <BadgeCheck className="w-5 h-5 text-[#C9A961]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#2D2A26] mb-1">Visibilité premium</h3>
                        <p className="text-sm text-[#6B635A]">Votre bien mis en valeur auprès d'une clientèle exigeante</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#C9A961]/20 flex items-center justify-center flex-shrink-0">
                        <Headphones className="w-5 h-5 text-[#C9A961]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#2D2A26] mb-1">Gestion complète</h3>
                        <p className="text-sm text-[#6B635A]">De la commercialisation à l'accueil des voyageurs</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#C9A961]/20 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-[#C9A961]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#2D2A26] mb-1">Tranquillité assurée</h3>
                        <p className="text-sm text-[#6B635A]">Assurance incluse et vérification des voyageurs</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="mt-10 pt-8 border-t border-[#E8E0D5]">
                    <p className="text-sm text-[#9A9189] mb-3">Des questions ?</p>
                    <a 
                      href="tel:+33442123456" 
                      className="flex items-center gap-2 text-[#2D2A26] font-medium hover:text-[#C9A961] transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      +33 4 42 12 34 56
                    </a>
                    <a 
                      href="mailto:proprietaires@emirise.com" 
                      className="flex items-center gap-2 text-[#2D2A26] font-medium hover:text-[#C9A961] transition-colors mt-2"
                    >
                      <Mail className="w-4 h-4" />
                      proprietaires@emirise.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 lg:p-10 shadow-sm">
                  <h3 className="text-xl font-serif text-[#2D2A26] mb-8">Décrivez votre bien</h3>
                  
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-[#2D2A26] mb-2">
                        Nom complet <span className="text-[#C9A961]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-[#E8E0D5] rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors"
                        placeholder="Jean Dupont"
                        data-testid="input-fullName"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2D2A26] mb-2">
                        Email <span className="text-[#C9A961]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-[#E8E0D5] rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors"
                        placeholder="jean@exemple.com"
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-medium text-[#2D2A26] mb-2">
                      Téléphone <span className="text-[#C9A961]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#E8E0D5] rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors"
                      placeholder="+33 6 12 34 56 78"
                      data-testid="input-phone"
                    />
                  </div>

                  {/* Property Type */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-[#2D2A26] mb-3">
                      Type de bien <span className="text-[#C9A961]">*</span>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {propertyTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, propertyType: type.value }))}
                          className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
                            formData.propertyType === type.value
                              ? 'border-[#C9A961] bg-[#C9A961]/10 text-[#C9A961]'
                              : 'border-[#E8E0D5] hover:border-[#C9A961]/50'
                          }`}
                          data-testid={`type-${type.value}`}
                        >
                          {type.icon}
                          <span className="text-sm font-medium">{type.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-[#2D2A26] mb-2">
                        Localisation <span className="text-[#C9A961]">*</span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-[#E8E0D5] rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors"
                        placeholder="Aix-en-Provence"
                        data-testid="input-location"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2D2A26] mb-2">
                        Superficie (m²) <span className="text-[#C9A961]">*</span>
                      </label>
                      <input
                        type="number"
                        name="size"
                        value={formData.size}
                        onChange={handleInputChange}
                        required
                        min="1"
                        className="w-full px-4 py-3 border border-[#E8E0D5] rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors"
                        placeholder="150"
                        data-testid="input-size"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2D2A26] mb-2">
                        Nombre de chambres <span className="text-[#C9A961]">*</span>
                      </label>
                      <select
                        name="bedrooms"
                        value={formData.bedrooms}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-[#E8E0D5] rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors bg-white"
                        data-testid="input-bedrooms"
                      >
                        <option value="">Sélectionner</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num} chambre{num > 1 ? 's' : ''}</option>
                        ))}
                        <option value="10+">Plus de 10</option>
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-[#2D2A26] mb-2">
                      Description courte du bien <span className="text-[#C9A961]">*</span>
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-[#E8E0D5] rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors resize-none"
                      placeholder="Décrivez votre bien : caractéristiques principales, équipements, environnement..."
                      data-testid="input-description"
                    />
                  </div>

                  {/* Photos Upload */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-[#2D2A26] mb-2">
                      Photos du bien
                    </label>
                    <div 
                      className="border-2 border-dashed border-[#E8E0D5] rounded-lg p-8 text-center hover:border-[#C9A961] transition-colors cursor-pointer"
                      onClick={() => document.getElementById('file-upload').click()}
                    >
                      <input
                        id="file-upload"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        data-testid="input-photos"
                      />
                      <Upload className="w-10 h-10 text-[#9A9189] mx-auto mb-3" />
                      <p className="text-[#2D2A26] font-medium mb-1">Cliquez pour ajouter des photos</p>
                      <p className="text-sm text-[#9A9189]">PNG, JPG jusqu'à 10 fichiers (max 5 Mo chacun)</p>
                    </div>
                    
                    {/* File previews */}
                    {files.length > 0 && (
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mt-4">
                        {files.map((file, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Preview ${index + 1}`}
                              className="w-full aspect-square object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Additional Message */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-[#2D2A26] mb-2">
                      Message complémentaire
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-[#E8E0D5] rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors resize-none"
                      placeholder="Questions, précisions, disponibilités..."
                      data-testid="input-message"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2D2A26] text-white py-4 px-6 text-sm tracking-[0.1em] uppercase font-medium hover:bg-[#C9A961] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 rounded-lg"
                    data-testid="submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Soumettre votre bien
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[#9A9189] text-center mt-4">
                    En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe concernant votre bien.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <h2 className="text-2xl md:text-3xl font-serif text-[#2D2A26] mb-10 text-center">
              Questions fréquentes
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="border-b border-[#E8E0D5] pb-6">
                <h3 className="font-medium text-[#2D2A26] mb-2">Quels types de biens recherchez-vous ?</h3>
                <p className="text-[#6B635A] text-sm">
                  Nous recherchons des biens d'exception en Provence : appartements de caractère, villas avec piscine, 
                  mas provençaux, bastides... Le bien doit offrir des prestations haut de gamme et un cadre exceptionnel.
                </p>
              </div>
              <div className="border-b border-[#E8E0D5] pb-6">
                <h3 className="font-medium text-[#2D2A26] mb-2">Quelle est votre commission ?</h3>
                <p className="text-[#6B635A] text-sm">
                  Notre commission varie selon les services souhaités (gestion complète ou partielle). 
                  Nous vous présenterons une offre personnalisée lors de notre échange.
                </p>
              </div>
              <div className="border-b border-[#E8E0D5] pb-6">
                <h3 className="font-medium text-[#2D2A26] mb-2">Comment se déroule le processus de sélection ?</h3>
                <p className="text-[#6B635A] text-sm">
                  Après réception de votre demande, nous organisons une visite de votre bien. 
                  Si votre propriété correspond à nos critères, nous vous proposons un contrat de gestion adapté.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[#2D2A26] mb-2">Puis-je utiliser mon bien pendant la saison ?</h3>
                <p className="text-[#6B635A] text-sm">
                  Bien sûr ! Vous définissez les périodes où vous souhaitez profiter de votre bien. 
                  Notre calendrier est entièrement flexible selon vos besoins.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

// Contact Page
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="pt-24 lg:pt-32 min-h-screen bg-[#FAF8F5]" data-testid="contact-success">
          <div className="max-w-2xl mx-auto px-6 lg:px-12 py-20 text-center">
            <div className="w-20 h-20 bg-[#C9A961]/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-10 h-10 text-[#C9A961]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif text-[#2D2A26] mb-4">
              Message envoyé !
            </h1>
            <p className="text-[#6B635A] mb-8">
              Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
            </p>
            <Link 
              to="/"
              className="inline-flex items-center gap-2 bg-[#2D2A26] text-white px-8 py-4 text-sm tracking-[0.1em] uppercase hover:bg-[#C9A961] transition-colors"
            >
              Retour à l'accueil
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-20 lg:pt-24" data-testid="contact-page">
        
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[350px]">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920"
            alt="Contact EmiRise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
            <div className="max-w-[1400px] mx-auto">
              <p className="text-xs tracking-[0.2em] uppercase text-[#C9A961] mb-3">Contact</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
                Besoin d'aide ?
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              
              {/* Left Column - Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-serif text-[#2D2A26] mb-6">
                  Nous sommes à votre écoute
                </h2>
                <p className="text-[#6B635A] leading-relaxed mb-8">
                  Une question sur nos logements, nos services ou une réservation ? 
                  Notre équipe vous répond sous 24h.
                </p>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#C9A961]/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#C9A961]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2D2A26] mb-1">Téléphone</h3>
                      <a href="tel:+33442123456" className="text-[#6B635A] hover:text-[#C9A961] transition-colors">
                        +33 4 42 12 34 56
                      </a>
                      <p className="text-xs text-[#9A9189] mt-1">Lun-Ven, 9h-18h</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#C9A961]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#C9A961]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2D2A26] mb-1">Email</h3>
                      <a href="mailto:contact@emirise.com" className="text-[#6B635A] hover:text-[#C9A961] transition-colors">
                        contact@emirise.com
                      </a>
                      <p className="text-xs text-[#9A9189] mt-1">Réponse sous 24h</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#C9A961]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#C9A961]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2D2A26] mb-1">Adresse</h3>
                      <p className="text-[#6B635A]">
                        12 Rue Cardinale<br />
                        13100 Aix-en-Provence
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#C9A961]/20 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-[#C9A961]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2D2A26] mb-1">WhatsApp</h3>
                      <a href="https://wa.me/33612345678" target="_blank" rel="noopener noreferrer" className="text-[#6B635A] hover:text-[#C9A961] transition-colors">
                        +33 6 12 34 56 78
                      </a>
                      <p className="text-xs text-[#9A9189] mt-1">Pour urgences uniquement</p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="mt-10 pt-8 border-t border-[#E8E0D5]">
                  <p className="text-sm text-[#9A9189] mb-4">Suivez-nous</p>
                  <div className="flex gap-3">
                    <a 
                      href="https://instagram.com/emirise" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center hover:bg-[#C9A961] hover:text-white transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://facebook.com/emirise" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center hover:bg-[#C9A961] hover:text-white transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://linkedin.com/company/emirise" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center hover:bg-[#C9A961] hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="bg-[#FAF8F5] rounded-xl p-8 lg:p-10">
                  <h3 className="text-xl font-serif text-[#2D2A26] mb-8">Envoyez-nous un message</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-[#2D2A26] mb-2">
                        Nom complet <span className="text-[#C9A961]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-[#E8E0D5] rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors"
                        placeholder="Jean Dupont"
                        data-testid="contact-name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2D2A26] mb-2">
                        Email <span className="text-[#C9A961]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-[#E8E0D5] rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors"
                        placeholder="jean@exemple.com"
                        data-testid="contact-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-[#2D2A26] mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-[#E8E0D5] rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors"
                        placeholder="+33 6 12 34 56 78"
                        data-testid="contact-phone"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2D2A26] mb-2">
                        Sujet <span className="text-[#C9A961]">*</span>
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-[#E8E0D5] rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors"
                        data-testid="contact-subject"
                      >
                        <option value="">Sélectionner un sujet</option>
                        <option value="reservation">Réservation</option>
                        <option value="information">Demande d'information</option>
                        <option value="modification">Modifier une réservation</option>
                        <option value="reclamation">Réclamation</option>
                        <option value="partenariat">Partenariat</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-[#2D2A26] mb-2">
                      Message <span className="text-[#C9A961]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-[#E8E0D5] rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors resize-none"
                      placeholder="Comment pouvons-nous vous aider ?"
                      data-testid="contact-message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2D2A26] text-white py-4 px-6 text-sm tracking-[0.1em] uppercase font-medium hover:bg-[#C9A961] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 rounded-lg"
                    data-testid="contact-submit"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[400px] relative">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=12+Rue+Cardinale,+13100+Aix-en-Provence,+France&zoom=15"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale"
          />
        </section>
      </div>
    </Layout>
  );
};

// Legal Pages
const MentionsLegalesPage = () => {
  return (
    <Layout>
      <div className="pt-24 lg:pt-32">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 py-16">
          <h1 className="text-3xl font-serif mb-8">Mentions légales</h1>
          <p className="text-text-secondary">Contenu des mentions légales à ajouter.</p>
        </div>
      </div>
    </Layout>
  );
};

const ConfidentialitePage = () => {
  return (
    <Layout>
      <div className="pt-24 lg:pt-32">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 py-16">
          <h1 className="text-3xl font-serif mb-8">Politique de confidentialité</h1>
          <p className="text-text-secondary">Contenu de la politique de confidentialité à ajouter.</p>
        </div>
      </div>
    </Layout>
  );
};

// ===========================================
// APP COMPONENT WITH ROUTES
// ===========================================

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Homepage - no Layout wrapper (custom hero) */}
        <Route path="/" element={
          <>
            <Header />
            <HomePage />
            <Footer />
          </>
        } />
        
        {/* Property Pages */}
        <Route path="/appartements" element={<AppartementsPage />} />
        <Route path="/villas" element={<VillasPage />} />
        <Route path="/logement/:id" element={<PropertyPage />} />
        
        {/* Content Pages */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/explorer" element={<ExplorerPage />} />
        <Route path="/explorer/:slug" element={<NeighborhoodPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/journal/:slug" element={<ArticlePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/proprietaires" element={<OwnersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Legal Pages */}
        <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
        <Route path="/confidentialite" element={<ConfidentialitePage />} />
      </Routes>
    </Router>
  );
}

export default App;
