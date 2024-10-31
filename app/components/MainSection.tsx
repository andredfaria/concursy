// app/components/Header.tsx

const SimuladosSection = () => {
  return (
    <section className="bg-gradient-to-r from-custom-blue to-cyan-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl text-custom-white mb-6">
          O melhor simulado para seu concurso!
        </h1>
        <p className="text-custom-white text-xl mb-8">
          Simulados com comentários em cada resposta para você ir mais longe
        </p>
        <a
          href=""
          className="bg-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition-colors"
        >
          Comece Agora
        </a>
      </div>
    </section>
  );
};

export default SimuladosSection;
