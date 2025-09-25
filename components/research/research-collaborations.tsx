import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Building, Users, Handshake } from "lucide-react"

const collaborations = [
  {
    name: "World Bank Group",
    type: "International Organization",
    project: "AI for Water Resource Management",
    description: "Strategic partnership to develop intelligent water monitoring systems for Central Asia",
    icon: Globe,
    status: "Active",
  },
  {
    name: "MIT Computer Science and Artificial Intelligence Laboratory",
    type: "Academic Institution",
    project: "Advanced AI Research Exchange",
    description: "Faculty and student exchange program focusing on cutting-edge AI research",
    icon: Building,
    status: "Active",
  },
  {
    name: "Google DeepMind",
    type: "Industry Partner",
    project: "Responsible AI Development",
    description: "Collaborative research on AI safety and ethical AI deployment",
    icon: Building,
    status: "Active",
  },
  {
    name: "European Research Council",
    type: "Funding Agency",
    project: "Quantum Machine Learning Initiative",
    description: "$2M grant for advancing quantum computing applications in AI",
    icon: Users,
    status: "Funded",
  },
]

const partnerLogos = [
  "MIT",
  "Stanford",
  "CMU",
  "ETH Zurich",
  "Oxford",
  "Cambridge",
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "OpenAI",
  "DeepMind",
]

export function ResearchCollaborations() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Global Collaborations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building bridges across continents through strategic research partnerships and international collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {collaborations.map((collab, index) => {
            const IconComponent = collab.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{collab.name}</CardTitle>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            collab.status === "Active" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {collab.status}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">{collab.type}</div>
                      <div className="text-sm font-medium text-primary">{collab.project}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{collab.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-8">Our Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <span className="font-semibold text-muted-foreground">{partner}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg">
            <Handshake className="mr-2 h-5 w-5" />
            Partner With Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
