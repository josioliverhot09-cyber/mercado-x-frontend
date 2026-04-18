export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  installments: number;
  description: string;
  specs: string[];
  rating: number;
  reviews: number;
  details: {
    screen: string;
    processor: string;
    ram: string;
    storage: string;
    camera: string;
    battery: string;
    os?: string;
    protection?: string;
  };
}

export const products: Product[] = [
  {
    id: "1",
    slug: "galaxy-a15",
    name: "Samsung Galaxy A15",
    price: 999,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663573186998/V2vcopoUX4QDQDGTtkyuBc/samsung-a15-JjasQZXmfyWzm2voPN2dRf.webp",
    installments: 12,
    description: "Smartphone Samsung Galaxy A15 com display AMOLED e processador de última geração",
    specs: ["6.5\" Display", "50MP Camera", "5000mAh Battery", "Android 14"],
    rating: 4.5,
    reviews: 128,
    details: {
      screen: "6.5\" AMOLED",
      processor: "Helio G99",
      ram: "4GB / 6GB",
      storage: "128GB",
      camera: "50MP",
      battery: "5000mAh",
      os: "Android 14"
    }
  },
  {
    id: "2",
    slug: "galaxy-a25-5g",
    name: "Samsung Galaxy A25 5G",
    price: 1399,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663573186998/V2vcopoUX4QDQDGTtkyuBc/samsung-a25-VH7xPG9tU8uT6UtiPrMKPc.webp",
    installments: 12,
    description: "Samsung Galaxy A25 5G com conectividade 5G ultra rápida e câmera tripla",
    specs: ["6.5\" Display", "50MP Triple Camera", "5000mAh Battery", "5G Connectivity"],
    rating: 4.7,
    reviews: 256,
    details: {
      screen: "6.5\" AMOLED 120Hz",
      processor: "Exynos 1280",
      ram: "6GB",
      storage: "128GB",
      camera: "50MP",
      battery: "5000mAh",
      os: "Android 14"
    }
  },
  {
    id: "3",
    slug: "galaxy-a34-5g",
    name: "Samsung Galaxy A34 5G",
    price: 1799,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663573186998/V2vcopoUX4QDQDGTtkyuBc/samsung-a34-WaGSRZTzBS6J9g6tDToLdy.webp",
    installments: 12,
    description: "Samsung Galaxy A34 5G premium com câmera de 48MP e design elegante",
    specs: ["6.6\" Display", "48MP Camera", "5000mAh Battery", "5G Connectivity"],
    rating: 4.8,
    reviews: 342,
    details: {
      screen: "6.6\" AMOLED 120Hz",
      processor: "Dimensity 1080",
      ram: "6GB / 8GB",
      storage: "128GB",
      camera: "48MP",
      battery: "5000mAh",
      protection: "IP67"
    }
  },
  {
    id: "4",
    slug: "redmi-note-13",
    name: "Xiaomi Redmi Note 13",
    price: 1199,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663573186998/V2vcopoUX4QDQDGTtkyuBc/xiaomi-redmi-avBLQooyi5yebNmbWwNcHx.webp",
    installments: 12,
    description: "Xiaomi Redmi Note 13 com processador Snapdragon e bateria de longa duração",
    specs: ["6.67\" Display", "108MP Camera", "5000mAh Battery", "Snapdragon 685"],
    rating: 4.6,
    reviews: 189,
    details: {
      screen: "AMOLED 120Hz",
      processor: "Snapdragon 685",
      ram: "6GB / 8GB",
      storage: "128GB / 256GB",
      camera: "108MP",
      battery: "5000mAh",
      os: "Android 13"
    }
  },
  {
    id: "5",
    slug: "redmi-note-12",
    name: "Xiaomi Redmi Note 12",
    price: 999,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663573186998/V2vcopoUX4QDQDGTtkyuBc/xiaomi-note12-HVjfhokTMqLZvV5d7M2ZAt.webp",
    installments: 12,
    description: "Xiaomi Redmi Note 12 com câmera de 50MP e design moderno",
    specs: ["6.67\" Display", "50MP Camera", "5000mAh Battery", "Snapdragon 680"],
    rating: 4.4,
    reviews: 156,
    details: {
      screen: "AMOLED",
      processor: "Snapdragon 685",
      ram: "4GB / 6GB",
      storage: "128GB",
      camera: "50MP",
      battery: "5000mAh",
      os: "Android 12"
    }
  },
  {
    id: "6",
    slug: "moto-g54-5g",
    name: "Motorola Moto G54 5G",
    price: 1299,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663573186998/V2vcopoUX4QDQDGTtkyuBc/motorola-g54-VPAFb5jWCDfyr9iEav4WCB.webp",
    installments: 12,
    description: "Motorola Moto G54 5G com 5G ultra rápido e câmera de 50MP",
    specs: ["6.5\" Display", "50MP Camera", "5000mAh Battery", "5G Connectivity"],
    rating: 4.5,
    reviews: 134,
    details: {
      screen: "120Hz",
      processor: "Dimensity 7020",
      ram: "6GB / 8GB",
      storage: "128GB / 256GB",
      camera: "50MP",
      battery: "5000mAh",
      os: "Android 13"
    }
  },
  {
    id: "7",
    slug: "moto-g84-5g",
    name: "Motorola Moto G84 5G",
    price: 1599,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663573186998/V2vcopoUX4QDQDGTtkyuBc/motorola-g84-C2bKMLJZ3Cy4uUVT45QHzD.webp",
    installments: 12,
    description: "Motorola Moto G84 5G com processador de última geração e design premium",
    specs: ["6.7\" Display", "50MP Camera", "5000mAh Battery", "5G Connectivity"],
    rating: 4.7,
    reviews: 198,
    details: {
      screen: "pOLED",
      processor: "Snapdragon 8 Gen 1",
      ram: "8GB",
      storage: "256GB",
      camera: "50MP",
      battery: "5000mAh",
      os: "Android 14"
    }
  },
  {
    id: "8",
    slug: "realme-c67",
    name: "Realme C67",
    price: 1099,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663573186998/V2vcopoUX4QDQDGTtkyuBc/realme-c67-68H8HBbBQY7PV9GzDwUqbc.webp",
    installments: 12,
    description: "Realme C67 com câmera de 50MP e bateria de 5000mAh",
    specs: ["6.5\" Display", "50MP Camera", "5000mAh Battery", "Android 13"],
    rating: 4.3,
    reviews: 87,
    details: {
      screen: "IPS LCD",
      processor: "Snapdragon 680",
      ram: "4GB / 6GB",
      storage: "64GB / 128GB",
      camera: "108MP",
      battery: "5000mAh",
      os: "Android 13"
    }
  },
  {
    id: "9",
    slug: "poco-x5-5g",
    name: "POCO X5 5G",
    price: 1499,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663573186998/V2vcopoUX4QDQDGTtkyuBc/poco-x5-4jnWATh6mmJ6j67m3xif3k.webp",
    installments: 12,
    description: "POCO X5 5G com processador Snapdragon 778G+ e câmera de 48MP",
    specs: ["6.67\" Display", "48MP Camera", "5000mAh Battery", "5G Connectivity"],
    rating: 4.6,
    reviews: 212,
    details: {
      screen: "AMOLED 120Hz",
      processor: "Snapdragon 695",
      ram: "6GB / 8GB",
      storage: "128GB / 256GB",
      camera: "50MP",
      battery: "5000mAh",
      os: "Android 12"
    }
  },
  {
    id: "10",
    slug: "galaxy-m34-5g",
    name: "Samsung Galaxy M34 5G",
    price: 1399,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663573186998/V2vcopoUX4QDQDGTtkyuBc/samsung-m34-7rf5kh7diHpky8FZqc7rwn.webp",
    installments: 12,
    description: "Samsung Galaxy M34 5G com câmera tripla e bateria de 6000mAh",
    specs: ["6.5\" Display", "50MP Triple Camera", "6000mAh Battery", "5G Connectivity"],
    rating: 4.5,
    reviews: 167,
    details: {
      screen: "AMOLED",
      processor: "Exynos 1280",
      ram: "6GB / 8GB",
      storage: "128GB",
      camera: "50MP",
      battery: "6000mAh",
      os: "Android 14"
    }
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
