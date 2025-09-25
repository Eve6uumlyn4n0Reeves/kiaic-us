import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, Home, FileText, Heart } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Visa Support",
    description: "Complete assistance with student visa applications and documentation for international students.",
    details: ["Visa application guidance", "Document preparation", "Embassy liaison support", "Arrival coordination"],
  },
  {
    icon: Home,
    title: "Housing Guarantee",
    description: "Modern student apartments with high-speed internet and comfortable study-living environment.",
    details: [
      "Guaranteed housing for international students",
      "Fully furnished apartments",
      "High-speed internet",
      "24/7 security",
    ],
  },
  {
    icon: Plane,
    title: "Airport Pickup",
    description: "Free airport pickup service for all international students arriving in Bishkek.",
    details: ["Free pickup service", "Orientation assistance", "City introduction", "Initial settling support"],
  },
  {
    icon: Heart,
    title: "Cultural Integration",
    description: "Comprehensive support to help international students adapt to life in Kyrgyzstan.",
    details: [
      "Cultural orientation programs",
      "Language exchange opportunities",
      "Local mentor assignment",
      "Community events",
    ],
  },
]

export function InternationalGuide() {
  return (
    <section id="international" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">International Students Guide</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            We welcome students from around the world and provide comprehensive support to ensure a smooth transition to
            life and study at KIAIC in beautiful Bishkek, Kyrgyzstan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <IconComponent className="h-8 w-8 text-accent mr-3" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-pretty">{service.description}</p>
                  <div className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Living in Bishkek */}
        <Card className="border-accent/20 bg-accent/5">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Living in Bishkek</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Badge className="bg-accent/10 text-accent border-accent/20 mb-3">Climate</Badge>
                <h4 className="font-semibold mb-2">Continental Climate</h4>
                <p className="text-sm text-muted-foreground">
                  Four distinct seasons with warm summers and snowy winters. Perfect for outdoor activities year-round.
                </p>
              </div>
              <div className="text-center">
                <Badge className="bg-accent/10 text-accent border-accent/20 mb-3">Cost of Living</Badge>
                <h4 className="font-semibold mb-2">Affordable Living</h4>
                <p className="text-sm text-muted-foreground">
                  Low cost of living compared to Western countries. Monthly expenses typically range from $300-500.
                </p>
              </div>
              <div className="text-center">
                <Badge className="bg-accent/10 text-accent border-accent/20 mb-3">Culture</Badge>
                <h4 className="font-semibold mb-2">Rich Heritage</h4>
                <p className="text-sm text-muted-foreground">
                  Blend of Central Asian traditions and modern life. Friendly, welcoming people and vibrant cultural
                  scene.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
