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
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1612459173032421');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* NoScript Tag para rastrear usuários com JavaScript desabilitado */}
        <noscript>
          <img height="1" width="1"
            style={{ display: "none" }}
            alt="Facebook Pixel"
            src="https://www.facebook.com/tr?id=1612459173032421&ev=PageView&noscript=1"
          ></img>
        </noscript>
      </Head>

      <Header />
      <MainSection />
      <SimuladosSection />
      <ComoFuncionaSection />
      <DepoimentosSection />
      <ContatoSection />
      <Footer />
    </div>
  );
}
