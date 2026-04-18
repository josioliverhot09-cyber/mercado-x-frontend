import { useLocation } from "wouter";
import { CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Success() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <div className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="card-elevated text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="inline-block">
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                </div>
              </div>
            </div>

            {/* Success Message */}
            <h1 className="text-4xl font-bold text-primary mb-4">
              Pagamento Aprovado!
            </h1>

            <p className="text-xl text-foreground mb-2">
              Obrigado por comprar no Mercado X
            </p>

            <p className="text-muted-foreground mb-8">
              Seu pedido foi confirmado e será processado em breve. Você receberá um email com os detalhes do rastreamento.
            </p>

            {/* Details */}
            <div className="bg-card/50 rounded-lg p-6 mb-8 border border-border/50 text-left">
              <h2 className="font-bold text-foreground mb-4">Próximos Passos:</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">1.</span>
                  <span>Você receberá um email de confirmação em breve</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">2.</span>
                  <span>Seu pedido será preparado para envio</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">3.</span>
                  <span>Você receberá o código de rastreamento por SMS e email</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">4.</span>
                  <span>Seu smartphone chegará em até 3 dias úteis</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setLocation("/")}
                className="btn-neon"
              >
                Voltar para Home
              </button>
              <button
                onClick={() => setLocation("/")}
                className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all duration-300 font-semibold"
              >
                Continuar Comprando
              </button>
            </div>

            {/* Support */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-2">
                Dúvidas? Entre em contato com nosso suporte
              </p>
              <p className="text-sm text-primary font-semibold">
                suporte@mercadox.com | (11) 3000-0000
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
