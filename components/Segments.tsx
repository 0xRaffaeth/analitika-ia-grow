import React from 'react';

const segments = [
  {
    title: 'Negócios Locais',
    desc: 'Restaurantes, Clínicas, Escritórios que precisam dominar a região e aparecer no mapa.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    highlight: 'SEO Local + GMB',
  },
  {
    title: 'Prestadores de Serviço',
    desc: 'Advogados, Engenheiros, Consultores buscando leads qualificados e autoridade digital.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    highlight: 'Geração de Leads',
  },
  {
    title: 'E-commerce',
    desc: 'Lojas virtuais que buscam escala de vendas, ROAS positivo e clientes recorrentes.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    highlight: 'Google Shopping + Meta',
  },
  {
    title: 'Infoprodutos',
    desc: 'Especialistas que querem lançar ou vender no perpétuo com estrutura de funil.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    highlight: 'Funil Completo + IA',
  },
];

export const Segments: React.FC = () => {
  return (
    <section id="segments" className="py-24 bg-[#060d1a] border-t border-white/5 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-brand-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-3">
            <div className="section-accent-line"></div>
          </div>
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">Quem atendemos</span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
            Para Quem é a <span className="text-brand-primary">Analitika?</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-lg mx-auto text-base">
            Nossa metodologia se adapta ao seu modelo de negócio — desde PMEs locais até operações de e-commerce.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {segments.map((seg, idx) => (
            <div
              key={idx}
              className="segment-card group bg-brand-card hover:bg-[#111c33] p-7 border border-white/5 hover:border-brand-accent/30 transition-all duration-300 cursor-default rounded-sm"
            >
              {/* Icon container */}
              <div className="w-14 h-14 rounded-xl bg-brand-primary/10 border border-brand-primary/15 flex items-center justify-center text-brand-primary mb-5 group-hover:bg-brand-accent/10 group-hover:border-brand-accent/20 group-hover:text-brand-accent transition-all duration-300">
                {seg.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-black uppercase text-base mb-2 leading-tight tracking-wide group-hover:text-brand-accent transition-colors duration-200">
                {seg.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed mb-5">
                {seg.desc}
              </p>

              {/* Highlight tag */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-white/5 border border-white/12 text-xs font-bold text-gray-300 uppercase tracking-wide group-hover:border-brand-accent/20 group-hover:text-brand-accent transition-all">
                <span className="w-1 h-1 rounded-full bg-brand-accent flex-shrink-0"></span>
                {seg.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="bg-gradient-to-r from-brand-accent/10 via-brand-accent/5 to-brand-primary/10 border border-white/12 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-black text-xl uppercase tracking-tight leading-tight mb-1">
              Seu negócio se encaixa em algum desses perfis?
            </p>
            <p className="text-gray-300 text-sm">
              Faça o diagnóstico gratuito e descubra o plano ideal para o seu segmento.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button
              onClick={() => document.getElementById('wizard')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold uppercase tracking-wider text-xs rounded transition-all whitespace-nowrap"
            >
              Diagnóstico Gratuito
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-brand-accent hover:bg-orange-600 text-white font-black uppercase tracking-wider text-xs rounded shadow-[0_0_20px_rgba(255,85,0,0.3)] hover:shadow-[0_0_30px_rgba(255,85,0,0.5)] transition-all whitespace-nowrap"
            >
              Quero uma Sessão Estratégica
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
