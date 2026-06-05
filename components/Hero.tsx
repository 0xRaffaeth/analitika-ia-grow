import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5 bg-brand-dark noise-overlay">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none bg-grid"></div>

      {/* Gradient Blobs — mais intensos para profundidade */}
      <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[700px] h-[700px] bg-brand-primary/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-brand-accent/8 rounded-full blur-[100px] pointer-events-none"></div>
      {/* Centro sutil */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-brand-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left fade-in-up">
            {/* Badge de status */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/25 text-brand-accent text-xs font-bold uppercase tracking-wider mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              Assessoria de Growth &amp; Performance
              <span className="ml-1 bg-brand-accent/20 px-1.5 py-0.5 rounded text-[9px] text-brand-accent font-black tracking-widest">NOVO</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6">
              SUA EMPRESA <br />
              <span className="shimmer-text">
                VENDENDO MAIS.
              </span>
              <br />
              TODOS OS DIAS.
            </h1>

            <p className="mt-4 max-w-xl text-lg text-slate-300 leading-relaxed mb-8 pl-5 border-l-2 border-brand-accent/60">
              Não somos apenas uma agência. Implementamos um ecossistema de vendas validado para escalar o faturamento do seu negócio através de dados, tráfego e inteligência artificial.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 fade-in-up fade-in-up-delay-1">
              <button
                onClick={() => document.getElementById('wizard')?.scrollIntoView({ behavior: 'smooth' })}
                className="cta-pulse px-8 py-4 bg-brand-accent hover:bg-orange-600 text-white font-black rounded text-sm uppercase tracking-widest shadow-[0_0_24px_rgba(255,85,0,0.35)] hover:shadow-[0_0_36px_rgba(255,85,0,0.55)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Diagnóstico Gratuito
              </button>
              <button
                onClick={() => document.getElementById('wizard')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/5 border border-white/15 hover:border-brand-accent/50 hover:bg-brand-accent/5 text-white font-bold rounded text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                Diagnóstico Gratuito com IA
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-3 fade-in-up fade-in-up-delay-2">
              <div className="trust-badge">
                <svg className="w-3.5 h-3.5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="text-xs font-bold text-gray-300 uppercase tracking-wide">Sem contrato de fidelidade</span>
              </div>
              <div className="trust-badge">
                <svg className="w-3.5 h-3.5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="text-xs font-bold text-gray-300 uppercase tracking-wide">ROI garantido ou pausamos</span>
              </div>
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold w-full mt-1">
                Vagas limitadas — aceitamos novos clientes por indicação
              </p>
            </div>
          </div>

          {/* Dashboard Visual */}
          <div className="relative hidden lg:block fade-in-up fade-in-up-delay-3">
            <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Glow ring behind card */}
                <div className="absolute inset-8 bg-brand-primary/10 rounded-2xl blur-2xl"></div>

                <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a30] to-brand-dark rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col p-6">
                    {/* Dashboard header */}
                    <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="h-3 w-20 bg-white/10 rounded mb-1.5"></div>
                          <div className="h-2 w-12 bg-white/5 rounded"></div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                          <div className="h-7 px-2 bg-brand-accent/15 rounded border border-brand-accent/20 flex items-center justify-center text-brand-accent text-[10px] font-black tracking-widest">LIVE</div>
                        </div>
                    </div>

                    {/* KPI row */}
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {[
                        { label: 'ROAS', val: '8.4x', color: 'text-green-400' },
                        { label: 'CPL', val: 'R$12', color: 'text-blue-400' },
                        { label: 'CTR', val: '4.7%', color: 'text-orange-400' },
                      ].map((k, i) => (
                        <div key={i} className="bg-white/5 rounded p-2 text-center border border-white/5">
                          <p className={`text-base font-black ${k.color}`}>{k.val}</p>
                          <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">{k.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Bar chart */}
                    <div className="flex-1 flex items-end justify-between gap-2 px-1">
                        {[40, 65, 45, 80, 55, 90, 100].map((h, i) => (
                            <div key={i} className="w-full bg-brand-primary/10 rounded-t-sm relative">
                                <div
                                  style={{ height: `${h}%` }}
                                  className={`absolute bottom-0 w-full rounded-t-sm ${i === 6 ? 'bg-gradient-to-t from-brand-accent to-orange-400' : 'bg-gradient-to-t from-brand-primary/60 to-blue-500/40'}`}
                                ></div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-xs items-center">
                        <span className="text-gray-400">Crescimento — 90 dias</span>
                        <span className="text-green-400 font-black text-sm">+147%</span>
                    </div>
                </div>

                {/* Floating Card — Faturamento */}
                <div className="absolute -right-10 top-16 bg-[#0d1a30] p-4 rounded-xl border border-white/10 shadow-2xl" style={{ animation: 'translateY 3s ease-in-out infinite alternate' }}>
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-green-500/15 flex items-center justify-center text-green-500 border border-green-500/20">
                           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase tracking-wider">Faturamento/mês</p>
                            <p className="text-white font-black text-sm">R$ 152.400</p>
                            <p className="text-green-400 text-xs font-bold">+38% vs anterior</p>
                        </div>
                    </div>
                </div>

                {/* Floating Card — Leads */}
                <div className="absolute -left-6 bottom-24 bg-[#0d1a30] p-4 rounded-xl border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-brand-accent/15 flex items-center justify-center text-brand-accent border border-brand-accent/20">
                           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase tracking-wider">Leads Qualif./mês</p>
                            <p className="text-white font-black text-sm">+850</p>
                            <p className="text-brand-accent text-xs font-bold">Meta: 700</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};