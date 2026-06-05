import React, { useState } from 'react';

const FAQS = [
  {
    q: 'Quanto tempo leva para ver resultados?',
    a: 'Os primeiros resultados aparecem entre 15 e 30 dias após o início das campanhas. O pico de performance costuma ser atingido entre o 2º e o 3º mês, quando os dados de otimização já estão consolidados.',
  },
  {
    q: 'Preciso ter um site para contratar vocês?',
    a: 'Não necessariamente. Podemos trabalhar com landing pages dedicadas, perfis do Google Meu Negócio ou plataformas como Shopify e Hotmart. Avaliamos a melhor estrutura durante o diagnóstico.',
  },
  {
    q: 'Qual o investimento mínimo em anúncios?',
    a: 'Trabalhamos com clientes a partir de R$ 1.500/mês em verba de mídia. Para segmentos mais competitivos, recomendamos pelo menos R$ 5.000/mês para resultados consistentes e escaláveis.',
  },
  {
    q: 'Como funciona o contrato?',
    a: 'Trabalhamos com contratos mensais sem fidelidade após os primeiros 3 meses. Não acreditamos em prender clientes — nosso objetivo é que os resultados falem por si.',
  },
  {
    q: 'Vocês atendem qual tipo de negócio?',
    a: 'Atendemos e-commerces, infoprodutos, clínicas, serviços locais e SaaS. Nosso método é agnóstico de segmento — o que muda é a estratégia, não o processo.',
  },
  {
    q: 'O que está incluso na gestão mensal?',
    a: 'Criação e gestão de campanhas, otimização contínua, relatórios semanais, reunião mensal de performance e suporte via WhatsApp em horário comercial. Sem custo extra por criativos básicos.',
  },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`w-5 h-5 text-brand-accent transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);

export const ContactForm: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/10">
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-brand-primary/4 rounded-full blur-[120px] pointer-events-none translate-x-1/3" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-3">
            <div className="section-accent-line" />
          </div>
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">Tire suas dúvidas</span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
            Perguntas <span className="text-brand-primary">Frequentes</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base max-w-lg mx-auto leading-relaxed">
            Tudo que você precisa saber antes de dar o próximo passo.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3 mb-16">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-lg transition-colors ${openIndex === i ? 'border-brand-accent/30 bg-brand-card' : 'border-white/10 bg-brand-card/40'}`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
              >
                <span className="text-sm md:text-base font-bold text-white">{faq.q}</span>
                <ChevronIcon open={openIndex === i} />
              </button>
              {openIndex === i && (
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <p className="text-gray-300 text-sm leading-relaxed border-t border-white/8 pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-10 bg-gradient-to-br from-brand-accent/8 to-brand-primary/8 border border-white/12 rounded-xl">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-2">Ainda tem dúvidas?</p>
          <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
            Fale com um <span className="text-brand-accent">especialista</span>
          </h3>
          <p className="text-gray-300 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
            Solicite seu diagnóstico gratuito e tire todas as suas dúvidas em uma sessão de 30 minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('wizard')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-accent hover:bg-orange-600 text-white px-8 py-3.5 rounded-sm text-sm font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(255,85,0,0.25)] hover:shadow-[0_0_32px_rgba(255,85,0,0.45)] transform hover:-translate-y-0.5"
            >
              Solicitar Diagnóstico
            </button>
            <a
              href="https://wa.me/5562994075161"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-sm text-sm font-bold uppercase tracking-widest transition-all hover:bg-white/5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
