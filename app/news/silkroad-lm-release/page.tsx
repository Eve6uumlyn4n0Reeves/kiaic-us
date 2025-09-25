import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, Languages, Brain, Code } from "lucide-react"

export default function SilkRoadLMPage() {
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
                Research Breakthrough
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
              KIAIC Releases Revolutionary "SilkRoad-LM" Model, Leading New Wave of Turkic Language AI Technology
            </h1>
            <div className="flex items-center text-muted-foreground mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              September 20, 2025
              <span className="mx-2">•</span>
              <span>8 min read</span>
            </div>
          </div>

          {/* Hero image placeholder */}
          <Card className="mb-8 overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="flex items-center space-x-8">
                <Languages className="h-24 w-24 text-accent opacity-50" />
                <Brain className="h-20 w-20 text-primary opacity-50" />
              </div>
            </div>
          </Card>

          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              <strong>Bishkek, Kyrgyzstan</strong> — The Kyrgyz Institute of Advanced AI and Cybernetics (KIAIC) today
              announced that its Central Asian Language Technologies Lab (CALTL) has achieved a milestone breakthrough
              in low-resource language processing. The research team successfully developed and released "SilkRoad-LM,"
              a pre-trained large language model specifically optimized for Turkic languages (including Kyrgyz, Kazakh,
              Uzbek, etc.). This model significantly outperforms existing multilingual models (such as mBERT and XLM-R)
              in multiple key NLP tasks, laying a solid foundation for the digitalization process and barrier-free
              information exchange in Central Asia.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Turkic languages have over 170 million speakers but have long been in a "low-resource" state in the global
              NLP field, lacking large-scale high-quality datasets and specially optimized models. This has led to
              lagging applications of modern AI technology in the region, creating a digital divide.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-accent">
              Technical Innovation: Morphology-Aware and Cross-Lingual Transfer
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              KIAIC's research team conducted in-depth analysis of the complex morphological features of Turkic
              languages, particularly their high degree of agglutination. "Traditional subword-based tokenization
              methods often fragment the semantic integrity of Turkic vocabulary," explained Dr. Aida Kadyrova, Director
              of CALTL and Principal Researcher. "SilkRoad-LM adopts an innovative Morphology-Aware Tokenization
              technique that can more effectively identify roots and affixes, thereby improving the model's
              understanding of language structure."
            </p>

            <Card className="my-8 border-accent/20 bg-accent/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Code className="h-5 w-5 text-accent mr-2" />
                  Key Technical Innovations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Morphology-Aware Tokenization</h4>
                    <p className="text-muted-foreground">
                      Advanced tokenization that preserves semantic integrity of agglutinative Turkic word structures.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cross-Lingual Transfer Learning</h4>
                    <p className="text-muted-foreground">
                      Sophisticated transfer learning strategies enabling knowledge sharing across Turkic languages.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Curriculum Learning</h4>
                    <p className="text-muted-foreground">
                      Progressive training from simple to complex structures, improving efficiency and robustness.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Attention Mechanisms</h4>
                    <p className="text-muted-foreground">
                      Novel attention mechanisms for better understanding of linguistic relationships and dependencies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Furthermore, SilkRoad-LM's training process employs advanced cross-lingual transfer learning strategies.
              The research team first used large-scale Turkic monolingual corpora (collected through web scraping and
              digitization of historical documents) for unsupervised pre-training, enabling the model to learn rich
              linguistic knowledge. Then, using limited parallel corpora for fine-tuning, they achieved knowledge
              transfer between different Turkic languages.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 my-8 italic text-muted-foreground">
              "We also introduced a curriculum learning-based training method, gradually transitioning from simple
              language structures to complex sentences, improving the model's training efficiency and robustness."
              <footer className="mt-2 text-sm">— Dr. Aida Kadyrova, CALTL Director</footer>
            </blockquote>

            <h2 className="text-2xl font-bold mb-4 text-accent">
              Performance Evaluation: Comprehensive Superiority Over Existing Models
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              In standard NLP benchmark tests, SilkRoad-LM demonstrated exceptional performance. In Kyrgyz-English
              machine translation tasks, its BLEU score was nearly 10 points higher than the closest competitor. In
              downstream tasks such as Named Entity Recognition (NER), sentiment analysis, and question-answering
              systems, SilkRoad-LM also achieved state-of-the-art (SOTA) results.
            </p>

            <Card className="my-8 border-accent/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Performance Benchmarks</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">+10</div>
                    <div className="text-xs text-muted-foreground">BLEU Score Improvement</div>
                    <div className="text-xs text-muted-foreground">Machine Translation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">SOTA</div>
                    <div className="text-xs text-muted-foreground">Performance</div>
                    <div className="text-xs text-muted-foreground">Named Entity Recognition</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">95%+</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                    <div className="text-xs text-muted-foreground">Sentiment Analysis</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mb-4 text-accent">Social Impact and Future Outlook</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              KIAIC President Dr. Elena Petrova highly praised this achievement: "The release of SilkRoad-LM is an
              important manifestation of KIAIC's commitment to using cutting-edge technology to solve regional
              challenges. High-quality language technology will bring revolutionary changes to education, business,
              cultural exchange, and government services in Central Asia."
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              To promote the development of the region's technological innovation ecosystem, KIAIC announced that it
              will open-source the SilkRoad-LM model and its related datasets for free use by researchers and developers
              worldwide. "We believe in the power of open source and hope to further advance Turkic NLP technology
              development through community collaboration," stated Dr. Kadyrova.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              In the future, the CALTL team plans to continue expanding SilkRoad-LM's scale and capabilities, exploring
              multimodal learning (integrating text, speech, and images), and applying it to developing intelligent
              education platforms, virtual assistants, and cultural heritage digitization protection. KIAIC is actively
              collaborating with government agencies and enterprises across Central Asian countries to promote
              SilkRoad-LM's practical applications, making technology truly benefit everyone.
            </p>

            <Card className="border-accent/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <Languages className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Open Source Initiative</h3>
                <p className="text-muted-foreground">
                  This breakthrough consolidates KIAIC's position as a leader in AI research in Central Asia and injects
                  new momentum into the region's digital transformation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
