import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 767) {
      setMenuOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  const linkClasses = ({ isActive }) =>
    `menu-link block transition ${
      isActive ? "active text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4 relative">

        {/* LOGO */}
        <Link
          to="/"
          id="logoAyanda"
          className={`text-center text-[#D4AF37] font-semibold tracking-wide leading-tight transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        >
          AYANDA <br /> DIGITAL MEDIA
        </Link>

        {/* BOTÃO MOBILE */}
        <button
          onClick={toggleMenu}
          className="text-[#D4AF37] text-2xl md:hidden focus:outline-none transition-transform duration-300 z-50"
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        {/* MENU DESKTOP */}
        <nav
          className={`${
            menuOpen
              ? "flex flex-col items-center justify-center fixed inset-0 bg-black/95 space-y-8 text-xl"
              : "hidden md:flex md:flex-row md:items-center md:justify-center md:space-x-8 md:static md:bg-transparent"
          } transition-all duration-300`}
        >
          {/* LINKS CENTRAIS */}
          <div className="flex flex-col md:flex-row md:space-x-8 items-center">
            <NavLink to="/" end className={linkClasses} onClick={closeMenu}>
              Início
            </NavLink>

            {/* DROPDOWN SOBRE */}
            <div className="relative group">
              <NavLink
                to="sobre"
                className={({ isActive }) =>
                  `menu-link flex items-center justify-center transition ${
                    isActive
                      ? "active text-[#D4AF37]"
                      : "text-white hover:text-[#D4AF37]"
                  }`
                }
                onClick={closeMenu}
              >
                Sobre <i className="fas fa-chevron-down text-xs ml-1"></i>
              </NavLink>

              {/* Submenu (desktop apenas) */}
              <div className="submenu absolute left-0 top-full w-44 bg-black border border-[#D4AF37]/30 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 hidden md:block">
                <a
                  href="sobre#missao"
                  className="block px-4 py-2 hover:bg-[#D4AF37]/10"
                >
                  Missão
                </a>
                <a
                  href="sobre#visao"
                  className="block px-4 py-2 hover:bg-[#D4AF37]/10"
                >
                  Visão
                </a>
                <a
                  href="sobre#valores"
                  className="block px-4 py-2 hover:bg-[#D4AF37]/10"
                >
                  Valores
                </a>
              </div>
            </div>

            <NavLink to="servicos" className={linkClasses} onClick={closeMenu}>
              Serviços
            </NavLink>
            <NavLink
              to="portfolio"
              className={linkClasses}
              onClick={closeMenu}
            >
              Portfólio
            </NavLink>
            <NavLink
              to="contactos"
              className={linkClasses}
              onClick={closeMenu}
            >
              Contactos
            </NavLink>
          </div>

          {/* REDES SOCIAIS */}
          <div className="flex space-x-4 mt-6 md:mt-0 md:ml-8">
            <a
              href="https://www.instagram.com/ayandadigitalmedia/"
              className="hover:text-[#D4AF37] transition"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a
              href="https://www.tiktok.com/@ayandadigitalmedia"
              className="hover:text-[#D4AF37] transition"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-tiktok text-lg"></i>
            </a>
            <a
              href="https://wa.me/5521970825249"
              className="hover:text-[#D4AF37] transition"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-whatsapp text-lg"></i>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}