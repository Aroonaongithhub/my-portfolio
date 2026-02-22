import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye, FileText, Award, Star } from 'lucide-react';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Award className="h-5 w-5" />,
      title: "Impactful Workflow Automation",
      description: "Designed a WhatsApp chatbot using n8n for Takaful Bazaar that educated customers, filtered low-intent users, and reduced call center workloads by 40%."
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Frontend Engineering",
      description: "Over 1.5 years of experience building revenue-driving features in InsurTech and SaaS using React, Next.js, and TypeScript."
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Academic Excellence",
      description: "Graduated with a 3.4/4.0 CGPA in Computer Science from MAJU, with a strong foundation in Generative AI and Cloud Computing."
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="resume"
      className="py-20 bg-gradient-to-br from-secondary/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              My <span className="hero-gradient bg-clip-text text-transparent">Resume</span>
            </h2>
            <p className="text-xl text-primary-foreground max-w-3xl mx-auto">
              Download my detailed resume or preview it directly below
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">

              {/* Resume Preview & Actions */}
              <div className="lg:col-span-2">
                <Card className="glass-card professional-shadow">
                  <CardContent className="p-8">

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      {/* <Button 
                        size="lg"
                        className="accent-gradient text-accent-foreground hover:scale-105 smooth-transition glow-accent cursor-target"
                        onClick={() => window.open('https://flowcv.com/resume/v7jbdoh45i', '_blank')}
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download Resume
                      </Button> */}

                      <Button
                        size="lg"
                        variant="outline"
                        className="accent-gradient text-accent-foreground hover:scale-105 smooth-transition glow-accent cursor-target"
                        onClick={() => window.open('https://flowcv.com/resume/v7jbdoh45i', '_blank')}
                      >
                        <Eye className="mr-2 h-5 w-5" />
                        View Full Resume
                      </Button>
                    </div>

                    {/* Embedded Preview */}
                    <div className="relative">
                      <h3 className="text-2xl font-semibold text-foreground mb-6">Resume Preview</h3>

                      {/* Responsive Iframe Container */}
                      <div className="relative w-full bg-secondary/20 rounded-lg overflow-hidden professional-shadow">
                        <div className="aspect-[8.5/11] w-full">
                          <iframe
                            src="https://flowcv.com/resume/v7jbdoh45i"
                            className="w-full h-full border-0"
                            title="Aroona Vikram Resume"
                            loading="lazy"
                          />
                        </div>

                        {/* Overlay for Mobile */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none lg:hidden" />

                        {/* Mobile Action */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:hidden">
                          <Button
                            className="accent-gradient text-accent-foreground"
                            onClick={() => window.open('https://flowcv.com/resume/v7jbdoh45i', '_blank')}
                          >
                            View Full Resume
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Resume Highlights */}
              <div className="space-y-6">
                <Card className="bg-primary-foreground/10 glass-card professional-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-accent" />
                      Resume Highlights
                    </h3>

                    <div className="space-y-4">
                      {highlights.map((highlight, index) => (
                        <div
                          key={highlight.title}
                          className={`flex items-start gap-3 p-3 rounded-lg bg-secondary/30 smooth-transition hover:bg-secondary/50 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'
                            }`}
                          style={{ animationDelay: `${index * 0.2}s` }}
                        >
                          <div className="flex-shrink-0 p-2 rounded-lg accent-gradient text-accent-foreground">
                            {highlight.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground text-sm mb-1">
                              {highlight.title}
                            </h4>
                            <p className="text-primary-foreground text-sm">
                              {highlight.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card className="bg-primary-foreground/10 glass-card professional-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Quick Contact
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-muted-foreground">Email:</span>
                        <br />
                        <a
                          href="mailto:aroonavikram@gmail.com"
                          className="text-primary hover:text-accent smooth-transition"
                        >
                          aroonavikram@gmail.com
                        </a>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Phone:</span>
                        <br />
                        <a
                          href="tel:+923352530247"
                          className="text-primary hover:text-accent smooth-transition"
                        >
                          (+92) 335-2530247
                        </a>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Location:</span>
                        <br />
                        <span className="text-foreground">Karachi, Pakistan</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Education Quick Info */}
                <Card className="bg-primary-foreground/10 glass-card professional-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Education
                    </h3>
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">
                        BS Computer Science
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Muhammad Ali Jinnah University (MAJU)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        2021 – 2025 | CGPA: 3.4/4.0
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Karachi, Pakistan
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;