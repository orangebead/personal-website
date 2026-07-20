// src/components/misc/ProjectCard.tsx
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  category?: string // <-- Added category prop
}

export function ProjectCard({ title, description, tags, liveUrl, githubUrl, category }: ProjectCardProps) {
  const isExternalLiveUrl = liveUrl?.startsWith("http");

  return (
    <div className="group flex flex-col rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
      
      {/* Category Badge */}
      {category && (
        <div className="mb-4">
          <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-800 border border-gray-200">
            {category}
          </span>
        </div>
      )}
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full border px-3 py-1 text-xs text-gray-500">
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-6 flex gap-4">
        {liveUrl && (
          <Link 
            href={liveUrl} 
            target={isExternalLiveUrl ? "_blank" : undefined}
            rel={isExternalLiveUrl ? "noopener noreferrer" : undefined} 
            className="text-sm font-medium text-blue-600 hover:text-blue-500 hover:underline"
          >
            {isExternalLiveUrl ? "Live Demo ↗" : "Read Post →"}
          </Link>
        )}
        {githubUrl && (
          <Link 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-800 hover:underline"
          >
            GitHub ↗
          </Link>
        )}
      </div>

    </div>
  )
}