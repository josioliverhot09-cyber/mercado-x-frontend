export interface ProductGallery {
  slug: string;
  images: string[];
}

export const productGalleries: ProductGallery[] = [
  {
    slug: "galaxy-a15",
    images: [
      "/products/galaxy-a15-front.png",
      "/products/galaxy-a15-back.png",
      "/products/galaxy-a15-side.png"
    ]
  },
  {
    slug: "galaxy-a25-5g",
    images: [
      "/products/galaxy-a25-front.png",
      "/products/galaxy-a25-back.png",
      "/products/galaxy-a25-side.png"
    ]
  },
  {
    slug: "galaxy-a34-5g",
    images: [
      "/products/galaxy-a25-front.png",
      "/products/galaxy-a25-back.png",
      "/products/galaxy-a25-side.png"
    ]
  },
  {
    slug: "redmi-note-13",
    images: [
      "/products/redmi-note-13-front.png",
      "/products/redmi-note-13-back.png",
      "/products/redmi-note-13-side.png"
    ]
  },
  {
    slug: "redmi-note-12",
    images: [
      "/products/redmi-note-13-front.png",
      "/products/redmi-note-13-back.png",
      "/products/redmi-note-13-side.png"
    ]
  },
  {
    slug: "moto-g54-5g",
    images: [
      "/products/moto-g84-front.png",
      "/products/moto-g84-back.png",
      "/products/moto-g84-side.png"
    ]
  },
  {
    slug: "moto-g84-5g",
    images: [
      "/products/moto-g84-front.png",
      "/products/moto-g84-back.png",
      "/products/moto-g84-side.png"
    ]
  },
  {
    slug: "realme-c67",
    images: [
      "/products/poco-x5-front.png",
      "/products/poco-x5-back.png",
      "/products/poco-x5-side.png"
    ]
  },
  {
    slug: "poco-x5-5g",
    images: [
      "/products/poco-x5-front.png",
      "/products/poco-x5-back.png",
      "/products/poco-x5-side.png"
    ]
  },
  {
    slug: "galaxy-m34-5g",
    images: [
      "/products/galaxy-a25-front.png",
      "/products/galaxy-a25-back.png",
      "/products/galaxy-a25-side.png"
    ]
  }
];

export function getProductGallery(slug: string): ProductGallery | undefined {
  return productGalleries.find(g => g.slug === slug);
}
