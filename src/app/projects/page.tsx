// src/app/projects/page.tsx
import { InteractiveGrid } from "@/components/backgrounds/CustomGrid"
import { ProjectCard } from "@/components/misc/ProjectCard"


const projects = [
  {
    title: "Gesture Based Image Marking Tool",
    description: "A hands-free marking tool for situations where you need to mark a point of interest on an image without touching anything — built for lab settings, mechanics with gloves, and similar use cases.",
    tags: ["Python", "Computer Vision", "OpenCV"],
    githubUrl: "https://github.com/orangebead/hands-free-mark",
  },
  {
    title: "Retail Vision — AI Spatial Analytics",
    description: "A computer vision engine that transforms standard CCTV footage into business intelligence. Uses YOLO and BoT-SORT to monitor real-time zone occupancy, customer flow, and checkout density with custom polygonal tracking.",
    tags: ["Python", "YOLO", "BoT-SORT", "Computer Vision", "OpenCV"],
    githubUrl: "https://github.com/orangebead/retail-analytics",
  },
  {
    title: "My Website!",
    description: "My Personal Portfolio built with Next.js, showcasing my projects, skills, and experience.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://neillaturkar.vercel.app",
    githubUrl: "https://github.com/orangebead/personal-website",
  },
  // add more...
]

export default function Projects() {
  return (
    <div className="relative min-h-screen">
      <InteractiveGrid className="opacity-20 pointer-events-none" />
      <main className="relative z-10 px-8 py-16 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-4 text-muted-foreground">Things I've built</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>
    </div>
  )
}