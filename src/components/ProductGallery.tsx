import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="product-gallery">
      {/* Main Image */}
      <div className="gallery-main">
        <img
          src={images[activeIndex]}
          alt={`${productName} - View ${activeIndex + 1}`}
          className="gallery-main-image"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              className={`gallery-thumbnail ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View image ${index + 1}`}
            >
              <img src={image} alt={`${productName} thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
