import { Mail, MessageSquare, Users } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

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
              action="mailto:contato@neumann.dev"
              method="POST"
              encType="text/plain"
            >
              <h3 className="text-2xl font-semibold mb-4 text-center">Envie uma mensagem</h3>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
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
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-white font-semibold hover:bg-accent transition-smooth"
              >
                Enviar
              </button>
            </form>

   
        </div>
      </div>
    </section>
  );
}
