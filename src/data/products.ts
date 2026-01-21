// Product Types
export type ProductCategory = "batteri" | "raket" | "romerskljus" | "fontan" | "tårta" | "compound";

export interface ProductSpecifications {
  /** Antal skott */
  shots: number;
  /** Effekthöjd i meter */
  effectHeight: number;
  /** Brinntid i sekunder */
  duration: number;
  /** Kaliber i mm */
  caliber: number | string;
  /** Typ av skott */
  shotType: string;
  /** Nettoexplosiv mängd i kg (NEM) */
  nem: number;
}

export interface Product {
  /** Unique identifier / URL slug */
  slug: string;
  /** Product name */
  name: string;
  /** Product category */
  category: ProductCategory;
  /** Display name for category */
  categoryLabel: string;
  /** Optional subcategory label */
  subcategoryLabel?: string;
  /** Produktfördelar - product benefits/advantages */
  produktfordelar: string[];
  /** Technical specifications */
  specifications: ProductSpecifications;
  /** Full product description */
  description: string;
  /** Price in SEK */
  priceSek: number;
  /** YouTube video URL */
  videoUrl?: string;
  /** Product images */
  images: {
    /** Main product image */
    main: string;
    /** Additional gallery images */
    gallery?: string[];
  };
}

// Product Data
export const products: Product[] = [
  {
    slug: "pyro-addict-1",
    name: "Pyro Addict 1",
    category: "batteri",
    categoryLabel: "Batteri",
    subcategoryLabel: "Batterier",
    produktfordelar: [
      "Explosivt tempo",
      "Regnbågseffekter",
      "Kraftfull final",
      "51 skott",
    ],
    specifications: {
      shots: 51,
      effectHeight: 50,
      duration: 50,
      caliber: 30,
      shotType: "Raka och vinkelställda",
      nem: 1.0,
    },
    description: `Pyro Addict 1 från Riakeo är ett riktigt kraftpaket som levererar en storslagen fyrverkerishow. Med 51 skott, 30 mm rör och hela 1 000 gram krut bjuder den på en imponerande blandning av färg, tryck och bredd. Trots sin kraft är showen tydligt koreograferad med varierade sekvenser och effekter som verkligen fyller himlen.

Pjäsen inleds med färgstarka skott och breda guldexplosioner, följt av effekter som breder ut sig i ett solfjädersmönster och hänger kvar i luften. Avslutningen bjuder på en intensiv final med gnistregn och guld som lyser upp hela området. Pyro Addict 1 är perfekt för dig som vill ha en maxad show med hög intensitet och mycket variation – en pjäs som verkligen märks.`,
    priceSek: 1399,
    videoUrl: "https://www.youtube.com/watch?v=HwVAlEe1Q5Y",
    images: {
      main: "/images/product-images/pyro-addict-1.png",
      gallery: [],
    },
  },
  {
    slug: "thunderbolt-3",
    name: "Thunderbolt 3",
    category: "batteri",
    categoryLabel: "Batteri",
    subcategoryLabel: "Batterier",
    produktfordelar: [
      "Explosivt tempo",
      "Regnbågseffekter",
      "Kraftfull final",
      "36 skott",
    ],
    specifications: {
      shots: 36,
      effectHeight: 40,
      duration: 35,
      caliber: 25,
      shotType: "Raka och vinkelställda",
      nem: 0.486,
    },
    description:
      "Thunderbolt 3 är en effektfull fyrverkerilåda med starka färgkombinationer och tydliga växlingar i tempo och riktning. Den startar med rosa och limegrönt i kombination med blinkande guld, övergår i blått och rött, och fortsätter med breda vinkelställda skott där färgerna varieras i flera lager.\n\nMot slutet höjs intensiteten med kraftiga guldsken och blått. Finalen är fylld av stora gyllene explosioner och sprakande avslut – en show som håller tempot uppe från början till slut och levererar en riktigt färgstark helhet.",
    priceSek: 599,
    videoUrl: "https://www.youtube.com/watch?v=1sjJ7Od5vE8",
    images: {
      main: "/images/product-images/thunderbolt-3.png",
      gallery: [],
    },
  },
  {
    slug: "toxic",
    name: "Toxic",
    category: "batteri",
    categoryLabel: "Batteri",
    subcategoryLabel: "Batterier",
    produktfordelar: ["Explosivt tempo", "Kraftfull final", "25 skott"],
    specifications: {
      shots: 25,
      effectHeight: 50,
      duration: 38,
      caliber: 30,
      shotType: "Raka",
      nem: 0.463,
    },
    description:
      "Toxic från Riakeo är ett 25-skotts batteri med närmare 470 gram krut som levererar en välbalanserad och färgstark show. Inledningen bjuder på röda och blå färger som varvas med sprakande stjärneffekter, följt av stora krevader i guld och rött.\n\nShowen växlar sedan till en lugnare sekvens, där varje skott får ta plats i luften. Passar perfekt för dig som vill ha en stilren och stämningsfull fyrverkerishow med tryck.",
    priceSek: 499,
    videoUrl: "https://www.youtube.com/watch?v=LF9czvai-hk",
    images: {
      main: "/images/product-images/toxic.png",
      gallery: [],
    },
  },
  {
    slug: "exodus",
    name: "Exodus",
    category: "compound",
    categoryLabel: "Compound",
    subcategoryLabel: "Compounds",
    produktfordelar: [
      "Explosivt tempo",
      "Regnbågseffekter",
      "Kraftfull final",
      "148 skott",
    ],
    specifications: {
      shots: 148,
      effectHeight: 40,
      duration: 75,
      caliber: "20-25",
      shotType: "Raka och vinkelställda",
      nem: 1.83,
    },
    description:
      "Exodus från Riakeo är en kraftfull vinkelställd fyrverkerilåda med 148 skott och nästan 2 kg krut. Den levererar en varierad och färgstark show med stigande krevader, stora stjärnbrott i flera färger och breda effekter som fyller hela himlen.\n\nTack vare den långa brinntiden och de växlande skottsekvenserna får du en fartfylld och maffig ljusshow från början till slut. Exodus passar utmärkt för både nyår och andra firanden där man vill bjuda på något rejält och effektfullt.",
    priceSek: 2799,
    videoUrl: "https://www.youtube.com/watch?v=9M4lkoB7mXY",
    images: {
      main: "/images/product-images/exodus.png",
      gallery: [],
    },
  },
  {
    slug: "peking-opera-1",
    name: "Peking Opera 1",
    category: "compound",
    categoryLabel: "Compound",
    subcategoryLabel: "Compounds",
    produktfordelar: [
      "Multieffekter",
      "Färgglada färger",
      "Kraftfull final",
      "51 skott",
    ],
    specifications: {
      shots: 51,
      effectHeight: 50,
      duration: 50,
      caliber: 30,
      shotType: "Raka och vinkelställda",
      nem: 0.962,
    },
    description:
      "Peking Opera 1 från Riakeo är ett elegant batteri med 51 skott och nära 1 kg krut, som bjuder på en välbalanserad show med tydligt fokus på guld. Fyrverkeriet börjar med stigande svansar kombinerat med färger i rött, grönt, blått samt blinkande vita och gula stjärnor.\n\nTempot byggs upp mot en bred final, där guld och sprakande effekter fyller hela himlen. En komplett show med klassiska färger och snygg koreografi – perfekt för dig som vill ha en stilren men kraftfull pjäs med tryck i avslutningen.",
    priceSek: 1599,
    videoUrl: "https://www.youtube.com/watch?v=OG7J082lvCE",
    images: {
      main: "/images/product-images/peking-opera-1.png",
      gallery: [],
    },
  },
  {
    slug: "vanquish",
    name: "Vanquish",
    category: "compound",
    categoryLabel: "Compound",
    subcategoryLabel: "Compounds",
    produktfordelar: [
      "Explosivt tempo",
      "Regnbågseffekter",
      "Kraftfull final",
      "152 skott",
    ],
    specifications: {
      shots: 152,
      effectHeight: 50,
      duration: 85,
      caliber: 30,
      shotType: "Raka och vinkelställda",
      nem: 3.44,
    },
    description:
      "Vanquish från Riakeo är ett stort fyrverkeri med 152 skott som håller igång i hela 85 sekunder. Den startar med snabba marknära effekter och fyller snabbt hela himlen med stora, breda explosioner i guld och andra starka färger.\n\nUnder showens gång byts färger och mönster flera gånger – från kraftiga uppåtskjut till breda sidoskjutande effekter. Finalen bjuder på en färgstark avslutning med många explosioner samtidigt och ett intensivt ljusspel. Vanquish passar perfekt för dig som vill ha en riktigt lång och maxad show där det händer mycket hela tiden.",
    priceSek: 4499,
    videoUrl: "https://www.youtube.com/watch?v=lPR75txwhSo",
    images: {
      main: "/images/product-images/vanquish.png",
      gallery: [],
    },
  },
  {
    slug: "weapon-x",
    name: "Weapon X",
    category: "compound",
    categoryLabel: "Compound",
    subcategoryLabel: "Compounds",
    produktfordelar: ["Explosivt tempo", "Kraftfull final", "77 skott"],
    specifications: {
      shots: 77,
      effectHeight: 50,
      duration: 50,
      caliber: "25-30",
      shotType: "Raka",
      nem: 0.989,
    },
    description:
      "Weapon X från Riakeo är en varierad pjäs med 77 skott och nästan 1 kg krut. Den börjar med färgstarka explosioner i gult och rosa och går snabbt över i stora guldskott som kombineras med blinkande röda ljuseffekter.\n\nSenare i showen blandas färger som blått, rött och gult, samtidigt som gnistande effekter breder ut sig över himlen. Finalen är kraftfull och fyller hela himlen med färg, ljus och sprak. En riktigt bra pjäs för dig som vill ha variation, högt tempo och en stark avslutning.",
    priceSek: 1349,
    videoUrl: "https://www.youtube.com/watch?v=j4oJQ3CB40g",
    images: {
      main: "/images/product-images/weapon-x.png",
      gallery: [],
    },
  },
];

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.category === category);
}

export function getAllCategories(): { value: ProductCategory; label: string }[] {
  const categories = new Map<ProductCategory, string>();
  products.forEach((product) => {
    categories.set(product.category, product.categoryLabel);
  });
  return Array.from(categories.entries()).map(([value, label]) => ({
    value,
    label,
  }));
}
