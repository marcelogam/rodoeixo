import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const navClass = isScrolled || !isHome ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5';
  const textColorClass = isScrolled || !isHome ? 'text-slate-600 hover:text-brand-600' : 'text-slate-200 hover:text-white';
  const menuIconClass = isScrolled || !isHome ? 'text-slate-900' : 'text-white';

  const whatsappLink = "https://api.whatsapp.com/send?phone=5531998706200&text=Ol%C3%A1!%20Gostaria%20de%20entrar%20em%20contato%20com%20algum%20atendente.%20";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/logo-rodo.png" alt="Logo" className="w-60 h-20 object-contain" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`font-medium transition-colors ${textColorClass}`}>Principal</Link>
          <Link to="/sobre" className={`font-medium transition-colors ${textColorClass}`}>Sobre Nós</Link>
          <Link to="/pecas" className={`font-medium transition-colors ${textColorClass}`}>Peças</Link>
          <Link to="/servicos" className={`font-medium transition-colors ${textColorClass}`}>Serviços</Link>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-brand-500/30">
            Fazer Orçamento
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className={`md:hidden p-2 ${menuIconClass}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col space-y-4 px-6 border-t">
          <Link to="/" className="text-slate-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Principal</Link>
          <Link to="/sobre" className="text-slate-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Sobre Nós</Link>
          <Link to="/pecas" className="text-slate-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Peças</Link>
          <Link to="/servicos" className="text-slate-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Serviços</Link>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="bg-brand-600 text-white text-center py-3 rounded-lg font-semibold mt-4">
            Fazer Orçamento
          </a>
        </div>
      )}
    </nav>
  );
}
