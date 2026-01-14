"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  CheckCircle,
  Star,
  FileText,
  Target,
  TrendingUp,
  Shield,
  Award,
  Users,
  ChevronDown,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const IBGE2026Page = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});

  useEffect(() => {
    // Data da prova: 1 de março de 2026
    const targetDate = new Date('2026-03-01T00:00:00');

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // MAV Code - Criar inputs hidden no body
  useEffect(() => {
    const accountInput = document.getElementById('accountID');
    const accountPageInput = document.getElementById('accountPageID');
    
    // Valores dos inputs
    const accountValue = 'a3bf3f3e-8e3f-11f0-8209-0f951de5b1db';
    const accountPageValue = 'be6b2d18-f17a-11f0-8c19-73971664826e';
    
    if (!accountInput) {
      const input1 = document.createElement('input');
      input1.type = 'hidden';
      input1.id = 'accountID';
      input1.value = accountValue;
      document.body.appendChild(input1);
    }
    
    if (!accountPageInput) {
      const input2 = document.createElement('input');
      input2.type = 'hidden';
      input2.id = 'accountPageID';
      input2.value = accountPageValue;
      document.body.appendChild(input2);
    }
  }, []);

  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const benefits = [
    {
      icon: <FileText className="w-8 h-8 text-custom-blue" />,
      title: "60 Questões por Simulado",
      description:
        "3 simulados completos com questões cuidadosamente elaboradas seguindo rigorosamente o padrão do edital IBGE 2026",
    },
    {
      icon: <Target className="w-8 h-8 text-custom-blue" />,
      title: "4 Disciplinas do Edital",
      description:
        "Foco total em Português, Matemática, Ética no Serviço Público e Conhecimentos Técnicos de Recenseamento",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-custom-blue" />,
      title: "Comentários Detalhados",
      description:
        "Cada questão possui gabarito comentado e didático para maximizar seu aprendizado e garantir sua aprovação",
    },
    {
      icon: <Award className="w-8 h-8 text-custom-blue" />,
      title: "Formato Oficial IBGE",
      description:
        "Simulados que reproduzem fielmente o formato e nível de dificuldade da prova oficial do IBGE 2026",
    },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Aprovada IBGE - Agente Recenseamento",
      comment:
        "Os simulados foram fundamentais para minha aprovação. O formato idêntico à prova real do IBGE me deixou muito mais confiante no dia do exame.",
      rating: 5,
    },
    {
      name: "João Santos",
      role: "Aprovado IBGE - Agente Recenseamento",
      comment:
        "Excelente qualidade das questões e comentários muito didáticos. Recomendo para quem quer uma preparação séria e focada no edital oficial.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      role: "Aprovada IBGE - Agente Recenseamento",
      comment:
        "Material completo e bem estruturado, com foco nas 4 disciplinas do edital. Me ajudou a identificar exatamente onde precisava melhorar antes da prova.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "Quantos simulados estão inclusos?",
      answer:
        "Você terá acesso a 3 simulados completos e inéditos, cada um com 60 questões comentadas, totalizando 180 questões práticas. Isso garante uma preparação abrangente e completa para a prova do IBGE 2026: Agente Recenseamento.",
    },
    {
      question: "As questões seguem o padrão da prova oficial do IBGE?",
      answer:
        "Sim! Todas as questões são elaboradas seguindo rigorosamente o edital oficial do IBGE 2026, com foco nas 4 disciplinas: Língua Portuguesa (10 questões), Matemática (10 questões), Ética no Serviço Público (5 questões) e Conhecimentos Técnicos (25 questões). O formato e nível de dificuldade são idênticos à prova oficial.",
    },
    {
      question: "Por quanto tempo terei acesso ao material?",
      answer:
        "Seu acesso é vitalício! Você pode estudar no seu ritmo sem pressa e revisitar o material quando quiser. Ideal para se preparar para a prova marcada para 1º de março de 2026 e revisar o conteúdo quantas vezes precisar.",
    },
    {
      question: "Há garantia de satisfação?",
      answer:
        "Sim! Oferecemos 7 dias de garantia incondicional. Se não ficar satisfeito com o material, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. Seu investimento está totalmente protegido.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Head>
        <title>Simulados IBGE 2026: Agente Recenseamento - Concursy | Sua Aprovação Garantida</title>
        <meta
          name="description"
          content="Os simulados mais completos para o concurso IBGE 2026: Agente Recenseamento. 3 simulados completos com 60 questões cada, totalmente alinhados ao edital oficial do Censo 2026."
        />
        <link rel="icon" href="/favicon.ico" />

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16948824563"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16948824563');
            `,
          }}
        />

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
              fbq('init', '968264995201491');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=968264995201491&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* MAV Code - Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M7FNJJJ2');
            `,
          }}
        />
        {/* End MAV Code */}
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-custom-blue to-cyan-800 text-custom-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Coluna 1: Texto */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl text-custom-white mb-4 sm:mb-6 font-bold leading-tight">
                Simulados IBGE 2026: Agente Recenseamento
                <span className="block text-yellow-400">
                  Conquiste sua Vaga no Censo 2026!
                </span>
              </h1>

              <p className="text-custom-white text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed">
                A preparação completa e eficaz para o concurso temporário do IBGE 2026.
                <span className="font-semibold">
                  {" "}
                  3 simulados completos com 60 questões cada
                </span>{" "}
                totalmente alinhados ao edital oficial. Com <span className="font-semibold">9.580 vagas</span> disponíveis e remuneração de <span className="font-semibold">R$ 2.676,24</span>, esta é sua oportunidade de trabalhar no Censo 2026!
              </p>

              <div className="flex justify-center md:justify-start flex-wrap gap-4">
                <button
                  className="bg-gradient-to-r from-[#37718a] to-[#040009] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:from-[#4a839b] hover:to-[#1a0c12] transition-all duration-300 transform hover:scale-105 text-xl"
                  onClick={() => {
                    window.location.href = "https://pay.hotmart.com/Y102890841T";
                  }}
                >
                  QUERO GARANTIR MINHA VAGA POR R$ 59,00
                </button>
              </div>

              <p className="mt-4 text-sm text-[#f2f2f2] opacity-90">
                💳 Pagamento 100% Seguro | 🛡️ 7 dias de Garantia
              </p>
            </div>

            {/* Coluna 2: Imagem */}
            <div className="flex justify-center md:justify-end">
              <img
                src="https://www.infomoney.com.br/wp-content/uploads/2025/02/ibge.jpg?quality=70"
                alt="Agente do IBGE realizando recenseamento no Censo 2026"
                className="w-full max-w-lg mx-auto rounded-xl shadow-2xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      {/* <section className="py-16 bg-custom-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Users className="w-8 h-8 text-custom-blue" />
              <span className="text-2xl font-bold text-custom-blue">
                +2.847 aprovados
              </span>
            </div>
            <p className="text-gray-600 text-lg">
              Junte-se aos milhares que já conquistaram sua vaga!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-custom-blue">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-black mb-4">
              Por que escolher nossos Simulados IBGE 2026?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvidos por especialistas em concursos temporários do IBGE, com foco total no edital oficial do Censo 2026 e anos de experiência em aprovações
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-custom-black mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-8 bg-custom-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-black text-center mb-12">
              O que você receberá:
            </h2>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-custom-blue/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-custom-blue mb-6">
                    Simulados IBGE 2026: Agente Recenseamento
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        3 simulados completos com 60 questões cada, totalizando 180 questões inéditas
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        Gabaritos comentados e didáticos para cada questão, maximizando seu aprendizado
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span>Formato idêntico à prova oficial do IBGE 2026 (50 questões objetivas)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span>Foco nas 4 disciplinas do edital: Português, Matemática, Ética e Conhecimentos Técnicos</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span>Relatórios de desempenho individualizados por disciplina</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span>Acesso vitalício ao material - estude no seu ritmo</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span>Suporte técnico especializado e preparação focada no Censo 2026</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-custom-blue to-cyan-800 text-white p-6 rounded-xl text-center">
                  <Shield className="w-8 h-8 mx-auto mb-4 text-yellow-400" />
                  <h4 className="text-xl font-bold mb-4">Garantia de 7 Dias</h4>
                  <p className="text-[#f2f2f2] mb-6">
                    Se não ficar satisfeito, devolvemos 100% do seu dinheiro.
                    Sem perguntas, sem burocracia.
                  </p>

                  <div className="p-2 mb-4">
                    <div className="text-3xl font-bold mb-2">R$ 59,00</div>
                    <div className="text-sm opacity-90">Pagamento único</div>
                  </div>

                  <button
                    className="w-full bg-gradient-to-r from-[#37718a] to-[#040009] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:from-[#4a839b] hover:to-[#1a0c12] transition-all duration-300 transform hover:scale-105"
                    onClick={() => {
                      window.location.href =
                        "https://pay.hotmart.com/Y102890841T";
                    }}
                  >
                    COMPRAR AGORA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-black text-center mb-12">
              Perguntas Frequentes
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left !text-[#f2f2f2] flex justify-between items-center hover:bg-[#4a839b] transition-colors duration-200"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-semibold !text-[#f2f2f2]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-custom-blue transform transition-transform duration-200 ${
                        faqOpen[index] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {faqOpen[index] && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-custom-blue to-cyan-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Não perca esta oportunidade única do Censo 2026!
          </h2>
          <p className="text-xl text-[#f2f2f2] mb-8 max-w-3xl mx-auto">
            Garanta sua vantagem e chegue na prova do IBGE muito mais preparado! Com <strong>9.580 vagas</strong> disponíveis para Agente Recenseamento e prova marcada para <strong>1º de março de 2026</strong>, esta é sua chance de conquistar uma remuneração de <strong>R$ 2.676,24</strong> trabalhando no Censo 2026. Quem quer a vaga, estuda do jeito certo. E isso começa por aqui: 3 simulados completos de alta qualidade, totalmente alinhados ao edital oficial e focados nas 4 disciplinas que realmente caem na prova.
          </p>

          <div className="flex justify-center flex-wrap gap-4">
            <button
              className="bg-gradient-to-r from-[#37718a] to-[#040009] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:from-[#4a839b] hover:to-[#1a0c12] transition-all duration-300 transform hover:scale-105 text-xl"
              onClick={() => {
                window.location.href = "https://pay.hotmart.com/Y102890841T";
              }}
            >
              QUERO MINHA APROVAÇÃO
            </button>
          </div>

          <p className="text-sm text-[#f2f2f2] opacity-90 mt-4">
            🔒 Pagamento 100% Seguro | 📱 Acesso Imediato | 🛡️ Garantia de 7
            Dias
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IBGE2026Page;
