import React, { useEffect } from 'react';
import { Target, Award, Users, CheckCircle2 } from 'lucide-react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-0 bg-white">
      {/* Header Industrial */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/historia.png" alt="Fábrica" className="w-full h-full object-cover object-top opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
        </div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Nossa <span className="text-brand-600">História</span></h1>
          <div className="w-20 h-1.5 bg-brand-600 mb-6"></div>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
            Sua frota em movimento e com a força máxima. Descubra como a Rodoeixo se tornou referência em manutenção e vendas de peças autorizada ROSSETTI.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-brand-600 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-8 h-1 bg-brand-600 inline-block"></span>
                Sobre a Empresa
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mb-8">Tradição e Garantia Autorizada</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                Somos uma empresa com sólida presença e anos de experiência no mercado de manutenção e venda de peças . Nascemos com um objetivo claro: <strong className="text-slate-900">garantir a produtividade e a segurança</strong> do transporte de carga de cada um de nossos clientes.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                Nosso grande diferencial é atuar com foco no serviço de excelência, juntamente com a nossa <strong className="text-slate-900">garantia autorizada Rossetti</strong>. Ter o respaldo de uma marca líder nos permite proporcionar peças genuínas, manutenções rigorosas e uma experiência inigualável no mercado.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-slate-900 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  </div>
                  <span className="text-slate-900 font-bold uppercase tracking-wider mt-1">Equipe com alto nível de capacitação</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-slate-900 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  </div>
                  <span className="text-slate-900 font-bold uppercase tracking-wider mt-1">Satisfação total em cada entrega</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-slate-900 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  </div>
                  <span className="text-slate-900 font-bold uppercase tracking-wider mt-1">Atendimento transparente e ágil</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 relative w-full hidden md:block">
              <div className="absolute -inset-4 border-4 border-slate-100 transform translate-x-8 translate-y-8 z-0"></div>
              <img src="/tradicao.png" alt="Trabalho na oficina" className="relative z-10 shadow-2xl w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800 transform skew-x-12 translate-x-20 hidden lg:block"></div>
        <div className="container-custom relative z-10">
          <div className="mb-16 border-b-2 border-slate-700 pb-8">
            <h2 className="text-brand-500 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-8 h-1 bg-brand-600 inline-block"></span>
              Nossos Pilares
            </h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight">O Que Nos Move Todos os Dias</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-slate-800 p-10 border-t-4 border-brand-600 shadow-2xl">
              <Target className="w-12 h-12 text-brand-500 mb-6" />
              <h4 className="text-2xl font-black uppercase mb-4 tracking-wider">Nossa Missão</h4>
              <p className="text-slate-400 leading-relaxed font-medium">
                Oferecer as melhores soluções em manutenção e peças rodoviárias, garantindo a máxima performance da frota dos nossos parceiros comerciais.
              </p>
            </div>
            <div className="bg-slate-800 p-10 border-t-4 border-brand-600 shadow-2xl">
              <Award className="w-12 h-12 text-brand-500 mb-6" />
              <h4 className="text-2xl font-black uppercase mb-4 tracking-wider">Nossa Visão</h4>
              <p className="text-slate-400 leading-relaxed font-medium">
                Ser a principal e mais confiável autorizada Rossetti da região, sendo sinônimo absoluto de precisão, robustez e segurança no transporte.
              </p>
            </div>
            <div className="bg-slate-800 p-10 border-t-4 border-brand-600 shadow-2xl">
              <Users className="w-12 h-12 text-brand-500 mb-6" />
              <h4 className="text-2xl font-black uppercase mb-4 tracking-wider">Nossos Valores</h4>
              <p className="text-slate-400 leading-relaxed font-medium">
                Transparência total, foco obstinado em resultados, valorização de nossa equipe técnica e responsabilidade inegociável com a segurança.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
