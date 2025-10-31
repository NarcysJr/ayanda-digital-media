export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white py-6 text-center">
      <p className="text-sm">
        <i className="fa-regular fa-copyright"></i> 2025 Ayanda Digital Media.
        Todos os direitos reservados.
      </p>

      <div className="flex justify-center space-x-6 mt-3">
        <a
          href="https://www.instagram.com/ayandadigitalmedia/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D4AF37] hover:text-white"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.tiktok.com/@ayandadigitalmedia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D4AF37] hover:text-white"
        >
          <i className="fa-brands fa-tiktok"></i>
        </a>
        <a
          href="https://wa.me/5521970825249"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D4AF37] hover:text-white"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

      <div className="flex justify-center space-x-4 mt-4 text-sm">
        <a
          href="politica-privacidade"
          className="text-[#D4AF37] hover:underline"
        >
          Política de Privacidade
        </a>
        <span>|</span>
        <a href="termo" className="text-[#D4AF37] hover:underline">
          Termos e Condições
        </a>
      </div>
    </footer>
  );
}
