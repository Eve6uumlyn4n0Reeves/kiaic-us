import { ResearchHero } from "@/components/research/research-hero"
import { ResearchCenters } from "@/components/research/research-centers"
import { ResearchHighlights } from "@/components/research/research-highlights"
import { ResearchPublications } from "@/components/research/research-publications"
import { ResearchCollaborations } from "@/components/research/research-collaborations"

export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      <ResearchHero />
      <ResearchHighlights />
      <ResearchCenters />
      <ResearchPublications />
      <ResearchCollaborations />
    </div>
  )
}
