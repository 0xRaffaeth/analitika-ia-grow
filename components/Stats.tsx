import React from 'react';

const stats = [
  {
    value: '+R$ 12 Mi',
    label: 'Investidos em Ads',
    sub: 'Google & Meta combinados',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: '+200',
    label: 'Clientes Atendidos',
    sub: 'Em diversos segmentos',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    value: '+350',
    label: 'Projetos de Web',
    sub: 'Landing pages & sites',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    value: '5x',
    label: 'ROI Médio',
    sub: 'Retorno sobre investimento',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export const Stats: React.FC = () => {
  return (
    <div className="relative z-20 bg-brand-dark border-b border-white/5">
      {/* Accent top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 divide-y md:divide-y-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative py-10 px-6 text-center hover:bg-white/[0.02] transition-colors cursor-default"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-accent/10 text-brand-accent border border-brand-accent/15 mb-4 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>

              {/* Value */}
              <p className="text-3xl lg:text-4xl font-black text-white mb-1.5 group-hover:text-brand-accent transition-colors duration-200 tabular-nums">
                {stat.value}
              </p>

              {/* Label */}
              <p className="text-xs text-slate-300 uppercase tracking-widest font-bold mb-1">
                {stat.label}
              </p>

              {/* Sub */}
              <p className="text-xs text-gray-400 font-medium">
                {stat.sub}
              </p>

              {/* Bottom accent on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-accent group-hover:w-12 transition-all duration-300 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    </div>
  );
};