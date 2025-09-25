"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Globe, Users, Building, GraduationCap } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 academic-grid"></div>
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center space-content">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 backdrop-blur-sm mb-8">
              <Mail className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Get in Touch</span>
            </div>

            <h1 className="text-display font-bold text-balance">
              <span className="block text-foreground">Connect with</span>
              <span className="block text-accent">KIAIC</span>
            </h1>

            <p className="text-body-large text-muted-foreground text-balance max-w-3xl mx-auto">
              Ready to join Central Asia's premier AI and cybernetics institute? We're here to help you take the next
              step in your academic and research journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-headline font-bold text-foreground mb-4">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Whether you're a prospective student, researcher, or industry partner, we'd love to hear from you.
                </p>
              </div>

              <Card className="academic-card">
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Inquiry Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admissions">Admissions</SelectItem>
                        <SelectItem value="research">Research Collaboration</SelectItem>
                        <SelectItem value="partnerships">Industry Partnerships</SelectItem>
                        <SelectItem value="media">Media & Press</SelectItem>
                        <SelectItem value="general">General Information</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your inquiry, research interests, or how we can help you..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full btn-primary">Send Message</Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-headline font-bold text-foreground mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Multiple ways to reach our team and visit our campus in beautiful Bishkek.
                </p>
              </div>

              <div className="space-y-6">
                {/* Main Campus */}
                <Card className="academic-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Main Campus</h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>Chui Avenue 720, Bishkek 720040, Kyrgyzstan</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span>+996 (312) 555-0123</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>info@kiaic.edu.kg</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Admissions Office */}
                <Card className="academic-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Admissions Office</h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>admissions@kiaic.edu.kg</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span>+996 (312) 555-0124</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>Mon-Fri: 9:00 AM - 6:00 PM (GMT+6)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Research Partnerships */}
                <Card className="academic-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Research & Partnerships</h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>research@kiaic.edu.kg</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span>+996 (312) 555-0125</span>
                          </div>
                          <p className="text-xs mt-2">
                            For industry collaborations, research partnerships, and technology transfer inquiries.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* International Office */}
                <Card className="academic-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Globe className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">International Office</h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>international@kiaic.edu.kg</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span>+996 (312) 555-0126</span>
                          </div>
                          <p className="text-xs mt-2">
                            Support for international students, visa assistance, and global partnerships.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Office Hours */}
              <Card className="academic-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-accent" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Monday - Friday</span>
                    <span className="text-sm text-muted-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Saturday</span>
                    <span className="text-sm text-muted-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Sunday</span>
                    <span className="text-sm text-muted-foreground">Closed</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      All times are in Bishkek Time (GMT+6). Emergency contact available 24/7 for current students.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Location */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center space-content mb-12">
            <h2 className="text-headline font-bold text-foreground">Visit Our Campus</h2>
            <p className="text-body-large text-muted-foreground">
              Located in the heart of Bishkek, our state-of-the-art campus combines modern facilities with the natural
              beauty of the Tian Shan mountains.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="academic-card">
                <CardHeader>
                  <CardTitle>Campus Address</CardTitle>
                  <CardDescription>Kyrgyz Institute of Advanced AI and Cybernetics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Main Campus</p>
                      <p className="text-sm text-muted-foreground">
                        Chui Avenue 720
                        <br />
                        Bishkek 720040
                        <br />
                        Kyrgyzstan
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium text-foreground mb-2">Getting Here</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 15 minutes from Manas International Airport</li>
                      <li>• Metro: Chui Avenue Station (5 min walk)</li>
                      <li>• Bus routes: 10, 15, 22, 45</li>
                      <li>• Parking available on campus</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button className="flex-1 btn-primary">Schedule Campus Tour</Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Virtual Tour
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="h-12 w-12 text-accent mx-auto" />
                    <p className="text-sm text-muted-foreground">Interactive Campus Map</p>
                    <p className="text-xs text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center space-content mb-12">
            <h2 className="text-headline font-bold text-foreground">Quick Links</h2>
            <p className="text-muted-foreground">Find what you're looking for quickly with these helpful resources.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="academic-card group cursor-pointer">
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Admissions</h3>
                <p className="text-sm text-muted-foreground">Application requirements and deadlines</p>
              </CardContent>
            </Card>

            <Card className="academic-card group cursor-pointer">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Faculty</h3>
                <p className="text-sm text-muted-foreground">Meet our world-class researchers</p>
              </CardContent>
            </Card>

            <Card className="academic-card group cursor-pointer">
              <CardContent className="p-6 text-center">
                <Building className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Facilities</h3>
                <p className="text-sm text-muted-foreground">State-of-the-art labs and equipment</p>
              </CardContent>
            </Card>

            <Card className="academic-card group cursor-pointer">
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">International</h3>
                <p className="text-sm text-muted-foreground">Global partnerships and exchanges</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
