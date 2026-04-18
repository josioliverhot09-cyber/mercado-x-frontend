import { useEffect, useState } from "react";
import { useLocation, useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckoutForm, { CheckoutData } from "@/components/CheckoutForm";
import PixPayment from "@/components/PixPayment";
import { products } from "@/data/products";
import { API_URL } from "@/const";

interface PixData {
  id: string;
  pix: string;
}

type CheckoutStep = "form" | "payment";

export default function Checkout() {
  const [, params] = useRoute("/checkout/:productId");
  const [, setLocation] = useLocation();
  const [step, setStep] = useState<CheckoutStep>("form");
  const [pixData, setPixData] = useState<PixData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [customerData, setCustomerData] = useState<CheckoutData | null>(null);

  const product = products.find(p => p.id === params?.productId);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-foreground">Produto não encontrado</p>
        </div>
        <Footer />
      </div>
    );
  }

  const discount = product.price * 0.2;
  const finalPrice = product.price - discount;

  const handleFormSubmit = async (data: CheckoutData) => {
    try {
      setIsLoading(true);
      setCustomerData(data);

      // Generate Pix with discounted price
      const response = await fetch(`${API_URL}/gerar-pix`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          valor: finalPrice
        })
      });

      if (!response.ok) throw new Error("Erro ao gerar Pix");

      const pixResponse = await response.json();
      setPixData(pixResponse);
      setStep("payment");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao gerar código Pix. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaymentSuccess = () => {
    setLocation("/sucesso");
  };

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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <div className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form / Payment */}
            <div className="lg:col-span-2">
              <div className="card-elevated">
                {step === "form" && (
                  <>
                    <h1 className="text-3xl font-bold text-foreground mb-2">Checkout</h1>
                    <p className="text-muted-foreground mb-8">Preencha seus dados para continuar</p>
                    <CheckoutForm
                      product={product}
                      onSubmit={handleFormSubmit}
                      isLoading={isLoading}
                    />
                  </>
                )}

                {step === "payment" && pixData && (
                  <>
                    <h1 className="text-3xl font-bold text-foreground mb-2">Pagamento com Pix</h1>
                    <p className="text-muted-foreground mb-8">Escaneie o QR Code ou copie o código</p>
                    <PixPayment
                      pixId={pixData.id}
                      pixCode={pixData.pix}
                      amount={finalPrice}
                      onPaymentSuccess={handlePaymentSuccess}
                    />
                  </>
                )}
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div>
              <div className="card-elevated sticky top-24">
                <h2 className="text-xl font-bold text-foreground mb-6">Resumo do Pedido</h2>

                <div className="flex gap-4 mb-6 pb-6 border-b border-border/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-sm mb-1">{product.name}</h3>
                    <p className="text-xs text-muted-foreground">{product.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span className="text-foreground font-medium">{formattedPrice}</span>
                  </div>

                  <div className="flex justify-between text-sm text-green-500 bg-green-500/10 p-2 rounded border border-green-500/20">
                    <span>Desconto Pix (20%):</span>
                    <span className="font-medium">-{formattedDiscount}</span>
                  </div>

                  <div className="flex justify-between text-lg font-bold border-t border-border/50 pt-3">
                    <span className="text-foreground">Total:</span>
                    <span className="text-primary">{formattedFinalPrice}</span>
                  </div>
                </div>

                {/* Discount Badge */}
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-center">
                    <span className="font-bold text-primary">💰 Pague no Pix</span>
                    <br />
                    <span className="text-muted-foreground">e ganhe 20% de desconto</span>
                  </p>
                </div>

                {/* Customer Info */}
                {step === "payment" && customerData && (
                  <div className="mt-6 p-4 bg-card/50 rounded-lg border border-border/50">
                    <h3 className="text-sm font-bold text-foreground mb-3">Dados da Entrega</h3>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <p><span className="text-foreground font-medium">{customerData.fullName}</span></p>
                      <p>{customerData.street}, {customerData.number}</p>
                      <p>{customerData.neighborhood}, {customerData.city} - {customerData.state}</p>
                      <p>{customerData.cep}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
