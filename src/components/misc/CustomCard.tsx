import Image from "next/image"
import { NeonGradientCard } from "./Card"

export function AboutCard() {
    return (
        <section className="flex min-h-screen items-center justify-center px-5 py-50">
            <div className="flex flex-col items-center gap-20 md:flex-row">

                {/* Photo Card */}
                <NeonGradientCard
                    className="w-64 shrink-0"
                    borderSize={3}
                    borderRadius={16}
                    neonColors={{ firstColor: "#7c3aed", secondColor: "#06b6d4" }}
                >
                    <div className="overflow-visible rounded-2xl">
                        <Image
                            src="/neil.jpg"
                            alt="Neil Laturkar"
                            width={280}
                            height={420}
                            className="w-full object-cover"
                        />
                    </div>
                </NeonGradientCard>

                {/* Bio */}
                <div className="max-w-lg space-y-4">
                    <h2 className="text-4xl font-bold tracking-tight">Hey, I'm Neil Laturkar 👋</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        I'm a passionate second year computer science student at BITS-Pilani Dubai Campus with a strong interest in software development, machine learning, and data science. I love travelling and trying out new things. I indulge gaming and listen to music in my free time. I enjoy working on projects that force me to learn something new, which is what brought me to software development (there is always somehthing new to learn in the world of tech!).
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        If you'd like to connect, feel free to reach out on any of the socials linked in the dock at the bottom of the page!
                    </p>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "Python", "Java", "AI/ML"].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border px-3 py-1 text-sm text-muted-foreground"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}