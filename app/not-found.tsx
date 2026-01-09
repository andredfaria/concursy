import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-custom-white px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-9xl md:text-[12rem] font-bold text-custom-blue mb-4">
            404
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-custom-black mb-4">
            Página não encontrada
          </h2>
          
          <p className="text-lg md:text-xl text-custom-blue mb-8 max-w-md mx-auto">
            Ops! A página que você está procurando não existe ou foi movida.
          </p>
          
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-custom-blue to-custom-black text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:from-[#4a839b] hover:to-[#1a0c12] transition-all duration-300 transform hover:scale-105"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
