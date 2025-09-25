import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { StatsSection } from "@/components/stats-section"
import { ProgramsOverview } from "@/components/programs-overview"
import { ResearchHighlights } from "@/components/research-highlights"
import { NewsEvents } from "@/components/news-events"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <MissionSection />
      <StatsSection />
      <ProgramsOverview />
      <ResearchHighlights />
      <NewsEvents />
    </div>
  )
}
