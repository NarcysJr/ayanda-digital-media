import { useEffect } from "react";
export default function Termos() {
  useEffect(() => {
    document.title = "Termos e Condições | Ayanda Digital Media";
  }, []);
  return (
    <main className="max-w-4xl mx-auto p-6 py-10 mt-12 text-justify">
      <h1 className="text-3xl font-bold mb-4 mt-4 text-[#D4AF37]">
        Termos e Condições
      </h1>

      <p className="mb-4">
        Estes Termos e Condições regulam o uso do website da{" "}
        <strong>Ayanda Digital Media</strong> e os serviços por nós oferecidos.
        Ao aceder ao nosso site, o utilizador concorda em cumprir estes termos.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Utilização do Site</h2>
      <p className="mb-4">
        O utilizador compromete-se a utilizar o site apenas para fins legais e
        de acordo com a legislação aplicável. Qualquer uso indevido, como a
        tentativa de violar sistemas ou partilhar conteúdo ilegal, é
        estritamente proibido.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        2. Propriedade Intelectual
      </h2>
      <p className="mb-4">
        Todo o conteúdo disponível neste site — textos, imagens, logotipos,
        gráficos e código-fonte — é propriedade da{" "}
        <strong>Ayanda Digital Media</strong> e está protegido por leis de
        direitos de autor.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        3. Limitação de Responsabilidade
      </h2>
      <p className="mb-4">
        A Ayanda Digital Media não se responsabiliza por danos diretos ou
        indiretos resultantes do uso ou da incapacidade de utilizar o site ou os
        seus serviços.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Alterações</h2>
      <p className="mb-4">
        Reservamo-nos o direito de atualizar ou alterar estes Termos e Condições
        a qualquer momento. As alterações entram em vigor a partir da data da
        sua publicação no site.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Contacto</h2>
      <p className="mb-4">
        Para mais informações sobre estes termos, o utilizador pode contactar-nos
        através do e-mail oficial disponível na página de contacto.
      </p>

      <p className="mt-6">
        Última atualização: <strong>20 de outubro de 2025</strong>
      </p>
    </main>
  );
}
