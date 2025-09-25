import { AdmissionsHero } from "@/components/admissions/admissions-hero"
import { AdmissionsOverview } from "@/components/admissions/admissions-overview"
import { UndergraduateAdmissions } from "@/components/admissions/undergraduate-admissions"
import { GraduateAdmissions } from "@/components/admissions/graduate-admissions"
import { ScholarshipsSection } from "@/components/admissions/scholarships-section"
import { InternationalGuide } from "@/components/admissions/international-guide"
import { AdmissionsFAQ } from "@/components/admissions/admissions-faq"

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdmissionsHero />
      <AdmissionsOverview />
      <UndergraduateAdmissions />
      <GraduateAdmissions />
      <ScholarshipsSection />
      <InternationalGuide />
      <AdmissionsFAQ />
    </div>
  )
}
