import React from 'react';
import { ServiceItem } from '../types';

const MapPinIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const MonitorIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const BotIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const services = [
  {
    id: 'gmb',
    title: 'Google Meu Negócio',
    description: 'Domine as buscas locais. Otimizamos seu perfil para que clientes próximos encontrem você primeiro, aumentando chamadas e visitas físicas.',
    icon: <MapPinIcon />,
  },
  {
    id: 'web',
    title: 'Websites de Alta Conversão',
    description: 'Não fazemos apenas sites bonitos. Criamos máquinas de vendas com design moderno, velozes e focados na experiência do usuário.',
    icon: <MonitorIcon />,
  },
  {
    id: 'traffic',
    title: 'Gestão de Tráfego Pago',
    description: 'Anúncios precisos no Google e Facebook/Instagram. Alcançamos o cliente ideal no momento certo de compra para maximizar seu ROI.',
    icon: <RocketIcon />,
  },
  {
    id: 'automations',
    title: 'Automação com IA',
    description: 'Atendimento 24/7 com Chatbots inteligentes e automação de CRM. Ganhe eficiência e nunca mais perca um lead por demora na resposta.',
    icon: <BotIcon />,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-3">
            <div className="section-accent-line"></div>
          </div>
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">Nossas Especialidades</span>
          <p className="mt-2 text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-none">
            Tecnologia e Estratégia <br className="hidden md:block" />para Crescer
          </p>
          <p className="mt-4 max-w-2xl text-base text-gray-400 mx-auto leading-relaxed">
            Metodologia validada para atrair, converter e fidelizar clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-brand-card p-7 border border-white/5 hover:border-brand-accent/30 hover:bg-[#111c33] transition-all duration-300 flex flex-col rounded-sm relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-accent to-orange-400 group-hover:w-full transition-all duration-500 rounded-b-sm"></div>
              <div className="w-14 h-14 mb-5 flex items-center justify-center bg-brand-primary/10 border border-brand-primary/15 text-brand-primary rounded-xl group-hover:bg-brand-accent/10 group-hover:border-brand-accent/20 group-hover:text-brand-accent transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-base font-black text-white mb-3 uppercase tracking-wide leading-tight group-hover:text-brand-accent transition-colors duration-200">{service.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};