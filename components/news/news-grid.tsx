import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Languages, Handshake, Newspaper, Users, Award, Globe } from "lucide-react"

const newsArticles = [
  {
    id: "world-bank-partnership",
    icon: Handshake,
    title: "Strategic Partnership with World Bank for Water Management",
    excerpt:
      "KIAIC and World Bank launch 'Tien Shan Source' project, using AI and big data to address Central Asia's water resource challenges.",
    date: "August 15, 2025",
    category: "Partnership",
    readTime: "5 min read",
  },
  {
    id: "silkroad-lm-release",
    icon: Languages,
    title: "Revolutionary SilkRoad-LM Model Released",
    excerpt:
      "KIAIC's Central Asian Language Technologies Lab releases breakthrough language model for Turkic languages, achieving SOTA performance.",
    date: "September 20, 2025",
    category: "Research Breakthrough",
    readTime: "8 min read",
  },
  {
    id: "new-faculty-appointments",
    icon: Users,
    title: "Distinguished Faculty Join KIAIC",
    excerpt: "Three renowned AI researchers from MIT, Stanford, and DeepMind join KIAIC's growing faculty team.",
    date: "July 10, 2025",
    category: "Faculty News",
    readTime: "3 min read",
  },
  {
    id: "student-internships",
    icon: Award,
    title: "Record Number of Students Secure Top Tech Internships",
    excerpt:
      "Over 90% of KIAIC students secure internships at leading tech companies including Google, Meta, and Microsoft.",
    date: "June 25, 2025",
    category: "Student Achievement",
    readTime: "4 min read",
  },
  {
    id: "ai-ethics-conference",
    icon: Globe,
    title: "KIAIC Hosts International AI Ethics Conference",
    excerpt:
      "Leading experts gather to discuss responsible AI development and governance frameworks for developing nations.",
    date: "May 18, 2025",
    category: "Campus Life",
    readTime: "6 min read",
  },
  {
    id: "quantum-research-grant",
    icon: Newspaper,
    title: "Major Grant Awarded for Quantum AI Research",
    excerpt: "KIAIC receives $2M grant from European Research Council to advance quantum machine learning research.",
    date: "April 30, 2025",
    category: "Research Breakthrough",
    readTime: "5 min read",
  },
]

export function NewsGrid() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Latest News</h2>
        <div className="text-sm text-muted-foreground">Showing 6 of 24 articles</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsArticles.map((article) => {
          const IconComponent = article.icon
          return (
            <Card
              key={article.id}
              className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <IconComponent className="h-6 w-6 text-accent flex-shrink-0" />
                  <Badge variant="outline" className="border-accent/40 text-accent text-xs">
                    {article.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-balance group-hover:text-accent transition-colors">
                  {article.title}
                </CardTitle>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {article.date}
                  </div>
                  <span>{article.readTime}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground text-pretty leading-relaxed mb-4">{article.excerpt}</p>
                <Button asChild variant="ghost" size="sm" className="p-0 h-auto group-hover:text-accent">
                  <Link href={`/news/${article.id}`}>
                    Read More
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="flex justify-center">
        <Button
          variant="outline"
          className="border-accent text-accent hover:bg-accent hover:text-background bg-transparent"
        >
          Load More Articles
        </Button>
      </div>
    </div>
  )
}
