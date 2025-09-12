import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Gift, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-light/20 rounded-full blur-lg" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20">
            <Gift className="w-5 h-5 text-secondary" />
            <span className="text-white font-semibold">Oferta Especial</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Agende uma reunião{" "}
            <span className="bg-gradient-to-r from-secondary via-secondary-light to-secondary bg-clip-text text-transparent">
              gratuita
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Descubra como podemos <strong>dobrar suas vendas</strong> nos próximos 90 dias com 
            nossas estratégias de tráfego pago e automações com IA
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-secondary/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Auditoria Gratuita</h3>
              <p className="text-white/80 text-sm">
                Análise completa das suas campanhas e identificação de oportunidades
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-primary-light/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Estratégia Personalizada</h3>
              <p className="text-white/80 text-sm">
                Plano de ação específico para o seu negócio e mercado
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-secondary/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Próximos Passos</h3>
              <p className="text-white/80 text-sm">
                Roadmap claro para implementação e crescimento acelerado
              </p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="cta" size="xl" className="group shadow-glow">
              Agendar reunião gratuita
              <Calendar className="w-5 h-5 transition-transform group-hover:scale-110" />
            </Button>
            <p className="text-white/70 text-sm">
              ⚡ Vagas limitadas - Apenas 10 reuniões por semana
            </p>
          </div>

          {/* Urgency */}
          <div className="bg-secondary/20 backdrop-blur-md rounded-2xl p-6 border border-secondary/30 max-w-2xl mx-auto">
            <p className="text-white font-medium mb-2">
              🎯 <strong>Oferta por tempo limitado:</strong>
            </p>
            <p className="text-white/90 text-sm">
              Primeiros 5 clientes ganham <strong>setup gratuito</strong> das automações com IA 
              (valor de R$ 2.997)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;