// src/app/projects/page.tsx
import { InteractiveGrid } from "@/components/backgrounds/CustomGrid"
import { ProjectCard } from "@/components/misc/ProjectCard"

const projects = [
  {
    title: "Are Intercity Routes RTA's Most Valuable Routes?",
    description: "A data-driven breakdown of the profitability of RTA's E306 intercity bus route vs the X23, calculated during my daily commute.",
    tags: ["Data Analysis", "Research", "Writing"],
    liveUrl: "/projects/rta-intercity-analysis",
    category: "Article", 
  },
  {
    title: "Cabinet - Videogame library tracker",
    description: "Web App to track your videogame library. Organize, rate and review games. Check insights on your library and see what your friends are playing.",
    tags: ["React", "Vite", "PostgreSQL", "Tailwind", "TypeScript", "Supabase", "Recharts"],
    liveUrl: "https://cabinet22.vercel.app",
    githubUrl: "https://github.com/orangebead/cabinet",
    category: "Web App",
  },
  {
    title: "Gesture Based Image Marking Tool",
    description: "A hands-free marking tool for situations where you need to mark a point of interest on an image without touching anything — built for lab settings, mechanics with gloves, and similar use cases.",
    tags: ["Python", "Computer Vision", "OpenCV"],
    githubUrl: "https://github.com/orangebead/hands-free-mark",
    category: "Computer Vision",
  },
  {
    title: "Retail Vision — AI Spatial Analytics",
    description: "A computer vision engine that transforms standard CCTV footage into business intelligence. Uses YOLO and BoT-SORT to monitor real-time zone occupancy, customer flow, and checkout density with custom polygonal tracking.",
    tags: ["Python", "YOLO", "BoT-SORT", "Computer Vision", "OpenCV"],
    githubUrl: "https://github.com/orangebead/retail-analytics",
    category: "Computer Vision",
  },
  {
    title: "My Website",
    description: "You're currently on it! My Personal Portfolio built with Next.js, showcasing my projects, skills, and experience.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://neillaturkar.vercel.app",
    githubUrl: "https://github.com/orangebead/personal-website",
    category: "Web App",
  },
]

export default function Projects() {
  return (
    <div className="relative min-h-screen">
      <InteractiveGrid className="opacity-20 pointer-events-none fixed inset-0" />
      <main className="relative z-10 px-8 py-16 pb-32 max-w-6xl mx-auto">
        
        {/* Updated Title and Description */}
        <h1 className="text-4xl font-bold text-gray-900">Archive</h1>
        <p className="mt-4 text-gray-600">
          A personal collection of things I've built, analyzed, and written. I love to experiment with new ideas and observations to build interesting projects across different mediums.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>
    </div>
  )
}