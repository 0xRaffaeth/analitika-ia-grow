import { TrendingDown, Users, Lightbulb, ArrowRight, Zap, Target, Bot } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Redução de custos",
    description: "Diminua em até 60% o CAC com otimizações inteligentes e segmentação precisa baseada em dados.",
    percentage: "60%",
    color: "text-green-500"
  },
  {
    icon: Users,
    title: "Mais leads qualificados",
    description: "Aumente a quantidade e qualidade dos seus leads com automações que qualificam prospects automaticamente.",
    percentage: "+300%",
    color: "text-primary"
  },
  {
    icon: Lightbulb,
    title: "Estratégias personalizadas",
    description: "Cada negócio é único. Desenvolvemos estratégias sob medida com base no seu nicho e objetivos específicos.",
    percentage: "100%",
    color: "text-secondary"
  }
];

const stats = [
  {
    icon: Target,
    value: "98%",
    label: "Taxa de satisfação",
    description: "dos nossos clientes"
  },
  {
    icon: TrendingDown,
    value: "45%",
    label: "Redução média no CAC",
    description: "nos primeiros 90 dias"
  },
  {
    icon: Bot,
    value: "24/7",
    label: "Automações ativas",
    description: "trabalhando para você"
  },
  {
    icon: Users,
    value: "R$ 50M+",
    label: "Investimento gerenciado",
    description: "em campanhas pagas"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-6 py-3 mb-6">
            <Target className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-semibold">Benefícios Comprovados</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Resultados que{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              transformam negócios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossos clientes veem resultados consistentes com nossas estratégias 
            comprovadas de tráfego pago e automações inteligentes
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={benefit.title}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-1 border border-border/50"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className={`text-4xl font-black ${benefit.color}`}>
                    {benefit.percentage}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 shadow-large">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Números que comprovam nossa expertise
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Mais de 5 anos ajudando empresas a crescerem com tráfego pago e automações inteligentes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center group">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="text-4xl font-black text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-white/70 text-sm">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;