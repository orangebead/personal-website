import { DockDemo } from "@/components/shared/CustomDock";
import { HyperText } from "@/components/Text/HyperText";
import { TypingAnimation } from "@/components/Text/TypingAnimation";
import { InteractiveGrid } from "@/components/backgrounds/CustomGrid";
import { CustomScrollProgress } from "@/components/shared/CustomScroll";
import { CustomScrollBasedVelocity } from "@/components/Text/CustomScrollVelocity";
import { AboutCard } from "@/components/misc/CustomCard";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
        <CustomScrollProgress />
        <InteractiveGrid />

        {/* Your hero content on top */}
        <HyperText
          children="Neil Laturkar"
          className="text-4xl md:text-8xl font-bold"
        />
        <TypingAnimation
          className="text-2xl md:text-3xl"
          words={["Computer Science Student at BITS-Pilani Dubai Campus"]}
        />

      </div>
      <CustomScrollBasedVelocity />
      <div className="my-10 flex w-full flex-col items-center justify-center">
        <AboutCard />
      </div>
      <DockDemo />
    </main>
  );
}
