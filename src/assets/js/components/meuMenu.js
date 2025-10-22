class MeuMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="fixed w-full bg-black text-white shadow-lg z-50">
        <div class="container mx-auto flex justify-between items-center p-4">
          
          <!-- Logo -->
          <a href="index.html" id="logoAyanda" 
             class="text-center text-[#D4AF37] font-semibold tracking-wide leading-tight transition-opacity duration-300">
            AYANDA <br> DIGITAL MEDIA
          </a>

          <!-- Botão mobile -->
          <button id="menu-toggle" 
                  class="text-[#D4AF37] text-2xl md:hidden focus:outline-none transition-transform duration-300 relative z-60">
            <i class="fas fa-bars" id="menu-icon"></i>
          </button>

          <!-- Menu principal -->
          <nav id="menu" 
               class="hidden md:flex flex-col md:flex-row md:space-x-8 text-center md:text-left mt-4 md:mt-0">
            
            <a href="/index.html" class="menu-link">Início</a>

            <!-- Dropdown Sobre -->
            <div class="relative group dropdown-container">
              <a href="/src/pages/sobre.html" 
                 class="menu-link flex items-center justify-center md:justify-start">
                Sobre <i class="fas fa-chevron-down text-xs ml-1"></i>
              </a>

              <!-- Submenu - apenas desktop -->
              <div class="submenu absolute left-0 top-full w-44 bg-black border border-[#D4AF37]/30 rounded-lg 
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          transition-all duration-300">
                <a href="/src/pages/sobre.html#missao" class="block px-4 py-2 hover:bg-[#D4AF37]/10">Missão</a>
                <a href="/src/pages/sobre.html#visao" class="block px-4 py-2 hover:bg-[#D4AF37]/10">Visão</a>
                <a href="/src/pages/sobre.html#valores" class="block px-4 py-2 hover:bg-[#D4AF37]/10">Valores</a>
              </div>
            </div>

            <a href="/src/pages/servicos.html" class="menu-link">Serviços</a>
            <a href="/src/pages/contactos.html" class="menu-link">Contactos</a>
          </nav>
        </div>
      </header>
    `;

    // Inicializar menu após renderização
    setTimeout(() => this.initMenu(), 100);
  }

  initMenu() {
    const menuToggle = this.querySelector("#menu-toggle");
    const menuEl = this.querySelector("#menu");
    const logo = this.querySelector("#logoAyanda");
    const icon = this.querySelector("#menu-icon");

    if (!menuToggle || !menuEl || !icon) return;

    // Alternar menu mobile
    menuToggle.addEventListener("click", () => {
      const isHidden = menuEl.classList.contains("hidden");
      
      if (isHidden) {
        // Abrir menu
        menuEl.classList.remove("hidden");
        menuEl.classList.add("flex");
        logo.classList.add("opacity-0");
        // Mudar para ícone X
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        
        // Garantir que o botão fique acima do menu
        menuToggle.classList.add("relative", "z-60");
      } else {
        // Fechar menu
        menuEl.classList.add("hidden");
        menuEl.classList.remove("flex");
        logo.classList.remove("opacity-0");
        // Voltar para ícone hambúrguer
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });

    // Fechar menu ao clicar num link (mobile)
    menuEl.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
          menuEl.classList.add("hidden");
          menuEl.classList.remove("flex");
          logo.classList.remove("opacity-0");
          // Voltar para ícone hambúrguer
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      });
    });

    // Destacar link ativo
    this.highlightActiveLink();
  }

  highlightActiveLink() {
    let currentPath = window.location.pathname;
    let currentFile = currentPath.split("/").pop() || "index.html";

    this.querySelectorAll(".menu-link").forEach((link) => {
      const href = link.getAttribute("href") || "";
      const hrefFile = href.split("/").pop();
      if (hrefFile === currentFile) {
        link.classList.add("active");
      }
    });
  }
}

customElements.define("meu-menu", MeuMenu);