import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import HeroSlider from "@/components/HeroSlider";
import { products, type Product } from "@/data/products";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleBuyProduct = (product: Product) => {
    setLocation(`/checkout/${product.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Slider */}
      <HeroSlider />

      {/* Trust Strip */}
      <div className="hero-trust-strip">
        <div className="hero-trust-strip-inner">
          <div className="strip-item">
            <span className="strip-item-icon">🔒</span>
            <span>Pagamento 100% Seguro</span>
          </div>
          <div className="strip-item-sep" />
          <div className="strip-item">
            <span className="strip-item-icon">💰</span>
            <span>Pix com 20% de Desconto</span>
          </div>
          <div className="strip-item-sep" />
          <div className="strip-item">
            <span className="strip-item-icon">🚚</span>
            <span>Entrega Rápida</span>
          </div>
          <div className="strip-item-sep" />
          <div className="strip-item">
            <span className="strip-item-icon">✅</span>
            <span>Garantia de Fábrica</span>
          </div>
          <div className="strip-item-sep" />
          <div className="strip-item">
            <span className="strip-item-icon">📦</span>
            <span>Produto Original</span>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-12 bg-card/30 border-y border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Samsung", "Xiaomi", "Motorola", "Realme", "POCO"].map((brand) => (
              <button
                key={brand}
                className="py-3 px-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 text-foreground font-medium"
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20 products-section-premium">
        <div className="products-section-premium-content">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossos Produtos
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tecnologia de ponta com o melhor preço do mercado. Pagamento exclusivo via Pix com desconto imediato.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 products-grid-premium">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onBuy={handleBuyProduct}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/20 border-t border-border/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-16 text-center">
            Por que escolher Mercado X?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">Pagamento Seguro</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transações diretas e seguras via Pix. Sem intermediários, sem taxas extras.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">Entrega Rápida</h3>
              <p className="text-muted-foreground leading-relaxed">
                Logística otimizada para garantir que seu smartphone chegue em até 3 dias úteis.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💯</span>
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">Garantia Total</h3>
              <p className="text-muted-foreground leading-relaxed">
                Todos os produtos são originais, lacrados e possuem garantia oficial de fábrica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
