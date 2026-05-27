import React, { useEffect } from 'react';
import { Settings, Shield, CheckCircle, ArrowRight } from 'lucide-react';

export default function Parts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappLink = "https://api.whatsapp.com/send?phone=5531998706200&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20pe%C3%A7as.%20";

  const partsList = [
    {
      name: "Filtro de óleo",
      desc: "Filtros hidráulicos de alta eficiência para basculantes, projetados para reter impurezas e prolongar a vida útil do óleo em condições extremas.",
      img: "/filtro-oleo.jpeg"
    },
    {
      name: "Adesivos e placas",
      desc: "Placas de sinalização e faixas refletivas completas em conformidade com as normas rodoviárias, garantindo visibilidade e segurança para a sua frota.",
      img: "/adesivos-placas.jpeg"
    },
    {
      name: "Bombas Hidráulicas",
      desc: "Bombas hidráulicas de alto desempenho e vazão otimizada, garantindo acionamento ágil, eficiente e de alta pressão para basculamentos seguros.",
      img: "/bomba-hidraulica.jpeg"
    },
    {
      name: "Filtro de ar",
      desc: "Elementos filtrantes de alta retenção que impedem a entrada de poeira e partículas nocivas nos sistemas pneumáticos e no motor do veículo.",
      img: "/filtro-ar.jpeg"
    },
    {
      name: "Válvula fim de curso",
      desc: "Dispositivo mecânico ou pneumático essencial que limita a elevação do basculante no ponto correto, prevenindo sobrepressões e avarias.",
      img: "/valvula-fim-de-curso.jpeg"
    },
    {
      name: "Sensores comlink e DNP",
      desc: "Tecnologia de inclinômetro e segurança eletrônica avançada, essencial para monitorar o basculamento conforme a legislação vigente.",
      img: "/sensores.jpeg"
    },
    {
      name: "Haste",
      desc: "Hastes cromadas de precisão para cilindros hidráulicos telescópicos, retificadas para alta performance e suporte a cargas elevadas.",
      img: "/haste.jpeg"
    },
    {
      name: "Lanternas",
      desc: "Lanternas traseiras e de posição em LED resistentes à vibração e à água, garantindo excelente sinalização e segurança noturna.",
      img: "/lanternas.jpeg"
    },
    {
      name: "Comando",
      desc: "Blocos de comando hidráulico direcional com controle proporcional, garantindo movimentos suaves e precisos da caçamba basculante.",
      img: "/comando.jpeg"
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
                  <img src={part.img} alt={part.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
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
