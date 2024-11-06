import React from "react";

const DepoimentosSection = () => {
  const depoimentos = [
    {
      texto:
        "Os simulados me ajudaram muito a identificar minhas fraquezas. Recomendo! 🎓",
      autor: "Maicon Taynan",
      imagem:
        "https://media.licdn.com/dms/image/v2/C4D03AQHtsTsRgZDLXg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1637068501889?e=1735776000&v=beta&t=3BfysuOqCn1YT7SFpBz7-i3gZE5ImLmZVTw2jSv5L_c",
      nota: 5,
    },
    {
      texto:
        "Consegui me preparar de forma eficiente para meu concurso e passei de primeira!",
      autor: "André Carvalho",
      imagem:
        "https://media.licdn.com/dms/image/v2/D4D03AQFIfVI1G7sv5g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723635498260?e=1735776000&v=beta&t=MIcYYSIGMo0HUKggjb5jUIjY-TfsuoxnaNJ_fP-2dqs",
      nota: 5,
    },
  ];

  const Estrelas = ({ quantidade }:any) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < quantidade ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block animate-[spin_3s_linear_infinite] text-4xl mb-4">
            ⭐
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Depoimentos
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            O que nossos alunos dizem sobre nós
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="relative">
          <div className="absolute -top-8 -left-8 w-16 h-16 text-blue-200 opacity-20">
            <svg fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          </div>
          <div className="absolute -bottom-8 -right-8 w-16 h-16 text-blue-200 opacity-20 transform rotate-180">
            <svg fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {depoimentos.map((depoimento, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <div className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <img
                        src={depoimento.imagem}
                        alt={depoimento.autor}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-50"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-1 rounded-full">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex-1">
                      <Estrelas quantidade={depoimento.nota} />
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        {depoimento.texto}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">
                            {depoimento.autor}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Junte-se aos milhares de alunos satisfeitos
          </p>
          <a target="_blank"
            href="#simulados"
            className="bg-[#37718a] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#4a8ca1] hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Começar Agora
          </a>
        </div>
      </div>
    </div>
  );
};

export default DepoimentosSection;
