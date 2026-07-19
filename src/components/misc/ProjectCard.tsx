import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

export function ProjectCard({ title, description, tags, liveUrl, githubUrl }: ProjectCardProps) {
  // Check if the URL starts with HTTP to determine if it's external
  const isExternalLiveUrl = liveUrl?.startsWith("http");

  return (
    <div className="group rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
      
      {/* Title */}
      <h3 className="text-xl font-semibold">{title}</h3>

      {/* Description */}
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
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
            className="text-sm font-medium hover:underline"
          >
            {isExternalLiveUrl ? "Live Demo ↗" : "Read Post →"}
          </Link>
        )}
        {githubUrl && (
          <Link 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:underline"
          >
            GitHub ↗
          </Link>
        )}
      </div>

    </div>
  )
}