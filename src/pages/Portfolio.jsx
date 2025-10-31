import "./portfolio.css";
import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

export default function Portfolio() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  useEffect(() => {
    document.title = "Portfólio | Ayanda Digital Media";
  }, []);

  const projetos = [
    {
      categoria: "Ensaio Individual",
      img: {
        pequena: "imgs/ensaio-individual/pequena/ensaioIndividual-3-pequena.jpg",
        media: "imgs/ensaio-individual/media/ensaioIndividual-3-media.jpg",
        grande: "imgs/ensaio-individual/grande/ensaioIndividual-3-grande.jpg",
      },
      titulo: "Sessão ao Ar Livre",
      descricao:
        "Retratos naturais e cheios de personalidade captados em ambientes exteriores, com foco na autenticidade e luz natural.",
    },
    {
      categoria: "Ensaio Coletivo",
      img: {
        pequena: "imgs/ensaio-coletivo/pequena/ensaioColetivo-1-pequena.jpg",
        media: "imgs/ensaio-coletivo/media/ensaioColetivo-1-media.jpg",
        grande: "imgs/ensaio-coletivo/grande/ensaioColetivo-1-grande.jpg",
      },
      titulo: "Momentos em Grupo",
      descricao:
        "Captura da energia e conexão entre pessoas, ideal para grupos, equipas e famílias.",
    },
    {
      categoria: "Ensaio Individual",
      img: {
        pequena: "imgs/ensaio-individual/pequena/ensaioIndividual-11-pequena.jpg",
        media: "imgs/ensaio-individual/media/ensaioIndividual-11-media.jpg",
        grande: "imgs/ensaio-individual/grande/ensaioIndividual-11-grande.jpg",
      },
      titulo: "Expressão e Identidade",
      descricao:
        "Sessões que realçam a individualidade e o estilo pessoal de cada modelo.",
    },
    {
      categoria: "Eventos",
      img: {
        pequena: "imgs/pequena/ensaio-4-pequena.jpg",
        media: "imgs/media/ensaio-4-media.jpg",
        grande: "imgs/grande/ensaio-4-grande.jpg",
      },
      titulo: "Evento Criativo",
      descricao:
        "Registo artístico e espontâneo de eventos, com foco em detalhes e emoções genuínas.",
    },
    {
      categoria: "Corporativo",
      img: {
        pequena: "imgs/ensaio-corporativo/pequena/ensaioCorporativo-11-pequena.jpg",
        media: "imgs/ensaio-corporativo/media/ensaioCorporativo-11-media.jpg",
        grande: "imgs/ensaio-corporativo/grande/ensaioCorporativo-11-grande.jpg",
      },
      titulo: "Sessão Corporativa",
      descricao:
        "Retratos profissionais e de equipa, ideais para websites, relatórios e campanhas institucionais.",
    },
    {
      categoria: "Corporativo",
      img: {
        pequena: "imgs/ensaio-corporativo/pequena/ensaioCorporativo-8-pequena.jpg",
        media: "imgs/ensaio-corporativo/media/ensaioCorporativo-8-media.jpg",
        grande: "imgs/ensaio-corporativo/grande/ensaioCorporativo-8-grande.jpg",
      },
      titulo: "Trabalho em Progresso",
      descricao:
        "Documentação visual de ambientes de trabalho e construção, com olhar criativo e editorial.",
    },
  ];

  const categorias = ["Todos", "Eventos", "Corporativo", "Ensaio Individual", "Ensaio Coletivo"];

  // Função que decide qual imagem mostrar consoante o tamanho do ecrã
  const obterImagemPorTamanho = (imgObj) => {
    if (window.innerWidth < 640) return imgObj.pequena;
    if (window.innerWidth < 1024) return imgObj.media;
    return imgObj.grande;
  };

  return (
    <div>
      {/* HERO */}
      <section
        id="heroSection"
        className="relative flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <div className="layer">
          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-6xl font-[Playfair Display] font-bold text-white mb-6">
              O Nosso Portfólio
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
              Conhece os projetos e produções que ajudaram marcas e pessoas a
              destacar-se com autenticidade e impacto visual.
            </p>
          </div>
          <div className="bottom-10 text-white animate-bounce text-sm tracking-wider text-center mt-10">
            ↓ Desliza para ver mais ↓
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section
        className="py-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <div className="flex flex-wrap justify-center gap-4">
          {categorias.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full border transition ${categoriaAtiva === cat
                ? "bg-[#D4AF37] text-white border-[#D4AF37]"
                : "border-gray-400 hover:bg-gray-100"
                }`}
              onClick={() => setCategoriaAtiva(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-20 container mx-auto px-6">
        <div id="projetos" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projetos
            .filter((p) => categoriaAtiva === "Todos" || p.categoria === categoriaAtiva)
            .map((p, i) => (
              <Motion.div
                key={i}
                className="group relative overflow-hidden rounded-3xl shadow-lg bg-black cursor-pointer"
                onClick={() => setImagemSelecionada(p)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false }}
              >
                <img
                  src={obterImagemPorTamanho(p.img)}
                  alt={p.titulo}
                  className="object-cover w-full h-72 transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">{p.titulo}</h3>
                  <p className="text-sm text-gray-200">{p.descricao}</p>
                </div>
              </Motion.div>
            ))}
        </div>
      </section>

      {/* MODAL */}
      {imagemSelecionada && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4 overflow-auto"
          onClick={() => setImagemSelecionada(null)}
        >
          <Motion.div
            className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden flex flex-col"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center bg-black">
              <img
                src={obterImagemPorTamanho(imagemSelecionada.img)}
                alt={imagemSelecionada.titulo}
                className="max-h-[80vh] w-auto h-auto object-contain"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">{imagemSelecionada.titulo}</h3>
              <p className="text-gray-700">{imagemSelecionada.descricao}</p>
            </div>
          </Motion.div>
        </div>
      )}


      {/* LINKS PIXIESET */}
      <section
        id="galeria"
        className="relative py-20 text-center text-white bg-fixed bg-center bg-[#F5F0E8] bg-cover"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        <div className="bg-black/60 absolute inset-0"></div>
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-[Playfair Display] font-semibold mb-6">
            Explora as Nossas Galerias Profissionais
          </h3>
          <p className="mb-10 text-lg max-w-xl mx-auto">
            Vê mais trabalhos exclusivos realizados pela nossa equipa através da
            plataforma Pixieset.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://ayandadigitalmedia.pixieset.com/decorandocompropositosuieventos/"
              target="_blank"
              className="px-6 py-3 bg-[#d4af377e] text-white font-semibold rounded-full hover:bg-white hover:text-[#D4AF37] transition"
            >
              Decoração & Eventos
            </a>
            <a
              href="https://luizfelphotos.pixieset.com/estudio/"
              target="_blank"
              className="px-6 py-3 bg-[#d4af377e] text-white font-semibold rounded-full hover:bg-white hover:text-[#D4AF37] transition"
            >
              Sessões de Estúdio
            </a>
            <a
              href="https://luizfelphotos.pixieset.com/gloria/"
              target="_blank"
              className="px-6 py-3 bg-[#d4af377e] text-white font-semibold rounded-full hover:bg-white hover:text-[#D4AF37] transition"
            >
              Projeto Glória
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="py-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h3 className="text-3xl md:text-4xl font-[Playfair Display] font-semibold mb-6">
          Pronto para dar vida ao teu projeto?
        </h3>
        <p className="mb-8 text-lg">
          A equipa da Ayanda está pronta para criar algo incrível contigo.
        </p>
        <a
          href="/contactos"
          className="bg-[#D4AF37] text-white font-semibold px-8 py-3 rounded-full"
        >
          Fala Connosco
        </a>
      </section>
    </div>
  );
}
