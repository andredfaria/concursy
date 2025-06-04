"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { 
  Clock, 
  CheckCircle, 
  Star, 
  FileText, 
  Target, 
  TrendingUp, 
  Shield, 
  Award, 
  Users,
  ChevronDown 
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PRF2025Page = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});

  useEffect(() => {
    // Gerar uma data aleatória entre 1 e 3 dias
    const randomDays = Math.floor(Math.random() * 3) + 1;
    const randomHours = Math.floor(Math.random() * 24);
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + randomDays);
    targetDate.setHours(targetDate.getHours() + randomHours);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const benefits = [
    {
      icon: <FileText className="w-8 h-8 text-custom-blue" />,
      title: "100 Questões por Simulado",
      description: "Questões cuidadosamente elaboradas seguindo o padrão da prova oficial"
    },
    {
      icon: <Target className="w-8 h-8 text-custom-blue" />,
      title: "Comentários Detalhados",
      description: "Cada questão possui explicação completa para maximizar seu aprendizado"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-custom-blue" />,
      title: "Identifique Pontos Fracos",
      description: "Relatórios detalhados para focar nos assuntos que precisam de mais atenção"
    },
    {
      icon: <Award className="w-8 h-8 text-custom-blue" />,
      title: "Estilo Oficial da Prova",
      description: "Simulados que reproduzem fielmente o formato e dificuldade do concurso real"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Aprovada PRF 2024",
      comment: "Os simulados foram fundamentais para minha aprovação. O formato idêntico à prova real me deixou muito mais confiante no dia do exame.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Aprovado PRF 2024",
      comment: "Excelente qualidade das questões e comentários muito didáticos. Recomendo para quem quer uma preparação séria.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Aprovada PRF 2024",
      comment: "Material completo e bem estruturado. Me ajudou a identificar exatamente onde precisava melhorar.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Quantos simulados estão inclusos?",
      answer: "Você terá acesso a múltiplos simulados completos, cada um com 100 questões comentadas, garantindo uma preparação abrangente."
    },
    {
      question: "As questões seguem o padrão da prova oficial?",
      answer: "Sim! Todas as questões são elaboradas seguindo rigorosamente o estilo, formato e nível de dificuldade da prova oficial da PRF."
    },
    {
      question: "Por quanto tempo terei acesso?",
      answer: "Seu acesso é vitalício! Você pode estudar no seu ritmo sem pressa e revisitar o material quando quiser."
    },
    {
      question: "Há garantia de satisfação?",
      answer: "Sim! Oferecemos 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos seu dinheiro."
    }
  ];

  return (
    <div className="min-h-screen">
      <Head>
        <title>Simulado PRF 2025 - Concursy | Sua Aprovação Garantida</title>
        <meta
          name="description"
          content="Os simulados mais completos para o concurso da Polícia Rodoviária Federal 2025. Centenas de questões comentadas no formato oficial da prova."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-custom-blue to-cyan-800 text-custom-white py-16">
        <div className="container mx-auto px-4 text-center">
          {/* Urgency Banner */}
          <div className="bg-red-600 text-white py-3 px-6 rounded-full inline-block mb-8 animate-pulse">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">
                OFERTA ESPECIAL EXPIRA EM: {timeLeft.days}d {timeLeft.hours}h{" "}
                {timeLeft.minutes}m {timeLeft.seconds}s
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl text-custom-white mb-4 sm:mb-6 font-bold leading-tight">
            Simulado PRF 2025
            <span className="block text-yellow-400">
              Sua Aprovação Garantida!
            </span>
          </h1>

          <p className="text-custom-white text-lg sm:text-xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
            Os simulados mais completos e eficazes para o concurso da Polícia
            Rodoviária Federal.
            <span className="font-semibold">
              {" "}
              Centenas de questões comentadas
            </span>{" "}
            no formato oficial da prova.
          </p>

          <div className="bg-custom-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">
                  {timeLeft.days}
                </div>
                <div className="text-sm">DIAS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">
                  {timeLeft.hours}
                </div>
                <div className="text-sm">HORAS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">
                  {timeLeft.minutes}
                </div>
                <div className="text-sm">MIN</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">
                  {timeLeft.seconds}
                </div>
                <div className="text-sm">SEG</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center flex-wrap gap-4">
            <button
              className="bg-gradient-to-r from-[#37718a] to-[#040009] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:from-[#4a839b] hover:to-[#1a0c12] transition-all duration-300 transform hover:scale-105 text-xl"
              onClick={() => {
                window.location.href =
                  "https://pay.hotmart.com/J98854347N";
              }}
            >
              QUERO GARANTIR MINHA VAGA POR R$ 59,99
            </button>
          </div>

          <p className="mt-4 text-sm text-[#f2f2f2] opacity-90">
            💳 Pagamento 100% Seguro | 🛡️ 7 dias de Garantia
          </p>
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
              Por que escolher nossos Simulados PRF 2025?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvidos por especialistas em concursos públicos com anos de
              experiência em aprovações
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
                    Simulados PRF 2025
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        Múltiplas provas completas com 100 questões cada
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        Comentários detalhados e didáticos para cada questão
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span>Formato idêntico à prova oficial da PRF</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span>Relatórios de desempenho individualizados</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span>Acesso vitalício ao material</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span>Suporte técnico especializado</span>
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
                    <div className="text-3xl font-bold mb-2">R$ 59,99</div>
                    <div className="text-sm opacity-90">Pagamento único</div>
                  </div>

                  <button
                    className="w-full bg-gradient-to-r from-[#37718a] to-[#040009] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:from-[#4a839b] hover:to-[#1a0c12] transition-all duration-300 transform hover:scale-105"
                    onClick={() => {
                      window.location.href =
                        "https://pay.hotmart.com/J98854347N";
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
            Não perca esta oportunidade única!
          </h2>
          <p className="text-xl text-[#f2f2f2] mb-8 max-w-3xl mx-auto">
            Garanta sua vantagem e chegue na prova da PRF muito mais preparado!
            Quem quer a vaga, estuda do jeito certo. E isso começa por aqui:
            simulados de alta qualidade, alinhados ao edital e focados no que
            realmente cai na prova.
          </p>

          <div className="bg-custom-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-md mx-auto">
            <div className="text-sm mb-2">OFERTA EXPIRA EM:</div>
            <div className="flex justify-center items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">
                  {timeLeft.days}
                </div>
                <div className="text-xs">DIAS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">
                  {timeLeft.hours}
                </div>
                <div className="text-xs">HORAS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">
                  {timeLeft.minutes}
                </div>
                <div className="text-xs">MIN</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">
                  {timeLeft.seconds}
                </div>
                <div className="text-xs">SEG</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center flex-wrap gap-4">
            <button
              className="bg-gradient-to-r from-[#37718a] to-[#040009] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:from-[#4a839b] hover:to-[#1a0c12] transition-all duration-300 transform hover:scale-105 text-xl"
              onClick={() => {
                window.location.href =
                  "https://pay.hotmart.com/J98854347N";
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

export default PRF2025Page; 