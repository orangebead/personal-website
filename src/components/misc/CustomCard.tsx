import Image from "next/image"
import { NeonGradientCard } from "./Card"

export function AboutCard() {
    return (
        <section className="flex min-h-screen items-center justify-center px-5 py-50">
            <div className="flex flex-col items-center gap-20 md:flex-row">

                {/* Photo Card */}
                <NeonGradientCard
                    className="w-64 shrink-0 overflow-visible"
                    borderSize={3}
                    borderRadius={16}
                    neonColors={{ firstColor: "#7c3aed", secondColor: "#06b6d4" }}
                >
                    <div className="rounded-2xl">
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
                    <h2 className="text-4xl font-bold tracking-tight">Hey, I'm Neil Laturkar</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Second year CS student at BITS-Pilani Dubai, focused on software development, ML, and data science. I pick projects based on one criterion: will this force me to learn something I don't know yet?
Off-screen, I travel, game, and listen to a lot of music.
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