import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, ExternalLink } from "lucide-react";

interface FormData {
  companyName: string;
  description: string;
  address: string;
  cep: string;
  openingDate: string;
  website: string;
  coverageArea: string;
  services: string;
  products: string;
  businessHours: string;
  saturdayHours: string;
  whatsapp: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  tiktok: string;
  observations: string;
}

const FIELDS = [
  { key: "companyName", label: "Nome da Empresa", placeholder: "Ex: Empresa XYZ", type: "text" },
  { key: "description", label: "Descrição", placeholder: "Descreva seu negócio...", type: "textarea" },
  { key: "address", label: "Endereço", placeholder: "Ex: Rua Principal, 123", type: "text" },
  { key: "cep", label: "CEP", placeholder: "Ex: 12345-678", type: "text" },
  { key: "openingDate", label: "Data de Abertura", placeholder: "mm/dd/yyyy", type: "date" },
  { key: "website", label: "Site", placeholder: "https://seusite.com", type: "url" },
  { key: "coverageArea", label: "Área de Cobertura", placeholder: "Ex: Cidade inteira", type: "text" },
  { key: "services", label: "Serviços", placeholder: "Liste seus serviços...", type: "textarea" },
  { key: "products", label: "Produtos", placeholder: "Liste seus produtos...", type: "textarea" },
  { key: "businessHours", label: "Horário", placeholder: "Ex: 09:00 - 18:00", type: "text" },
  { key: "saturdayHours", label: "Horário Sábado", placeholder: "Ex: 09:00 - 13:00", type: "text" },
  { key: "whatsapp", label: "WhatsApp", placeholder: "Ex: 11 99999-9999", type: "tel" },
  { key: "facebook", label: "Facebook", placeholder: "https://facebook.com/seu-perfil", type: "url" },
  { key: "instagram", label: "Instagram", placeholder: "@seu_instagram", type: "text" },
  { key: "linkedin", label: "LinkedIn", placeholder: "https://linkedin.com/company/...", type: "url" },
  { key: "tiktok", label: "TikTok", placeholder: "@seu_tiktok", type: "text" },
  { key: "observations", label: "Observações Gerais", placeholder: "Adicione observações importantes...", type: "textarea" },
];

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    description: "",
    address: "",
    cep: "",
    openingDate: "",
    website: "",
    coverageArea: "",
    services: "",
    products: "",
    businessHours: "",
    saturdayHours: "",
    whatsapp: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    tiktok: "",
    observations: "",
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const filledFields = Object.values(formData).filter((value) => value.trim() !== "").length;
    const totalFields = Object.keys(formData).length;
    setProgress(Math.round((filledFields / totalFields) * 100));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendWhatsApp = () => {
    if (!formData.whatsapp) {
      alert("Por favor, preencha o número de WhatsApp");
      return;
    }

    const message = `*Checklist Google Meu Negócio*\n\n` +
      `*Nome da Empresa:* ${formData.companyName || "-"}\n` +
      `*Descrição:* ${formData.description || "-"}\n` +
      `*Endereço:* ${formData.address || "-"}\n` +
      `*CEP:* ${formData.cep || "-"}\n` +
      `*Data de Abertura:* ${formData.openingDate || "-"}\n` +
      `*Site:* ${formData.website || "-"}\n` +
      `*Área de Cobertura:* ${formData.coverageArea || "-"}\n` +
      `*Serviços:* ${formData.services || "-"}\n` +
      `*Produtos:* ${formData.products || "-"}\n` +
      `*Horário:* ${formData.businessHours || "-"}\n` +
      `*Horário Sábado:* ${formData.saturdayHours || "-"}\n` +
      `*Facebook:* ${formData.facebook || "-"}\n` +
      `*Instagram:* ${formData.instagram || "-"}\n` +
      `*LinkedIn:* ${formData.linkedin || "-"}\n` +
      `*TikTok:* ${formData.tiktok || "-"}\n` +
      `*Observações:* ${formData.observations || "-"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = formData.whatsapp.replace(/\D/g, "");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-4 md:p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
              G
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              GMN Check list
            </h1>
          </div>
          <a
            href="https://www.google.com/business/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium transition-colors"
          >
            Reivindicar Perfil
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-3">
            Otimize seu Perfil no Google
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-6">
            Preencha todos os dados do seu negócio e envie direto para o WhatsApp. Não deixe nenhuma informação de fora!
          </p>

          {/* Progress Section */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Progresso do Preenchimento
              </span>
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {progress}%
              </span>
            </div>
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
              Você ainda tem {100 - progress}% do formulário para preencher
            </p>
          </div>
        </div>
      </div>

      {/* Form Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {FIELDS.map((field, index) => {
          const value = formData[field.key as keyof FormData];
          const isFilled = value.trim() !== "";
          const borderColor = isFilled ? "border-green-400" : "border-orange-400";

          return (
            <div
              key={field.key}
              className={`relative p-4 rounded-lg bg-white dark:bg-slate-800 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70 border-2 border-dashed ${borderColor} transition-all duration-300 hover:shadow-lg`}
            >
              {/* Field Number Badge */}
              <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${isFilled ? "bg-green-500" : "bg-orange-500"}`}>
                {index + 1}
              </div>

              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                {field.label}
              </label>

              {field.type === "textarea" ? (
                <Textarea
                  name={field.key}
                  placeholder={field.placeholder}
                  value={value}
                  onChange={handleChange}
                  className="w-full min-h-24 resize-none"
                />
              ) : (
                <Input
                  type={field.type}
                  name={field.key}
                  placeholder={field.placeholder}
                  value={value}
                  onChange={handleChange}
                  className="w-full"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="max-w-4xl mx-auto fixed bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-slate-100 dark:from-slate-900 to-transparent">
        <div className="max-w-4xl mx-auto flex gap-4">
          <Button
            onClick={handleSendWhatsApp}
            className="flex-1 h-12 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <MessageCircle size={20} />
            Enviar para WhatsApp ({progress}%)
          </Button>
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Spacer for fixed footer */}
      <div className="h-24" />

      {/* Footer */}
      <footer className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
        Made with Manus
      </footer>
    </div>
  );
}
