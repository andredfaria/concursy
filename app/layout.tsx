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
  title: "Concursy - Prepare-se para o Sucesso",
  description: "A melhor preparação para os seus exames!",
  openGraph: {
    title: "Concursy - Prepare-se para o Sucesso",
    description: "A melhor preparação para os seus exames!",
    url: "https://www.concursy.com.br",
    siteName: "Concursy",
    images: [
      {
        url: "https://www.concursy.com.br/assets/logo_background.png",
        width: 1200,
        height: 630,
        alt: "Concursy - Prepare-se para o Sucesso",
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
        {/* Script para carregar o Pixel do Facebook */}
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
        {/* Meta tags Open Graph */}
        <meta
          property="og:title"
          content="Concursy - Prepare-se para o Sucesso"
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
