// app/components/Header.tsx

const ContatoSection = () => {
  return (
    <section id="contato" className="bg-custom-blue text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Fale Conosco</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Seu Nome"
              required
              className="w-full px-4 py-2 rounded-md text-gray-800"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Seu Email"
              required
              className="w-full px-4 py-2 rounded-md text-gray-800"
            />
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Sua Mensagem"
              required
              className="w-full px-4 py-2 rounded-md text-gray-800 h-32"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-cyan-800  px-6 py-2 rounded-md font-semibold hover:bg-custom-blue transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContatoSection;
