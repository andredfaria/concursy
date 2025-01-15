const SimuladosSection = () => {
  return (
    <section className="bg-gradient-to-r from-custom-blue to-cyan-800 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl text-custom-white mb-4 sm:mb-6">
          O melhor simulado para seu concurso!
        </h1>
        <p className="text-custom-white text-lg sm:text-xl mb-6 sm:mb-8">
          Simulados completos, correção personalizada e análises detalhadas para
          cada resposta!
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          <a target="_blank"
            href="https://www.instagram.com/concursy2024/"
            className="bg-gradient-to-r from-[#37718a] to-[#040009] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:from-[#4a839b] hover:to-[#1a0c12] transition-all duration-300 transform hover:scale-105"
          >
            Conheça mais sobre nós
          </a>
        </div>
      </div>
    </section>
  );
};

export default SimuladosSection;
