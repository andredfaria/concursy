import React from "react";

const ComoFuncionaSection = () => {
  const steps = [
    {
      titulo: "Pratique",
      emoji: "🎯",
      descricao:
        "Escolha o simulado ideal para o seu concurso e comece sua jornada.",
      imagem:
        "https://www.estudaqui.com/wp-content/uploads/2017/04/T%C3%A9cnica-para-resolver-quest%C3%B5es-de-concurso-Capa.jpg",
      cor: "from-blue-500 to-blue-600",
    },
    {
      titulo: "Aprenda",
      emoji: "📝",
      descricao: "Simule a prova com questões reais e ganhe experiência.",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40pTLyZboOryXJkZTnnsFh4k2aAf479C6rmFx2C3uHlIkDcQEvf1DQL81uoYdKK2PelY&usqp=CAU",
      cor: "from-purple-500 to-purple-600",
    },
    {
      titulo: "Passe",
      emoji: "🚀",
      descricao:
        "A aprovação está ao seu alcance! Dedicação e esforço fazem a diferença!",
      imagem:
        "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/8BEA/production/_108381853_provapa.jpg.webp",
      cor: "from-green-500 to-green-600",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Sua jornada
            <span className="ml-2 inline-block animate-bounce">🛣️</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Entenda como nosso simulado funciona e prepare-se de forma
            inteligente!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2" />

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div
                className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r ${step.cor} text-white flex items-center justify-center font-bold text-lg shadow-lg z-10 group-hover:scale-110 transition-transform duration-300`}
              >
                {index + 1}
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img
                    src={step.imagem}
                    alt={step.titulo}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {step.titulo}
                    </h3>
                    <span className="text-2xl">{step.emoji}</span>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {step.descricao}
                  </p>
                </div>

                {/* Decorative element */}
                <div className={`h-1 bg-gradient-to-r ${step.cor}`} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              target="_blank"
              href="https://maicontainluiz.hotmart.host/simulado-completo-agente-de-correios-carteiro-12c6deba-b7ca-4df3-90bb-19898c652001"
              className="bg-[#37718a] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#4a8ca1] hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Começar Agora
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/concursy_/"
              className="bg-white border-2 px-6 py-3 rounded-full text-[#37718a] font-semibold shadow-md hover:border-[#37718a] hover:text-[#040009] hover:bg-[#effeff] transition-all duration-300"
            >
              Saiba Mais
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ComoFuncionaSection;
