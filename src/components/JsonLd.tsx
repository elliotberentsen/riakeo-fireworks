import { Product } from "@/data/products";

// Organization Schema - for the whole site
export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Riakeo Fireworks",
    url: "https://riakeo.se",
    logo: "https://riakeo.se/logo-riakeo.png",
    description:
      "Professionell fyrverkerileverantör i Sverige. Vi levererar högkvalitativa fyrverkerier till återförsäljare och evenemang.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@riakeo.se",
      contactType: "customer service",
      availableLanguage: "Swedish",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Website Schema
export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Riakeo Fireworks",
    url: "https://riakeo.se",
    inLanguage: "sv-SE",
    description:
      "Professionell fyrverkerileverantör i Sverige med högkvalitativa fyrverkerier.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Product Schema
interface ProductJsonLdProps {
  product: Product;
}

export function ProductJsonLd({ product }: ProductJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://riakeo.se${product.images.main}`,
    sku: product.slug,
    brand: {
      "@type": "Brand",
      name: "Riakeo",
    },
    category: product.categoryLabel,
    offers: {
      "@type": "Offer",
      price: product.priceSek,
      priceCurrency: "SEK",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Riakeo Fireworks",
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Antal skott",
        value: product.specifications.shots,
      },
      {
        "@type": "PropertyValue",
        name: "Effekthöjd",
        value: `${product.specifications.effectHeight}m`,
      },
      {
        "@type": "PropertyValue",
        name: "Brinntid",
        value: `${product.specifications.duration} sekunder`,
      },
      {
        "@type": "PropertyValue",
        name: "Kaliber",
        value: `${product.specifications.caliber}mm`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ItemList Schema for category pages
interface ItemListJsonLdProps {
  name: string;
  description: string;
  products: Product[];
}

export function ItemListJsonLd({ name, description, products }: ItemListJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: name,
    description: description,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        url: `https://riakeo.se/produkt/${product.slug}`,
        image: `https://riakeo.se${product.images.main}`,
        offers: {
          "@type": "Offer",
          price: product.priceSek,
          priceCurrency: "SEK",
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Local Business Schema for retailers page
export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Riakeo Fireworks",
    description: "Fyrverkerileverantör med återförsäljare över hela Sverige",
    url: "https://riakeo.se",
    image: "https://riakeo.se/logo-riakeo.png",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 62.5,
      longitude: 15.5,
    },
    areaServed: {
      "@type": "Country",
      name: "Sweden",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
