import React, { useState, useEffect } from 'react'; // useState used for isOpen/scrolled

const AnalitikaLogo = () => {
  return (
    <img
      src="/logo-dark.png"
      alt="Analitika Agency"
      className="h-10 w-auto object-contain"
    />
  );
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 border-b border-white/5 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => scrollToSection('hero')}>
            <AnalitikaLogo />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={() => scrollToSection('methodology')} className="hover:text-brand-accent text-sm font-semibold uppercase tracking-wide text-brand-text transition-colors">O Método</button>
              <button onClick={() => scrollToSection('segments')} className="hover:text-brand-accent text-sm font-semibold uppercase tracking-wide text-brand-text transition-colors">Para quem é</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-brand-accent text-sm font-semibold uppercase tracking-wide text-brand-text transition-colors">Perguntas Frequentes</button>
              <button onClick={() => scrollToSection('wizard')} className="bg-brand-accent hover:bg-orange-600 text-white px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-orange-500/20">
                Diagnóstico Gratuito
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-dark/98 backdrop-blur-md border-b border-white/15">
          <div className="px-4 pt-3 pb-5 space-y-1">
            <button onClick={() => scrollToSection('methodology')} className="text-gray-300 hover:text-white hover:bg-white/5 block px-4 py-3 text-sm font-bold uppercase tracking-widest w-full text-left rounded-sm transition-colors">O Método</button>
            <button onClick={() => scrollToSection('segments')} className="text-gray-300 hover:text-white hover:bg-white/5 block px-4 py-3 text-sm font-bold uppercase tracking-widest w-full text-left rounded-sm transition-colors">Para Quem É</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white hover:bg-white/5 block px-4 py-3 text-sm font-bold uppercase tracking-widest w-full text-left rounded-sm transition-colors">Perguntas Frequentes</button>
            <div className="pt-3 border-t border-white/12 mt-3">
              <button onClick={() => scrollToSection('wizard')} className="bg-brand-accent hover:bg-orange-600 text-white block px-4 py-3.5 text-sm font-black uppercase tracking-widest w-full text-center rounded-sm transition-colors shadow-[0_0_20px_rgba(255,85,0,0.2)]">
                Diagnóstico Gratuito
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};