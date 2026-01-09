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
  published_date: string;
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
 */
function formatDate(isoDate: string): string {
  try {
    const date = new Date(isoDate);
    return date.toISOString().split("T")[0];
  } catch {
    return isoDate.split("T")[0];
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
  const date = formatDate(apiPost.published_date);
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
      next: { revalidate: 3600 }, // Cache por 1 hora
    });

    if (!response.ok) {
      console.error(`Erro ao buscar posts: ${response.status}`);
      return [];
    }

    const apiPosts: ApiPost[] = await response.json();

    if (!Array.isArray(apiPosts)) {
      console.error("Resposta da API não é um array");
      return [];
    }

    return apiPosts.map(mapApiPostToPost);
  } catch (error) {
    console.error("Erro ao buscar posts do endpoint:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}
