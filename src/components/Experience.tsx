import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Grayhat",
      location: "Islamabad, Pakistan",
      period: "Sep 2024 – Jul 2025",
      type: "Part-time",
      achievements: [
        "Streamlined camp enrollment by building core frontend features (onboarding, camp creation, parent registration) across POC → MVP1 → MVP2 phases.",
        "Developed reusable UI components, integrated RESTful APIs (RTK Query), and collaborated with backend teams to resolve API/debugging issues.",
        "Tested, optimized, and delivered high-performance applications while actively contributing in agile sprints and client feedback sessions.",
      ],
      technologies: ["Next.js", "TypeScript", "RTK Query", "Redux Toolkit", "Material UI", "Firebase", "Shadcn/UI", "Tailwind CSS", "Swagger/OpenAPI"]
    },
    {
      title: "Web Development Intern",
      company: "Grayhat",
      location: "Islamabad, Pakistan",
      period: "Jul 2024 – Aug 2024",
      type: "Internship",
      achievements: [
        "Built dynamic UI components (BottomSheet, Accordion) to enhance the internal React UI library.",
        "Developed a Tech Radar page to visualize tooling adoption, improving transparency for stakeholders.",
        "Delivered optimized UI implementations and routing across multiple client-facing sprints.",
        "First Live Deployment: Delivered a Next.js website with 3D models (Three.js), animations (GSAP), and smooth scrolling (Locomotive Scroll). 👉 https://home.grayhat.studio/ "
      ],
      technologies: ["Next.js", "Material Web Components React (Internal UI Library)", "TypeScript", "Three.js", "GSAP", "Locomotive Scroll"]
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 bg-gradient-to-br from-secondary/50 to-background"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Professional <span className="hero-gradient bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building innovative solutions and delivering exceptional results in dynamic, client-focused environments
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 hero-gradient rounded-full hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'
                    }`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 accent-gradient rounded-full glow-accent hidden md:block" />

                  {/* Experience Card */}
                  <Card className="glass-card professional-shadow ml-0 md:ml-20 smooth-transition hover:scale-[1.02]">
                    <CardContent className="p-8">

                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className="accent-gradient text-accent-foreground w-fit"
                        >
                          {exp.type}
                        </Badge>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-foreground mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start gap-3 text-muted-foreground"
                            >
                              <div className="w-2 h-2 rounded-full accent-gradient mt-2 flex-shrink-0" />
                              <span>{achievement} 
                                {/* {achievement.includes('https://home.grayhat.studio/') && (
                                  <a
                                    href="https://home.grayhat.studio/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 ml-2 px-3 py-1 rounded-md bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                                  >
                                    <span>Visit Site</span>
                                    <ExternalLink className="h-4 w-4" />
                                  </a>
                                )} */}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className={`smooth-transition hover:hero-gradient hover:text-primary-foreground ${isVisible ? 'animate-fade-in-up' : ''
                                }`}
                              style={{ animationDelay: `${(index * 0.3) + (techIndex * 0.1)}s` }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <ExternalLink className="h-4 w-4" />
              <span>Want to see more? Check out my</span>
              <a
                href="https://linkedin.com/in/aroona-vikram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent smooth-transition font-medium"
              >
                LinkedIn profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;