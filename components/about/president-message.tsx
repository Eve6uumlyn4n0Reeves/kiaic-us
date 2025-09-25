import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function PresidentMessage() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Message from the President</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-accent/20 bg-accent/5">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* President Photo Placeholder */}
                <div className="flex-shrink-0 mx-auto lg:mx-0">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <div className="w-32 h-32 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-accent">EP</span>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="font-bold text-lg">Dr. Elena Petrova</h3>
                    <p className="text-sm text-muted-foreground">President of KIAIC</p>
                    <p className="text-xs text-muted-foreground">Ph.D. Computer Science, Stanford University</p>
                    <p className="text-xs text-muted-foreground">Former Google AI Chief Scientist</p>
                  </div>
                </div>

                {/* Message Content */}
                <div className="flex-1">
                  <Quote className="h-8 w-8 text-accent mb-4" />
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-pretty leading-relaxed">
                      Welcome to the Kyrgyz Institute of Advanced AI and Cybernetics (KIAIC). We live in an
                      unprecedented era where artificial intelligence and cybernetics are reshaping our world at an
                      unprecedented pace—from how we communicate to how we solve problems, from paradigms of scientific
                      discovery to pathways of industrial development.
                    </p>

                    <p className="text-pretty leading-relaxed">
                      At KIAIC, we firmly believe that education is the key to addressing these challenges and seizing
                      these opportunities. We established this institute not only to impart knowledge and skills, but
                      more importantly, to cultivate thinkers, creators, and leaders who can lead future
                      transformations.
                    </p>

                    <p className="text-pretty leading-relaxed">
                      Our educational philosophy is rooted in the relentless pursuit of excellence. We provide students
                      with a rigorous yet supportive learning environment, encouraging them to challenge limits and
                      explore the unknown. Our curriculum covers not only the core theories of AI and cybernetics, but
                      also emphasizes applying these theories to solve real-world problems.
                    </p>

                    <p className="text-pretty leading-relaxed">
                      But technology itself is neutral. How we use technology will determine our future direction.
                      Therefore, at KIAIC, we equally value humanities education and ethics. We hope our graduates not
                      only possess intelligent minds, but also wise hearts. They should understand the profound impact
                      of technology on society and be committed to using technology responsibly for the benefit of
                      humanity.
                    </p>

                    <p className="text-pretty leading-relaxed">
                      Whether you are a student eager to explore the mysteries of AI, a researcher seeking
                      breakthroughs, or an industry partner seeking collaboration, I sincerely invite you to join us.
                      Let us work together to shape a more intelligent and better future.
                    </p>

                    <p className="text-pretty leading-relaxed font-medium">
                      Welcome to KIAIC, where the future begins.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
