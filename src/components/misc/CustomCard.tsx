import Image from "next/image"

export function AboutCard() {
    return (
        <section className="flex min-h-screen items-center justify-center px-5 py-50">
            <div className="flex flex-col items-center gap-20 md:flex-row">

                {/* Photo Card */}
                <div className="w-64 shrink-0 overflow-hidden rounded-2xl border border-black bg-white shadow-2xl">
                    <Image
                        src="/neil.jpg"
                        alt="Neil Laturkar"
                        width={280}
                        height={420}
                        className="w-full object-cover"
                    />
                </div>

                {/* Bio */}
                <div className="max-w-lg space-y-4">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900">Hey, I'm Neil Laturkar</h2>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Second-year CS student at BITS Pilani Dubai, minoring in Data Science. I'm drawn to problems more than to any one field, and I love working on things that have an impact in everyday life.
                    </p>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                        I pick projects based on one criterion: will this force me to learn something I don't know yet?
                    </p>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        On the side, I love spotting the nuances of different countries, which is why I love playing GeoGuessr. I also enjoy watching and analyzing football, playing videogames, listening to music, and watching bad movies on purpose.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Check out the Archive if you'd like to see some of my work, or if you'd like to connect, feel free to reach out on any of the socials linked in the dock at the bottom of the page!
                    </p>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "Python", "Java", "AI/ML"].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border px-3 py-1 text-sm text-gray-500"
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