import { FacultyHero } from "@/components/about/faculty/faculty-hero"
import { FacultyDirectory } from "@/components/about/faculty/faculty-directory"
import { FacultyStats } from "@/components/about/faculty/faculty-stats"

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-background">
      <FacultyHero />
      <FacultyStats />
      <FacultyDirectory />
    </div>
  )
}
