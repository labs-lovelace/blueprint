import { Heart, Github, Linkedin, Twitter } from "lucide-react";
import Logo from "@/components/Logo";

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-border/50 z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 ">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="Neumann Logo" className="h-10" />
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Plataforma de monitoramento de saúde ocupacional com
                inteligência artificial avançada. Protegendo a saúde dos
                trabalhadores com tecnologia de ponta
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#neumann"
                    className="hover:text-primary transition-smooth"
                  >
                    Neumann
                  </a>
                </li>
                <li>
                  <a
                    href="#neumann"
                    className="hover:text-primary transition-smooth"
                  >
                    Plataforma
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="hover:text-primary transition-smooth"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3 mb-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-smooth">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-smooth">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-smooth">
                    LGPD
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex mb-12 items-center relative">
            <div className="flex gap-4">
              <a
                href="https://github.com/labs-lovelace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1ca9f9] w-10 h-10 rounded-lg bg-muted/50 hover:bg-primary hover:text-white flex items-center justify-center transition-smooth"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="http://www.linkedin.com/company/lovelace-company"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1ca9f9] w-10 h-10 rounded-lg bg-muted/50 hover:bg-primary hover:text-white flex items-center justify-center transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center gap-2 absolute right-0">
              <span className="text-xs text-muted-foreground">Apoio:</span>
              <img
                src="/logo-sesi.png"
                alt="SESI - Serviço Social da Indústria"
                className="h-[75px] opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © {new Date().getFullYear()} Lovelace. Todos os direitos
                reservados.
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                Made with{" "}
                <Heart className="h-4 w-4 text-health-critical fill-health-critical" />{" "}
                by Lovelace
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
