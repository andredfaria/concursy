import { getAllPosts } from "@/app/lib/posts";
import BlogCard from "./BlogCard";

export default async function BlogList() {
  const posts = await getAllPosts();

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Blog Concursy
            <span className="ml-2 inline-block animate-bounce">📚</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Dicas, estudos e informações sobre concursos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
} 