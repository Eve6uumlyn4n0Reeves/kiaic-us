import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Languages, Zap, Shield, Droplets, Brain, Network } from "lucide-react"
import Link from "next/link"

const highlights = [
  {
    title: "SilkRoad-LM: Revolutionary Language Model",
    description:
      "Breakthrough morphology-aware pre-trained language model for Turkic languages, achieving state-of-the-art performance in machine translation, sentiment analysis, and named entity recognition tasks.",
    icon: Languages,
    category: "Natural Language Processing",
    impact: "Serving 170M+ Turkic language speakers",
    details: [
      "Innovative Morphology-Aware Tokenization technology",
      "Cross-lingual transfer learning strategies",
      "10+ BLEU score improvement over existing models",
      "Open-source release for global research community",
    ],
    link: "/news/silkroad-lm-release",
  },
  {
    title: "Tien Shan Source: AI Water Management",
    description:
      "Intelligent monitoring and prediction system for Central Asia's water resources, combining satellite data, IoT sensors, and deep learning models to address climate change challenges.",
    icon: Droplets,
    category: "Environmental AI",
    impact: "Protecting regional water security",
    details: [
      "Multi-source data integration (satellite, drone, IoT)",
      "Hybrid deep learning and system dynamics models",
      "3-month to 10-year prediction capabilities",
      "Partnership with World Bank Group",
    ],
    link: "/news/world-bank-partnership",
  },
  {
    title: "EcoAI: Climate Change Solutions",
    description:
      "Award-winning Spatio-Temporal Graph Neural Network model for forest fire prediction, recognized as global champion at NeurIPS 2025 'AI Against Climate Change' challenge.",
    icon: Zap,
    category: "Climate AI",
    impact: "Global forest fire prevention",
    details: [
      "Dynamic graph structure modeling",
      "Novel attention mechanism for interpretability",
      "Superior performance in large-scale fire prediction",
      "Open-source tool for global research institutions",
    ],
    link: "/news/neurips-2025-victory",
  },
  {
    title: "Central Asia AI Ethics Framework",
    description:
      "Comprehensive framework for responsible AI development, focusing on fairness, transparency, and accountability in developing countries context.",
    icon: Shield,
    category: "AI Ethics",
    impact: "Guiding regional AI policy",
    details: [
      "First AI Ethics Guidelines White Paper in Central Asia",
      "Human-centered AI development pathways",
      "Policy recommendations for governments",
      "International collaboration on AI governance",
    ],
    link: "#",
  },
  {
    title: "Quantum Machine Learning Initiative",
    description:
      "Pioneering research in quantum computing applications for machine learning, supported by €2M grant from European Research Council.",
    icon: Brain,
    category: "Quantum AI",
    impact: "Next-generation computing",
    details: [
      "Quantum optimization algorithms",
      "Hybrid classical-quantum systems",
      "Industry partnerships with tech giants",
      "Training next-generation quantum researchers",
    ],
    link: "#",
  },
  {
    title: "Intelligent Transportation Systems",
    description:
      "Reinforcement learning-based adaptive traffic signal control system, reducing average commute time by 20% in Bishkek pilot areas.",
    icon: Network,
    category: "Smart Cities",
    impact: "Urban mobility optimization",
    details: [
      "Multi-agent reinforcement learning approach",
      "Real-time traffic flow optimization",
      "20% reduction in commute times",
      "Scalable to other Central Asian cities",
    ],
    link: "#",
  },
]

export function ResearchHighlights() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Research Breakthroughs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our latest innovations that are shaping the future of AI and addressing global challenges through
            cutting-edge research and international collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-primary font-medium mb-1">{highlight.category}</div>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {highlight.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 leading-relaxed">{highlight.description}</CardDescription>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-3 text-primary text-sm">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {highlight.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm font-medium text-muted-foreground">Impact: {highlight.impact}</div>
                    {highlight.link !== "#" && (
                      <Link href={highlight.link}>
                        <Button variant="ghost" size="sm" className="group/btn">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="group bg-transparent">
            View All Research Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
