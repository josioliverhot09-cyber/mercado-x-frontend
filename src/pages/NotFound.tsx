import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <div className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-bold text-foreground mb-4">Página não encontrada</h2>
          <p className="text-muted-foreground mb-8">
            Desculpe, a página que você está procurando não existe.
          </p>
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
