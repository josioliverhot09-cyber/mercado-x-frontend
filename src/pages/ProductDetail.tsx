import { useLocation, useRoute } from "wouter";
import { ChevronRight, ShoppingCart, Check, Zap, Truck, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/ProductGallery";
import { getProductBySlug } from "@/data/products";
import { getProductGallery } from "@/data/product_gallery";
import { productContents } from "@/data/product_content";

export default function ProductDetail() {
  const [, params] = useRoute("/produto/:slug");
  const [, setLocation] = useLocation();

  const product = params?.slug ? getProductBySlug(params.slug) : null;
  const gallery = params?.slug ? getProductGallery(params.slug) : null;
  const content = params?.slug ? productContents.find(p => p.slug === params.slug) : null;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">404</h1>
            <p className="text-foreground mb-8">Produto não encontrado</p>
            <button
              onClick={() => setLocation("/")}
              className="btn-neon"
            >
              Voltar para Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const discount = product.price * 0.2;
  const finalPrice = product.price - discount;

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(product.price);

  const formattedDiscount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(discount);

  const formattedFinalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(finalPrice);

  const handleBuyClick = () => {
    setLocation(`/checkout/${product.id}`);
  };

  const galleryImages = gallery?.images || [product.image];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <div className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm">
            <button
              onClick={() => setLocation("/")}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Home
            </button>
            <ChevronRight size={16} className="text-muted-foreground" />
            <span className="text-muted-foreground">{product.name}</span>
          </div>

          {/* Main Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Gallery */}
            <div>
              <ProductGallery images={galleryImages} productName={product.name} />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Title */}
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
              </div>

              {/* Pricing Section */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20 space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-muted-foreground line-through opacity-60">
                    {formattedPrice}
                  </span>
                  <div className="bg-primary text-background px-3 py-1 rounded-lg font-bold text-sm">
                    20% OFF
                  </div>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">
                    {formattedFinalPrice}
                  </span>
                  <span className="text-sm text-muted-foreground">à vista no Pix</span>
                </div>

                <div className="border-t border-primary/20 pt-4">
                  <p className="text-sm text-muted-foreground mb-1">Economize</p>
                  <p className="text-lg font-bold text-green-400">
                    {formattedDiscount} de desconto
                  </p>
                </div>
              </div>

              {/* Pix Highlight */}
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20 text-center">
                <p className="text-sm">
                  <span className="font-bold text-primary">💰 Pagamento à vista no Pix</span>
                  <br />
                  <span className="text-muted-foreground">com 20% de desconto</span>
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleBuyClick}
                className="w-full bg-primary text-background hover:bg-primary/90 font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg neon-glow"
              >
                <ShoppingCart size={20} />
                COMPRAR AGORA
              </button>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-card/50 rounded-lg p-3 border border-border/50 text-center">
                  <Shield size={20} className="text-primary mx-auto mb-2" />
                  <p className="text-xs font-semibold text-foreground">Compra Segura</p>
                </div>
                <div className="bg-card/50 rounded-lg p-3 border border-border/50 text-center">
                  <Truck size={20} className="text-primary mx-auto mb-2" />
                  <p className="text-xs font-semibold text-foreground">Entrega Rápida</p>
                </div>
                <div className="bg-card/50 rounded-lg p-3 border border-border/50 text-center">
                  <Check size={20} className="text-primary mx-auto mb-2" />
                  <p className="text-xs font-semibold text-foreground">Garantia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          {content && (
            <div className="mb-16 bg-card/30 rounded-xl p-8 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">Sobre este Produto</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {content.longDescription}
              </p>
            </div>
          )}

          {/* Specifications Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Especificações Técnicas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                <p className="text-xs text-muted-foreground mb-2 uppercase font-semibold">Tela</p>
                <p className="font-bold text-foreground">{product.details.screen}</p>
              </div>
              <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                <p className="text-xs text-muted-foreground mb-2 uppercase font-semibold">Processador</p>
                <p className="font-bold text-foreground">{product.details.processor}</p>
              </div>
              <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                <p className="text-xs text-muted-foreground mb-2 uppercase font-semibold">RAM</p>
                <p className="font-bold text-foreground">{product.details.ram}</p>
              </div>
              <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                <p className="text-xs text-muted-foreground mb-2 uppercase font-semibold">Armazenamento</p>
                <p className="font-bold text-foreground">{product.details.storage}</p>
              </div>
              <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                <p className="text-xs text-muted-foreground mb-2 uppercase font-semibold">Câmera</p>
                <p className="font-bold text-foreground">{product.details.camera}</p>
              </div>
              <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                <p className="text-xs text-muted-foreground mb-2 uppercase font-semibold">Bateria</p>
                <p className="font-bold text-foreground">{product.details.battery}</p>
              </div>
              {product.details.os && (
                <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                  <p className="text-xs text-muted-foreground mb-2 uppercase font-semibold">SO</p>
                  <p className="font-bold text-foreground">{product.details.os}</p>
                </div>
              )}
              {product.details.protection && (
                <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                  <p className="text-xs text-muted-foreground mb-2 uppercase font-semibold">Proteção</p>
                  <p className="font-bold text-foreground">{product.details.protection}</p>
                </div>
              )}
            </div>
          </div>

          {/* What's in the Box */}
          {content && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">📦 O que Vem na Embalagem</h2>
              <div className="bg-card/30 rounded-xl p-8 border border-border/50">
                <ul className="space-y-3">
                  {content.whatsInTheBox.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-foreground">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={16} className="text-background" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Warranty & Security */}
          {content && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">🔒 Garantia e Segurança</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {content.warrantyAndSecurity.map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
                    <div className="flex items-start gap-3">
                      <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                      <p className="font-semibold text-foreground">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Shipping Info */}
          <div className="mb-16 bg-card/30 rounded-xl p-8 border border-border/50">
            <h3 className="text-xl font-bold text-foreground mb-4">🚚 Informações de Entrega</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Truck size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Frete Grátis</p>
                  <p className="text-sm text-muted-foreground">Para todo Brasil</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Entrega Rápida</p>
                  <p className="text-sm text-muted-foreground">Em até 3 dias úteis</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Rastreamento</p>
                  <p className="text-sm text-muted-foreground">Em tempo real</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Garantia</p>
                  <p className="text-sm text-muted-foreground">De fábrica</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mb-16 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 border border-primary/30 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Pronto para Levar Seu Novo Smartphone?</h3>
            <p className="text-muted-foreground mb-6">Aproveite o desconto de 20% no Pix e receba em até 3 dias úteis</p>
            <button
              onClick={handleBuyClick}
              className="bg-primary text-background hover:bg-primary/90 font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center gap-2 text-lg neon-glow"
            >
              <ShoppingCart size={20} />
              COMPRAR AGORA
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
