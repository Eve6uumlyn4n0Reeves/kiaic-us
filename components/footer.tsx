"use client"

import Link from "next/link"
import { Icons } from "@/components/icons"

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <div>
                <div className="font-bold text-foreground">KIAIC</div>
                <div className="text-xs text-muted-foreground">AI & Cybernetics</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              Leading Central Asia in artificial intelligence research and education, fostering innovation for a digital
              future.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <div className="h-5 w-5">
                  <Icons.Facebook />
                </div>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <div className="h-5 w-5">
                  <Icons.Twitter />
                </div>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <div className="h-5 w-5">
                  <Icons.Linkedin />
                </div>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <div className="h-5 w-5">
                  <Icons.Youtube />
                </div>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-muted-foreground hover:text-accent transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-muted-foreground hover:text-accent transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-muted-foreground hover:text-accent transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-accent transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Academic Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/academics/undergraduate"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  B.Sc. AI & ML
                </Link>
              </li>
              <li>
                <Link href="/academics/graduate" className="text-muted-foreground hover:text-accent transition-colors">
                  M.Sc. Data Science
                </Link>
              </li>
              <li>
                <Link href="/academics/phd" className="text-muted-foreground hover:text-accent transition-colors">
                  Ph.D. Programs
                </Link>
              </li>
              <li>
                <Link href="/research/labs" className="text-muted-foreground hover:text-accent transition-colors">
                  Research Labs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <div className="h-4 w-4 text-accent mt-0.5 flex-shrink-0">
                  <Icons.MapPin />
                </div>
                <div className="text-muted-foreground">
                  <div>Chui Avenue 720040</div>
                  <div>Bishkek, Kyrgyzstan</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-4 w-4 text-accent flex-shrink-0">
                  <Icons.Phone />
                </div>
                <span className="text-muted-foreground">+996 312 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-4 w-4 text-accent flex-shrink-0">
                  <Icons.Mail />
                </div>
                <span className="text-muted-foreground">info@aifun.edu.kg</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Kyrgyz Institute of AI and Cybernetics. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
