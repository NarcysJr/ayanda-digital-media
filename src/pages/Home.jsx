import FormContacto from "../components/ui/FormContacto";
function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section
        id="inicio"
        className="h-screen flex flex-col justify-center items-center bg-[#000000] text-white text-center px-4"
        data-aos="fade-up"
      >
        <h1 className="font-[Playfair Display] text-4xl md:text-6xl mb-4 text-[#D4AF37]">
          Transformamos ideias em arte.
        </h1>
        <p className="max-w-2xl text-lg mb-6">
          Mais do que uma empresa de mídia, somos um espaço de criação, expressão
          e conexão humana.
        </p>
        <a
          href="#contactos"
          className="bg-[#D4AF37] text-[#000000] px-6 py-3 rounded-full font-bold hover:bg-white transition"
        >
          Fale connosco
        </a>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 px-6 bg-[#F5F0E8]" data-aos="fade-right">
        <div className="container mx-auto text-center md:text-left">
          <h2 className="text-3xl font-[Playfair Display] text-[#000000] mb-6">
            Quem Somos
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            A Ayanda Digital Media nasceu do desejo de transformar momentos,
            ideias e sonhos em arte. Acreditamos que cada pessoa, marca e história
            têm uma essência única — e a nossa missão é traduzi-la em forma
            visual, com sensibilidade, técnica e propósito.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 bg-[#FFFFFF]" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-[Playfair Display] text-[#000000] mb-12">
            Os Nossos Serviços
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Serviço 1 */}
            <div className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition">
              <i className="fas fa-camera text-5xl text-[#D4AF37] mb-4"></i>
              <h3 className="font-bold text-xl mb-2">Fotografia & Vídeo</h3>
              <p>
                Produção de conteúdos visuais de alta qualidade que comunicam a
                essência da tua marca.
              </p>
            </div>

            {/* Serviço 2 */}
            <div className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition">
              <i className="fas fa-bullhorn text-5xl text-[#D4AF37] mb-4"></i>
              <h3 className="font-bold text-xl mb-2">Marketing Digital</h3>
              <p>
                Estratégias criativas e eficazes para promover a tua presença
                digital e atrair o público certo.
              </p>
            </div>

            {/* Serviço 3 */}
            <div className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition">
              <i className="fas fa-palette text-5xl text-[#D4AF37] mb-4"></i>
              <h3 className="font-bold text-xl mb-2">Design & Branding</h3>
              <p>
                Construímos identidades visuais que inspiram confiança e contam
                histórias autênticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTOS */}
      <section id="contactos" className="py-20 px-6 bg-[#F5F0E8]" data-aos="fade-left">
        <div className="container mx-auto text-center" style={{ maxWidth: "500px" }}>
          <h2 className="text-3xl font-[Playfair Display] text-[#000000] mb-6">
            Contacte-nos
          </h2>
          <FormContacto />
        </div>
      </section>

      {/* Botão voltar ao topo */}
      <button
        id="toTop"
        className="fixed bottom-6 right-6 bg-[#D4AF37] text-[#000000] p-3 rounded-full shadow-lg hidden hover:bg-white transition"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default Home;
