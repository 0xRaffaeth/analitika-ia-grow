import React from 'react';

const AnalitikaLogo = () => {
  return (
    <img
      src="/logo-dark.png"
      alt="Analitika Agency"
      className="h-10 w-auto object-contain mb-4"
    />
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#010410] py-16 border-t border-white/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-4">
            <AnalitikaLogo />
            <p className="text-gray-400 text-xs mt-4 leading-relaxed max-w-xs">
              Growth Marketing, Dados e Tecnologia para empresas que buscam escala previsível.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com/analitika.agency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Analitika no Instagram"
                title="Instagram"
                className="group text-gray-400 hover:text-white transition-all duration-200 bg-white/5 hover:bg-[#E1306C] p-3.5 rounded-sm border border-white/15 hover:border-[#E1306C] hover:shadow-[0_0_14px_rgba(225,48,108,0.35)]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://wa.me/5562994075161"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale com a Analitika pelo WhatsApp"
                title="WhatsApp"
                className="group text-gray-400 hover:text-white transition-all duration-200 bg-white/5 hover:bg-[#25D366] p-3.5 rounded-sm border border-white/15 hover:border-[#25D366] hover:shadow-[0_0_14px_rgba(37,211,102,0.35)]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.514 5.836L.057 24l6.304-1.654A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0m0 21.818a9.818 9.818 0 01-5.003-1.372l-.359-.213-3.722.976.993-3.626-.234-.372A9.796 9.796 0 012.182 12C2.182 6.59 6.59 2.182 12 2.182S21.818 6.59 21.818 12 17.41 21.818 12 21.818" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/analitika-agency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Analitika no LinkedIn"
                title="LinkedIn"
                className="group text-gray-400 hover:text-white transition-all duration-200 bg-white/5 hover:bg-[#0077B5] p-3.5 rounded-sm border border-white/15 hover:border-[#0077B5] hover:shadow-[0_0_14px_rgba(0,119,181,0.35)]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div className="md:col-span-2">
            <h4 className="text-white font-black mb-5 uppercase text-xs tracking-widest">Metodologia</h4>
            <ul className="space-y-3 text-xs text-gray-400 font-medium uppercase tracking-wide">
              <li><button onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-brand-accent transition-colors text-left">Tráfego Pago</button></li>
              <li><button onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-brand-accent transition-colors text-left">Web Analytics</button></li>
              <li><button onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-brand-accent transition-colors text-left">Conversão (CRO)</button></li>
              <li><button onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-brand-accent transition-colors text-left">Inteligência Artificial</button></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-black mb-5 uppercase text-xs tracking-widest">Institucional</h4>
            <ul className="space-y-3 text-xs text-gray-400 font-medium uppercase tracking-wide">
              <li><a href="mailto:contato@analitika.agency" className="hover:text-brand-accent transition-colors">Sobre Nós</a></li>
              <li><a href="mailto:contato@analitika.agency" className="hover:text-brand-accent transition-colors">Carreiras</a></li>
              <li><a href="mailto:contato@analitika.agency" className="hover:text-brand-accent transition-colors">Termos de Uso</a></li>
              <li><a href="mailto:contato@analitika.agency" className="hover:text-brand-accent transition-colors">Privacidade</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-white font-black mb-5 uppercase text-xs tracking-widest">Contato</h4>
            <a
              href="mailto:contato@analitika.agency"
              className="flex items-center gap-2.5 text-xs text-gray-300 hover:text-brand-accent transition-colors font-medium group"
            >
              <span className="w-7 h-7 flex items-center justify-center bg-white/5 border border-white/12 rounded-sm group-hover:bg-brand-accent/10 group-hover:border-brand-accent/20 transition-all">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </span>
              contato@analitika.agency
            </a>
            {/* CTA mini */}
            <div className="mt-8 p-5 bg-brand-accent/8 border border-brand-accent/15 rounded-sm">
              <p className="text-xs text-gray-300 font-bold uppercase tracking-widest mb-3">Pronto para escalar?</p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-2.5 bg-brand-accent hover:bg-orange-600 text-white text-xs font-black uppercase tracking-widest rounded-sm transition-all"
              >
                Agendar Sessão
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Analitika Agency. Todos os direitos reservados.</p>
          <p>analitika.agency</p>
        </div>
      </div>
    </footer>
  );
};