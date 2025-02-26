export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string;
  readingTime: number;
};

export async function getAllPosts(): Promise<Post[]> {
  // This is a placeholder. In a real application, you would fetch this from your 
  // CMS or database
  return [
    {
      slug: "bancas-organizadoras",
      title: "Desvendando as bancas organizadoras de concursos públicos",
      date: "2025-03-01",
      coverImage:
        "https://estudoacelerado.com.br/wp-content/uploads/2016/05/Bancas-de-Concursos.png",
      excerpt: "As bancas organizadoras de concursos públicos no Brasil desempenham papel fundamental...",
      content: `
<p>As bancas organizadoras de concursos públicos no Brasil desempenham papel fundamental na definição do perfil das provas e, consequentemente, na estratégia de estudos dos candidatos. Cada banca tem características específicas em termos de estilo de cobrança, nível de dificuldade, linguagem das questões e formato das avaliações, o que exige do concurseiro uma preparação direcionada e atenta a esses detalhes. A seguir, destacam-se algumas das principais bancas e seus estilos característicos.</p>

<br>

<p><b>CESPE/Cebraspe</b><br>
O Centro Brasileiro de Pesquisa em Avaliação e Seleção e de Promoção de Eventos (Cebraspe), ainda conhecido por muitos como CESPE, é famoso por adotar o modelo de prova de “certo” ou “errado”. Em muitos concursos organizados por essa banca, cada resposta errada anula uma certa, o que torna necessária uma análise mais cautelosa das questões para evitar penalizações. As provas da CESPE/Cebraspe costumam cobrar bastante interpretação de texto, raciocínio lógico e capacidade de analisar o contexto antes de responder. Questões discursivas, quando presentes, requerem do candidato organização de ideias, objetividade e conhecimento aprofundado da matéria.</p>

<br>

<p><b>Fundação Carlos Chagas (FCC)</b><br>
A FCC é outra banca bastante presente em concursos de tribunais, órgãos legislativos e executivos. Suas provas frequentemente combinam questões objetivas de múltipla escolha, com cinco alternativas, que testam tanto a memorização de conteúdos quanto a interpretação. Em Língua Portuguesa, a banca valoriza a análise gramatical e a interpretação de textos mais formais. Na área de Direito, é comum ver enunciados que cobram diretamente a letra da lei, mas também surgem questões que exigem do candidato o entendimento prático e jurisprudencial dos temas. A FCC costuma ter uma linguagem clara e objetiva, o que facilita a leitura, mas não reduz o nível de exigência.</p>

<br>

<p><b>Fundação Getulio Vargas (FGV)</b><br>
A FGV costuma elaborar provas que mesclam questões interpretativas com casos práticos. Na parte de Direito, por exemplo, é comum encontrarmos questões que apresentam situações hipotéticas do cotidiano jurídico, cobrando do candidato a aplicação correta da legislação e do entendimento doutrinário ou jurisprudencial. Já em disciplinas como Administração e Contabilidade, a banca gosta de incluir cálculos, gráficos e tabelas para analisar as habilidades práticas do concurseiro. Em Língua Portuguesa, aparecem textos de diferentes gêneros, muitas vezes cobrando a compreensão global e a interpretação crítica.</p>

<br>

<p><b>Vunesp</b><br>
Tradicional em concursos de órgãos paulistas e universidades estaduais, a Vunesp utiliza uma abordagem que costuma valorizar o conteúdo literal da lei em provas de Direito, mas não deixa de lado aspectos mais interpretativos. Nas disciplinas de Português, Matemática e Raciocínio Lógico, a banca exige atenção a detalhes: o enunciado pode trazer informações que conduzem ao erro se o candidato não estiver atento. A dificuldade das provas da Vunesp varia conforme o cargo, podendo apresentar níveis mais básicos em concursos de nível médio e aprofundar-se em questões de alta complexidade em certames para nível superior.</p>

<br>

<p><b>IADES, IBFC, Quadrix e outras bancas</b><br>
Além das mais tradicionais, há uma série de bancas que organizam concursos em diversas regiões do país, como IADES, IBFC, Quadrix, AOCP, dentre outras. Essas instituições costumam ter estilos variados, muitas vezes combinando elementos de diferentes bancas mais conhecidas. É comum verificarmos nesses certames um mix de questões que exploram tanto a literalidade dos conteúdos quanto a interpretação de situações concretas.</p>

<br>

<p>Em resumo, conhecer a banca examinadora e suas características é uma etapa crucial para quem se prepara para concursos públicos. Cada instituição apresenta preferências e padrões de elaboração de provas que podem facilitar ou dificultar a vida do concurseiro, dependendo do nível de estudo e da familiaridade com o estilo de cobrança. A recomendação é, sempre que possível, resolver provas anteriores, identificar os tipos de questões mais recorrentes e direcionar o estudo para suprir as exigências específicas de cada banca.</p>
`,
      readingTime: 5,
    },
    // Add more posts here
  ];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug) || null;
} 