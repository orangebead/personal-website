// src/app/experience/page.tsx
import { InteractiveGrid } from "@/components/backgrounds/CustomGrid"

// --- Data ---

const workExperience = [
  {
    role: "Software Engineering Intern",
    organization: "Suntech Business Solutions",
    date: "Jun 2026 – Present",
    description: "Building a feature-usage telemetry pipeline to capture user interaction events. Developing real-time invoice analytics dashboards using Power BI and AWS QuickSight, and working within a fintech platform handling UAE e-invoicing compliance.",
  }
]

const extracurriculars = [
  {
    role: "Technical Executive",
    organization: "Microsoft Tech Club (MTC)",
    date: "Aug 2025 – Present",
    description: "Led a campus-wide AI workshop on recommendation systems and developed the official MTC website using React and Tailwind CSS. Assisted in prepping materials and managing the overall flow for the club's Vibe Coding workshop.",
  }
]

const education = [
  {
    role: "B.E. Computer Science (Minor: Data Science)",
    organization: "BITS Pilani Dubai Campus",
    date: "2024 – 2028",
    description: "Current CGPA: 9.3/10. Focusing on data-oriented software development, backend systems, and machine learning.",
  },
  {
    role: "Grade 12 (Science)",
    organization: "The Millennium School, Dubai",
    date: "Graduated 2023",
    description: "Graduated with 87%.",
  }
]

// --- Timeline Component ---

interface TimelineItemProps {
  role: string;
  organization: string;
  date: string;
  description: string;
}

function TimelineItem({ role, organization, date, description }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12 group last:pb-0">
      {/* Vertical Line */}
      <div className="absolute left-[9px] top-2 bottom-0 w-[2px] bg-gray-200 group-last:bg-transparent" />
      
      {/* Timeline Dot */}
      <div className="absolute left-0 top-1.5 h-5 w-5 rounded-full border-4 border-white bg-gray-900 shadow-sm" />
      
      {/* Content */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
        <h3 className="text-xl font-bold text-gray-900">{role}</h3>
        <span className="text-sm font-medium text-gray-500 mt-1 sm:mt-0 shrink-0 sm:ml-4">{date}</span>
      </div>
      <h4 className="text-md font-semibold text-gray-700 mb-3">{organization}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

// --- Page Layout ---

export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen">
      <InteractiveGrid className="opacity-20 pointer-events-none fixed inset-0" />
      
      <main className="relative z-10 px-8 py-16 pb-32 max-w-3xl mx-auto space-y-16">
        
        {/* Header */}
        <header>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h1>
          <p className="text-gray-600">
            A timeline of my professional experience, academic background, and extracurricular involvement.
          </p>
        </header>

        {/* Work Experience Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-2">Work Experience</h2>
          <div>
            {workExperience.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Extracurriculars Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-2">Extracurriculars</h2>
          <div>
            {extracurriculars.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-2">Education</h2>
          <div>
            {education.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}