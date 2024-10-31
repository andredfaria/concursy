const DepoimentosSection = () => {
  return (
    <section id="depoimentos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
          Depoimentos 🌟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              texto:
                "Os simulados me ajudaram muito a identificar minhas fraquezas e melhorar meu desempenho. Recomendo! 🎓",
              autor: "Maicon Taynan",
              imagem:
                "https://media.licdn.com/dms/image/v2/C4D03AQHtsTsRgZDLXg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1637068501889?e=1735776000&v=beta&t=3BfysuOqCn1YT7SFpBz7-i3gZE5ImLmZVTw2jSv5L_c",
            },
            {
              texto:
                "Consegui me preparar de forma eficiente para os vestibulares e passei na minha primeira opção. 🚀",
              autor: "André de Faria Carvalho",
              imagem:
                "https://media.licdn.com/dms/image/v2/D4D03AQFIfVI1G7sv5g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723635498260?e=1735776000&v=beta&t=MIcYYSIGMo0HUKggjb5jUIjY-TfsuoxnaNJ_fP-2dqs",
            },
          ].map((depoimento, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex items-center"
            >
              <img
                src={depoimento.imagem}
                alt={depoimento.autor}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <p className="text-gray-700 mb-2 italic">{depoimento.texto}</p>
                <p className="text-right font-semibold text-gray-800">
                  - {depoimento.autor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;
