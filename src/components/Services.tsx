import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Bot, Users, ArrowRight, Zap, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Gestão de Tráfego Pago",
    description: "Google Ads, Meta Ads e TikTok Ads otimizados com IA para maximizar seu ROI e reduzir custos de aquisição.",
    features: [
      "Campanhas otimizadas com IA",
      "Análise preditiva de performance",
      "Segmentação inteligente",
      "Relatórios em tempo real"
    ],
    highlight: "Até 3x mais conversões"
  },
  {
    icon: Bot,
    title: "Automações com IA",
    description: "Chatbots inteligentes, automação de vendas e atendimento personalizado para escalar seu negócio 24/7.",
    features: [
      "Chatbots conversacionais",
      "Qualificação automática de leads",
      "Follow-up personalizado",
      "Integração com CRM"
    ],
    highlight: "80% menos tempo manual"
  },
  {
    icon: Users,
    title: "Consultoria Estratégica",
    description: "Estratégias personalizadas baseadas em dados para acelerar o crescimento do seu negócio digital.",
    features: [
      "Auditoria completa",
      "Planejamento estratégico",
      "Mentoria especializada",
      "Acompanhamento semanal"
    ],
    highlight: "Estratégia sob medida"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Soluções completas para{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              acelerar suas vendas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combinamos as melhores estratégias de tráfego pago com automações inteligentes 
            para gerar mais leads qualificados e aumentar suas conversões
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group relative overflow-hidden border-0 card-gradient shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg p-[1px]">
                  <div className="w-full h-full bg-card rounded-lg" />
                </div>

                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {service.highlight}
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="relative z-10">
                  <Button variant="ghost" className="w-full group/btn">
                    Saiba mais
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="cta" size="lg">
            Quero uma proposta personalizada
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;