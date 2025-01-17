import React from "react";

const SimuladosSection = () => {
  const simulados = [
    {
      tipo: "ICMBIO",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvNRFPMED-zVH8DoizEC_HruF3wD23IrJmHA&s",
      edital: "https://www.cebraspe.org.br/concursos/icmbio_24",
      linkProduto:
        "https://concursy2024.hotmart.host/simulados-icmbio-2025-29795ad9-4a2b-4b68-93d9-65ec41b66861",
      data: "Inscrições de 17/01/2025 - 27/01/2025",
      disponivel: true,
    },
    {
      tipo: "MPU",
      imagem:
        "https://impconcursos.com.br/cdn/shop/articles/MPU_ab75baa4-fe2d-43ba-a052-f273085bc700.png?v=1725385412",
      edital:
        "https://www.gov.br/pf/pt-br/acesso-a-informacao/servidores/concursos",
      linkProduto: "https://www.gov.br/mpu/",
      data: "-",
      disponivel: false,
    },
    {
      tipo: "CPA-20",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi1-S2J56z2lR2V937rpnjaXDimFsq10BuNp7aP02n3L9LKAMx0u1C1VeKp2uSKeeCCwE&usqp=CAU",
      edital: "https://www.anbima.com.br/pt_br/educar/certificacoes/cpa-20.htm",
      linkProduto: "https://www.gov.br/mpu/",
      data: "-",
      disponivel: false,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Nossos Simulados
            <span className="ml-2 inline-block animate-bounce">📝</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Prepare-se com questões focadas no seu concurso.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {simulados.map((simulado) => (
            <div
              key={simulado.tipo}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img
                  src={simulado.imagem}
                  alt={`Simulado ${simulado.tipo}`}
                  className="object-cover w-full h-48"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {simulado.tipo}
                </h3>

                {simulado.disponivel ? (
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      3 Simulado {simulado.tipo} com correções
                    </p>

                    <div className="flex items-center gap-2 text-gray-700">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{simulado.data}</span>
                    </div>

                    <div className="space-y-3">
                      <a
                        target="_blank"
                        href={simulado.edital}
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      >
                        Acessar Edital →
                      </a>

                      <a
                        target="_blank"
                        href={simulado.linkProduto}
                        rel="noopener noreferrer"
                        className="block w-full py-3 px-4 text-center bg-gradient-to-r from-[#37718a] to-[#040009] px-6 py-3 rounded-full text-white font-semibold hover:from-[#4a8ca1] hover:to-[#262227] transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Garanta já
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Simulado {simulado.tipo} com questões atualizadas
                    </p>

                    <div className="flex items-center gap-2 pb-10 text-gray-700">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Data Prevista: {simulado.data}</span>
                    </div>

                    <div className="block w-full py-3 px-4 text-center bg-gradient-to-r from-[#37718a] to-[#040009] px-6 py-3 rounded-full text-white font-semibold hover:from-[#4a8ca1] hover:to-[#262227] transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Em breve ...
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimuladosSection;
