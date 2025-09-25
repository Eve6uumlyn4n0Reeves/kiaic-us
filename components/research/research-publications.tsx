import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Award, TrendingUp } from "lucide-react"

const publications = [
  {
    title: "SilkRoad-LM: A Morphology-Aware Pre-trained Language Model for Turkic Languages",
    authors: "Kadyrova, A., et al.",
    venue: "ACL 2025",
    type: "Conference Paper",
    citations: 45,
    year: 2025,
  },
  {
    title: "Adaptive Traffic Signal Control using Multi-Agent Reinforcement Learning",
    authors: "Ivanov, D., et al.",
    venue: "IEEE Transactions on Intelligent Transportation Systems",
    type: "Journal Article",
    citations: 78,
    year: 2024,
  },
  {
    title: "Understanding Generalization in Deep Learning through Information Bottleneck",
    authors: "Chen, M., et al.",
    venue: "NeurIPS 2024",
    type: "Conference Paper",
    citations: 156,
    year: 2024,
  },
  {
    title: "Towards a Framework for Responsible AI Governance in Developing Countries",
    authors: "Johnson, S.",
    venue: "AI & Society",
    type: "Journal Article",
    citations: 89,
    year: 2025,
  },
]

const stats = [
  {
    icon: FileText,
    label: "Publications",
    value: "200+",
    description: "Papers published in 2024",
  },
  {
    icon: Award,
    label: "Top Venues",
    value: "85%",
    description: "In tier-1 conferences/journals",
  },
  {
    icon: TrendingUp,
    label: "Citations",
    value: "2,500+",
    description: "Total citations received",
  },
]

export function ResearchPublications() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Research Publications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our faculty and students publish cutting-edge research in top-tier venues worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="space-y-6 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Recent Publications</h3>
          {publications.map((pub, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">{pub.title}</h4>
                    <p className="text-muted-foreground mb-2">{pub.authors}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-medium">{pub.venue}</span>
                      <span className="text-muted-foreground">{pub.year}</span>
                      <span className="text-muted-foreground">{pub.citations} citations</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">{pub.type}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Publications
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
