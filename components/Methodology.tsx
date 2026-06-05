import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Tráfego (Atração)',
    description: 'Não esperamos o cliente vir. Vamos até ele. Usamos Google Ads e Meta Ads para colocar sua oferta na frente de quem já quer comprar.',
    features: ['Google Search & Shopping', 'Facebook & Instagram Ads', 'Remarketing Estratégico'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Engajamento (Web)',
    description: 'Tráfego sem conversão é dinheiro no lixo. Criamos Landing Pages de alta performance desenhadas para transformar visitantes em leads.',
    features: ['Design Persuasivo', 'Velocidade Extrema', 'Copywriting de Vendas'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Conversão Local (GMB)',
    description: 'Dominamos a sua região. Otimizamos seu Google Meu Negócio para que você seja a primeira opção quando procurarem seu serviço no mapa.',
    features: ['SEO Local', 'Gestão de Avaliações', 'Destaque no Maps'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Retenção & IA',
    description: 'Automatizamos o atendimento. Chatbots com IA respondem 24/7, qualificam o lead e agendam reuniões, garantindo que nenhuma oportunidade esfrie.',
    features: ['Chatbots Inteligentes', 'CRM Integrado', 'Follow-up Automático'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="section-accent-line"></div>
            <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">Nosso Processo</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
              O MÉTODO <span className="text-brand-primary">ANALITIKA</span>
            </h2>
            <p className="mt-4 text-gray-300 text-lg max-w-xl">
              Não vendemos "serviços soltos". Implementamos uma máquina de vendas previsível baseada em 4 pilares fundamentais.
            </p>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="whitespace-nowrap px-6 py-3 border border-white/15 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-brand-dark transition-all text-sm rounded"
          >
            Entenda como funciona
          </button>
        </div>

        {/* Steps grid with connector line on desktop */}
        <div className="relative">
          {/* Horizontal connector line */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.num}
                className="method-card bg-brand-card p-8 border border-white/12 relative group transition-all duration-300 rounded-sm"
              >
                {/* Step number watermark */}
                <div className="absolute top-3 right-4 opacity-[0.18] group-hover:opacity-[0.35] transition-opacity select-none pointer-events-none">
                  <span className="text-7xl font-black text-white leading-none">{step.num}</span>
                </div>

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 mb-6 flex items-center justify-center bg-white/10 rounded-lg text-gray-200 border border-white/20 group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-all duration-300 shadow-sm">
                  {step.icon}
                </div>

                {/* Step indicator dot */}
                <div className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-brand-dark border-2 border-white/30 group-hover:border-brand-accent transition-colors duration-300 items-center justify-center z-20">
                  <div className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-brand-accent transition-colors duration-300"></div>
                </div>

                <h3 className="text-base font-black text-white mb-3 uppercase tracking-wide leading-tight">{step.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {step.description}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-white/15">
                  {step.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-xs text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                      <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2.5 flex-shrink-0"></span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Hover accent bottom line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-accent to-orange-400 group-hover:w-full transition-all duration-500 rounded-b-sm"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
