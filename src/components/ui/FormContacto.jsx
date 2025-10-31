import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function FormContacto() {
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("A enviar...");
    setStatusColor("text-[#D4AF37]"); // amarelo dourado

    emailjs
      .sendForm(
        "service_zqbmm9b",
        "template_deoyqrt",
        e.target,
        "oAXqcIGgJZv3NiYpV"
      )
      .then(() => {
        setStatus("Mensagem enviada com sucesso!");
        setStatusColor("text-green-600"); // verde sucesso
        e.target.reset();
      })
      .catch(() => {
        setStatus("Erro ao enviar. Tente novamente.");
        setStatusColor("text-red-600"); // vermelho erro
      });
  };

  return (
    <form
      onSubmit={sendEmail}
      className="space-y-4 bg-white p-6 rounded-lg shadow-md"
    >
      <input
        type="text"
        name="from_name"
        placeholder="O seu nome"
        className="w-full p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        required
      />
      <input
        type="email"
        name="reply_to"
        placeholder="O seu e-mail"
        className="w-full p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        required
      />
      <textarea
        name="message"
        rows="5"
        placeholder="A sua mensagem"
        className="w-full p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        required
      ></textarea>

      <button
        type="submit"
        className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white transition"
      >
        Enviar Mensagem
      </button>

      {status && (
        <p
          className={`text-sm mt-2 font-semibold transition-all duration-300 ${statusColor}`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
