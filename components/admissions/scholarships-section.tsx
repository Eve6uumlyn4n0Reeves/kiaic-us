import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Star, Globe, GraduationCap } from "lucide-react"

const scholarships = [
  {
    icon: Star,
    title: "Future Leaders Fellowship",
    coverage: "Full Tuition + Living Expenses",
    description:
      "Awarded to applicants with outstanding academic achievements and exceptional leadership potential (undergraduate and master's students).",
    eligibility: ["GPA 3.9+ or equivalent", "Demonstrated leadership experience", "Exceptional personal statement"],
  },
  {
    icon: Award,
    title: "AI Innovators Scholarship",
    coverage: "50%-100% Tuition Reduction",
    description:
      "Awarded to applicants with outstanding performance in programming competitions, open source projects, or research.",
    eligibility: [
      "Strong programming portfolio",
      "Competition awards or publications",
      "Technical project contributions",
    ],
  },
  {
    icon: Globe,
    title: "Central Asian Stars Scholarship",
    coverage: "Tuition Reduction + Support",
    description:
      "Specifically established for outstanding students from Central Asian countries to promote AI talent development in the region.",
    eligibility: [
      "Citizenship from Central Asian countries",
      "Academic excellence",
      "Commitment to regional development",
    ],
  },
  {
    icon: GraduationCap,
    title: "Ph.D. Fellowships",
    coverage: "Full Funding Package",
    description:
      "All admitted PhD students receive full funding including tuition waiver and competitive monthly stipend through RA or TA positions.",
    eligibility: ["PhD program admission", "Research or teaching assistantship", "Maintained academic progress"],
  },
]

export function ScholarshipsSection() {
  return (
    <section id="scholarships" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Scholarships & Financial Aid</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            KIAIC is committed to providing adequate financial support for the world's most outstanding students,
            ensuring that talented students are not prevented from receiving education due to economic reasons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {scholarships.map((scholarship, index) => {
            const IconComponent = scholarship.icon
            return (
              <Card
                key={index}
                className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="h-8 w-8 text-accent" />
                    <Badge className="bg-accent/10 text-accent border-accent/20">{scholarship.coverage}</Badge>
                  </div>
                  <CardTitle className="text-xl text-balance">{scholarship.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-pretty">{scholarship.description}</p>
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-accent">Eligibility Criteria:</h4>
                    <ul className="space-y-1">
                      {scholarship.eligibility.map((criteria, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1 h-1 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                          {criteria}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="mt-12 border-accent/20 bg-accent/5">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Financial Aid Philosophy</h3>
            <p className="text-muted-foreground text-pretty max-w-3xl mx-auto">
              We believe that financial circumstances should never be a barrier to exceptional education. Our
              comprehensive financial aid program ensures that admitted students can focus on their studies and research
              without financial stress. We evaluate each application holistically and provide support packages tailored
              to individual needs.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
