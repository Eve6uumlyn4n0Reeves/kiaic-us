"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, Award, Zap, Globe } from "lucide-react"
import { WebGLNeuralBackground } from "@/components/webgl-neural-background"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WebGLNeuralBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/20"></div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto space-content">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 backdrop-blur-sm">
              <Award className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Central Asia's Premier AI Institute</span>
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="text-center space-elements">
            <h1 className="text-display font-bold text-balance">
              <span className="block text-foreground">Decoding the Future,</span>
              <span className="block text-accent">Mastering Intelligence</span>
            </h1>

            <p className="text-title text-muted-foreground font-light text-balance">
              Kyrgyz Institute of Advanced AI and Cybernetics
            </p>

            <p className="text-body-large text-muted-foreground text-balance max-w-3xl mx-auto">
              Central Asia's engine of technological innovation. Where academic excellence meets cutting-edge AI
              research, fostering the next generation of intelligent systems and their creators.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="btn-primary text-base px-8 py-3">
              <Link href="/academics" className="inline-flex items-center gap-2 group">
                <span>Explore Programs</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 py-3 border-border hover:bg-muted bg-transparent"
            >
              <Link href="/admissions">Apply Now</Link>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="text-base px-6 py-3 text-muted-foreground hover:text-foreground group inline-flex items-center gap-2"
            >
              <Play className="h-4 w-4 flex-shrink-0" />
              <span>Campus Tour</span>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
            <div className="academic-card p-6 text-center">
              <div className="flex justify-center mb-3">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">1:7</div>
              <div className="text-sm text-muted-foreground">Faculty-Student Ratio</div>
            </div>
            <div className="academic-card p-6 text-center">
              <div className="flex justify-center mb-3">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Graduate Employment</div>
            </div>
            <div className="academic-card p-6 text-center">
              <div className="flex justify-center mb-3">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">10</div>
              <div className="text-sm text-muted-foreground">PFLOPS Computing</div>
            </div>
            <div className="academic-card p-6 text-center">
              <div className="flex justify-center mb-3">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Global Partners</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-8 border border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
