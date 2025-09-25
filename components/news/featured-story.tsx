import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, Trophy } from "lucide-react"

export function FeaturedStory() {
  return (
    <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-64 lg:h-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <Trophy className="h-24 w-24 text-accent opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/80"></div>
        </div>
        <CardContent className="p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-accent/10 text-accent border-accent/20">Featured Story</Badge>
            <Badge variant="outline" className="border-accent/40 text-accent">
              Student Achievement
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-balance mb-4">
            KIAIC Students Win Global NeurIPS 2025 Challenge
          </h2>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            December 15, 2025
          </div>
          <p className="text-muted-foreground text-pretty leading-relaxed mb-6">
            Team "EcoAI" from KIAIC defeats hundreds of teams from world's top universities in the prestigious "AI
            Against Climate Change" challenge at NeurIPS 2025, showcasing their innovative Spatio-Temporal Graph Neural
            Network model for forest fire prediction.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-background w-fit">
            <Link href="/news/neurips-2025-victory">
              Read Full Story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </div>
    </Card>
  )
}
