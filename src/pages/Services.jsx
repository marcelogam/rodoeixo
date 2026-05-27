import React, { useEffect } from 'react';
import { Wrench, Zap, PenTool, FileSearch, CheckCircle2, ArrowRight, Cpu } from 'lucide-react';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappLink = "https://api.whatsapp.com/send?phone=5531998706200&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Rodoeixo.%20";

  const services = [
    {
      icon: <Wrench className="w-10 h-10 text-brand-500" />,
      title: "Manutenção geral",
      desc: "Realizamos inspeções rigorosas e reparos eficientes em todo o seu implemento rodoviário e equipamentos de mineração para mantê-lo operando com força total.",
      features: ["Revisão de freios", "Manutenção életrica e pneumatica", "Manutenção em sistemas hidraulicos"]
    },
    {
      icon: <Zap className="w-10 h-10 text-brand-500" />,
      title: "Instalação de Kits Hidráulicos",
      desc: "Transforme o seu cavalo mecânico com as melhores soluções hidráulicas de alta pressão do mercado. Instalação profissional com garantia inegociável de funcionamento.",
      features: ["Instalação rápida e precisa", "Componentes originais de fábrica", "Testes técnicos de pressão e vazão"]
    },
    {
      icon: <PenTool className="w-10 h-10 text-brand-500" />,
      title: "Solda e Reparo Estrutural",
      desc: "Reforçamos e reparamos a estrutura de caçambas e chassis com alto rigor e excelência técnica. Seu equipamento volta para a estrada pronto para aguentar cargas severas.",
      features: ["Solda MIG/MAG de alta resistência", "Reformas geral de caçambas", "Desempeno e alinhamento técnico de chasis e caçambas"]
    },
    {
      icon: <FileSearch className="w-10 h-10 text-brand-500" />,
      title: "Garantia Autorizada Rossetti",
      desc: "Somos assistência técnica oficial certificada. Cuidamos do seu equipamento seguindo fielmente todos os manuais, padrões e normas de excelência exigidos pela fábrica.",
      features: ["Peças genuínas Rossetti", "Equipe treinada diretamente pela fábrica", "Atendimento e diagnóstico prioritários"]
    },
    {
      icon: <Cpu className="w-10 h-10 text-brand-500" />,
      title: "Instalações de dispositivos eletronicos e inclinometros",
      desc: "Instalamos os melhores e mais modernos dispositivos eletronicos e enclinometros do mercado. Seu equipamento volta para a estrada pronto para aguentar cargas severas.",
      features: ["Instalação rápida e precisa", "Componentes originais de fábrica", "Atendimento e diagnóstico prioritários"]
    }
  ];

  return (
    <div className="pt-24 pb-0 bg-white min-h-screen">
      {/* Header Industrial */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1590496794008-383c8070b257?q=80&w=2071&auto=format&fit=crop" alt="Oficina" className="w-full h-full object-cover opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>
        <div className="container-custom relative z-10 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Nossos <span className="text-brand-600">Serviços</span></h1>
            <div className="w-20 h-1.5 bg-brand-600 mb-6"></div>
            <p className="text-xl text-slate-300 max-w-2xl font-medium leading-relaxed">
              Manter a sua frota rodando com a máxima força, segurança e eficiência é a nossa principal especialidade.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-start md:justify-end">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 font-black uppercase tracking-wider transition-colors shadow-2xl">
              Agendar Manutenção
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services List - Estilo Industrial */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white shadow-xl flex flex-col md:flex-row border-l-8 border-brand-600 overflow-hidden group hover:shadow-2xl transition-shadow">
                <div className="md:w-1/4 bg-slate-900 flex flex-col items-center justify-center p-10 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="w-20 h-20 bg-slate-800 flex items-center justify-center rounded-sm mb-0 z-10 border border-slate-700 shadow-inner">
                    {service.icon}
                  </div>
                </div>
                <div className="md:w-3/4 p-10 lg:p-14">
                  <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">{service.title}</h3>
                  <div className="w-12 h-1 bg-slate-200 mb-6"></div>
                  <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
                    {service.desc}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-brand-600 shrink-0" />
                        <span className="text-slate-900 font-bold uppercase text-sm tracking-widest mt-0.5">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Industrial */}
      <section className="py-24 bg-brand-600 text-center relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-black/10 transform skew-x-12 translate-x-20"></div>
        <div className="absolute left-0 top-0 w-1/3 h-full bg-white/10 transform -skew-x-12 -translate-x-20"></div>
        <div className="container-custom relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">Sua Frota Não Pode Parar</h2>
          <div className="w-16 h-1.5 bg-white mx-auto mb-8"></div>
          <p className="text-brand-50 text-xl max-w-3xl mx-auto mb-12 font-medium">
            Traga seu implemento para a Rodoeixo e garanta um serviço executado sob as mais rígidas e exigentes normas de qualidade da engenharia mecânica.
          </p>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-block bg-slate-900 text-white hover:bg-slate-800 px-10 py-5 font-black uppercase tracking-widest transition-colors shadow-2xl border-2 border-slate-900 hover:border-slate-800">
            Falar com Especialista
          </a>
        </div>
      </section>
    </div>
  );
}
