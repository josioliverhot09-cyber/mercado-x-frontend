import { ShoppingCart } from "lucide-react";
import { Link } from "wouter";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onBuy: (product: Product) => void;
}

export default function ProductCard({ product, onBuy }: ProductCardProps) {
  const pixPrice = product.price * 0.8;
  
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(product.price);

  const formattedPixPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(pixPrice);

  return (
    <div className="card-elevated group">
      <Link href={`/produto/${product.slug}`}>
        <a className="block relative overflow-hidden rounded-lg mb-4 bg-muted/30 h-64 border border-border/50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 bg-primary text-background text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
            20% OFF PIX
          </div>
        </a>
      </Link>

      <div className="space-y-3">
        <Link href={`/produto/${product.slug}`}>
          <a className="block">
            <h3 className="font-bold text-lg text-foreground hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
          </a>
        </Link>

        <div className="space-y-1">
          <p className="text-sm text-muted-foreground line-through opacity-60">{formattedPrice}</p>
          <p className="text-2xl font-bold text-primary">{formattedPixPrice}</p>
          <p className="text-[10px] font-bold text-primary uppercase tracking-wider">à vista no Pix</p>
        </div>

        <button
          onClick={() => onBuy(product)}
          className="w-full btn-neon flex items-center justify-center gap-2 py-2.5"
        >
          <ShoppingCart size={18} />
          <span className="font-bold">COMPRAR</span>
        </button>
      </div>
    </div>
  );
}
