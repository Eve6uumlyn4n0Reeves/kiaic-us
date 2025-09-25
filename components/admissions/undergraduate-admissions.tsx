import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Calendar, FileText, Users, Code, ArrowRight } from "lucide-react"

const requirements = [
  {
    category: "Academic Performance",
    items: [
      "High school transcript (GPA requirement: minimum 3.7/4.0 or equivalent)",
      "Strong performance in mathematics (calculus, linear algebra basics), physics, and computer science",
    ],
  },
  {
    category: "Standardized Tests",
    items: [
      "SAT or ACT scores (SAT Math: minimum 750; ACT Math: minimum 32)",
      "AP course scores encouraged (Calculus BC, Physics C, Computer Science A)",
      "Kyrgyzstan National Exam (ORT) scores (Gold Card or extremely high scores)",
    ],
  },
  {
    category: "Language Proficiency",
    items: ["TOEFL iBT minimum: 95 points", "IELTS minimum: 7.0 points"],
  },
  {
    category: "Supporting Documents",
    items: [
      "Two recommendation letters (at least one from math or science teacher)",
      "Personal statement (maximum 1000 words)",
      "Programming portfolio (GitHub profile strongly recommended)",
    ],
  },
]

const applicationSteps = [
  {
    step: 1,
    title: "Online Application",
    description: "Submit all application materials through KIAIC online application system",
    deadline: "March 1, 2026",
  },
  {
    step: 2,
    title: "Entrance Exam",
    description: "48-hour programming challenge covering mathematics and algorithms",
    deadline: "March 15, 2026",
  },
  {
    step: 3,
    title: "Technical Interview",
    description: "Assessment of logical thinking, algorithm design, and AI fundamentals",
    deadline: "April 1, 2026",
  },
  {
    step: 4,
    title: "Comprehensive Interview",
    description: "Evaluation of communication skills, learning passion, and career planning",
    deadline: "April 15, 2026",
  },
  {
    step: 5,
    title: "Admission Decision",
    description: "Admission results will be announced",
    deadline: "May 1, 2026",
  },
]

export function UndergraduateAdmissions() {
  return (
    <section id="undergraduate" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">
            Building the Foundation: Undergraduate Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our undergraduate program is designed for recent high school graduates who have demonstrated exceptional
            talent and strong interest in mathematics, physics, and computer science.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Requirements */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <FileText className="h-6 w-6 text-accent mr-3" />
              Detailed Requirements
            </h3>
            <div className="space-y-6">
              {requirements.map((req, index) => (
                <Card key={index} className="border-accent/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-accent">{req.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {req.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Calendar className="h-6 w-6 text-accent mr-3" />
              Application Process
            </h3>
            <div className="space-y-4">
              {applicationSteps.map((step, index) => (
                <Card
                  key={index}
                  className="border-accent/20 hover:border-accent/40 transition-colors relative overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-accent text-background rounded-full flex items-center justify-center font-bold text-sm mr-4">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{step.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2 text-pretty">{step.description}</p>
                        <Badge variant="outline" className="border-accent/40 text-accent text-xs">
                          {step.deadline}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Program Highlights */}
        <Card className="border-accent/20 bg-accent/5 mb-8">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-6 text-center">
              B.Sc. in Artificial Intelligence and Machine Learning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Code className="h-8 w-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Duration</h4>
                <p className="text-sm text-muted-foreground">4 Years Full-time</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Class Size</h4>
                <p className="text-sm text-muted-foreground">Maximum 30 students</p>
              </div>
              <div className="text-center">
                <FileText className="h-8 w-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Credits</h4>
                <p className="text-sm text-muted-foreground">240 ECTS</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Language</h4>
                <p className="text-sm text-muted-foreground">English</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-background">
            <Link href="#apply-now">
              Apply for Undergraduate Program
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
