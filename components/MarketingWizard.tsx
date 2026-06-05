import React, { useState } from 'react';
import { sendLeadToAutomation } from '../services/webhookService';

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const BUDGET_OPTIONS = [
  'Ainda não invisto em anúncios',
  'Até R$ 1.000/mês',
  'R$ 1.000 – R$ 5.000/mês',
  'R$ 5.000 – R$ 15.000/mês',
  'R$ 15.000 – R$ 50.000/mês',
  'Acima de R$ 50.000/mês',
];

const DIAGNOSTICO_ITEMS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Análise de Tráfego',
    desc: 'Avaliamos seus canais de aquisição e identificamos onde você está perdendo dinheiro.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Auditoria de Conversão',
    desc: 'Mapeamos gargalos no funil que impedem visitantes de se tornarem clientes.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Plano de Ação',
    desc: 'Entregamos um roadmap claro com prioridades e potencial de retorno estimado.',
  },
];

export const MarketingWizard: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    budget: '',
    niche: '',
    serviceInterest: 'diagnostico-gratuito',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await sendLeadToAutomation(form as any);

    // TrackBR — vincula fingerprint ao perfil
    if (typeof window !== 'undefined' && (window as any).TrackBR) {
      (window as any).TrackBR.identify({
        email: form.email,
        phone: form.phone,
        name: form.name,
      }).catch(() => {});
    }

    // Meta Pixel — evento Lead
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Diagnóstico Gratuito',
        content_category: 'Marketing Digital',
      });
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="wizard" className="py-24 bg-gradient-to-b from-brand-dark to-[#0b1120] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-3">
            <div className="section-accent-line" />
          </div>
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">100% Gratuito</span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
            Diagnóstico <span className="text-brand-primary">Completo</span>
            <br />do seu Negócio
          </h2>
          <p className="mt-4 text-gray-300 text-base max-w-xl mx-auto leading-relaxed">
            Nossa equipe analisa sua operação de marketing e entrega um relatório detalhado com o caminho para escalar suas vendas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left — o que está incluso */}
          <div className="space-y-6">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">O que você recebe:</p>

            <div className="space-y-5">
              {DIAGNOSTICO_ITEMS.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-brand-card border border-white/10 rounded-lg hover:border-brand-accent/25 transition-colors group">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/20 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-black text-sm uppercase tracking-wide mb-1">{item.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-400 uppercase tracking-widest font-semibold pt-2">
              <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Retorno em até 24 horas — sem compromisso
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-brand-card border border-white/12 rounded-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />

            {submitted ? (
              <div className="text-center py-16 px-10">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-500/15 border border-green-500/25 mb-5 text-green-400">
                  <CheckIcon />
                </div>
                <h3 className="text-xl font-black text-white uppercase mb-3">Solicitação Recebida!</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Nossa equipe já recebeu seus dados e entrará em contato em até 24h pelo WhatsApp.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-brand-accent font-bold uppercase text-xs tracking-widest hover:text-white transition-colors underline underline-offset-4"
                >
                  Preencher novamente
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-5">
                <h3 className="text-base font-black text-white uppercase tracking-wide mb-2">Preencha para receber seu diagnóstico</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">Seu Nome</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="block w-full bg-brand-dark border border-white/12 text-white p-3.5 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors rounded-sm text-sm placeholder-gray-600"
                      placeholder="Nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="block w-full bg-brand-dark border border-white/12 text-white p-3.5 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors rounded-sm text-sm placeholder-gray-600"
                      placeholder="(DD) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="block w-full bg-brand-dark border border-white/12 text-white p-3.5 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors rounded-sm text-sm placeholder-gray-600"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">Empresa / Site</label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    value={form.businessName}
                    onChange={handleChange}
                    className="block w-full bg-brand-dark border border-white/12 text-white p-3.5 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors rounded-sm text-sm placeholder-gray-600"
                    placeholder="Nome da empresa ou URL do site"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">Investimento Mensal em Anúncios</label>
                  <select
                    name="budget"
                    required
                    value={form.budget}
                    onChange={handleChange}
                    className="block w-full bg-brand-dark border border-white/12 text-white p-3.5 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors rounded-sm text-sm"
                  >
                    <option value="" disabled>Selecione uma faixa</option>
                    {BUDGET_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">Segmento / Nicho</label>
                  <input
                    type="text"
                    name="niche"
                    value={form.niche}
                    onChange={handleChange}
                    className="block w-full bg-brand-dark border border-white/12 text-white p-3.5 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors rounded-sm text-sm placeholder-gray-600"
                    placeholder="Ex: E-commerce de moda, Clínica estética..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center items-center gap-2 py-4 bg-brand-accent hover:bg-orange-600 text-white font-black uppercase tracking-widest text-sm rounded-sm shadow-[0_0_20px_rgba(255,85,0,0.25)] hover:shadow-[0_0_32px_rgba(255,85,0,0.4)] transition-all mt-2 ${loading ? 'opacity-70 cursor-not-allowed' : 'transform hover:-translate-y-0.5'}`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando...
                    </>
                  ) : 'Solicitar Diagnóstico Gratuito'}
                </button>

                <p className="text-center text-xs text-gray-500 mt-2">
                  Seus dados são protegidos e nunca compartilhados com terceiros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
