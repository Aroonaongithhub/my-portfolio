import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Lightbulb, Users, Target } from 'lucide-react';

const About = () => {
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

  const skills = [
    'React.js', 'TypeScript', 'Next.js', 'JavaScript', 'Python',
    'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Git', 'Github',
    'Postman','Docker', 'Material UI', 'Tailwind CSS','Shadcn/UI', 'Redux Toolkit','n8n'
  ];

  const traits = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Technical Excellence",
      description: "Adaptable and detail-oriented, I specialize in building scalable applications, integrating APIs, and automating workflows. My expertise spans Next.js, TypeScript, Node.js, MongoDB, and modern web practices, with a strong focus on clean architecture and performance."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Problem Solving",
      description: "I thrive on tackling complex challenges—whether it’s debugging tough integration issues, designing real-time interoperability, or optimizing user workflows. My approach blends analytical thinking with creativity, turning roadblocks into seamless solutions."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Collaboration is at the core of my work. From agile sprints to client-facing reviews, I’ve worked closely with designers, backend teams, and stakeholders to align on goals and deliver with impact—always ensuring transparency and shared ownership."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Continuous Learning",
      description: "Technology evolves fast, and so do I. From mastering new tools like n8n and Authentik, to exploring AI-driven solutions, I continuously sharpen my skills to stay ahead and deliver future-ready products."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-gradient-to-br from-background to-secondary/50"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About <span className="hero-gradient bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate software engineer dedicated to creating innovative solutions and exceptional user experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Personal Story */}
            <div className="space-y-6">
              <Card className="glass-card professional-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">My Journey</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I began with a simple curiosity: <i>how can technology solve real problems?</i> That drive led me to Computer Science and, eventually, to Grayhat—where I turned ideas into impact.
                    </p>
                    <p>
                     From building scalable UI components and integrating APIs to designing automation pipelines and enhancing AI-powered workflows, I’ve worked across the full stack to deliver user-focused solutions.
                    </p>
                    <p>
                    One highlight was leading WorkStack, an open-source AI ecosystem that unified tasks, docs, and chat. I drove research, identity management, and real-time interoperability—earning 85% user satisfaction from pilot testing.
                    </p>
                    <p>
                      Today, I bring together frontend expertise, backend expertise, and automation skills to craft digital experiences that are not just functional, but innovative and meaningful.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="glass-card professional-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className={`smooth-transition hover:accent-gradient hover:text-accent-foreground ${
                          isVisible ? 'animate-fade-in-up' : ''
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Traits */}
            <div className="space-y-6">
              {traits.map((trait, index) => (
                <Card 
                  key={trait.title} 
                  className={`glass-card professional-shadow smooth-transition hover:scale-105 ${
                    isVisible ? 'animate-slide-in-left' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-lg accent-gradient text-accent-foreground">
                        {trait.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          {trait.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {trait.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;