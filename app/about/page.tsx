import { AboutHero } from "@/components/about/about-hero"
import { OurStory } from "@/components/about/our-story"
import { MissionVision } from "@/components/about/mission-vision"
import { PresidentMessage } from "@/components/about/president-message"
import { LeadershipTeam } from "@/components/about/leadership-team"
import { FactsFigures } from "@/components/about/facts-figures"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <PresidentMessage />
      <LeadershipTeam />
      <FactsFigures />
    </div>
  )
}
