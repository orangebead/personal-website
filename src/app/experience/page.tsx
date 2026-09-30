// src/app/experience/page.tsx

import { InteractiveGrid } from "@/components/backgrounds/CustomGrid"

// --- Data ---

const workExperience = [
  {
    organization: "BITS Pilani Dubai Campus",
    roles: [
      {
        title: "Teaching Assistant – Digital Design Lab & Electrical Sciences Lab",
        date: "2026 – Present",
        description:
          "Supervise three lab sections (~20 students each), guiding students through experiments and verifying their results for accuracy.",
      },
    ],
  },
  {
    organization: "Suntech Business Solutions",
    roles: [
      {
        title: "Intern",
        date: "Jun 2026 – Jul 2026",
        description: [
          "Built a prototype operational analytics pipeline for senior leadership, connecting PostgreSQL data to Metabase dashboards.",
          "With production data unavailable during the internship, generated synthetic data to build and validate the dashboards.",
          "Proposed an AWS production architecture (S3, EventBridge, Lambda) with a cost breakdown.",
        ],
      },
    ],
  },
]

const extracurriculars = [
  {
    organization: "Microsoft Tech Club (MTC)",
    roles: [
      {
        title: "Technical Manager",
        date: "Aug 2026 – Present",
        description:
          "Lead the club's technical projects and mentor the technical executives. Organized and conducted campus workshop on Steganography with Python.",
      },
      {
        title: "Technical Executive",
        date: "Aug 2025 – Aug 2026",
        description: [
          'Built a data-driven "About" page for the club website: editing a members and socials list automatically regenerates the grid of member cards.',
          "Co-ran a workshop on recommendation systems covering collaborative and content-based filtering.",
          'Helped set up tooling and curriculum for the "Vibe Coding" workshop.',
        ],
      },
    ],
  },
]

const education = [
  {
    organization: "B.E. Computer Science (Minor: Data Science)",
    roles: [
      {
        title: "BITS Pilani Dubai Campus",
        date: "2024 – 2028",
        description:
          "Current CGPA: 9.3/10. Focusing on data-oriented software development, backend systems, and machine learning.",
      },
    ],
  },
  {
    organization: "Grade 12 (Science)",
    roles: [
      {
        title: "The Millennium School, Dubai",
        date: "Graduated 2023",
        description: "Graduated with 87%.",
      },
    ],
  },
]

// --- Timeline Component ---

interface RoleItem {
  title: string
  date: string
  description: string | string[]
}

interface TimelineItemProps {
  organization: string
  roles: RoleItem[]
}

function TimelineItem({
  organization,
  roles,
}: TimelineItemProps) {
  const hasMultipleRoles = roles.length > 1

  return (
    <div className="flex gap-4">
      {/* Organization dot */}
      <div className="flex w-3 shrink-0 justify-center">
        <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-gray-400 ring-4 ring-white" />
      </div>

      {/* Organization content */}
      <div className="min-w-0 flex-1 pb-12">
        <h3 className="mb-5 text-lg font-semibold text-gray-900">
          {organization}
        </h3>

        <div className="space-y-7">
          {roles.map((role, index) => {
            const isLastRole = index === roles.length - 1

            return (
              <div key={index} className="relative pl-7">
                {/* Progression line ONLY between roles
                    within the same organization */}
                {hasMultipleRoles && !isLastRole && (
                  <div className="absolute left-[3px] top-3 bottom-[-28px] w-px bg-gray-200" />
                )}

                {/* Role dot */}
                <div className="absolute left-0 top-[6px] h-2 w-2 rounded-full bg-gray-300" />

                {/* Role header */}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="text-base font-semibold text-gray-900">
                    {role.title}
                  </h4>

                  <span className="shrink-0 text-xs font-medium text-gray-400 sm:ml-4">
                    {role.date}
                  </span>
                </div>

                {/* Role description */}
                {Array.isArray(role.description) ? (
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-gray-600">
                    {role.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {role.description}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// --- Page Layout ---

export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen">
      <InteractiveGrid className="pointer-events-none fixed inset-0 opacity-20" />

      <main className="relative z-10 mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">

        {/* Header */}
        <header className="mb-16">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Experience & Education
          </h1>

          <p className="max-w-2xl text-gray-600">
            A timeline of my professional experience, academic background,
            and extracurricular involvement.
          </p>
        </header>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="mb-8 border-b pb-2 text-2xl font-bold text-gray-900">
            Work Experience
          </h2>

          <div>
            {workExperience.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Extracurriculars */}
        <section className="mb-16">
          <h2 className="mb-8 border-b pb-2 text-2xl font-bold text-gray-900">
            Extracurriculars
          </h2>

          <div>
            {extracurriculars.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="mb-8 border-b pb-2 text-2xl font-bold text-gray-900">
            Education
          </h2>

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