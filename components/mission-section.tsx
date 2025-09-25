"use client"
import {
  BrainIcon,
  TargetIcon,
  UsersIcon,
  ShieldIcon,
  BookOpenIcon,
  LightbulbIcon,
  GlobeIcon,
  ZapIcon,
} from "@/components/icons"

export function MissionSection() {
  return (
    <section className="section-padding bg-background relative">
      <div className="absolute inset-0 academic-dots"></div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto space-content">
          <div className="text-center space-elements">
            <h2 className="text-headline font-bold text-balance">
              <span className="text-accent">Our Mission:</span>
              <br />
              <span className="text-foreground">Building the Intelligent Ecosystem in Central Asia</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-elements text-body-large text-muted-foreground">
            <p className="text-pretty">
              Welcome to the Kyrgyz Institute of Advanced AI and Cybernetics (KIAIC). Nestled in the vibrant capital of
              Bishkek, against the backdrop of the majestic Tian Shan mountains, KIAIC is more than just a university—it
              is a crucible of ideas, a hub of innovation, and an incubator for the next generation of technology
              leaders in Central Asia.
            </p>

            <p className="text-pretty">
              In today's algorithm and data-driven era, mastering artificial intelligence and cybernetics is no longer
              optional—it is the core driving force for social progress, economic transformation, and national security.
              Our mission is clear and unwavering: to cultivate top-tier talent with deep theoretical foundations,
              exceptional engineering capabilities, and high ethical standards to tackle the world's most complex
              challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="academic-card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent/10 flex items-center justify-center">
                <BrainIcon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Advanced AI Research</h3>
              <p className="text-sm text-muted-foreground text-pretty">
                Cutting-edge research in machine learning, deep learning, and artificial general intelligence, pushing
                the boundaries of what's possible.
              </p>
            </div>

            <div className="academic-card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent/10 flex items-center justify-center">
                <TargetIcon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Regional Impact</h3>
              <p className="text-sm text-muted-foreground text-pretty">
                Addressing Central Asia's unique challenges through innovative AI applications in water management,
                agriculture, and sustainable development.
              </p>
            </div>

            <div className="academic-card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent/10 flex items-center justify-center">
                <UsersIcon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">World-Class Faculty</h3>
              <p className="text-sm text-muted-foreground text-pretty">
                Experts from MIT, Stanford, ETH Zurich, Google DeepMind, and OpenAI, bringing global expertise to
                Central Asia.
              </p>
            </div>

            <div className="academic-card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent/10 flex items-center justify-center">
                <ShieldIcon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Ethical AI</h3>
              <p className="text-sm text-muted-foreground text-pretty">
                Committed to responsible AI development with strong emphasis on ethics, fairness, and societal benefit.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-elements">
              <h3 className="text-title font-bold text-accent">Educational Excellence</h3>
              <div className="space-elements text-muted-foreground">
                <p className="text-pretty">
                  KIAIC provides a world-class educational environment. Our curriculum closely follows the latest
                  developments in global AI and cybernetics, taught by expert scholars from international top
                  universities and tech giants.
                </p>
                <p className="text-pretty">
                  We have abandoned traditional rote learning models, adopting Project-Based Learning (PBL) and flipped
                  classroom approaches, encouraging students to participate in cutting-edge research projects from day
                  one.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="academic-card p-4 text-center">
                <BookOpenIcon className="h-6 w-6 text-accent mx-auto mb-2" />
                <h4 className="font-medium mb-1 text-foreground text-sm">Project-Based Learning</h4>
                <p className="text-xs text-muted-foreground">Hands-on experience from day one</p>
              </div>
              <div className="academic-card p-4 text-center">
                <LightbulbIcon className="h-6 w-6 text-accent mx-auto mb-2" />
                <h4 className="font-medium mb-1 text-foreground text-sm">Innovation Focus</h4>
                <p className="text-xs text-muted-foreground">Encouraging creative problem-solving</p>
              </div>
              <div className="academic-card p-4 text-center">
                <GlobeIcon className="h-6 w-6 text-accent mx-auto mb-2" />
                <h4 className="font-medium mb-1 text-foreground text-sm">Global Perspective</h4>
                <p className="text-xs text-muted-foreground">International collaboration and exchange</p>
              </div>
              <div className="academic-card p-4 text-center">
                <ZapIcon className="h-6 w-6 text-accent mx-auto mb-2" />
                <h4 className="font-medium mb-1 text-foreground text-sm">Cutting-Edge Tech</h4>
                <p className="text-xs text-muted-foreground">Access to latest AI technologies</p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="academic-card p-8">
              <h3 className="text-xl font-bold mb-4 text-accent text-center">Our Vision</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                At KIAIC, you will join a diverse, vibrant international community. Our students and faculty come from
                around the world, bringing different perspectives and experiences. We are committed to creating an
                inclusive, respectful environment where everyone can thrive. We encourage students to challenge the
                status quo, ask bold questions, and change the world through technological innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
