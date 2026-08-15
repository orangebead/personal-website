// src/app/experience/page.tsx
import { InteractiveGrid } from "@/components/backgrounds/CustomGrid"

// --- Data ---

const workExperience = [
  {
    organization: "Suntech Business Solutions",
    roles: [
      {
        title: "Intern",
        date: "Jun 2026 – Jul 2026",
        description: "Building an operational analytics reporting pipeline for senior leadership, from PostgreSQL into Metabase dashboards. Delivered a mentor-approved prototype using synthetic data ahead of production data availability, and proposed an AWS-based architecture (S3, EventBridge, Lambda) with a cost breakdown for scaling the pipeline to production.",
      }
    ]
  },
]

const extracurriculars = [
  {
    organization: "Microsoft Tech Club (MTC)",
    roles: [
      {
        title: "Technical Manager",
        date: "Aug 2026 – Present",
        description: "Overseeing technical initiatives and project development for the club. Mentoring technical executives and directing the execution of campus-wide workshops and events. [Update this description with your actual achievements]",
      },
      {
        title: "Technical Executive",
        date: "Aug 2025 – Aug 2026",
        description: "Led a campus-wide AI workshop on recommendation systems and developed the official MTC website using React and Tailwind CSS. Assisted in prepping materials and managing the overall flow for the club's Vibe Coding workshop.",
      }
    ]
  },
]

const education = [
  {
    organization: "B.E. Computer Science (Minor: Data Science)",
    roles: [
      {
        title: "BITS Pilani Dubai Campus",
        date: "2024 – 2028",
        description: "Current CGPA: 9.3/10. Focusing on data-oriented software development, backend systems, and machine learning.",
      }
    ]
  },
  {
    organization: "CBSE Grade 12",
    roles: [
      {
        title: "The Millennium School, Dubai",
        date: "Graduated 2023",
        description: "Graduated with 87%. Science stream - Physics, Chemistry, Mathematics, Computer Science.",
      }
    ]
  }
]

// --- Timeline Component ---

interface RoleItem {
  title: string;
  date: string;
  description: string;
}

interface TimelineItemProps {
  organization: string;
  roles: RoleItem[];
  showConnector?: boolean;
}

function TimelineItem({ organization, roles, showConnector = true }: TimelineItemProps) {
  const hasMultipleRoles = roles.length > 1;

  return (
    <div className="relative pb-12 group last:pb-0">
      {/* Vertical Line (connects this org to the next one in the section) */}
      {showConnector && (
        <div className="absolute left-[9px] top-9 bottom-0 w-[2px] bg-gray-200 group-last:bg-transparent" />
      )}
      
      {/* Organization Title — flush left, sits above its indented subparts */}
      <h3 className="text-xl font-bold text-gray-900 mb-5">{organization}</h3>
      
      {/* Roles List — indented to read as subparts of the organization above */}
      <div className="pl-8 space-y-6">
        {roles.map((role, index) => (
          <div key={index} className="relative">
            {/* Connecting line between roles within the same organization (shows progression) */}
            {hasMultipleRoles && index < roles.length - 1 && (
              <div className="absolute -left-5 top-4 bottom-[-24px] w-[2px] bg-gray-200" />
            )}
            {/* Role Dot */}
            <div className="absolute -left-6 top-1.5 h-2.5 w-2.5 rounded-full bg-gray-400" />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1.5">
              <h4 className="text-md font-semibold text-gray-800">{role.title}</h4>
              <span className="text-sm font-medium text-gray-500 mt-1 sm:mt-0 shrink-0 sm:ml-4">{role.date}</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{role.description}</p>
          </div>
        ))}
      </div>
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
              <TimelineItem key={index} {...item} showConnector={false} />
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}