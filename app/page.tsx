import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Concursy - Prepare-se para o Sucesso</title>
        <meta
          name="description"
          content="Simulados para vestibulares, concursos e ENEM. A melhor preparação para os seus exames."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-indigo-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo da Empresa"
              width={50}
              height={50}
              className="mr-4"
            />
            <span className="text-2xl font-bold">Concursy</span>
          </div>
          <nav className="space-x-6">
            <a
              href="#simulados"
              className="hover:text-indigo-200 transition-colors"
            >
              Simulados
            </a>
            <a
              href="#como-funciona"
              className="hover:text-indigo-200 transition-colors"
            >
              Como Funciona
            </a>
            <a
              href="#depoimentos"
              className="hover:text-indigo-200 transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="hover:text-indigo-200 transition-colors"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              A melhor preparação para os seus exames!
            </h1>
            <p className="text-xl mb-8">
              Prepare-se com nossos simulados de alta qualidade e tenha sucesso
              no ENEM, vestibulares e concursos.
            </p>
            <a
              href="#simulados"
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition-colors"
            >
              Comece Agora
            </a>
          </div>
        </section>

        <section id="simulados" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-indigo-600 text-center mb-12">
              Nossos Simulados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Correios", "Vestibulares", "Concursos"].map((tipo) => (
                <div
                  key={tipo}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-4">
                    Simulado {tipo}
                  </h3>
                  <p className="text-gray-600">
                    Questões atualizadas e personalizadas para {tipo}.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">
              Como Funciona?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  titulo: "1. Escolha seu Simulado",
                  descricao:
                    "Selecione o simulado que melhor se adapta à sua necessidade.",
                },
                {
                  titulo: "2. Resolva as Questões",
                  descricao:
                    "Faça o simulado com questões realistas e adaptadas ao nível do exame.",
                },
                {
                  titulo: "3. Receba o Feedback",
                  descricao:
                    "Veja sua pontuação e obtenha feedback detalhado para melhorar.",
                },
              ].map((step, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">{step.titulo}</h3>
                  <p className="text-gray-600">{step.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="depoimentos" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">
              Depoimentos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  texto:
                    "Os simulados me ajudaram muito a identificar minhas fraquezas e melhorar meu desempenho. Recomendo!",
                  autor: "João, Aprovado no ENEM",
                },
                {
                  texto:
                    "Consegui me preparar de forma eficiente para os vestibulares e passei na minha primeira opção.",
                  autor: "Maria, Aprovada no Vestibular",
                },
              ].map((depoimento, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-600 mb-4 italic">
                    {depoimento.texto}
                  </p>
                  <p className="text-right font-semibold">
                    - {depoimento.autor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="bg-indigo-600 text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Fale Conosco
            </h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  required
                  className="w-full px-4 py-2 rounded-md text-gray-800"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Seu Email"
                  required
                  className="w-full px-4 py-2 rounded-md text-gray-800"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Sua Mensagem"
                  required
                  className="w-full px-4 py-2 rounded-md text-gray-800 h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-indigo-600 px-6 py-2 rounded-md font-semibold hover:bg-indigo-100 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; 2024 Simulados Educacionais. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
