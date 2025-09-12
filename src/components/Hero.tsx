import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Target, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Futuristic technology background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Target className="w-8 h-8 text-secondary" />
        </div>
      </div>
      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <TrendingUp className="w-6 h-6 text-primary-light" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-14 h-14 bg-secondary-light/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Zap className="w-7 h-7 text-secondary-light" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20">
            <Zap className="w-5 h-5 text-secondary" />
            <span className="text-white font-medium">Especialistas em Tráfego Pago + IA</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Mais clientes,{" "}
            <span className="bg-gradient-to-r from-secondary via-secondary-light to-secondary bg-clip-text text-transparent animate-pulse-soft">
              menos esforço
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Tráfego pago e automações com <strong>inteligência artificial</strong> para o seu negócio crescer de forma escalável e previsível
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="cta" size="xl" className="group">
              Fale com um especialista
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20">
              <Play className="w-5 h-5" />
              Ver como funciona
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">+200%</div>
              <div className="text-sm">ROI médio</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">150+</div>
              <div className="text-sm">Clientes ativos</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">R$ 50M+</div>
              <div className="text-sm">Gerenciado em ads</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;