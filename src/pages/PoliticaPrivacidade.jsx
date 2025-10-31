import { useEffect } from "react";
export default function PoliticaPrivacidade() {
  useEffect(() => {
    document.title = "Política de Privacidade | Ayanda Digital Media";
  }, []);
  return (
    <main className="max-w-4xl mx-auto p-6 py-10 mt-12 text-justify">
      <h1 className="text-3xl font-bold mb-4 mt-4 text-[#D4AF37]">
        Política de Privacidade
      </h1>

      <p className="mb-4">
        Na <strong>Ayanda Digital Media</strong>, valorizamos a privacidade
        dos nossos clientes e visitantes. Esta Política de Privacidade explica
        como recolhemos, utilizamos e protegemos as suas informações pessoais
        quando interage connosco através do nosso site ou serviços.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Recolha de Dados</h2>
      <p className="mb-4">
        Recolhemos informações fornecidas voluntariamente pelos utilizadores,
        como nome, e-mail e número de telefone, através de formulários de
        contacto ou subscrições. Também podemos recolher dados automaticamente,
        como o endereço IP e o tipo de navegador, para fins estatísticos.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        2. Utilização das Informações
      </h2>
      <p className="mb-4">
        Os dados recolhidos são utilizados exclusivamente para melhorar a
        experiência do utilizador, responder a pedidos, enviar comunicações
        comerciais e garantir a qualidade dos nossos serviços.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Partilha de Dados</h2>
      <p className="mb-4">
        A <strong>Ayanda Digital Media</strong> não partilha informações
        pessoais com terceiros, exceto quando necessário para cumprir
        obrigações legais ou prestar serviços solicitados.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Segurança</h2>
      <p className="mb-4">
        Implementamos medidas técnicas e organizacionais adequadas para
        proteger os seus dados contra acesso não autorizado, alteração ou
        destruição.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        5. Direitos do Utilizador
      </h2>
      <p className="mb-4">
        O utilizador pode solicitar o acesso, correção ou eliminação dos seus
        dados pessoais a qualquer momento, entrando em contacto connosco
        através do e-mail oficial.
      </p>

      <p className="mt-6">
        Última atualização: <strong>20 de outubro de 2025</strong>
      </p>
    </main>
  );
}
