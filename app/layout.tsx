import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Concursy - Sua Melhor Preparação para Concursos Públicos",
  description:
    "Prepare-se para concursos públicos com simulados e materiais completos. A melhor plataforma para estudar e garantir sua aprovação!",
  openGraph: {
    title: "Concursy - Sua Melhor Preparação para Concursos Públicos",
    description:
      "Simulados, provas anteriores e conteúdos exclusivos para concursos públicos. Estude com eficiência e conquiste sua vaga!",
    url: "https://www.concursy.com.br",
    siteName: "Concursy",
    images: [
      {
        url: "https://www.concursy.com.br/assets/logo_background.png",
        width: 1200,
        height: 630,
        alt: "Concursy - Simulados e Materiais para Concursos Públicos",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        {/* Google Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11519677004"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11519677004');
            `,
          }}
        />
        {/* Google Tag Ads (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16948824563"
          strategy="afterInteractive"
        />
        <Script
          id="google-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16948824563');
            `,
          }}
        />
        {/* Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
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
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "v0gjdk8hmv");
            `,
          }}
        />
        {/* Meta tags Open Graph */}
        <meta
          property="og:title"
          content="Concursy - Prepare-se para o sucesso"
        />
        <meta
          property="og:description"
          content="A melhor preparação para os seus exames!"
        />
        <meta property="og:url" content="https://www.concursy.com.br" />
        <meta
          property="og:image"
          content="https://www.concursy.com.br/assets/logo_background.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Concursy" />
        <meta property="og:locale" content="pt_BR" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}