import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Brain, Wrench, Users, Briefcase, Layout } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: "WorkStack - AI Powered Open Source Work Tooling Ecosystem",
      description: "A signature project that integrates task management, documentation, and communication tools to streamline team workflows. Developed in a team of 3, where I contributed as Researcher, Developer, and Project Lead, and validated in collaboration with Grayhat.",
      icon: <Brain className="h-6 w-6" />,
      achievements: [
        "Built an open-source ecosystem integrating task management (Plane), documentation (Outline), and chat (Discord) for seamless team workflows.",
        "Led research and evaluation of identity management solutions; recommended and advocated Authentik (open-source IdP) for centralized RBAC → strengthened security and simplified user management.",
        "Developed real-time interoperability across multiple tools via REST APIs and webhooks → enabled seamless cross-platform coordination.",
        "Enhanced two AI agents using the MCP framework to support contextual task and document queries → improved efficiency in retrieving relevant information.",
        "Directed deployment of live PoC and conducted UAT with 5 pilot users → achieved 85% user satisfaction and validated end-to-end functionality.",
      ],
      technologies: ["Node.js", "REST APIs", "Discord API", "Authentik", "Model Context Protocol", "TypeScript", "JavaScript", "Redis", "Docker"],
      phases: ["Superficial Syncing", "Identity Management", "AI Integration"],
      status: "2024-2025",
      githubUrl: "#",
      liveUrl: "https://www.linkedin.com/posts/aroona-vikram_workstack-fyp-opensource-activity-7350147395751440384-rCc1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADszxTsBjOSeDRvBxB63s6VfP0hQDwUqlVo"
    },
    {
      title: "Job Seeking Platform",
      description: "Developed a full-stack MERN application that connects job seekers and job posters, featuring secure authentication, role-based dashboards, and responsive design.",
      icon: <Briefcase className="h-6 w-6" />, // you can change the icon if needed
      achievements: [
        "Implemented job seeker dashboard for browsing, filtering, and applying to jobs",
        "Built job poster dashboard for creating, editing, and managing job postings",
        "Integrated JWT-based authentication and role-based authorization",
        "Designed RESTful APIs for secure and scalable backend functionality",
        "Developed a fully responsive UI for seamless experience across devices"
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST API", "Tailwind CSS"],
      status: "2024",
      githubUrl: "https://github.com/Aroonaongithhub/Job-Seeking-MERN",
      liveUrl: "https://www.linkedin.com/posts/aroona-vikram_mernstack-jobposting-jobseeking-activity-7202303055759888384-ePoG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADszxTsBjOSeDRvBxB63s6VfP0hQDwUqlVo" // or deploy link if you host it
    },
    {
      title: "Cuberto Clone Website",
      description: "Created a responsive clone of Cuberto’s website to master modern UI/UX animations and frontend development.",
      icon: <Layout className="h-6 w-6" />,
      achievements: [
        "Recreated Cuberto’s sleek, agency-style animations and interactions using vanilla JavaScript",
        "Implemented smooth CSS transitions, hover effects, and responsive layouts across devices",
        "Applied semantic HTML structure and modular CSS for maintainable, accessible code",
        "Practiced precise visual reproduction and attention to design detail"
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "2024",
      githubUrl: "https://github.com/Aroonaongithhub/Cuberto-clone",
      liveUrl: "https://aroonaongithhub.github.io/Cuberto-clone/"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gradient-to-br from-background to-secondary/30"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured <span className="hero-gradient bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing innovative solutions and technical expertise through real-world applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`glass-card professional-shadow smooth-transition hover:scale-[1.02] ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">

                    {/* Project Info */}
                    <div className="lg:col-span-2 space-y-6">

                      {/* Header */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-3 rounded-lg accent-gradient text-accent-foreground">
                          {project.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                            <h3 className="text-2xl font-bold text-foreground">
                              {project.title}
                            </h3>
                            <Badge variant="secondary" className="w-fit">
                              {project.status}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start gap-3 text-muted-foreground"
                            >
                              <div className="w-2 h-2 rounded-full accent-gradient mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Project Phases (if applicable) */}
                      {project.phases && (
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">
                            Project Phases
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.phases.map((phase, phaseIndex) => (
                              <Badge
                                key={phase}
                                variant="outline"
                                className="hero-gradient text-primary-foreground"
                              >
                                {phaseIndex + 1}. {phase}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Tech Stack & Actions */}
                    <div className="space-y-6">

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className={`smooth-transition hover:accent-gradient hover:text-accent-foreground ${isVisible ? 'animate-fade-in-up' : ''
                                }`}
                              style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.1)}s` }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        {project.githubUrl !== "#" && (
                          <Button
                            className="w-full hero-gradient text-primary-foreground hover:scale-105 smooth-transition"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View on GitHub
                          </Button>
                        )}
                        {project.liveUrl !== "#" && (
                          <Button
                            variant="outline"
                            className="w-full smooth-transition hover:accent-gradient hover:text-accent-foreground"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Project Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              variant="outline"
              className="smooth-transition hover:hero-gradient hover:text-primary-foreground"
              onClick={() => window.open('https://github.com/Aroonaongithhub', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;