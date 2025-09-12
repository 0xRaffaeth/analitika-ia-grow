import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO - TechCommerce",
    company: "E-commerce de Eletrônicos",
    content: "A Analitika transformou completamente nosso e-commerce. Em 6 meses, aumentamos o faturamento em 250% e reduzimos o CAC em 40%. As automações com IA são sensacionais!",
    rating: 5,
    results: "+250% faturamento",
    avatar: "CS"
  },
  {
    name: "Ana Carolina",
    role: "Diretora de Marketing",
    company: "BeautySpace",
    content: "Trabalhar com a Analitika foi a melhor decisão que tomamos. O ROI das campanhas triplicou e as automações nos poupam 20 horas por semana. Recomendo de olhos fechados!",
    rating: 5,
    results: "3x ROI",
    avatar: "AC"
  },
  {
    name: "Fernando Costa",
    role: "Fundador",
    company: "FitnessPro",
    content: "Impressionante como conseguiram escalar nosso negócio de forma sustentável. As estratégias de tráfego pago trouxeram leads de altíssima qualidade e as vendas decolaram.",
    rating: 5,
    results: "+180% leads",
    avatar: "FC"
  }
];

const companyLogos = [
  "TechCommerce",
  "BeautySpace", 
  "FitnessPro",
  "InnovaDigital",
  "GrowthLab",
  "SmartSales"
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-primary fill-current" />
            <span className="text-primary font-semibold">Prova Social</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Clientes que{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              cresceram conosco
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja os resultados reais de empresas que confiaram na Analitika 
            para acelerar seu crescimento digital
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="group relative overflow-hidden border-0 card-gradient shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>

                {/* Results Badge */}
                <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-6">
                  {testimonial.results}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <p className="text-muted-foreground mb-8 font-medium">
            Empresas que confiam na Analitika Agency
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {companyLogos.map((logo, index) => (
              <div 
                key={logo}
                className="text-2xl font-bold text-foreground hover:opacity-100 transition-opacity duration-300 cursor-default"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;