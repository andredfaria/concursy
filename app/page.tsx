// pages/index.js
import Head from "next/head";
import ComoFuncionaSection from "./components/ComoFuncionaSection";
import ContatoSection from "./components/ContatoSection";
import DepoimentosSection from "./components/DepoimentosSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import SimuladosSection from "./components/SimuladosSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Concursy - Prepare-se para o Sucesso</title>
        <meta
          name="description"
          content="Simulados para vestibulares, concursos e ENEM. A melhor preparação para os seus exames."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <MainSection />
      <SimuladosSection />
      <ComoFuncionaSection />
      {/* <DepoimentosSection /> */}
      <ContatoSection />
      <Footer />
    </div>
  );
}
