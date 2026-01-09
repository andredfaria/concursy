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

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-custom-blue transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center text-sm text-gray-500">
            <time dateTime={post.date}>{formatDateBrazilian(post.date)}</time>
            <span className="mx-2">•</span>
            <span>{post.readingTime} min de leitura</span>
          </div>
        </div>
      </article>
    </Link>
  );
} 