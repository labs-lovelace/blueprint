import { Mail, MessageSquare, Users, CheckCircle, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);
      form.append("_subject", "Novo contato - Lovelace Blueprint");
      form.append("_captcha", "false");
      form.append("_template", "table");

      console.log("Enviando formulário via AJAX...");

      const response = await fetch(
        "https://formsubmit.co/lovelaceneumann@gmail.com",
        {
          method: "POST",
          body: form,
        }
      );

      if (response.ok) {
        // Show success toast
        toast({
          title: (
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-health-success" />
              <span>Mensagem enviada com sucesso!</span>
            </div>
          ),
          description:
            "Obrigado pelo seu contato! Entraremos em contato o mais breve possível.",
          duration: 5000,
          className:
            "bg-card/95 backdrop-blur-sm border-health-success/20 shadow-neumann",
        });

        // Reset form
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Erro no envio");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: ":( Erro ao enviar mensagem",
        description:
          "Tente novamente em alguns instantes. Estamos trabalhando para resolver o problema.",
        duration: 5000,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contato" className="py-32 relative overflow-hidden z-10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-card/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-card">
              <MessageSquare className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Entre em contato
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quer saber mais sobre o{" "}
              <span className="gradient-text">Neumann</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Estamos desenvolvendo a próxima geração de monitoramento de saúde
              ocupacional
            </p>
          </div>

          {/* Contact  */}

          <form
            className="p-8 bg-card backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg transition-smooth text-left w-full col-span-full"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Envie uma mensagem
            </h3>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Seu Nome"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="seu@email.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Como podemos ajudar?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-lg bg-primary text-white font-semibold hover:bg-accent transition-smooth disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <MessageSquare className="mt-1 h-4 w-4" />
                  Enviar Mensagem
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
