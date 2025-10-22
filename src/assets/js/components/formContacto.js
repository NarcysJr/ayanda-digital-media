import emailjs from '@emailjs/browser';
class FormContacto extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
      <form id="contactForm" class="space-y-4">
        <input
          type="text"
          name="from_name"
          placeholder="O seu nome"
          class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          required
        />
        <input
          type="email"
          name="reply_to"
          placeholder="O seu e-mail"
          class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="A sua mensagem"
          class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          required
        ></textarea>

        <button
          type="submit"
          class="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white transition"
        >
          Enviar Mensagem
        </button>
        <p id="msgStatus" class="text-sm mt-2"></p>
      </form>
    `;

    // Inicializar o EmailJS depois de o componente estar carregado
    if (typeof emailjs !== "undefined") {
      emailjs.init("oAXqcIGgJZv3NiYpV");
    } else {
      console.error("EmailJS não foi carregado corretamente.");
      return;
    }

    const form = this.querySelector("#contactForm");
    const msg = this.querySelector("#msgStatus");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      msg.textContent = "A enviar...";
      msg.style.color = "#D4AF37";

      emailjs
        .sendForm("service_zqbmm9b", "template_deoyqrt", form)
        .then(() => {
          msg.textContent = "Mensagem enviada com sucesso!";
          msg.style.color = "green";
          form.reset();
        })
        .catch(() => {
          msg.textContent = "Erro ao enviar. Tente novamente.";
          msg.style.color = "red";
        });
    });
  }
}

customElements.define("form-contacto", FormContacto);
