import { Card, CardContent } from "@/components/ui/card";
import { Bot, Zap, Target, TrendingUp, Users, Award } from "lucide-react";

const differentials = [
  {
    icon: Bot,
    title: "IA Integrada",
    description: "Usamos inteligência artificial para otimizar campanhas em tempo real e automatizar processos complexos."
  },
  {
    icon: Target,
    title: "Foco em ROI",
    description: "Cada real investido é monitorado. Nosso objetivo é sempre maximizar seu retorno sobre investimento."
  },
  {
    icon: TrendingUp,
    title: "Crescimento Escalável",
    description: "Estratégias que crescem junto com seu negócio, preparadas para suportar expansão acelerada."
  },
  {
    icon: Users,
    title: "Suporte Dedicado",
    description: "Time especializado disponível para você, com comunicação transparente e relatórios detalhados."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Sobre a Analitika</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
              Especialistas em{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                crescimento digital
              </span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">Analitika Agency</strong> nasceu da necessidade de 
                oferecer soluções realmente eficazes para pequenos negócios e e-commerces que 
                buscam crescimento acelerado e sustentável.
              </p>

              <p>
                Combinamos <strong className="text-primary">expertise em tráfego pago</strong> com 
                o poder da <strong className="text-secondary">inteligência artificial</strong> para 
                criar estratégias que não apenas geram leads, mas transformam visitantes em 
                clientes fiéis.
              </p>

              <p>
                Nossa missão é democratizar o acesso às melhores práticas de marketing digital, 
                oferecendo tecnologia de ponta e estratégias personalizadas para empresas de 
                todos os tamanhos.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-black text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-secondary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Clientes atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Taxa de satisfação</div>
              </div>
            </div>
          </div>

          {/* Right Content - Differentials */}
          <div className="space-y-6">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={item.title}
                  className="group border-0 card-gradient shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;