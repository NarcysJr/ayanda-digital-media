import "./servicos.css";
import { useEffect } from "react";
export default function Servicos() {
  useEffect(() => {
    document.title = "Serviços | Ayanda Digital Media";
  }, []);
  return (
    <div>
      <section className="pb-20 pt-40 text-center px-6 bg-[#F5F0E8]">
        <h1 className="font-[Playfair Display] text-4xl mb-10 text-gray-900">
          Os Nossos Serviços
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fotografia & Vídeo */}
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-[#D4AF37]">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5">
                <i className="fas fa-camera text-6xl text-[#D4AF37] drop-shadow-md"></i>
              </div>

              <h3 className="font-[Playfair Display] text-2xl font-bold text-gray-900 mb-3">
                Fotografia & Vídeo
              </h3>

              <p className="text-gray-600 leading-relaxed mb-5">
                Conteúdos visuais profissionais que captam a essência da tua
                marca ou momento.
              </p>

              <ul className="text-left text-gray-700 space-y-2 text-sm">
                {[
                  "Ensaios individuais, de casal ou família;",
                  "Ensaios de gestante e newborn;",
                  "Ensaios corporativos e de eventos;",
                  "Vídeos institucionais, publicitários e criativos;",
                  "Sessões ao ar livre."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="fas fa-check text-[#D4AF37] mt-1"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Marketing Digital */}
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-[#D4AF37]">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5">
                <i className="fas fa-bullhorn text-6xl text-[#D4AF37] drop-shadow-md"></i>
              </div>

              <h3 className="font-[Playfair Display] text-2xl font-bold text-gray-900 mb-3">
                Marketing Digital
              </h3>

              <p className="text-gray-600 leading-relaxed mb-5">
                Estratégias criativas e soluções digitais que ampliam o alcance
                e o impacto da tua marca.
              </p>

              <ul className="text-left text-gray-700 space-y-2 text-sm">
                {[
                  "Produção de conteúdo: Reels, vídeos curtos, editoriais e portfólios audiovisuais;",
                  "Criação de websites institucionais, portfólios e lojas virtuais, com design personalizado e alta performance;",
                  "Consultoria criativa para marcas e profissionais;",
                  "Gestão de redes sociais com foco em engajamento e posicionamento."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="fas fa-check text-[#D4AF37] mt-1"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Design & Branding */}
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-[#D4AF37]">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5">
                <i className="fas fa-palette text-6xl text-[#D4AF37] drop-shadow-md"></i>
              </div>

              <h3 className="font-[Playfair Display] text-2xl font-bold text-gray-900 mb-3">
                Design & Branding
              </h3>

              <p className="text-gray-600 leading-relaxed mb-5">
                Identidades visuais únicas que refletem a essência, o propósito
                e a personalidade da tua marca.
              </p>

              <ul className="text-left text-gray-700 space-y-2 text-sm">
                {[
                  "Criação de logótipos, identidade visual e manuais de marca;",
                  "Design de materiais gráficos e digitais (cartões, catálogos, banners, posts e apresentações);",
                  "Direção de arte e consultoria estética para reforçar a autenticidade visual da marca."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="fas fa-check text-[#D4AF37] mt-1"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Texto final */}
        <div className="max-w-4xl mx-auto mt-16 text-gray-700 text-left leading-relaxed">
          <p className="text-lg font-light">
            <strong className="text-[#D4AF37]">
              Tom de Voz e Essência da Comunicação:
            </strong>{" "}
            A Ayanda Digital Media comunica-se com um tom institucional,
            artístico e profundamente humano. Cada palavra carrega leveza,
            empatia e sofisticação — transmitindo confiança, criatividade e
            propósito. Falamos com a sensibilidade de quem entende que a arte
            ultrapassa a estética: é uma forma de inspirar, transformar e
            conectar. Somos a harmonia entre emoção e profissionalismo, entre o
            sentir e o criar — o reflexo da alma de quem transforma ideias em
            experiências visuais autênticas.
          </p>
        </div>
      </section>
    </div>
      
  );
}
