import React, { useEffect } from 'react';
import { ChevronRight, Settings, Target, Zap, ShieldCheck, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5531998706200&text=Ol%C3%A1!%20Gostaria%20de%20entrar%20em%20contato%20com%20algum%20atendente.%20";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section - Estilo Industrial Pesado */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src="/hero-bg.png" alt="Implementos Rodoviários" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 w-full mt-20">
          <div className="max-w-3xl border-l-8 border-brand-600 pl-6 md:pl-10 py-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 uppercase tracking-tighter">
              A Força que <br />
              <span className="text-brand-600">Movimenta o Brasil</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-medium leading-relaxed">
              Manutenção especializada, peças genuínas e a garantia de qualidade autorizada ROSSETTI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 font-bold text-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wide group">
                Fazer Orçamento
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/servicos" className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 font-bold text-lg transition-all flex items-center justify-center text-center uppercase tracking-wide">
                Nossos Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destaques / Soluções - Estilo Blocos e Linhas retas */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-slate-200 pb-8">
            <div>
              <h2 className="text-brand-600 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-8 h-1 bg-brand-600 inline-block"></span>
                Nossas Soluções
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">Especialidades Rodoeixo</h3>
            </div>
            <Link to="/servicos" className="text-slate-600 hover:text-brand-600 font-bold uppercase tracking-wider flex items-center gap-2 mt-6 md:mt-0 transition-colors">
              Ver portfólio completo <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative overflow-hidden bg-slate-900 text-white aspect-[4/5] shadow-xl">
              <img src="/manutencao.jpg" alt="Manutenção" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              <div className="absolute top-6 right-6 w-12 h-12 bg-brand-600 flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="w-12 h-1.5 bg-brand-600 mb-6 transition-all duration-500 group-hover:w-24"></div>
                <h4 className="text-2xl font-bold uppercase mb-3 leading-tight">Manutenção <br />Pesada</h4>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden bg-slate-900 text-white aspect-[4/5] shadow-xl">
              <img src="/sistema-hidraulico.png" alt="Sistemas Hidráulicos" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              <div className="absolute top-6 right-6 w-12 h-12 bg-brand-600 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="w-12 h-1.5 bg-brand-600 mb-6 transition-all duration-500 group-hover:w-24"></div>
                <h4 className="text-2xl font-bold uppercase mb-3 leading-tight">Sistemas <br />Hidráulicos</h4>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden bg-slate-900 text-white aspect-[4/5] shadow-xl">
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" alt="Solda e Estrutura" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              <div className="absolute top-6 right-6 w-12 h-12 bg-brand-600 flex items-center justify-center">
                <PenTool className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="w-12 h-1.5 bg-brand-600 mb-6 transition-all duration-500 group-hover:w-24"></div>
                <h4 className="text-2xl font-bold uppercase mb-3 leading-tight">Solda e <br />Estrutura</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Autoridade - Similar à apresentação institucional */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 border-2 border-brand-600 transform translate-x-4 translate-y-4 z-0 hidden lg:block"></div>
              <img src="/rodoeixo.png" alt="Qualidade Rodoeixo" className="relative z-10 w-full h-[500px] object-left object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-brand-600 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-8 h-1 bg-brand-600 inline-block"></span>
                Qualidade Comprovada
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mb-8">Tradição no Mercado Rodoviário</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                Com anos de atuação sólida no mercado, a Rodoeixo firmou-se como sinônimo de confiança. Operamos com rígidos padrões técnicos para garantir a sua tranquilidade na estrada.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-10 border-t border-b border-slate-100 py-8">
                <div>
                  <span className="block text-5xl font-black text-brand-600 mb-2">25+</span>
                  <span className="text-slate-900 font-bold uppercase tracking-wider text-sm">Anos de Mercado</span>
                </div>
                <div>
                  <span className="block text-5xl font-black text-brand-600 mb-2">100%</span>
                  <span className="text-slate-900 font-bold uppercase tracking-wider text-sm">Peças Genuínas</span>
                </div>
              </div>

              <Link to="/sobre" className="inline-flex items-center gap-3 text-slate-900 hover:text-brand-600 font-bold uppercase tracking-wider transition-all group">
                Conheça Nossa História Completa
                <div className="w-10 h-10 bg-slate-100 group-hover:bg-brand-50 rounded-full flex items-center justify-center transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Assistência Técnica Rossetti */}
      <section className="bg-brand-600 py-24 relative overflow-hidden text-white">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-black/10 transform skew-x-12 translate-x-32 hidden lg:block"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-tight">
                Assistência Técnica <br />Autorizada ROSSETTI
              </h2>
              <p className="text-xl mb-8 font-medium text-brand-50 max-w-2xl leading-relaxed">
                Temos o orgulho de ser uma assistência credenciada. <br /> Isso significa acesso exclusivo a peças originais, processos certificados pela fábrica e garantia irrestrita de qualidade no serviço.
              </p>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-block bg-white text-brand-600 px-10 py-5 font-black uppercase tracking-widest hover:bg-slate-100 transition-colors shadow-2xl">
                Comprar Peças Originais
              </a>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <ShieldCheck className="w-48 h-48 text-brand-700/50 drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
