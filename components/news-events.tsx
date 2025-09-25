import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, Trophy, Handshake, Newspaper } from "lucide-react"

const news = [
  {
    icon: Trophy,
    title: "KIAIC Students Win Global NeurIPS 2025 Challenge",
    excerpt:
      "Team 'EcoAI' defeats hundreds of teams from top universities worldwide in the 'AI Against Climate Change' challenge with their innovative Spatio-Temporal Graph Neural Network model.",
    date: "December 15, 2025",
    category: "Student Achievement",
    href: "/news/neurips-2025-victory",
  },
  {
    icon: Handshake,
    title: "Strategic Partnership with World Bank for Water Management",
    excerpt:
      "KIAIC and World Bank launch 'Tien Shan Source' project, using AI and big data to address Central Asia's water resource challenges through intelligent monitoring systems.",
    date: "August 15, 2025",
    category: "Partnership",
    href: "/news/world-bank-partnership",
  },
  {
    icon: Newspaper,
    title: "Revolutionary SilkRoad-LM Model Released",
    excerpt:
      "KIAIC's Central Asian Language Technologies Lab releases breakthrough language model for Turkic languages, achieving state-of-the-art performance in NLP tasks.",
    date: "September 20, 2025",
    category: "Research",
    href: "/news/silkroad-lm-release",
  },
]

const events = [
  {
    title: "AI Ethics Symposium 2025",
    date: "March 15-16, 2026",
    location: "KIAIC Campus",
    description: "International symposium on responsible AI development and governance in developing countries.",
  },
  {
    title: "Central Asia Tech Summit",
    date: "April 20-22, 2026",
    location: "Bishkek, Kyrgyzstan",
    description: "Regional technology conference bringing together industry leaders, researchers, and policymakers.",
  },
  {
    title: "Graduate Research Showcase",
    date: "May 10, 2026",
    location: "KIAIC Innovation Hub",
    description: "Annual showcase of graduate student research projects and thesis presentations.",
  },
]

export function NewsEvents() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">News & Events</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Stay updated with the latest developments, achievements, and upcoming events at KIAIC.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Latest News */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Newspaper className="h-6 w-6 text-accent mr-3" />
              Latest News
            </h3>
            <div className="space-y-6">
              {news.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <Card
                    key={index}
                    className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <IconComponent className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                        <Badge variant="outline" className="border-accent/40 text-accent text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-balance group-hover:text-accent transition-colors">
                        {item.title}
                      </CardTitle>
                      <div className="text-xs text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {item.date}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground text-pretty leading-relaxed mb-4">{item.excerpt}</p>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="p-0 h-auto group-hover:text-accent group/btn"
                      >
                        <Link href={item.href}>
                          Read More
                          <ArrowRight className="h-3 w-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-background bg-transparent group"
              >
                <Link href="/news">
                  View All News
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Calendar className="h-6 w-6 text-accent mr-3" />
              Upcoming Events
            </h3>
            <div className="space-y-6">
              {events.map((event, index) => (
                <Card
                  key={index}
                  className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                >
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-2 text-balance">{event.title}</h4>
                    <div className="space-y-1 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-2 text-accent" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <div className="h-3 w-3 mr-2 rounded-full bg-accent flex-shrink-0"></div>
                        {event.location}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-background bg-transparent group"
              >
                <Link href="/events">
                  View All Events
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
