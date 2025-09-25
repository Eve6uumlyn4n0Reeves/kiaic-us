"use client"

import { motion } from "framer-motion"
import { GraduationCap, Brain, Cpu, Network } from "lucide-react"

export function AcademicsHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
              <GraduationCap className="w-12 h-12 text-primary" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Academic <span className="text-primary">Excellence</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
            Pioneering the future of artificial intelligence and cybernetics through cutting-edge academic programs
            designed for the next generation of innovators.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Brain, label: "AI Research", count: "15+" },
              { icon: Cpu, label: "Labs", count: "8" },
              { icon: Network, label: "Programs", count: "12" },
              { icon: GraduationCap, label: "Faculty", count: "45+" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 inline-block mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{item.count}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
