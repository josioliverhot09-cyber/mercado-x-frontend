import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { formatCPF, formatPhone, formatCEP, validateCPF, validateEmail, validatePhone, validateCEP } from "@/lib/validation";
import type { Product } from "@/data/products";

export interface CheckoutData {
  // Customer data
  fullName: string;
  cpf: string;
  email: string;
  phone: string;
  // Address data
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
}

interface CheckoutFormProps {
  product: Product;
  onSubmit: (data: CheckoutData) => void;
  isLoading: boolean;
}

export default function CheckoutForm({ product, onSubmit, isLoading }: CheckoutFormProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<CheckoutData>({
    fullName: "",
    cpf: "",
    email: "",
    phone: "",
    cep: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: ""
  });
  const [errors, setErrors] = useState<Partial<CheckoutData>>({});

  const handleInputChange = (field: keyof CheckoutData, value: string) => {
    let formattedValue = value;

    if (field === "cpf") formattedValue = formatCPF(value);
    if (field === "phone") formattedValue = formatPhone(value);
    if (field === "cep") formattedValue = formatCEP(value);

    setFormData(prev => ({ ...prev, [field]: formattedValue }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateStep1 = (): boolean => {
    const newErrors: Partial<CheckoutData> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Nome completo é obrigatório";
    if (!validateCPF(formData.cpf)) newErrors.cpf = "CPF inválido";
    if (!validateEmail(formData.email)) newErrors.email = "Email inválido";
    if (!validatePhone(formData.phone)) newErrors.phone = "Telefone inválido";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Partial<CheckoutData> = {};

    if (!validateCEP(formData.cep)) newErrors.cep = "CEP inválido";
    if (!formData.street.trim()) newErrors.street = "Rua é obrigatória";
    if (!formData.number.trim()) newErrors.number = "Número é obrigatório";
    if (!formData.neighborhood.trim()) newErrors.neighborhood = "Bairro é obrigatório";
    if (!formData.city.trim()) newErrors.city = "Cidade é obrigatória";
    if (!formData.state.trim()) newErrors.state = "Estado é obrigatório";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      onSubmit(formData);
    }
  };

  const discount = product.price * 0.2;
  const finalPrice = product.price - discount;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Progress Bar */}
      <div className="flex items-center gap-4 mb-8">
        <div className={`flex-1 h-1 rounded-full ${step >= 1 ? "bg-primary" : "bg-muted"}`} />
        <div className={`flex-1 h-1 rounded-full ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
      </div>

      {/* Step 1: Customer Data */}
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground mb-6">Passo 1: Seus Dados</h2>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Nome Completo
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="João Silva"
              className={`w-full px-4 py-3 rounded-lg bg-muted text-foreground border transition-colors ${
                errors.fullName ? "border-red-500" : "border-border/50 focus:border-primary"
              } focus:outline-none`}
            />
            {errors.fullName && <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                CPF
              </label>
              <input
                type="text"
                value={formData.cpf}
                onChange={(e) => handleInputChange("cpf", e.target.value)}
                placeholder="000.000.000-00"
                maxLength={14}
                className={`w-full px-4 py-3 rounded-lg bg-muted text-foreground border transition-colors ${
                  errors.cpf ? "border-red-500" : "border-border/50 focus:border-primary"
                } focus:outline-none`}
              />
              {errors.cpf && <p className="text-sm text-red-500 mt-1">{errors.cpf}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Telefone
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="(11) 99999-9999"
                maxLength={15}
                className={`w-full px-4 py-3 rounded-lg bg-muted text-foreground border transition-colors ${
                  errors.phone ? "border-red-500" : "border-border/50 focus:border-primary"
                } focus:outline-none`}
              />
              {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="seu@email.com"
              className={`w-full px-4 py-3 rounded-lg bg-muted text-foreground border transition-colors ${
                errors.email ? "border-red-500" : "border-border/50 focus:border-primary"
              } focus:outline-none`}
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>
        </div>
      )}

      {/* Step 2: Address */}
      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground mb-6">Passo 2: Endereço de Entrega</h2>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              CEP
            </label>
            <input
              type="text"
              value={formData.cep}
              onChange={(e) => handleInputChange("cep", e.target.value)}
              placeholder="00000-000"
              maxLength={9}
              className={`w-full px-4 py-3 rounded-lg bg-muted text-foreground border transition-colors ${
                errors.cep ? "border-red-500" : "border-border/50 focus:border-primary"
              } focus:outline-none`}
            />
            {errors.cep && <p className="text-sm text-red-500 mt-1">{errors.cep}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Rua
            </label>
            <input
              type="text"
              value={formData.street}
              onChange={(e) => handleInputChange("street", e.target.value)}
              placeholder="Rua Principal"
              className={`w-full px-4 py-3 rounded-lg bg-muted text-foreground border transition-colors ${
                errors.street ? "border-red-500" : "border-border/50 focus:border-primary"
              } focus:outline-none`}
            />
            {errors.street && <p className="text-sm text-red-500 mt-1">{errors.street}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Número
              </label>
              <input
                type="text"
                value={formData.number}
                onChange={(e) => handleInputChange("number", e.target.value)}
                placeholder="123"
                className={`w-full px-4 py-3 rounded-lg bg-muted text-foreground border transition-colors ${
                  errors.number ? "border-red-500" : "border-border/50 focus:border-primary"
                } focus:outline-none`}
              />
              {errors.number && <p className="text-sm text-red-500 mt-1">{errors.number}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Bairro
              </label>
              <input
                type="text"
                value={formData.neighborhood}
                onChange={(e) => handleInputChange("neighborhood", e.target.value)}
                placeholder="Centro"
                className={`w-full px-4 py-3 rounded-lg bg-muted text-foreground border transition-colors ${
                  errors.neighborhood ? "border-red-500" : "border-border/50 focus:border-primary"
                } focus:outline-none`}
              />
              {errors.neighborhood && <p className="text-sm text-red-500 mt-1">{errors.neighborhood}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Cidade
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                placeholder="São Paulo"
                className={`w-full px-4 py-3 rounded-lg bg-muted text-foreground border transition-colors ${
                  errors.city ? "border-red-500" : "border-border/50 focus:border-primary"
                } focus:outline-none`}
              />
              {errors.city && <p className="text-sm text-red-500 mt-1">{errors.city}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Estado
              </label>
              <input
                type="text"
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value.toUpperCase())}
                placeholder="SP"
                maxLength={2}
                className={`w-full px-4 py-3 rounded-lg bg-muted text-foreground border transition-colors ${
                  errors.state ? "border-red-500" : "border-border/50 focus:border-primary"
                } focus:outline-none`}
              />
              {errors.state && <p className="text-sm text-red-500 mt-1">{errors.state}</p>}
            </div>
          </div>
        </div>
      )}

      {/* Order Summary */}
      <div className="bg-card/50 rounded-lg p-4 border border-border/50">
        <h3 className="font-bold text-foreground mb-3">Resumo do Pedido</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Produto:</span>
            <span className="text-foreground">{product.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Preço:</span>
            <span className="text-foreground">R$ {product.price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-green-500">
            <span>Desconto Pix (20%):</span>
            <span>-R$ {discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t border-border/50 pt-2 mt-2">
            <span className="text-foreground">Total:</span>
            <span className="text-primary">R$ {finalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        {step === 2 && (
          <button
            type="button"
            onClick={() => setStep(1)}
            disabled={isLoading}
            className="flex-1 px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all duration-300 font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <ChevronLeft size={18} />
            Voltar
          </button>
        )}

        {step === 1 && (
          <button
            type="button"
            onClick={handleNextStep}
            className="flex-1 btn-neon flex items-center justify-center gap-2"
          >
            <span>Próximo</span>
            <ChevronRight size={18} />
          </button>
        )}

        {step === 2 && (
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 btn-neon disabled:opacity-50"
          >
            {isLoading ? "Gerando Pix..." : "Finalizar Compra"}
          </button>
        )}
      </div>
    </form>
  );
}
