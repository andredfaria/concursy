// app/components/Header.tsx
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-custom-blue text-black shadow-lg">
      <div className="container mx-auto bg-primary-color px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Concursy"
            width={50}
            height={50}
            className="mr-4"
          />
          <span className="text-2xl font-bold">Concursy</span>
        </div>
        <nav className="space-x-6">
          <a
            href="#simulados"
            className="text-custom-white hover:text-indigo-200 transition-colors"
          >
            Simulados
          </a>
          <a
            href="#como-funciona"
            className="text-custom-white hover:text-indigo-200 transition-colors"
          >
            Como Funciona
          </a>
          <a
            href="#depoimentos"
            className="text-custom-white hover:text-indigo-200 transition-colors"
          >
            Depoimentos
          </a>
          <a
            href="#contato"
            className="text-custom-white hover:text-indigo-200 transition-colors"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
