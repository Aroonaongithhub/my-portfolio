import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Lightbulb, Users, Target, Brain, Rocket, Globe, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Section Title Animation
    gsap.fromTo(el.querySelector('.section-header'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el.querySelector('.section-header'),
          start: "top 85%",
        }
      }
    );

    // Traits Cards Animation
    const traitCards = cardsRef.current?.children;
    if (traitCards) {
      gsap.fromTo(traitCards,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          }
        }
      );
    }

    // Skills Animation
    const skillBadges = skillsRef.current?.querySelectorAll('.skill-badge');
    if (skillBadges) {
      gsap.fromTo(skillBadges,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 85%",
          }
        }
      );
    }

  }, []);

  const skills = [
    { name: 'React.js', icon: <Zap className="w-3 h-3" /> },
    { name: 'Next.js', icon: <Rocket className="w-3 h-3" /> },
    { name: 'TypeScript', icon: <Code className="w-3 h-3" /> },
    { name: 'JavaScript', icon: <Code className="w-3 h-3" /> },
    { name: 'Node.js / Express', icon: <Globe className="w-3 h-3" /> },
    { name: 'MongoDB', icon: <Zap className="w-3 h-3" /> },
    { name: 'Tailwind / MUI', icon: <Rocket className="w-3 h-3" /> },
    { name: 'n8n / Webhooks', icon: <Zap className="w-3 h-3" /> },
    { name: 'AWS', icon: <Globe className="w-3 h-3" /> },
    { name: 'Docker / Coolify', icon: <Globe className="w-3 h-3" /> },
    { name: 'REST APIs', icon: <Code className="w-3 h-3" /> },
    { name: 'Git', icon: <Code className="w-3 h-3" /> },
  ];

  const traits = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Technical Excellence",
      description: "Building scalable applications with Next.js, TypeScript, and clean architecture.",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Problem Solving",
      description: "Turning complex challenges into seamless, optimized digital solutions.",
      color: "bg-amber-500/10 text-amber-500"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Working closely with cross-functional teams to deliver impactful products.",
      color: "bg-emerald-500/10 text-emerald-500"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Continuous Learning",
      description: "Mastering emerging tools and AI-driven workflows to stay ahead.",
      color: "bg-purple-500/10 text-purple-500"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="section-header text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            The Mind Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">the Code</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I blend technical precision with creative problem-solving to build applications that don't just work—they inspire.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">

          {/* Main Content - Bento Left */}
          <div className="lg:col-span-8 space-y-8">
            <Card className="bg-card/50 backdrop-blur-xl border-border/50 shadow-premium overflow-hidden group">
              <CardContent className="p-10">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="flex-1 space-y-6">
                    <h3 className="text-3xl font-bold">My Journey</h3>
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                      <p>
                        My pursuit of technology started with a simple question: <span className="text-foreground italic">"How can we build better?"</span>
                        This curiosity led me from computer science fundamentals to building high-impact products across InsurTech and SaaS sectors. I have over 1.5 years of experience delivering production-grade web applications.
                      </p>
                      <p>
                        I specialize in <span className="text-primary font-semibold">Frontend Development</span> with React & Next.js, and <span className="text-accent font-semibold">Workflow Automation</span>.
                        Recently, my integration of n8n WhatsApp chatbots successfully reduced call center workloads by 40%, demonstrating my drive to solve hard business problems with code.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 h-64 rounded-3xl overflow-hidden shadow-premium group-hover:scale-105 transition-transform duration-500">
                    <img src="/profile-avatar.jpeg" alt="Aroona" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Bento */}
            <div ref={skillsRef}>
              <Card className="bg-card/50 backdrop-blur-xl border-border/50 shadow-premium">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Zap className="text-accent" />
                    Stack & Arsenal
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="skill-badge px-4 py-2 text-sm font-medium bg-secondary/50 border-border/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 gap-2 rounded-lg cursor-default"
                      >
                        {skill.icon}
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar - Bento Right */}
          <div ref={cardsRef} className="lg:col-span-4 space-y-8">
            {traits.map((trait) => (
              <Card key={trait.title} className="bg-card/50 backdrop-blur-xl border-border/50 shadow-premium group hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className={`p-4 rounded-2xl w-fit ${trait.color}`}>
                    {trait.icon}
                  </div>
                  <h4 className="text-xl font-bold">{trait.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {trait.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};

export default About;