import React from 'react';
import { Truck, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5531998706200&text=Ol%C3%A1!%20Gostaria%20de%20entrar%20em%20contato%20com%20algum%20atendente.%20";

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container-custom grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <img src="/logo-rodo.png" alt="Logo Rodoeixo" className="w-48 h-16 object-contain brightness-0 invert opacity-90" />
          </div>
          <p className="text-slate-400 mb-8 max-w-sm">
            A melhor escolha em implementos rodoviários. Manutenção de equipamentos e peças com garantia e qualidade autorizada Rossetti.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/rodoeixo?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Links Úteis</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-brand-400 transition-colors">Página Principal</Link></li>
            <li><Link to="/sobre" className="hover:text-brand-400 transition-colors">Sobre Nós</Link></li>
            <li><Link to="/pecas" className="hover:text-brand-400 transition-colors">Peças</Link></li>
            <li><Link to="/servicos" className="hover:text-brand-400 transition-colors">Nossos Serviços</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
              <span>Rodovia Fernão Dias, BR 381, Km 495, s/N, Jardim Petrópolis, Betim - MG</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-500 shrink-0" />
              <div className="flex flex-col">
                <a href={whatsappLink} className="hover:text-brand-400 transition-colors">(31) 99870-6200</a>
                <span>(31) 3512-6200</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-500 shrink-0" />
              <a href="mailto:contato@rodoeixobetim.com.br" className="hover:text-brand-400 transition-colors">contato@rodoeixobetim.com.br</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container-custom mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Rodoeixo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
