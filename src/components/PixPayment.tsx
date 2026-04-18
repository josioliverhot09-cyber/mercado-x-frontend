import { useEffect, useState } from "react";
import { Copy, Check } from "lucide-react";
import QRCodeComponent from "./QRCode";
import { API_URL } from "@/const";

interface PixPaymentProps {
  pixId: string;
  pixCode: string;
  amount: number;
  onPaymentSuccess: () => void;
}

export default function PixPayment({ pixId, pixCode, amount, onPaymentSuccess }: PixPaymentProps) {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes
  const [paymentStatus, setPaymentStatus] = useState<"pending" | "paid">("pending");
  const [pollCount, setPollCount] = useState(0);

  // Timer countdown
  useEffect(() => {
    if (timeLeft <= 0 || paymentStatus === "paid") return;

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, paymentStatus]);

  // Poll for payment status
  useEffect(() => {
    if (paymentStatus === "paid") return;

    const pollInterval = setInterval(async () => {
      try {
        const response = await fetch(`${API_URL}/status/${pixId}`);
        if (!response.ok) throw new Error("Erro ao verificar status");

        const data = await response.json();
        setPollCount(prev => prev + 1);

        if (data.status === "paid") {
          setPaymentStatus("paid");
          clearInterval(pollInterval);
        }
      } catch (error) {
        console.error("Erro ao verificar status:", error);
      }
    }, 3000);

    return () => clearInterval(pollInterval);
  }, [pixId, paymentStatus]);

  // Redirect to success page
  useEffect(() => {
    if (paymentStatus === "paid") {
      const timer = setTimeout(() => {
        onPaymentSuccess();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [paymentStatus, onPaymentSuccess]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formattedAmount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(amount);

  if (paymentStatus === "paid") {
    return (
      <div className="text-center py-12 animate-in fade-in duration-500">
        <div className="inline-block mb-4">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-4xl">✓</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-green-500 mb-2">Pagamento Aprovado!</h2>
        <p className="text-muted-foreground">Redirecionando para página de sucesso...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Amount and Timer */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
          <p className="text-sm text-muted-foreground mb-2">Valor a pagar:</p>
          <p className="text-2xl font-bold text-primary">{formattedAmount}</p>
        </div>

        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
          <p className="text-sm text-muted-foreground mb-2">Tempo para pagar:</p>
          <p className={`text-2xl font-bold ${timeLeft < 300 ? "text-red-500" : "text-primary"}`}>
            {formatTime(timeLeft)}
          </p>
        </div>
      </div>

      {/* QR Code */}
      <div className="text-center py-8 bg-card/50 rounded-lg border border-border/50">
        <p className="text-sm text-muted-foreground mb-4">Escaneie o QR Code com seu app bancário</p>
        <div className="flex justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <QRCodeComponent value={pixCode} size={280} />
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">Aguardando pagamento...</p>
      </div>

      {/* Pix Code */}
      <div>
        <p className="text-sm text-muted-foreground mb-2">Código Pix (Copia e Cola):</p>
        <div className="flex gap-2">
          <input
            type="text"
            value={pixCode}
            readOnly
            className="flex-1 bg-muted text-foreground px-4 py-3 rounded-lg border border-border/50 font-mono text-sm"
          />
          <button
            onClick={handleCopyPix}
            className="btn-neon flex items-center gap-2 px-4"
          >
            {copied ? (
              <>
                <Check size={18} />
                <span>Copiado</span>
              </>
            ) : (
              <>
                <Copy size={18} />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-card/50 rounded-lg p-4 border border-border/50">
        <h3 className="font-bold text-foreground mb-3">Como pagar:</h3>
        <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
          <li>Abra seu app bancário</li>
          <li>Selecione a opção Pix</li>
          <li>Escaneie o QR Code ou cole o código</li>
          <li>Confirme o pagamento</li>
        </ol>
      </div>

      {/* Debug info */}
      <p className="text-xs text-muted-foreground text-center">
        Status de polling: {pollCount} verificações
      </p>
    </div>
  );
}
