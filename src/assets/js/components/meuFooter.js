class MeuFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-[#000000] text-white py-6 text-center">
            <p class="text-sm">
                <i class="fa-regular fa-copyright"></i> 2025 Ayanda Digital Media. Todos os direitos reservados.
            </p>

            <div class="flex justify-center space-x-6 mt-3">
                <a href="https://www.instagram.com/ayandadigitalmedia/" target="_blank" class="text-[#D4AF37] hover:text-white">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://wa.me/5521970825249" target="_blank" class="text-[#D4AF37] hover:text-white">
                    <i class="fa-brands fa-whatsapp"></i>
                </a>
            </div>

            <div class="flex justify-center space-x-4 mt-4 text-sm">
                <a href="/src/pages/politica-privacidade.html" class="text-[#D4AF37] hover:underline">
                    Política de Privacidade
                </a>
                <span>|</span>
                <a href="/src/pages/termos-condicoes.html" class="text-[#D4AF37] hover:underline">
                    Termos e Condições
                </a>
            </div>
        </footer>
        `;
    }
}

customElements.define('meu-footer', MeuFooter);
