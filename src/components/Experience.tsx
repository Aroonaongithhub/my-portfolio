import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, ExternalLink, Briefcase } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Timeline line animation
    gsap.fromTo(lineRef.current,
      { height: 0 },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 70%",
          end: "bottom 80%",
          scrub: 1,
        }
      }
    );

    // Cards entrance animation
    const cards = cardsRef.current?.querySelectorAll('.experience-card');
    if (cards) {
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });
    }

  }, []);

  const experiences = [
    {
      title: "Software Engineer",
      company: "Takaful Bazaar",
      location: "Karachi, Pakistan",
      period: "Sep 2025 – Present",
      type: "Full-time",
      achievements: [
        "Developing and maintaining features of Takaful Bazaar's core Customer and Admin products using React and TypeScript, supporting thousands of insurance discovery and quotation flows.",
        "Designed and delivered a full WhatsApp chatbot automation using n8n to educate customers, filter low-intent users, and route purchase-ready leads, successfully reducing call center workload by 40%.",
        "Collaborating closely with insurance business professionals to translate complex industry requirements into intuitive digital workflows.",
      ],
      technologies: ["React", "TypeScript", "n8n", "REST APIs"]
    },
    {
      title: "Associate Software Engineer",
      company: "Grayhat",
      location: "Islamabad, Pakistan",
      period: "Sep 2024 – Jul 2025",
      type: "Part-time",
      achievements: [
        "Streamlined camp enrollment by building core frontend features across POC → MVP1 → MVP2 phases.",
        "Developed reusable UI components and integrated RESTful APIs using RTK Query.",
        "Collaborated in agile sprints to deliver high-performance, scalable applications.",
      ],
      technologies: ["Next.js", "TypeScript", "RTK Query", "Redux", "Tailwind CSS", "Shadcn/UI"]
    },
    {
      title: "Web Development Intern",
      company: "Grayhat",
      location: "Islamabad, Pakistan",
      period: "Jul 2024 – Aug 2024",
      type: "Internship",
      achievements: [
        "Built dynamic UI components and a Tech Radar visualization for internal tooling transparency.",
        "Delivered optimized UI implementations and routing across multiple client-facing sprints.",
        "First Live Deployment: Delivered a Next.js website with 3D models and smooth scrolling.",
      ],
      technologies: ["Next.js", "TypeScript", "Three.js", "GSAP", "Locomotive Scroll"]
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-32 relative bg-secondary/5">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Milestones</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My career journey has been defined by a constant drive for technical excellence and impactful delivery.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-border transform -translate-x-1/2 hidden md:block">
            <div ref={lineRef} className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-accent" />
          </div>

          <div ref={cardsRef} className="space-y-20">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center justify-between md:justify-normal group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary transform -translate-x-1/2 z-10 hidden md:block" />

                {/* Card Content */}
                <div className="w-full md:w-[45%] experience-card">
                  <Card className="bg-card/50 backdrop-blur-xl border-border/50 shadow-premium overflow-hidden hover:border-primary/30 transition-all duration-500">
                    <CardContent className="p-8">
                      <div className="flex flex-col gap-6">

                        {/* Header */}
                        <div className="flex justify-between items-start gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-primary font-bold tracking-tight">
                              <Briefcase className="h-4 w-4" />
                              {exp.title}
                            </div>
                            <h3 className="text-2xl font-bold">{exp.company}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {exp.period}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 rounded-full px-4 py-1">
                            {exp.type}
                          </Badge>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-4">
                          <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Key Contributions</h4>
                          <ul className="space-y-3">
                            {exp.achievements.map((item, i) => (
                              <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-secondary/30 text-xs font-semibold rounded-md">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-24">
          <a
            href="https://linkedin.com/in/aroona-vikram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-semibold group"
          >
            Detailed timeline on <span className="underline decoration-primary/30 group-hover:decoration-primary">LinkedIn</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Experience;