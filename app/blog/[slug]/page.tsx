import BlogPost from "@/app/components/blog/BlogPost";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getPostBySlug } from "@/app/lib/posts";

export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <div className="min-h-screen">
      <Header />
      <div className="text-center py-20">Post not found</div>
      <Footer />
    </div>;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <BlogPost post={post} />
      <Footer />
    </div>
  );
} 