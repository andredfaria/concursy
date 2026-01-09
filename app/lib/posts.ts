export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string;
  readingTime: number;
};

type ApiPost = {
  title: string;
  url: string;
  published_date: string | null;
  score: string;
  content: string;
  raw_content: string;
  count: number;
  id: number;
  createdAt: string;
  updatedAt: string;
};

const BLOG_API_URL = "https://n8n.eficienciia.com.br/webhook/concursy-blog";

/**
 * Gera um slug a partir do título do post
 */
function generateSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
    .replace(/^-+|-+$/g, "");
}

/**
 * Formata a data ISO para formato YYYY-MM-DD
 * Aceita string ou null, retorna string vazia se não conseguir formatar
 */
function formatDate(isoDate: string | null | undefined): string {
  if (!isoDate) {
    return "";
  }
  try {
    const date = new Date(isoDate);
    if (isNaN(date.getTime())) {
      return "";
    }
    return date.toISOString().split("T")[0];
  } catch {
    try {
      return isoDate.split("T")[0];
    } catch {
      return "";
    }
  }
}

/**
 * Calcula o tempo de leitura baseado no conteúdo (aproximadamente 200 palavras por minuto)
 */
function calculateReadingTime(content: string): number {
  const textContent = content.replace(/<[^>]*>/g, ""); // Remove HTML tags
  const wordCount = textContent.trim().split(/\s+/).filter(word => word.length > 0).length;
  const minutes = Math.ceil(wordCount / 200);
  return minutes > 0 ? minutes : 1;
}

/**
 * Gera um excerpt a partir do conteúdo de texto
 */
function generateExcerpt(text: string, maxLength: number = 200): string {
  const cleanText = text.replace(/\s+/g, " ").trim();
  if (cleanText.length <= maxLength) {
    return cleanText;
  }
  return cleanText.substring(0, maxLength).trim() + "...";
}

/**
 * Mapeia um post da API para o formato Post interno
 */
function mapApiPostToPost(apiPost: ApiPost): Post {
  const slug = generateSlugFromTitle(apiPost.title);
  // Usa published_date se disponível, caso contrário usa createdAt como fallback
  const dateString = apiPost.published_date || apiPost.createdAt;
  const date = formatDate(dateString);
  const excerpt = generateExcerpt(apiPost.content);
  const readingTime = calculateReadingTime(apiPost.raw_content);

  return {
    slug,
    title: apiPost.title,
    date,
    coverImage: "",
    excerpt,
    content: apiPost.raw_content,
    readingTime,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const response = await fetch(BLOG_API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      next: { revalidate: 3600 }, // Cache por 1 hora
      // Timeout implícito do Next.js (padrão é 30s para fetch)
    });

    // Verifica se a resposta está OK
    if (!response.ok) {
      const statusText = response.statusText || "Erro desconhecido";
      console.error(
        `Erro ao buscar posts: ${response.status} ${statusText}`,
        `URL: ${BLOG_API_URL}`
      );
      return [];
    }

    // Verifica se o Content-Type é JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error(
        `Resposta da API não é JSON. Content-Type: ${contentType}`,
        `URL: ${BLOG_API_URL}`
      );
      return [];
    }

    // Faz o parse do JSON
    let apiPosts: ApiPost[];
    try {
      apiPosts = await response.json();
    } catch (jsonError) {
      console.error(
        "Erro ao fazer parse do JSON da resposta:",
        jsonError instanceof Error ? jsonError.message : jsonError
      );
      return [];
    }

    // Valida se a resposta é um array
    if (!Array.isArray(apiPosts)) {
      console.error(
        `Resposta da API não é um array. Tipo recebido: ${typeof apiPosts}`,
        `URL: ${BLOG_API_URL}`
      );
      return [];
    }

    // Mapeia e filtra posts inválidos
    const posts = apiPosts
      .map((apiPost, index) => {
        try {
          // Valida campos obrigatórios
          // published_date pode ser null, nesse caso usamos createdAt como fallback
          if (
            !apiPost.title ||
            !apiPost.content ||
            !apiPost.raw_content ||
            (!apiPost.published_date && !apiPost.createdAt)
          ) {
            console.warn(
              `Post no índice ${index} está incompleto. Campos obrigatórios ausentes.`,
              {
                hasTitle: !!apiPost.title,
                hasPublishedDate: !!apiPost.published_date,
                hasCreatedAt: !!apiPost.createdAt,
                hasContent: !!apiPost.content,
                hasRawContent: !!apiPost.raw_content,
              }
            );
            return null;
          }
          return mapApiPostToPost(apiPost);
        } catch (error) {
          console.error(
            `Erro ao mapear post no índice ${index}:`,
            error instanceof Error ? error.message : error
          );
          return null;
        }
      })
      .filter((post): post is Post => post !== null);

    return posts;
  } catch (error) {
    // Trata diferentes tipos de erro
    if (error instanceof TypeError && error.message.includes("fetch")) {
      console.error(
        "Erro de rede ao buscar posts:",
        error.message,
        `URL: ${BLOG_API_URL}`
      );
    } else if (error instanceof Error) {
      console.error(
        "Erro ao buscar posts do endpoint:",
        error.message,
        `Stack: ${error.stack}`
      );
    } else {
      console.error("Erro desconhecido ao buscar posts:", error);
    }
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}
