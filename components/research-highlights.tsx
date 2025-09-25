import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Languages, Zap, Shield, ArrowRight } from "lucide-react"

const research = [
  {
    icon: Languages,
    title: "Central Asian Language Technologies Lab (CALTL)",
    focus:
      "Developing advanced NLP technologies for Kyrgyz, Kazakh, and other Turkic languages, promoting digital inclusivity.",
    breakthrough:
      "Released 'SilkRoad-LM', a pre-trained language model optimized for Turkic languages, achieving SOTA performance in machine translation and sentiment analysis.",
    tags: ["NLP", "Low-Resource Languages", "Machine Translation"],
  },
  {
    icon: Zap,
    title: "Intelligent Systems and Control Research Center (ISCRC)",
    focus:
      "Research on modeling, simulation, and optimal control of complex systems. Applications in smart grids, urban transportation, and industrial automation.",
    breakthrough:
      "Developed a reinforcement learning-based adaptive traffic signal control system, reducing average commute time by 20% in Bishkek pilot areas.",
    tags: ["Control Theory", "Smart Cities", "Reinforcement Learning"],
  },
  {
    icon: Shield,
    title: "AI Ethics and Societal Impact Lab",
    focus:
      "Research on AI fairness, transparency, and accountability. Providing recommendations for policymakers to promote responsible AI development.",
    breakthrough:
      "Published Central Asia's first 'AI Ethics Guidelines White Paper', advocating for human-centered AI development pathways.",
    tags: ["AI Ethics", "Policy", "Responsible AI"],
  },
]

export function ResearchHighlights() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Frontiers of Innovation</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our research labs are pushing the boundaries of AI and cybernetics, addressing both global challenges and
            regional needs with cutting-edge solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {research.map((lab, index) => {
            const IconComponent = lab.icon
            return (
              <Card
                key={index}
                className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <IconComponent className="h-8 w-8 text-accent mr-3" />
                  </div>
                  <CardTitle className="text-lg text-balance group-hover:text-accent transition-colors">
                    {lab.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-accent">Focus:</h4>
                    <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{lab.focus}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2 text-accent">Recent Breakthrough:</h4>
                    <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{lab.breakthrough}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {lab.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-background group">
            <Link href="/research" className="inline-flex items-center gap-2 group">
              <span>Explore All Research</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
