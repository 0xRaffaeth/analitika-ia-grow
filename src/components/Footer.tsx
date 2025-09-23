import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background relative">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-black text-secondary mb-2">
                Analitika Agency
              </h3>
              <p className="text-background/80 leading-relaxed max-w-md">
                Especialistas em tráfego pago e automações com inteligência artificial 
                para acelerar o crescimento de pequenos negócios e e-commerces.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-background/60 text-sm">Email</p>
                  <p className="text-background font-medium">contato@analitikaagency.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-background/60 text-sm">WhatsApp</p>
                  <p className="text-background font-medium">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-background/60 text-sm">Localização</p>
                  <p className="text-background font-medium">São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xl font-bold text-background mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-background/80 hover:text-secondary transition-colors">
                  Google Ads
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-secondary transition-colors">
                  Meta Ads
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-secondary transition-colors">
                  TikTok Ads
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-secondary transition-colors">
                  Automações com IA
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-secondary transition-colors">
                  Consultoria Estratégica
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xl font-bold text-background mb-6">Empresa</h4>
            <ul className="space-y-3 mb-8">
              <li>
                <a href="#about" className="text-background/80 hover:text-secondary transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/80 hover:text-secondary transition-colors">
                  Cases de sucesso
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-secondary transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#blog" className="text-background/80 hover:text-secondary transition-colors">
                  Blog
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="text-background font-semibold mb-4">Redes Sociais</h5>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm text-center md:text-left">
            © 2024 Analitika Agency. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-secondary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-background/60 hover:text-secondary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        variant="cta"
        className="fixed bottom-6 right-6 z-50 shadow-glow"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </footer>
  );
};

export default Footer;