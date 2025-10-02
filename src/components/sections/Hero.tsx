import { Brain, Sparkles, Shield, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <img
        src="/logo.png"
        alt="Lovelace Logo"
        className="absolute top-4 left-1/2 -translate-x-1/2 h-12 object-contain z-20 drop-shadow-lg"
      />
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving gradient blobs with different blue tones */}
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "linear-gradient(45deg, hsl(204, 93%, 51%), hsl(194, 100%, 63%), hsl(204, 100%, 85%))",
            animation: "moveBlob1 15s ease-in-out infinite",
            left: "10%",
            top: "20%",
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full blur-2xl opacity-25"
          style={{
            background:
              "linear-gradient(135deg, hsl(194, 100%, 63%), hsl(204, 93%, 51%), hsl(204, 100%, 94%))",
            animation: "moveBlob2 20s ease-in-out infinite reverse",
            right: "15%",
            bottom: "25%",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full blur-xl opacity-20"
          style={{
            background:
              "linear-gradient(225deg, hsl(204, 100%, 85%), hsl(204, 93%, 51%), hsl(194, 100%, 63%))",
            animation: "moveBlob3 12s ease-in-out infinite",
            left: "60%",
            top: "15%",
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full blur-2xl opacity-35"
          style={{
            background:
              "linear-gradient(315deg, hsl(204, 93%, 51%), hsl(204, 100%, 85%), hsl(194, 100%, 63%))",
            animation: "moveBlob4 18s ease-in-out infinite reverse",
            left: "20%",
            bottom: "30%",
          }}
        />
        <div
          className="absolute w-56 h-56 rounded-full blur-xl opacity-25"
          style={{
            background:
              "linear-gradient(90deg, hsl(194, 100%, 63%), hsl(204, 100%, 94%), hsl(204, 93%, 51%))",
            animation: "moveBlob5 14s ease-in-out infinite",
            right: "25%",
            top: "40%",
          }}
        />
      </div>

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
                Algoritmos que detectam padrões de risco no ambiente de
                trabalho.
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
