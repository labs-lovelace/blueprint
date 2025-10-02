import {
  Watch,
  Activity,
  Thermometer,
  Heart,
  Waves,
  Database,
  Lock,
  Wifi,
  Battery,
  Shield,
  Zap,
  Brain,
  Move3d,
} from "lucide-react";

export function NeumannSection() {
  return (
    <section id="neumann" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Monitoramento Clínico{" "}
              <span className="gradient-text">de Próxima Geração</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma pulseira discreta e inteligente que coleta dados biométricos
              contínuos para garantir a segurança e saúde dos funcionários
            </p>
            <p className="text-xl italic mt-2 text-muted-foreground max-w-3xl mx-auto">
              O futuro do trabalho começa aqui
            </p>
          </div>

          {/* Main Card */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 md:items-stretch">
            {/* Wearable Info */}
            <div className="flex">
              <div className="p-8 bg-card backdrop-blur-sm rounded-3xl border border-border/50 shadow-card flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-6">Pulseira Neumann</h3>
                <p className="text-muted-foreground mb-8">
                  Wearable de nível clínico, discreto e sem tela para evitar
                  distrações. Resistente, durável e sempre conectado
                </p>

                <div className="space-y-10 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Resistência IP68</div>
                      <div className="text-sm text-muted-foreground">
                        À prova d'água e poeira
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Battery className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">Bateria de 7+ dias</div>
                      <div className="text-sm text-muted-foreground">
                        Monitoramento ininterrupto
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-health-success/10 flex items-center justify-center">
                      <Wifi className="h-5 w-5 text-health-success" />
                    </div>
                    <div>
                      <div className="font-semibold">WiFi/Bluetooth + 4G</div>
                      <div className="text-sm text-muted-foreground">
                        Conectividade redundante
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Parameters */}
            <div className="flex">
              <div className="p-8 bg-card backdrop-blur-sm rounded-3xl border border-border/50 shadow-card flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-6">
                  Parâmetros Monitorados
                </h3>

                <div className="space-y-5 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Frequência Cardíaca</div>
                      <div className="text-sm text-muted-foreground">
                        Medição contínua em BPM
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Activity className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">Variação da FC (HRV)</div>
                      <div className="text-sm text-muted-foreground">
                        Indicador de estresse em ms
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-health-success/10 flex items-center justify-center shrink-0">
                      <Thermometer className="h-6 w-6 text-health-success" />
                    </div>
                    <div>
                      <div className="font-semibold">Temperatura</div>
                      <div className="text-sm text-muted-foreground">
                        Monitoramento em °C
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Move3d className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">
                        Movimento (Acelerometria)
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Análise ergonômica em m/s²
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Brain className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">
                        Atividade Eletrodérmica (EDA)
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Resposta ao estresse em µS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Features */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Plataforma de{" "}
              <span className="gradient-text">Gestão Completa</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sistema web com dashboards inteligentes, relatórios especializados
              e conformidade total com LGPD
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 shadow-card hover:shadow-neumann transition-smooth">
              <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">
                Dashboard Inteligente
              </h4>
              <p className="text-sm text-muted-foreground">
                Visualizações em tempo real, alertas automáticos e análise
                preditiva com IA
              </p>
            </div>

            <div className="p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 shadow-card hover:shadow-neumann transition-smooth">
              <div className="w-12 h-12 mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                <Lock className="h-6 w-6 text-accent" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Segurança Total</h4>
              <p className="text-sm text-muted-foreground">
                Criptografia end-to-end, autenticação 2FA e conformidade com
                LGPD/GDPR
              </p>
            </div>

            <div className="p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 shadow-card hover:shadow-neumann transition-smooth">
              <div className="w-12 h-12 mb-4 rounded-xl bg-health-success/10 flex items-center justify-center">
                <Activity className="h-6 w-6 text-health-success" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Relatórios SESST</h4>
              <p className="text-sm text-muted-foreground">
                Formatação específica para medicina ocupacional, alinhados com
                NR-7 e PCMSO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
