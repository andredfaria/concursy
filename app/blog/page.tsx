import BlogList from "@/app/components/blog/BlogList";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ContatoSection from "../components/ContatoSection";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <BlogList />
      <ContatoSection />
      <Footer />
    </div>
  );
}