import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Languages, Zap, Shield, Brain, Cpu, Network, Microscope, Database } from "lucide-react"

const centers = [
  {
    name: "Central Asian Language Technologies Lab (CALTL)",
    director: "Dr. Aida Kadyrova",
    description:
      "Dedicated to developing advanced NLP technologies for Kyrgyz, Kazakh, and other Turkic languages, promoting digital inclusivity across Central Asia.",
    icon: Languages,
    focus: [
      "Natural Language Processing",
      "Machine Translation",
      "Computational Linguistics",
      "Low-Resource Languages",
      "Morphology-Aware Processing",
    ],
    achievements: [
      "SilkRoad-LM: First Turkic-optimized language model",
      "Turkic Language Corpus: 50M+ sentences",
      "Multi-lingual Translation System",
      "Digital Heritage Preservation Platform",
    ],
    facilities: ["High-performance GPU clusters", "Linguistic annotation tools", "Multilingual datasets"],
    collaborations: ["Edinburgh University", "MIT CSAIL", "Google Research"],
  },
  {
    name: "Intelligent Systems and Control Research Center (ISCRC)",
    director: "Dr. Dmitry Ivanov",
    description:
      "Research on modeling, simulation, and optimal control of complex systems with applications in smart grids, urban transportation, and industrial automation.",
    icon: Zap,
    focus: ["Control Theory", "Reinforcement Learning", "System Dynamics", "Smart Infrastructure", "IoT Integration"],
    achievements: [
      "Smart Traffic Control: 20% commute reduction",
      "Water Resource Management System",
      "Industrial Automation Solutions",
      "Smart Grid Optimization",
    ],
    facilities: ["Control systems laboratory", "IoT sensor networks", "Simulation environments"],
    collaborations: ["ETH Zurich", "World Bank Group", "Local Government Agencies"],
  },
  {
    name: "AI Ethics and Societal Impact Lab",
    director: "Dr. Sarah Johnson",
    description:
      "Research on AI fairness, transparency, and accountability, providing recommendations for policymakers to promote responsible AI development.",
    icon: Shield,
    focus: ["AI Ethics", "Algorithmic Fairness", "Explainable AI", "Policy Research", "Social Impact Assessment"],
    achievements: [
      "Central Asia AI Ethics Framework",
      "Policy Guidelines for Governments",
      "Bias Detection and Mitigation Tools",
      "Public Awareness Campaigns",
    ],
    facilities: ["Policy research center", "Ethics review board", "Public engagement spaces"],
    collaborations: ["Oxford Internet Institute", "UN AI Advisory Body", "Regional Governments"],
  },
  {
    name: "Deep Learning Research Group",
    director: "Dr. Michael Chen",
    description:
      "Advancing theoretical understanding of deep neural networks and developing novel learning algorithms for complex AI tasks and applications.",
    icon: Brain,
    focus: [
      "Deep Learning Theory",
      "Computer Vision",
      "Generative Models",
      "Self-Supervised Learning",
      "Neural Architecture Search",
    ],
    achievements: [
      "Novel GAN Architectures for Central Asian Art",
      "Vision Transformers for Medical Imaging",
      "Theoretical Breakthroughs in Generalization",
      "Open-source Deep Learning Framework",
    ],
    facilities: ["NVIDIA DGX systems", "Computer vision lab", "Medical imaging equipment"],
    collaborations: ["Carnegie Mellon University", "DeepMind", "NVIDIA Research"],
  },
  {
    name: "Quantum Computing Research Center",
    director: "Dr. Elena Petrov",
    description:
      "Exploring quantum machine learning and quantum algorithms for solving complex optimization problems in artificial intelligence and cybernetics.",
    icon: Cpu,
    focus: [
      "Quantum Machine Learning",
      "Quantum Algorithms",
      "Quantum Optimization",
      "Hybrid Classical-Quantum Systems",
    ],
    achievements: [
      "Quantum ML Algorithms for NP-hard problems",
      "Hybrid Optimization Solutions",
      "Industry Partnerships with IBM Quantum",
      "€2M ERC Grant for Quantum AI Research",
    ],
    facilities: ["Quantum simulator access", "Cryogenic systems", "Quantum programming environments"],
    collaborations: ["IBM Quantum Network", "Google Quantum AI", "European Research Council"],
  },
  {
    name: "Cybersecurity and Network Intelligence Lab",
    director: "Dr. Alex Volkov",
    description:
      "Developing AI-powered cybersecurity solutions and intelligent network management systems for enhanced digital security in the modern era.",
    icon: Network,
    focus: ["AI Security", "Network Intelligence", "Threat Detection", "Secure Systems", "Blockchain Applications"],
    achievements: [
      "AI-powered Threat Detection System",
      "Network Optimization Algorithms",
      "Blockchain-based Identity Management",
      "Cybersecurity Training Programs",
    ],
    facilities: ["Cybersecurity range", "Network simulation lab", "Penetration testing environment"],
    collaborations: ["CISA", "Kaspersky Lab", "Regional Cybersecurity Centers"],
  },
  {
    name: "Robotics and Autonomous Systems Lab",
    director: "Dr. Maria Rodriguez",
    description:
      "Research in robotics, autonomous systems, and human-robot interaction with applications in healthcare, agriculture, and disaster response.",
    icon: Microscope,
    focus: ["Robotics", "Autonomous Systems", "Human-Robot Interaction", "Agricultural Robotics", "Medical Robotics"],
    achievements: [
      "Agricultural Monitoring Drones",
      "Medical Assistance Robots",
      "Search and Rescue Systems",
      "Human-Robot Collaboration Framework",
    ],
    facilities: ["Robotics workshop", "Drone testing facility", "Human-robot interaction lab"],
    collaborations: ["Boston Dynamics", "Agricultural Research Centers", "Medical Institutions"],
  },
  {
    name: "Big Data and Analytics Center",
    director: "Dr. Zhang Wei",
    description:
      "Research in big data processing, analytics, and visualization with focus on Central Asian economic and social development challenges.",
    icon: Database,
    focus: ["Big Data Processing", "Data Analytics", "Visualization", "Economic Modeling", "Social Network Analysis"],
    achievements: [
      "Central Asia Economic Data Platform",
      "Social Media Analytics Tools",
      "Government Data Visualization Systems",
      "Predictive Economic Models",
    ],
    facilities: ["Hadoop clusters", "Data visualization lab", "Analytics software suite"],
    collaborations: ["World Bank", "Asian Development Bank", "National Statistical Offices"],
  },
]

export function ResearchCenters() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Research Centers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            World-class research facilities driving innovation in artificial intelligence, cybernetics, and emerging
            technologies with global impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {centers.map((center, index) => {
            const IconComponent = center.icon
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
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {center.name}
                      </CardTitle>
                      <div className="text-sm text-muted-foreground mb-2">Director: {center.director}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6 leading-relaxed">{center.description}</CardDescription>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary text-sm">Research Focus</h4>
                      <div className="flex flex-wrap gap-2">
                        {center.focus.map((area, idx) => (
                          <span key={idx} className="px-3 py-1 bg-muted rounded-full text-sm">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-primary text-sm">Key Achievements</h4>
                      <ul className="space-y-1">
                        {center.achievements.slice(0, 3).map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-primary text-sm">Key Collaborations</h4>
                      <div className="flex flex-wrap gap-2">
                        {center.collaborations.map((collab, idx) => (
                          <span key={idx} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                            {collab}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t">
                    <Button variant="ghost" size="sm" className="group/btn">
                      Explore Research
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
