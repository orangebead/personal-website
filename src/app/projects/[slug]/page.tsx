// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { articles } from "@/data/articles";
import { InteractiveGrid } from "@/components/backgrounds/CustomGrid";

export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Await the params to fix the Next.js 15 Promise error
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="relative min-h-screen">
      <InteractiveGrid className="opacity-20 pointer-events-none fixed inset-0" />
      
      {/* Added pb-32 so the content doesn't hide under your bottom dock */}
      <main className="relative z-10 px-8 py-16 pb-32 max-w-3xl mx-auto">
        <header className="mb-12">
          {/* Strict light mode styling */}
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{article.title}</h1>
          <p className="text-gray-600">{article.date}</p>
        </header>

        {/* Removed prose-invert so it forces light mode colors natively */}
        <article className="prose prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
}