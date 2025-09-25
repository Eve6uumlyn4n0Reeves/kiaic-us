"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What is the teaching language at KIAIC?",
    answer:
      "All courses at KIAIC are taught in English. Therefore, applicants must have excellent English listening, speaking, reading, and writing abilities. The institute also offers Kyrgyz and Russian language courses to help international students better integrate into local life.",
  },
  {
    question: "Can I apply for the PhD program without published papers in top conferences?",
    answer:
      "Yes, you can. While published papers are strong evidence of research potential, we also comprehensively consider your research proposal, recommendation letters, academic performance, and interview performance. If you demonstrate deep insights and innovative ideas in your research proposal, you still have the opportunity to be admitted.",
  },
  {
    question: "Does the institute provide accommodation?",
    answer:
      "Yes, KIAIC provides modern student apartments for all students. The apartments are fully equipped with high-speed internet and comfortable study-living environments. International students are given priority for accommodation.",
  },
  {
    question: "What is the employment situation for KIAIC graduates?",
    answer:
      "KIAIC graduates are highly competitive in the job market. Our graduates mainly work in leading domestic and international technology companies (such as Google, Meta, Amazon, Alibaba, Tencent) as AI researchers, algorithm engineers, data scientists, etc. A considerable number of graduates also choose to continue their studies at top global universities or start their own businesses. The institute's career development center provides comprehensive career guidance and support.",
  },
  {
    question: "How important is programming ability in the application process?",
    answer:
      "Very important. KIAIC is an institute that emphasizes engineering practical ability. Whether for undergraduate or graduate programs, we require applicants to have solid programming foundations and problem-solving abilities. We encourage applicants to demonstrate their abilities by submitting portfolios or participating in programming challenges in entrance exams.",
  },
  {
    question: "What are the application deadlines?",
    answer:
      "Undergraduate applications: March 1, 2026. Graduate applications (M.Sc. and Ph.D.): Rolling admissions with priority deadlines of February 1 for fall admission and October 1 for spring admission. We recommend applying early for better consideration and scholarship opportunities.",
  },
  {
    question: "Are there opportunities for research collaboration with faculty?",
    answer:
      "Absolutely. KIAIC encourages students to participate in research from day one. Our faculty members are actively involved in cutting-edge research projects and welcome motivated students to join their research groups. We also have a formal undergraduate research program and summer research opportunities.",
  },
  {
    question: "What support is available for international students?",
    answer:
      "We provide comprehensive support including visa assistance, airport pickup, guaranteed housing, cultural orientation programs, language exchange opportunities, and dedicated international student advisors. Our goal is to ensure a smooth transition and successful academic experience for all international students.",
  },
]

export function AdmissionsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Find answers to common questions about admissions, programs, and student life at KIAIC.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/5 transition-colors"
                >
                  <h3 className="font-semibold text-balance pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-accent flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground text-pretty leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
