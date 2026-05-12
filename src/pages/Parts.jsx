import React, { useEffect } from 'react';
import { Settings, Shield, CheckCircle, ArrowRight } from 'lucide-react';

export default function Parts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappLink = "https://api.whatsapp.com/send?phone=5531998706200&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20pe%C3%A7as.%20";

  const partsList = [
    {
      name: "Cilindros Hidráulicos",
      desc: "Ampla linha de cilindros para basculantes, com alta durabilidade e resistência para operações severas.",
      img: "https://images.unsplash.com/photo-1587302488874-9b2752bb05b3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Tomadas de Força",
      desc: "Soluções robustas para transmissão de potência mecânica, compatíveis com os principais câmbios do mercado.",
      img: "https://images.unsplash.com/photo-1563820246237-7f91ecbdbaaa?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Bombas Hidráulicas",
      desc: "Alto desempenho no fluxo de óleo para sistemas hidráulicos, garantindo elevação rápida e segura.",
      img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop"
    },
    {
      name: "Comandos e Válvulas",
      desc: "Controle preciso direcional e de pressão para garantir a segurança e eficiência do seu implemento.",
      img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Kit Hidráulico Completo",
      desc: "Instalação completa com componentes originais para transformar o seu cavalo mecânico.",
      img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Acessórios Originais",
      desc: "Faróis, faixas refletivas, para-barros e demais itens de segurança para as normas rodoviárias.",
      img: "https://images.unsplash.com/photo-1620021666012-70b12bc1b29a?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-24 pb-0 bg-slate-50 min-h-screen">
      {/* Header Industrial */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1563820246237-7f91ecbdbaaa?q=80&w=2070&auto=format&fit=crop" alt="Engrenagens" className="w-full h-full object-cover opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Catálogo de <span className="text-brand-600">Peças</span></h1>
          <div className="w-20 h-1.5 bg-brand-600 mb-6"></div>
          <p className="text-xl text-slate-300 max-w-2xl font-medium leading-relaxed">
            Componentes originais de fábrica para garantir a vida útil e a força máxima estrutural do seu implemento rodoviário.
          </p>
        </div>
      </section>

      {/* Parts Grid */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {partsList.map((part, index) => (
              <div key={index} className="bg-white group relative shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-brand-600 flex flex-col">
                <div className="h-56 overflow-hidden relative bg-slate-900">
                  <img src={part.img} alt={part.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">{part.name}</h3>
                  <div className="w-10 h-1 bg-brand-600 mb-6"></div>
                  <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">{part.desc}</p>
                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-between w-full bg-slate-900 text-white hover:bg-brand-600 font-bold uppercase tracking-wider px-6 py-4 transition-colors">
                    <span>Orçamento</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais das Peças */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 border-t border-slate-700 pt-16">
            <div className="flex flex-col md:flex-row gap-6 items-start text-center md:text-left">
              <Shield className="w-14 h-14 text-brand-600 shrink-0 mx-auto md:mx-0" />
              <div>
                <h4 className="text-xl font-black uppercase tracking-wider mb-3">Peças Originais</h4>
                <p className="text-slate-400 font-medium">Trabalhamos exclusivamente com fornecedores homologados para assegurar durabilidade extrema.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start text-center md:text-left">
              <Settings className="w-14 h-14 text-brand-600 shrink-0 mx-auto md:mx-0" />
              <div>
                <h4 className="text-xl font-black uppercase tracking-wider mb-3">Garantia de Fábrica</h4>
                <p className="text-slate-400 font-medium">Todas as peças comercializadas possuem garantia integral contra quaisquer defeitos de fabricação.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start text-center md:text-left">
              <CheckCircle className="w-14 h-14 text-brand-600 shrink-0 mx-auto md:mx-0" />
              <div>
                <h4 className="text-xl font-black uppercase tracking-wider mb-3">Estoque Estratégico</h4>
                <p className="text-slate-400 font-medium">Amplo estoque local meticulosamente preparado para atender as demandas pesadas com agilidade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
