import "./sobre.css";
import { useEffect } from "react";
export default function Sobre() {
  useEffect(() => {
    document.title = "Sobre | Ayanda Digital Media";
  }, []);
  return (
    <div>
      {/* Introdução */}
      <section className="pt-40 pb-20 px-6 md:px-20 bg-linear-to-b from-[#FFFFFF] to-[#F5F0E8]">
        <h1 className="font-[Playfair Display] text-center text-4xl md:text-5xl text-[#D4AF37] mb-8">
          Quem Somos
        </h1>
        <p className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-lg md:text-xl">
          A <strong>Ayanda Digital Media</strong> nasceu do desejo de transformar
          momentos, ideias e sonhos em arte. Mais do que uma empresa de mídia,
          somos um espaço de criação, expressão e conexão humana. Acreditamos
          que cada pessoa, cada marca e cada história possuem uma essência única
          — e a nossa missão é traduzi-la em forma visual, com sensibilidade,
          técnica e propósito. Trabalhamos com o coração voltado para o detalhe,
          o olhar voltado para a beleza e a alma voltada para o significado.
        </p>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="pt-10 pb-24 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Missão */}
          <div className="p-10 rounded-2xl bg-[#F9F7F3] shadow-md border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="mb-5 text-[#D4AF37] text-5xl">
              <i className="fas fa-bullseye"></i>
            </div>
            <h2 className="font-[Playfair Display] text-3xl text-[#D4AF37] mb-4 tracking-wide" id="missao">
              Missão
            </h2>
            <p className="text-gray-700 leading-relaxed text-left">
              Inspirar, emocionar e conectar pessoas por meio da arte e da
              comunicação visual. A Ayanda Digital Media existe para despertar
              sentimentos, criar experiências e eternizar histórias, unindo
              sensibilidade, empatia e excelência em cada projeto.
            </p>
          </div>

          {/* Visão */}
          <div className="p-10 rounded-2xl bg-[#F9F7F3] shadow-md border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="mb-5 text-[#D4AF37] text-5xl">
              <i className="fas fa-eye"></i>
            </div>
            <h2 className="font-[Playfair Display] text-3xl text-[#D4AF37] mb-4 tracking-wide" id="visao">
              Visão
            </h2>
            <p className="text-gray-700 leading-relaxed text-left">
              Ser reconhecida como uma referência em qualidade, criatividade e
              autenticidade — uma marca que ultrapassa fronteiras, valoriza
              relações humanas e transforma sonhos em imagens que inspiram o
              mundo. Buscamos crescimento contínuo e expansão internacional,
              levando o toque artístico e humano da Ayanda a novos horizontes.
            </p>
          </div>

          {/* Valores */}
          <div className="p-10 rounded-2xl bg-[#F9F7F3] shadow-md border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="mb-5 text-[#D4AF37] text-5xl">
              <i className="fas fa-hand-holding-heart"></i>
            </div>
            <h2 className="font-[Playfair Display] text-3xl text-[#D4AF37] mb-4 tracking-wide" id="valores">
              Valores
            </h2>
            <ul className="text-left text-gray-700 leading-relaxed space-y-2 list-disc pl-5">
              <li>
                <strong>Autenticidade:</strong> somos fiéis à essência de cada
                pessoa e marca que representamos.
              </li>
              <li>
                <strong>Criatividade:</strong> transformamos ideias em obras
                visuais únicas e inspiradoras.
              </li>
              <li>
                <strong>Empatia:</strong> escutamos, sentimos e traduzimos o que
                o outro deseja expressar.
              </li>
              <li>
                <strong>Excelência:</strong> entregamos resultados com técnica,
                paixão e profissionalismo.
              </li>
              <li>
                <strong>Integridade:</strong> agimos com verdade, respeito e
                compromisso em todas as relações.
              </li>
              <li>
                <strong>Evolução:</strong> acreditamos no aprendizado constante
                e na inovação como forma de crescimento.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>     
  );
}
