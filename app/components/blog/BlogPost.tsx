import Link from "next/link";
import { Post } from "@/app/lib/posts";

function formatDateBrazilian(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}

export default function BlogPost({ post }: { post: Post }) {
  if (!post) return null;

  return (
    <article className="bg-gradient-to-b from-gray-50 to-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/blog"
          className="inline-flex items-center text-custom-blue hover:text-custom-black mb-8"
        >
          ← Voltar para o blog
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <time dateTime={post.date}>{formatDateBrazilian(post.date)}</time>
              <span className="mx-2">•</span>
              <span>{post.readingTime} min de leitura</span>
            </div>

            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>
    </article>
  );
} 