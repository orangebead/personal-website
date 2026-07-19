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
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="relative min-h-screen">
      <InteractiveGrid className="opacity-20 pointer-events-none fixed inset-0" />
      
      <main className="relative z-10 px-8 py-16 max-w-3xl mx-auto">
        <header className="mb-12">
          {/* Standard dark text for light mode */}
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{article.title}</h1>
          <p className="text-gray-600">{article.date}</p>
        </header>

        {/* 
          Using just 'prose' (without prose-invert) automatically 
          formats headings to near-black and paragraphs to a highly readable dark grey.
        */}
        <article className="prose prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
}