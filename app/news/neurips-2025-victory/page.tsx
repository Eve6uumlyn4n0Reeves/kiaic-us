import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, Trophy, Users, Award } from "lucide-react"

export default function NeurIPSVictoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/news">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News
            </Link>
          </Button>

          {/* Article header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-accent/10 text-accent border-accent/20">Featured Story</Badge>
              <Badge variant="outline" className="border-accent/40 text-accent">
                Student Achievement
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
              KIAIC Student Team Wins Global NeurIPS 2025 "AI Against Climate Change" Challenge
            </h1>
            <div className="flex items-center text-muted-foreground mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              December 15, 2025
              <span className="mx-2">•</span>
              <span>8 min read</span>
            </div>
          </div>

          {/* Hero image placeholder */}
          <Card className="mb-8 overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Trophy className="h-32 w-32 text-accent opacity-50" />
            </div>
          </Card>

          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              <strong>Bishkek, Kyrgyzstan</strong> — In the recently concluded global premier artificial intelligence
              conference NeurIPS 2025, the student team "EcoAI" from the Kyrgyz Institute of Advanced AI and Cybernetics
              (KIAIC) emerged victorious, defeating hundreds of teams from the world's top universities and research
              institutions to claim the global championship in the "AI Against Climate Change" challenge.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              NeurIPS (Conference on Neural Information Processing Systems) is one of the world's most influential
              machine learning and artificial intelligence conferences. Its challenge competitions aim to encourage
              researchers to use AI technology to solve major real-world problems. This year's "AI Against Climate
              Change" challenge focused on using satellite data and machine learning models to predict forest fire risk.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-accent">
              Innovative Solution: Spatio-Temporal Graph Neural Network Model
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The "EcoAI" team consists of three master's students: team leader Azamat Asanov, and team members Bermet
              Sadykova and Daniyar Orozaliev. They developed an innovative model called "Spatio-Temporal Graph Neural
              Network (ST-GNN)" for high-precision prediction of forest fire occurrence risk and spread trends.
            </p>

            <Card className="my-8 border-accent/20">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">Team Leader</h3>
                    <p className="text-sm text-muted-foreground">Azamat Asanov</p>
                    <p className="text-xs text-muted-foreground">M.Sc. Data Science</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">Team Member</h3>
                    <p className="text-sm text-muted-foreground">Bermet Sadykova</p>
                    <p className="text-xs text-muted-foreground">M.Sc. AI & ML</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">Team Member</h3>
                    <p className="text-sm text-muted-foreground">Daniyar Orozaliev</p>
                    <p className="text-xs text-muted-foreground">M.Sc. Cybernetics</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Traditional fire prediction models typically rely on meteorological data (such as temperature, humidity,
              wind speed) and surface features (such as vegetation type). The "EcoAI" team's model, however, models the
              research area as a dynamic graph structure, where nodes represent geographical locations and edges
              represent spatial relationships and mutual influences between nodes.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 my-8 italic text-muted-foreground">
              "We recognized that forest fires are a complex spatio-temporal dynamic process, influenced by the
              interaction of multiple factors. Our ST-GNN model can effectively capture these complex spatio-temporal
              dependencies, thereby improving the accuracy and real-time nature of predictions."
              <footer className="mt-2 text-sm">— Azamat Asanov, Team Leader</footer>
            </blockquote>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The model also introduces a novel attention mechanism that enables the model to automatically identify the
              factors that have the greatest impact on fire risk, improving the model's interpretability.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-accent">Outstanding Performance and High Praise from Judges</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              In the competition, the "EcoAI" team's model significantly outperformed other participating teams on the
              test dataset, particularly demonstrating exceptional capability in predicting large-scale fire events.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              A competition judge from UC Berkeley, a renowned climate scientist, stated: "The work of the 'EcoAI' team
              is impressive. They not only demonstrated deep machine learning expertise, but more importantly, they
              developed a tool with practical application value that is expected to make important contributions to
              global forest fire prevention and management."
            </p>

            <h2 className="text-2xl font-bold mb-4 text-accent">Institute Support and Cultivation</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The team's success is inseparable from the world-class educational resources and research environment
              provided by KIAIC. Team advisor, Associate Professor Chen Wei from KIAIC's Data Science Department,
              expressed: "I am incredibly proud of the team's performance. They invested tremendous time and effort,
              constantly exploring and optimizing the model. This victory is not only the result of their personal
              efforts, but also reflects KIAIC's effectiveness in cultivating students' ability to solve complex
              problems."
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              KIAIC provided students with access to the "Tianshan" supercomputing center, enabling them to process
              large-scale satellite data and train complex deep learning models. The institute also regularly holds
              seminars and workshops, inviting top experts to share the latest research developments.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-accent">Future Outlook: From Model to Application</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The "EcoAI" team plans to further develop their model into an open-source tool for use by research
              institutions and government departments worldwide. They also hope to collaborate with forestry departments
              in the Central Asian region to apply this technology to local forest fire prevention work.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              KIAIC President Dr. Elena Petrova congratulated the winning team: "Congratulations to the 'EcoAI' team for
              this brilliant achievement. They have demonstrated the talent, perseverance, and innovative spirit of
              KIAIC students. They are the pride of the institute and exemplars of future leaders who will use AI to
              address global challenges."
            </p>

            <Card className="border-accent/20 bg-accent/5">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Achievement Impact</h3>
                <p className="text-muted-foreground">
                  This achievement once again proves KIAIC's competitiveness in the global AI field and inspires more
                  students to dedicate themselves to the great cause of using technology to solve social problems.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Related articles */}
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-xl font-bold mb-6">Related News</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                <CardContent className="p-6">
                  <Badge variant="outline" className="border-accent/40 text-accent text-xs mb-3">
                    Research Breakthrough
                  </Badge>
                  <h4 className="font-semibold mb-2">Revolutionary SilkRoad-LM Model Released</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    KIAIC's breakthrough in Turkic language processing achieves state-of-the-art performance.
                  </p>
                  <Button asChild variant="ghost" size="sm" className="p-0 h-auto">
                    <Link href="/news/silkroad-lm-release">Read More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                <CardContent className="p-6">
                  <Badge variant="outline" className="border-accent/40 text-accent text-xs mb-3">
                    Partnership
                  </Badge>
                  <h4 className="font-semibold mb-2">Strategic Partnership with World Bank</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Collaboration on AI-driven water resource management for Central Asia.
                  </p>
                  <Button asChild variant="ghost" size="sm" className="p-0 h-auto">
                    <Link href="/news/world-bank-partnership">Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
