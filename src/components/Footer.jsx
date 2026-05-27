import React from 'react';
import { Truck, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5531998706200&text=Ol%C3%A1!%20Gostaria%20de%20entrar%20em%20contato%20com%20algum%20atendente.%20";
  const instagramLink = "https://www.instagram.com/rodoeixo/";

  return (
    <footer className="bg-slate-900 text-slate-300 py-8 border-t border-slate-800">
      <div className="container-custom grid md:grid-cols-4 gap-12">

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
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
              <span>Rodovia Fernão Dias, BR 381, Km 495, S/N, Petrópolis, Betim - MG</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-brand-500 shrink-0" />
              <span>(31) 3512-6200</span>
            </li>
            <li className="flex items-center gap-2">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-400 transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#f72f30" class="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
                <span>(31) 99870-6200</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-brand-500 shrink-0" />
              <a href="mailto:rodoeixo@terra.com.br" className="hover:text-brand-400 transition-colors">rodoeixo@terra.com.br</a>
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#f72f30" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
              <a href={instagramLink} target="_blank" className="hover:text-brand-400 transition-colors">rodoeixo</a>
            </li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-2 flex flex-col justify-between gap-6">
          <div className="w-full h-72 rounded-lg overflow-hidden border border-slate-800 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.8830448908143!2d-44.1819152!3d-19.9714202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c3ae7b1b7f45%3A0xb22a8a69c2b3250e!2sRodoeixo%20Servi%C3%A7os%20e%20Equip%20Rodovi%C3%A1rios!5e0!3m2!1spt-BR!2sbr!4v1779892796337!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Rodoeixo no Google Maps"
              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container-custom mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Rodoeixo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
