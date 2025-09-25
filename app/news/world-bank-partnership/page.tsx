import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, Handshake, Droplets, Globe } from "lucide-react"

export default function WorldBankPartnershipPage() {
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
              <Badge variant="outline" className="border-accent/40 text-accent">
                Partnership
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
              KIAIC Establishes Strategic Partnership with World Bank for AI-Driven Water Resource Management
            </h1>
            <div className="flex items-center text-muted-foreground mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              August 15, 2025
              <span className="mx-2">•</span>
              <span>6 min read</span>
            </div>
          </div>

          {/* Hero image placeholder */}
          <Card className="mb-8 overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="flex items-center space-x-8">
                <Handshake className="h-24 w-24 text-accent opacity-50" />
                <Droplets className="h-20 w-20 text-primary opacity-50" />
              </div>
            </div>
          </Card>

          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              <strong>Bishkek, Kyrgyzstan</strong> — The Kyrgyz Institute of Advanced AI and Cybernetics (KIAIC) and the
              World Bank Group today officially signed a strategic cooperation memorandum, announcing the establishment
              of a long-term partnership. Both parties will jointly commit to using artificial intelligence, big data,
              and cybernetics technologies to address the increasingly severe water resource management challenges in
              the Central Asian region and promote regional sustainable development.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Central Asia's water resources are highly dependent on glacial meltwater from the Tian Shan and Pamir
              mountain ranges. However, global climate change is accelerating glacial melting, leading to increasingly
              prominent water supply and demand contradictions, posing serious threats to regional food security, energy
              production, and ecological balance. Traditional monitoring and management methods have become inadequate
              to address this complex and dynamic challenge.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-accent">
              Project "Tien Shan Source": AI-Driven Intelligent Water Resource Monitoring and Prediction System
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The core of this cooperation is the launch of the joint research project named "Tien Shan Source." This
              project aims to establish a high-precision, real-time intelligent water resource monitoring and prediction
              system, providing decision support for Central Asian governments to formulate scientific water resource
              management policies.
            </p>

            <Card className="my-8 border-accent/20 bg-accent/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Globe className="h-5 w-5 text-accent mr-2" />
                  Multi-Source Data Integration
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Satellite Remote Sensing</h4>
                    <p className="text-muted-foreground">
                      High-resolution satellite imagery and radar data to monitor glacial coverage, snow line altitude,
                      and surface water body changes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Drone Monitoring</h4>
                    <p className="text-muted-foreground">
                      Deployment of multispectral sensor-equipped drones for fine-scale monitoring of key areas.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ground Sensor Networks</h4>
                    <p className="text-muted-foreground">
                      IoT sensors deployed in major rivers and reservoirs for real-time monitoring of water levels, flow
                      rates, and water quality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-muted-foreground leading-relaxed mb-6">
              KIAIC's Intelligent Systems and Control Research Center (ISCRC) will leverage its professional advantages
              in data science, machine learning, and system dynamics to lead the technical research and development of
              this system.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-accent">
              Technical Core: Fusion of Deep Learning and System Dynamics Models
            </h2>

            <blockquote className="border-l-4 border-accent pl-6 my-8 italic text-muted-foreground">
              "The challenge we face is how to extract valuable information from massive, multi-source, heterogeneous
              data and predict future change trends. We have developed a hybrid framework that fuses deep learning and
              system dynamics models. Deep learning models (particularly convolutional neural networks and long
              short-term memory networks) are used to analyze remote sensing images and time series data, while system
              dynamics models are used to simulate water cycle processes and the impact of human activities on water
              resources."
              <footer className="mt-2 text-sm">— Prof. Dmitry Ivanov, ISCRC Director</footer>
            </blockquote>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The system will be capable of providing water resource supply and demand predictions for the next 3
              months, 1 year, and even 10 years, and evaluating the impacts under different policy scenarios.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-accent">
              Cross-Border Cooperation, Creating the Future Together
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              KIAIC President Dr. Elena Petrova stated at the signing ceremony: "We are very honored to establish a
              strategic partnership with the World Bank. The World Bank has rich experience and resources in promoting
              global sustainable development, while KIAIC has top-tier technical talent and research capabilities. We
              believe that through close cooperation between both parties, we can transform advanced AI technology into
              practical solutions for addressing the most pressing challenges in the Central Asian region."
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The World Bank's Central Asia representative stated: "Water resource management is key to sustainable
              development in Central Asia. We are pleased to collaborate with a leading technical institution like
              KIAIC. Artificial intelligence and big data technologies have enormous potential in improving resource
              utilization efficiency and addressing climate change. We look forward to working with KIAIC to explore
              applications of these technologies and create a better future for the people of Central Asia."
            </p>

            <h2 className="text-2xl font-bold mb-4 text-accent">Talent Development and Capacity Building</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              This cooperation will also provide valuable practical opportunities for KIAIC students. Students will have
              the opportunity to participate in this project with significant social impact, applying classroom
              knowledge to solve real-world problems. Additionally, both parties will jointly hold seminars and training
              courses to enhance capacity building in AI and data science fields in the Central Asian region.
            </p>

            <Card className="border-accent/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <Droplets className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Regional Impact</h3>
                <p className="text-muted-foreground">
                  The cooperation between KIAIC and the World Bank marks a deep integration of technology and
                  development assistance, setting a new paradigm for using cutting-edge technology to promote
                  sustainable development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
