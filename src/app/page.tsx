// src/app/page.tsx
import { DockDemo } from "@/components/shared/CustomDock";
import { HyperText } from "@/components/Text/HyperText";
import { TypingAnimation } from "@/components/Text/TypingAnimation";
import { InteractiveGrid } from "@/components/backgrounds/CustomGrid";
import { CustomScrollProgress } from "@/components/shared/CustomScroll";
import { CustomScrollBasedVelocity } from "@/components/Text/CustomScrollVelocity";
import { AboutCard } from "@/components/misc/CustomCard";

export default function Home() {
  return (
    // Removed 'p-10' and 'justify-between' so the sections can stretch full-width
    <main className="flex min-h-screen flex-col items-center bg-white">
      <CustomScrollProgress />
      
      {/* Hero Section */}
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <InteractiveGrid />

        {/* Content above grid */}
        <div className="relative z-10 flex flex-col items-center gap-4 px-5 text-center">
          <HyperText
            children="Neil Laturkar"
            className="text-4xl md:text-8xl font-bold text-gray-900"
          />
          <TypingAnimation
            className="text-xl md:text-3xl text-gray-600"
            words={["CS @ BITS Pilani, Dubai Campus"]} 
          />
        </div>
      </div>
      
      {/* 
        Divider Section 
        Added 'py-24' (padding top and bottom) so it acts as an isolated 
        divider exactly halfway between the Hero and the About sections.
      */}
      <div className="relative z-10 flex w-full items-center justify-center py-24 md:py-32">
        <CustomScrollBasedVelocity />
      </div>
      
      {/* About Section */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center pb-32">
        <AboutCard />
      </div>
      
    </main>
  )
}