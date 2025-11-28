'use client'

import { DotScreenShader } from './ui/dot-shader-background'

const SimuladosSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Shader */}
      <div className="absolute inset-0 z-0">
        <DotScreenShader />
      </div>
      
      {/* Conteúdo sobreposto */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl text-custom-white mb-4 sm:mb-6 font-bold drop-shadow-lg">
          O melhor simulado para seu concurso!
        </h1>
        <p className="text-custom-white text-lg sm:text-xl mb-6 sm:mb-8 drop-shadow-md">
          Simulados completos, correção personalizada e análises detalhadas para
          cada resposta!
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          <a 
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/concursy_/"
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
