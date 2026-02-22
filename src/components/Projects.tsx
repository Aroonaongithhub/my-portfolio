import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Brain, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Title Animation
    gsap.fromTo(el.querySelector('.projects-header'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el.querySelector('.projects-header'),
          start: "top 85%",
        }
      }
    );

    // Project Cards Animation
    const cards = containerRef.current?.querySelectorAll('.project-card');
    if (cards) {
      gsap.fromTo(cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }

  }, []);

  const projects = [
    {
      title: "WorkStack",
      subtitle: "AI-Powered Work Ecosystem",
      description: "A signature project that integrates task management, documentation, and communication tools to streamline team workflows. Developed as Project Lead, achieving 85% user satisfaction.",
      image: "/workstack.png",
      icon: <Brain className="h-6 w-6" />,
      stats: [
        { label: "Role", value: "Lead Eng" },
        { label: "Impact", value: "85% SAT" },
        { label: "Status", value: "v2.0" }
      ],
      achievements: [
        "Built an open-source ecosystem integrating Plane, Outline, and Discord.",
        "Implemented Authentik for enterprise-grade identity management.",
        "Developed custom MCP agents for contextual AI queries.",
      ],
      technologies: ["Node.js", "Redis", "Docker", "Authentik", "MCP"],
      githubUrl: "#",
      liveUrl: "https://www.linkedin.com/posts/aroona-vikram_workstack-fyp-opensource-activity-7350147395751440384-rCc1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADszxTsBjOSeDRvBxB63s6VfP0hQDwUqlVo"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="projects-header text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <Layers className="h-4 w-4" />
            Selected Works
          </div>
          <h2 className="text-4xl lg:text-7xl font-extrabold mb-8 tracking-tighter">
            Where Craft Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of engineering projects focused on scalability, automation, and user-centric design.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={containerRef} className="max-w-6xl mx-auto space-y-32">
          {projects.map((project, index) => (
            <div key={project.title} className="project-card group">
              <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Project Brief */}
                <div className="space-y-8 order-2 lg:order-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-accent font-bold uppercase tracking-widest text-sm">
                      <Sparkles className="h-4 w-4" />
                      {project.subtitle}
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-black group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-6 py-8 border-y border-border/50">
                    {project.stats.map(stat => (
                      <div key={stat.label}>
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</div>
                        <div className="text-lg font-bold text-foreground">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-4">
                    {project.achievements.map((item, i) => (
                      <li key={i} className="flex gap-4 text-muted-foreground">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button
                      size="lg"
                      className="bg-primary text-primary-foreground rounded-full px-8 h-14 font-bold shadow-glow hover:scale-105 transition-all"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      Case Study
                      <ArrowUpRight className="ml-2 h-5 w-5" />
                    </Button>
                    {/* <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full px-8 h-14 font-bold border-border/50 hover:bg-secondary/50 transition-all"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="mr-2 h-5 w-5" />
                      Source
                    </Button> */}
                  </div>
                </div>

                {/* Project Visual */}
                <div className="order-1 lg:order-2">
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-premium group-hover:shadow-glow transition-all duration-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover border border-white transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Floating Badges */}
                    <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map(tech => (
                        <Badge key={tech} className="bg-background/80 backdrop-blur-md text-foreground border-border/50 px-4 py-1.5 rounded-full text-xs font-bold">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="mt-32 text-center">
          <Button
            size="lg"
            variant="ghost"
            className="text-muted-foreground hover:text-primary font-bold group"
            onClick={() => window.open('https://github.com/Aroonaongithhub', '_blank')}
          >
            Explore more on GitHub
            <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Projects;