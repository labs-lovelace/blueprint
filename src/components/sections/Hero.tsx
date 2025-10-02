import { Brain, Sparkles, Shield, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <img
        src="/logo.png"
        alt="Lovelace Logo"
        className="absolute top-4 left-1/2 -translate-x-1/2 h-12 object-contain z-20 drop-shadow-lg"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Inteligência Artificial para{" "}
            <span className="gradient-text">Saúde Ocupacional</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            A Lovelace nasceu da visão de que a tecnologia pode ser uma poderosa
            aliada na construção de ambientes de trabalho mais humanos e
            sustentáveis.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 shadow-card hover:shadow-neumann transition-smooth">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Machine Learning</h3>
              <p className="text-sm text-muted-foreground">
                Algoritmos que detectam padrões de risco no ambiente de trabalho
              </p>
            </div>

            <div className="p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 shadow-card hover:shadow-neumann transition-smooth">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Tempo Real</h3>
              <p className="text-sm text-muted-foreground">
                Análise contínua de HRV, frequência cardíaca, temperatura,
                movimento e atividade eletrodérmica
              </p>
            </div>

            <div className="p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 shadow-card hover:shadow-neumann transition-smooth">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-health-success/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-health-success" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Prevenção</h3>
              <p className="text-sm text-muted-foreground">
                Detecta estresse, fadiga, arritmias e riscos ergonômicos antes
                que se tornem problemas graves
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
