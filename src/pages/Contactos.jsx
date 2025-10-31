import FormContacto from "../components/ui/FormContacto";
import "./contacto.css";
import { useEffect } from "react";

export default function Contactos() {
  useEffect(() => {
    document.title = "Contactos | Ayanda Digital Media";
  }, []);
  return (
    <section className="bg-[#F5F0E8] overflow-x-hidden font-[Lato] py-32 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Título */}
      <h1 className="font-[Playfair Display] text-3xl sm:text-4xl text-center mb-12 wrap-break-words">
        Fale Connosco
      </h1>

      <div className="contactos-container grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Formulário */}
        <div
          data-aos="fade-right"
          className="form-card bg-white p-8 rounded-2xl shadow-lg space-y-8"
        >
          <FormContacto />
        </div>

        {/* Informações de Contacto */}
        <div
          data-aos="fade-left"
          className="info-card bg-white p-8 rounded-2xl shadow-lg space-y-8"
        >
          {/* Redes sociais */}
          <div>
            <h3 className="text-2xl font-[Playfair Display] text-[#D4AF37] mb-3 text-center md:text-left">
              Redes Sociais
            </h3>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl">
              <a
                href="https://www.instagram.com/ayandadigitalmedia/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-[#D4AF37] transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.tiktok.com/@ayandadigitalmedia"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-[#D4AF37] transition"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a
                href="https://wa.me/5521970825249"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-[#D4AF37] transition"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Contactos */}
          <div>
            <h2 className="text-2xl font-[Playfair Display] text-[#D4AF37] mb-3 text-center md:text-left">
              Contactos
            </h2>
            <div className="contact-item flex items-center gap-3 justify-center md:justify-start">
              <i className="fas fa-phone text-[#D4AF37]"></i>
              <a
                href="tel:+244921500037"
                className="text-gray-700 hover:text-[#D4AF37] transition truncate-mobile"
              >
                <strong>+244 921 500 037</strong>
              </a>
            </div>
            <div className="contact-item flex items-center gap-3 justify-center md:justify-start">
              <i className="fas fa-envelope text-[#D4AF37]"></i>
              <a
                href="mailto:ayandadigitalmedia@gmail.com"
                className="text-gray-700 hover:text-[#D4AF37] transition truncate-mobile"
              >
                ayandadigitalmedia@gmail.com
              </a>
            </div>
          </div>

          {/* Localização */}
          <div>
            <h3 className="text-2xl font-[Playfair Display] text-[#D4AF37] mb-3 text-center md:text-left">
              Localização
            </h3>
            <div className="contact-item flex items-center gap-3 justify-center md:justify-start">
              <i className="fas fa-map-marker-alt text-[#D4AF37]"></i>
              <a
                href="https://maps.app.goo.gl/K9exHiAgNW6Wmirm9"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-[#D4AF37] transition truncate-mobile"
              >
                Rua José Anchieta Nº 77, Vila Alice – Luanda, Angola
              </a>
            </div>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-2xl font-[Playfair Display] text-[#D4AF37] mb-3 text-center md:text-left">
              Horário
            </h3>
            <div className="contact-item flex items-center gap-3 justify-center md:justify-start">
              <i className="fas fa-clock text-[#D4AF37]"></i>
              <span className="text-gray-700">Segunda a Sábado: 9h - 17h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
